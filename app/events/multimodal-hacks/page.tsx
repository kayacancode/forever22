import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "./Gallery";

export const metadata: Metadata = {
  title: "Multimodal Hacks — Winners",
  description:
    "A one-day sprint on the next wave of interfaces for AI agents. Hosted by Forever 22 & Betaworks at NY Tech Week 2026.",
};

const css = `
  .mmh{
    --bg:#0b0b0d;
    --bg2:#111114;
    --ink:#f4f1ea;
    --muted:#8d8a83;
    --line:#23232a;
    --acid:#ccff35;
    --c-multimodal:#ccff35;
    --c-agent:#ff7a4d;
    --c-workflow:#5ad1ff;
    --c-voice:#c79bff;
    --c-generative:#ff5d9e;
    --mono:"Space Mono",ui-monospace,monospace;
    --disp:"Bricolage Grotesque",sans-serif;
    background:var(--bg);color:var(--ink);font-family:var(--disp);
    -webkit-font-smoothing:antialiased;line-height:1.5;overflow-x:hidden;
    min-height:100vh;position:relative;
  }
  .mmh *{margin:0;padding:0;box-sizing:border-box}
  .mmh{scroll-behavior:smooth}
  /* grain */
  .mmh::after{
    content:"";position:fixed;inset:0;pointer-events:none;z-index:99;opacity:.04;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .mmh .wrap{max-width:1120px;margin:0 auto;padding:0 28px}

  /* ── back nav ── */
  .mmh .topnav{padding:26px 0 0;font-family:var(--mono);font-size:13px}
  .mmh .topnav a{color:var(--muted);text-decoration:none;transition:color .2s}
  .mmh .topnav a:hover{color:var(--acid)}

  /* ── header ── */
  .mmh header{padding:48px 0 48px;border-bottom:1px solid var(--line);position:relative}
  .mmh .kicker{font-family:var(--mono);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);display:flex;gap:14px;flex-wrap:wrap;align-items:center}
  .mmh .kicker b{color:var(--acid);font-weight:700}
  .mmh h1{font-size:clamp(44px,9vw,108px);line-height:.92;font-weight:800;letter-spacing:-.03em;margin:26px 0 18px}
  .mmh h1 em{font-style:normal;color:var(--acid)}
  .mmh .sub{max-width:620px;color:var(--muted);font-size:clamp(15px,2vw,19px)}
  .mmh .stat{margin-top:34px;display:flex;gap:36px;flex-wrap:wrap;font-family:var(--mono);font-size:13px;color:var(--muted)}
  .mmh .stat span b{display:block;font-family:var(--disp);font-size:30px;color:var(--ink);font-weight:800;letter-spacing:-.02em}

  /* ── people (judges / mc / ama) ── */
  .mmh .people{margin-top:42px;display:flex;gap:34px 56px;flex-wrap:wrap}
  .mmh .pgroup{display:flex;flex-direction:column}
  .mmh .jlabel{font-family:var(--mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:18px}
  .mmh .jgrid{display:flex;gap:14px 40px;flex-wrap:wrap}
  .mmh .judge{display:flex;flex-direction:column;gap:3px}
  .mmh .judge .jname{font-size:19px;font-weight:600;letter-spacing:-.01em}
  .mmh .judge .jaff{font-family:var(--mono);font-size:12px;color:var(--muted)}

  /* ── winners ── */
  .mmh .winners{padding:8px 0 24px}
  .mmh .winner{
    display:grid;grid-template-columns:200px 1fr;gap:30px;
    padding:46px 0;border-bottom:1px solid var(--line);
    opacity:0;transform:translateY(26px);animation:mmhrise .7s cubic-bezier(.2,.7,.2,1) forwards;
  }
  @keyframes mmhrise{to{opacity:1;transform:none}}
  .mmh .winner:nth-child(1){animation-delay:.05s}
  .mmh .winner:nth-child(2){animation-delay:.13s}
  .mmh .winner:nth-child(3){animation-delay:.21s}
  .mmh .winner:nth-child(4){animation-delay:.29s}
  .mmh .winner:nth-child(5){animation-delay:.37s}
  .mmh .cat{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase}
  .mmh .cat .dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:9px;vertical-align:middle}
  .mmh .cat .num{display:block;font-size:64px;font-family:var(--disp);font-weight:800;letter-spacing:-.04em;color:var(--line);line-height:1;margin-bottom:14px}
  .mmh .pname{font-size:clamp(28px,4.5vw,46px);font-weight:800;letter-spacing:-.025em;line-height:1.02}
  .mmh .team{font-family:var(--mono);font-size:13px;color:var(--muted);margin:10px 0 16px}
  .mmh .desc{color:#cfccc3;max-width:640px;font-size:16px}
  .mmh .tools{margin-top:20px;display:flex;gap:8px;flex-wrap:wrap}
  .mmh .tool{font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--ink);border:1px solid var(--line);padding:5px 11px;border-radius:100px;background:var(--bg2)}
  .mmh .links{margin-top:18px;display:flex;gap:18px;flex-wrap:wrap}
  .mmh .links a{font-family:var(--mono);font-size:13px;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--acid);padding-bottom:2px;transition:color .2s}
  .mmh .links a:hover{color:var(--acid)}
  .mmh .links a::before{content:"→ "}

  @media(max-width:720px){
    .mmh .winner{grid-template-columns:1fr;gap:12px;padding:36px 0}
    .mmh .cat .num{font-size:46px;margin-bottom:8px}
  }

  /* ── gallery ── */
  .mmh .gallery{padding:46px 0;border-bottom:1px solid var(--line)}
  .mmh .glabel{font-family:var(--mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:18px}
  .mmh .gcover{position:relative;width:100%;height:min(60vh,520px);border:1px solid var(--line);background:var(--bg2);cursor:zoom-in;overflow:hidden;display:block;padding:0}
  .mmh .gcover img{object-fit:cover;transition:opacity .3s}
  .mmh .gcover:hover img{opacity:.9}
  .mmh .gcaption{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-top:10px}
  .mmh .gmore{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-top:26px;text-align:center}
  .mmh .ggrid{margin-top:18px;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
  .mmh .gthumb{position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;border:1px solid var(--line);background:var(--bg2);cursor:zoom-in;padding:0}
  .mmh .gthumb img{object-fit:cover;transition:transform .4s cubic-bezier(.2,.7,.2,1),opacity .3s}
  .mmh .gthumb:hover img{transform:scale(1.05);opacity:.85}
  @media(max-width:720px){.mmh .ggrid{grid-template-columns:repeat(2,1fr)}}

  /* ── lightbox ── */
  .mmh-lightbox{position:fixed;inset:0;z-index:200;background:rgba(8,8,10,.94);display:flex;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
  .mmh-lightbox .lbimg{max-width:92vw;max-height:88vh;width:auto;height:auto;object-fit:contain;box-shadow:0 30px 80px rgba(0,0,0,.6)}
  .mmh-lightbox .lbclose{position:absolute;top:20px;right:24px;font-family:"Space Mono",monospace;font-size:26px;color:#f4f1ea;background:none;border:none;cursor:pointer;line-height:1}
  .mmh-lightbox .lbnav{position:absolute;top:50%;transform:translateY(-50%);font-family:"Space Mono",monospace;font-size:34px;color:#f4f1ea;background:none;border:none;cursor:pointer;padding:12px 18px;opacity:.7;transition:opacity .2s}
  .mmh-lightbox .lbnav:hover{opacity:1;color:var(--acid)}
  .mmh-lightbox .lbprev{left:8px}
  .mmh-lightbox .lbnext{right:8px}

  /* ── sponsors / footer ── */
  .mmh footer{padding:60px 0 90px}
  .mmh .flabel{font-family:var(--mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:22px}
  .mmh .sponsors{display:flex;gap:14px 30px;flex-wrap:wrap;font-size:19px;font-weight:600;color:var(--ink)}
  .mmh .sponsors a{opacity:.62;transition:opacity .2s,color .2s;color:var(--ink);text-decoration:none}
  .mmh .sponsors a:hover{opacity:1;color:var(--acid)}
  .mmh .sig{margin-top:54px;font-family:var(--mono);font-size:13px;color:var(--muted)}
  .mmh .sig b{color:var(--ink)}
`;

export default function MultimodalHacks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="mmh">
        <div className="wrap">
          <div className="topnav">
            <Link href="/events">← Events</Link>
          </div>

          <header>
            <div className="kicker">
              <span>
                Forever 22 <b>×</b> Betaworks
              </span>
              <span>·</span>
              <span>NY Tech Week</span>
              <span>·</span>
              <span>June 6, 2026</span>
            </div>
            <h1>
              Multimodal&nbsp;Hacks
              <br />
              <em>Winners.</em>
            </h1>
            <p className="sub">
              A one-day sprint on the next wave of interfaces for AI agents.
              Over 500 registered — we invited just 80 builders into the room.
              Five projects took the categories.
            </p>
            <div className="stat">
              <span>
                <b>500+</b>registered
              </span>
              <span>
                <b>80</b>invited builders
              </span>
              <span>
                <b>24</b>projects shipped
              </span>
              <span>
                <b>5</b>winners
              </span>
            </div>

            <div className="people">
              <div className="pgroup">
                <div className="jlabel">Judged by</div>
                <div className="jgrid">
                  <div className="judge">
                    <span className="jname">Marc</span>
                    <span className="jaff">Danger Testing</span>
                  </div>
                  <div className="judge">
                    <span className="jname">Tommy</span>
                    <span className="jaff">ClawCon</span>
                  </div>
                  <div className="judge">
                    <span className="jname">Yiliu</span>
                    <span className="jaff">Collaborator AI</span>
                  </div>
                  <div className="judge">
                    <span className="jname">Kaya Jones</span>
                    <span className="jaff">Forever 22 / Betaworks</span>
                  </div>
                </div>
              </div>

              <div className="pgroup">
                <div className="jlabel">MC</div>
                <div className="jgrid">
                  <div className="judge">
                    <span className="jname">Mari Zumbro</span>
                    <span className="jaff">Filament</span>
                  </div>
                </div>
              </div>

              <div className="pgroup">
                <div className="jlabel">AMA Speaker</div>
                <div className="jgrid">
                  <div className="judge">
                    <span className="jname">Vince Trost</span>
                    <span className="jaff">CEO, Plastic Labs</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="winners">
            <article className="winner">
              <div className="cat">
                <span className="num">01</span>
                <span
                  className="dot"
                  style={{ background: "var(--c-multimodal)" }}
                />
                Best Multimodal Experience
              </div>
              <div>
                <h2 className="pname">Agentic Game Engine</h2>
                <div className="team">Thor Matthiasson · Esosa Ohonba</div>
                <p className="desc">
                  Agents that build games. A generative engine where AI does the
                  world-building, turning prompts into playable experiences.
                </p>
                <div className="tools">
                  <span className="tool">Google DeepMind · Gemini</span>
                </div>
                <div className="links">
                  <a
                    href="https://ai-native-gameengine.vercel.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/LaymanTeam/ai-native-gameengine"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="winner">
              <div className="cat">
                <span className="num">02</span>
                <span className="dot" style={{ background: "var(--c-agent)" }} />
                Best Multi-Agent Interface
              </div>
              <div>
                <h2 className="pname">Pixel</h2>
                <div className="team">Enes Yilmaz · Rishi Shah</div>
                <p className="desc">
                  Makes ad-creative attention visible before a dollar is spent.
                  Neuroscience-grade gaze models predict where eyes will land,
                  then a leader agent coordinates four specialists to fix the
                  creative — every change re-scored with a provable before/after
                  attention metric.
                </p>
                <div className="tools">
                  <span className="tool">Gemini</span>
                  <span className="tool">LangChain</span>
                  <span className="tool">Pinecone</span>
                  <span className="tool">Clerk</span>
                  <span className="tool">Cursor</span>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/EnesYilmazcode/Pixel"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="winner">
              <div className="cat">
                <span className="num">03</span>
                <span
                  className="dot"
                  style={{ background: "var(--c-workflow)" }}
                />
                Best AI-Native Workflow
              </div>
              <div>
                <h2 className="pname">DEC</h2>
                <div className="team">DC · Eliezer Marte · Bernie Tai</div>
                <p className="desc">
                  A next-generation chat interface that generates interactive
                  widgets inline, guiding users through complex decision-making
                  with visual interactions rather than walls of text.
                </p>
                <div className="tools">
                  <span className="tool">Gemini</span>
                  <span className="tool">Cursor</span>
                </div>
                <div className="links">
                  <a
                    href="https://ViziThink.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/dcsan/DEC"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="winner">
              <div className="cat">
                <span className="num">04</span>
                <span className="dot" style={{ background: "var(--c-voice)" }} />
                Best Voice-First Interface
              </div>
              <div>
                <h2 className="pname">Desk Certified</h2>
                <div className="team">Sudarshini · Sienna · Diya</div>
                <p className="desc">
                  &quot;Sarcastic Sammy&quot; — a voice-driven simulator that
                  drops you into the chaos of a 1980s open-outcry trading pit.
                  Distinct vocal personalities across asset desks let you
                  practice rapid-fire market lingo in real time, with glossary
                  cards to keep up.
                </p>
                <div className="tools">
                  <span className="tool">Gemini Multimodal Live API</span>
                </div>
                <div className="links">
                  <a
                    href="https://trading-floor-voice-coach-480281094155.us-west2.run.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </article>

            <article className="winner">
              <div className="cat">
                <span className="num">05</span>
                <span
                  className="dot"
                  style={{ background: "var(--c-generative)" }}
                />
                Best Generative Media Tool
              </div>
              <div>
                <h2 className="pname">Reels for Real</h2>
                <div className="team">Chinat Yu · Jeffery Zhou · Lily Yu</div>
                <p className="desc">
                  Turns the week&apos;s family photos into personalized video
                  recaps and conversation starters. Multimodal AI finds the
                  meaningful moments and spins them into shareable stories — all
                  delivered through a simple chat interface.
                </p>
                <div className="tools">
                  <span className="tool">Gemini</span>
                  <span className="tool">LangChain</span>
                  <span className="tool">Sendblue</span>
                  <span className="tool">Cursor</span>
                </div>
                <div className="links"></div>
              </div>
            </article>
          </section>

          <Gallery />

          <footer>
            <div className="flabel">Made possible by</div>
            <div className="sponsors">
              <a
                href="https://deepmind.google/"
                target="_blank"
                rel="noopener"
              >
                Google DeepMind
              </a>
              <a href="https://www.pinecone.io/" target="_blank" rel="noopener">
                Pinecone
              </a>
              <a href="https://www.langchain.com/" target="_blank" rel="noopener">
                LangChain
              </a>
              <a href="https://cursor.com/" target="_blank" rel="noopener">
                Cursor
              </a>
              <a href="https://clerk.com/" target="_blank" rel="noopener">
                Clerk
              </a>
              <a href="https://sendblue.com/" target="_blank" rel="noopener">
                Sendblue
              </a>
            </div>
            <div className="sig">
              Multimodal Hacks — hosted by <b>Forever 22</b> &amp;{" "}
              <b>Betaworks</b> · NY Tech Week 2026
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
