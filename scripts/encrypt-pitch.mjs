// Post-build step: encrypt the exported /pitch page so its content is only
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
import path from "node:path";

const PASSWORD = process.env.PITCH_PASSWORD || "forever22";

const OUT = path.resolve(process.cwd(), "out");
const PAGE = path.join(OUT, "pitch.html");

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

async function main() {
  if (!existsSync(PAGE)) {
    console.error(`[encrypt-pitch] ${PAGE} not found — did the export run?`);
    process.exit(1);
  }

  const html = await readFile(PAGE, "utf8");

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

  await writeFile(PAGE, decryptorPage(payload), "utf8");

  // Remove the RSC payloads — they also contain the (plaintext) deck content.
  await rm(path.join(OUT, "pitch.txt"), { force: true });
  const pitchDir = path.join(OUT, "pitch");
  if (existsSync(pitchDir)) {
    for (const f of await readdir(pitchDir)) {
      if (f.endsWith(".txt")) await rm(path.join(pitchDir, f), { force: true });
    }
  }

  console.log(`[encrypt-pitch] encrypted out/pitch.html (${(JSON.stringify(payload).length / 1024).toFixed(0)} KB ciphertext) and removed RSC leaks.`);
}

function decryptorPage({ salt, iv, ct }) {
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
</style>
</head>
<body>
<div id="gate">
  <div class="card">
    <div class="stamp"><img src="/logo-stamp.png" alt=""/><span class="wm">FOREVER22</span></div>
    <div class="kick">● Confidential</div>
    <h1>The Deck</h1>
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
      document.head.insertAdjacentHTML("beforeend",data.styleLinks);
      document.body.className=data.bodyClass;
      document.body.innerHTML=data.content;
      try{sessionStorage.setItem("f22_pitch",pw);}catch(e){}
      window.scrollTo(0,0);
    });
  }
  var f=document.getElementById("f"),pw=document.getElementById("pw"),err=document.getElementById("err");
  f.addEventListener("submit",function(e){
    e.preventDefault();err.textContent="";
    unlock(pw.value).catch(function(){err.textContent="Wrong password. Try again.";pw.value="";pw.focus();});
  });
  try{var saved=sessionStorage.getItem("f22_pitch");if(saved){unlock(saved).catch(function(){sessionStorage.removeItem("f22_pitch");});}}catch(e){}
})();
</script>
</body>
</html>`;
}

main();
