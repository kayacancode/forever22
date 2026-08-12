// Post-build step: encrypt the exported pitch pages so their content is only
// readable after entering the password. Runs after `next build` (static export).
//
// The password can be set via the PITCH_PASSWORD env var, otherwise it falls
// back to the constant below. Change it here or pass it at build time:
//   PITCH_PASSWORD="your-password" npm run build
//
// Crypto: AES-GCM-256, key derived from the password with PBKDF2 (200k rounds,
// SHA-256). Without the password the page source contains only ciphertext.

import { readFile, writeFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { webcrypto } from "node:crypto";
import http from "node:http";
import path from "node:path";

const PASSWORD = process.env.PITCH_PASSWORD || "2389.ai";

const OUT = path.resolve(process.cwd(), "out");

// Every protected page: route (relative to out/, no extension), the heading
// shown on the password gate, and a distinct sessionStorage key.
// `pdf` (optional) pre-renders the page as a 16:9 slideshow PDF with
// puppeteer, encrypts it, and lets the gate offer it as a download.
const PAGES = [
  { route: "pitch", heading: "The Deck", storageKey: "f22_pitch" },
  {
    route: "pitch/google-deepmind",
    heading: "Forever 22 × Google DeepMind",
    storageKey: "f22_pitch_gdm",
    pdf: {
      url: "/pitch/forever22-google-deepmind.pdf.enc",
      name: "Forever22-x-Google-DeepMind-Proposal.pdf",
    },
  },
];

// 13.333in × 7.5in at 96dpi
const SLIDE_W = 1280;
const SLIDE_H = 720;

const { subtle } = webcrypto;
const enc = new TextEncoder();

async function deriveKey(password, salt) {
  const baseKey = await subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
  return subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 200000, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  );
}

const b64 = (buf) => Buffer.from(buf).toString("base64");

async function encryptPage({ route, heading, storageKey, pdf }) {
  const pagePath = path.join(OUT, `${route}.html`);
  if (!existsSync(pagePath)) {
    console.error(`[encrypt-pitch] ${pagePath} not found — did the export run?`);
    process.exit(1);
  }

  const html = await readFile(pagePath, "utf8");

  const bodyClass = (html.match(/<body[^>]*class="([^"]*)"/) || [])[1] || "";
  const styleLinks = (html.match(/<link[^>]+rel="stylesheet"[^>]*>/g) || []).join("");
  const bodyInner = (html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [])[1] || "";
  // strip Next's inline flight/loader scripts — the content stays
  const content = bodyInner.replace(/<script[\s\S]*?<\/script>/g, "");

  const plaintext = JSON.stringify({ bodyClass, styleLinks, content });

  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(PASSWORD, salt);
  const ciphertext = await subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(plaintext));

  const payload = {
    salt: b64(salt),
    iv: b64(iv),
    ct: b64(new Uint8Array(ciphertext)),
  };

  await writeFile(pagePath, decryptorPage(payload, { heading, storageKey, pdf }), "utf8");

  // Remove the RSC payloads — they also contain the (plaintext) deck content.
  await rm(path.join(OUT, `${route}.txt`), { force: true });
  const routeDir = path.join(OUT, route);
  if (existsSync(routeDir)) {
    for (const f of await readdir(routeDir)) {
      if (f.endsWith(".txt")) await rm(path.join(routeDir, f), { force: true });
    }
  }

  console.log(`[encrypt-pitch] encrypted out/${route}.html (${(JSON.stringify(payload).length / 1024).toFixed(0)} KB ciphertext) and removed RSC leaks.`);
}

/* Serve out/ so puppeteer can load the pristine export with working
   /_next asset paths. */
function serveOut() {
  const server = http.createServer(async (req, res) => {
    try {
      let p = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
      if (p.endsWith("/")) p += "index.html";
      let file = path.join(OUT, p);
      if (!path.extname(file) && existsSync(`${file}.html`)) file += ".html";
      const data = await readFile(file);
      res.writeHead(200, { "content-type": file.endsWith(".html") ? "text/html" : file.endsWith(".css") ? "text/css" : "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  return new Promise((resolve) => server.listen(0, () => resolve(server)));
}

/* Render a route to a 16:9 slideshow PDF. Any slide whose content is taller
   than one page is scaled down to fit, like "fit to slide" in Keynote. */
async function renderPdf(browser, port, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_W, height: SLIDE_H });
  await page.emulateMediaType("print");
  await page.goto(`http://127.0.0.1:${port}/${route}`, { waitUntil: "networkidle0" });
  await page.evaluate((PAGE_H) => {
    document.querySelectorAll(".pitch-deck section, .pitch-deck footer").forEach((sec) => {
      const inner = sec.firstElementChild;
      if (!inner) return;
      const h = inner.scrollHeight;
      if (h > PAGE_H) {
        inner.style.height = `${h}px`;
        inner.style.transformOrigin = "top center";
        inner.style.transform = `scale(${PAGE_H / h})`;
      }
    });
  }, SLIDE_H);
  const pdf = await page.pdf({
    width: "13.333in",
    height: "7.5in",
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true,
  });
  await page.close();
  return pdf;
}

/* Encrypt PDF bytes as salt(16) + iv(12) + ciphertext, same password/KDF as
   the pages, so the gate can decrypt it client-side. */
async function encryptPdf(job) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(PASSWORD, salt);
  const ciphertext = await subtle.encrypt({ name: "AES-GCM", iv }, key, job.bytes);
  const out = Buffer.concat([Buffer.from(salt), Buffer.from(iv), Buffer.from(new Uint8Array(ciphertext))]);
  const dest = path.join(OUT, job.pdf.url.replace(/^\//, ""));
  await writeFile(dest, out);
  console.log(`[encrypt-pitch] wrote ${path.relative(process.cwd(), dest)} (${(out.length / 1024).toFixed(0)} KB)`);
}

async function generatePdfs(jobs) {
  const { default: puppeteer } = await import("puppeteer");
  const server = await serveOut();
  const port = server.address().port;
  const browser = await puppeteer.launch({
    args: process.env.VERCEL || process.env.CI ? ["--no-sandbox", "--disable-setuid-sandbox"] : [],
  });
  try {
    for (const job of jobs) {
      job.bytes = await renderPdf(browser, port, job.route);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

async function main() {
  // Render PDFs first — they need the pristine (unencrypted) export. Fail
  // soft: without a PDF the gate's export button falls back to window.print().
  const pdfJobs = PAGES.filter((p) => p.pdf).map((p) => ({ ...p }));
  try {
    await generatePdfs(pdfJobs);
  } catch (err) {
    console.warn(`[encrypt-pitch] PDF generation failed — export button will fall back to the print dialog. ${err.message}`);
    for (const job of pdfJobs) job.bytes = null;
  }
  for (const job of pdfJobs) {
    if (job.bytes) await encryptPdf(job);
  }
  for (const page of PAGES) {
    const pdfReady = pdfJobs.some((j) => j.route === page.route && j.bytes);
    await encryptPage({ ...page, pdf: pdfReady ? page.pdf : null });
  }
}

function decryptorPage({ salt, iv, ct }, { heading, storageKey, pdf }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="noindex,nofollow"/>
<title>Forever 22 — Protected</title>
<link rel="icon" href="/logo-stamp.png"/>
<style>
  html,body{margin:0;height:100%;background:#070708;color:#fff;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
  #gate{min-height:100%;display:flex;align-items:center;justify-content:center;padding:24px}
  .card{width:100%;max-width:420px}
  .stamp{display:flex;align-items:center;gap:10px;margin-bottom:28px}
  .stamp img{width:30px;height:30px}
  .wm{font-size:18px;letter-spacing:.12em}
  .kick{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#f5e642;margin-bottom:10px}
  h1{font-size:34px;line-height:1;text-transform:uppercase;margin:0 0 16px;font-weight:800}
  p.sub{font-size:13px;line-height:1.6;color:rgba(255,255,255,.6);margin:0 0 24px}
  form{display:flex;gap:8px}
  input{flex:1;background:#000;border:2px solid rgba(255,255,255,.2);color:#fff;padding:12px 14px;font:inherit;font-size:14px;outline:none}
  input:focus{border-color:#f5e642}
  button{background:#f5e642;color:#000;border:2px solid #000;padding:12px 18px;font:inherit;font-size:14px;font-weight:700;cursor:pointer;text-transform:uppercase}
  button:hover{background:#fff}
  .err{color:#e63322;font-size:12px;margin-top:14px;min-height:16px;letter-spacing:.04em}
  .foot{margin-top:36px;font-size:11px;color:rgba(255,255,255,.35)}
  .foot a{color:#2255cc}
  @media print{html,body{height:auto}}
</style>
</head>
<body>
<div id="gate">
  <div class="card">
    <div class="stamp"><img src="/logo-stamp.png" alt=""/><span class="wm">FOREVER22</span></div>
    <div class="kick">● Confidential</div>
    <h1>${heading}</h1>
    <p class="sub">This pitch deck is password protected. Enter the password to continue.</p>
    <form id="f">
      <input id="pw" type="password" autocomplete="current-password" placeholder="password" autofocus/>
      <button type="submit">Enter</button>
    </form>
    <div class="err" id="err"></div>
    <div class="foot">Forever 22 LLC · <a href="/">forever22.com</a></div>
  </div>
</div>
<script>
(function(){
  var DATA={salt:"${salt}",iv:"${iv}",ct:"${ct}"};
  var KEY="${storageKey}";
  var PDF=${JSON.stringify(pdf || null)};
  var curPw=null;
  function b2a(b64){var s=atob(b64),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
  function deriveKey(pw,salt){
    return crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveKey"]).then(function(k){
      return crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:200000,hash:"SHA-256"},k,{name:"AES-GCM",length:256},false,["decrypt"]);
    });
  }
  function unlock(pw){
    var salt=b2a(DATA.salt),iv=b2a(DATA.iv),ct=b2a(DATA.ct);
    return deriveKey(pw,salt).then(function(key){
      return crypto.subtle.decrypt({name:"AES-GCM",iv:iv},key,ct);
    }).then(function(buf){
      var data=JSON.parse(new TextDecoder().decode(buf));
      curPw=pw;
      document.head.insertAdjacentHTML("beforeend",data.styleLinks);
      document.body.className=data.bodyClass;
      document.body.innerHTML=data.content;
      try{sessionStorage.setItem(KEY,pw);}catch(e){}
      window.scrollTo(0,0);
    });
  }
  // Fetch the pre-rendered slideshow PDF, decrypt it with the deck password,
  // and hand it to the browser as a normal file download.
  function downloadPdf(){
    if(!PDF||!curPw){window.print();return;}
    fetch(PDF.url).then(function(r){
      if(!r.ok)throw new Error("pdf fetch failed");
      return r.arrayBuffer();
    }).then(function(buf){
      var b=new Uint8Array(buf);
      return deriveKey(curPw,b.slice(0,16)).then(function(key){
        return crypto.subtle.decrypt({name:"AES-GCM",iv:b.slice(16,28)},key,b.slice(28));
      });
    }).then(function(bytes){
      var url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"}));
      var a=document.createElement("a");
      a.href=url;a.download=PDF.name;
      document.body.appendChild(a);a.click();a.remove();
      setTimeout(function(){URL.revokeObjectURL(url);},10000);
    }).catch(function(){window.print();});
  }
  // The decrypted deck is injected as inert HTML (its scripts are stripped at
  // build time), so interactive bits like the export-pdf button are wired up
  // here via delegation instead of React.
  document.addEventListener("click",function(ev){
    var t=ev.target&&ev.target.closest?ev.target.closest("[data-print]"):null;
    if(t){ev.preventDefault();downloadPdf();}
  });
  var f=document.getElementById("f"),pw=document.getElementById("pw"),err=document.getElementById("err");
  f.addEventListener("submit",function(e){
    e.preventDefault();err.textContent="";
    unlock(pw.value).catch(function(){err.textContent="Wrong password. Try again.";pw.value="";pw.focus();});
  });
  try{var saved=sessionStorage.getItem(KEY);if(saved){unlock(saved).catch(function(){sessionStorage.removeItem(KEY);});}}catch(e){}
})();
</script>
</body>
</html>`;
}

main();
