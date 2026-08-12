import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forever 22 — The Deck",
  description:
    "Build the community. Own the upside. Forever 22 turns the build community into an owned portfolio, starting with the next hackathon.",
};

const NEON = {
  yellow: "var(--konbini-yellow)",
  red: "var(--konbini-red)",
  green: "var(--konbini-green)",
  blue: "var(--konbini-blue)",
};

/* Yellow accents used as TEXT need the darker ink to stay readable on white. */
const INK = "var(--konbini-yellow-ink)";

const TOTAL = 20;

/* ───────────────────────── shared bits ───────────────────────── */

function Counter({ n, accent = INK }: { n: number; accent?: string }) {
  return (
    <span className="font-[family-name:var(--font-pixel)] text-sm tracking-widest tabular-nums">
      <span style={{ color: accent }}>
        {String(n).padStart(2, "0")}
      </span>
      <span className="opacity-40"> / {TOTAL}</span>
    </span>
  );
}

function Kicker({
  children,
  accent = NEON.green,
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="anno mb-5 flex items-center gap-2">
      <span style={{ color: accent }}>●</span>
      <span className="opacity-70">{children}</span>
    </div>
  );
}

/* A highlight box, Danger-Testing yellow. Dark text on yellow. */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-8 border-2 border-black p-5 sm:p-6 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed text-black"
      style={{ background: "var(--konbini-yellow)" }}
    >
      {children}
    </div>
  );
}

type SlideProps = {
  n: number;
  inverted?: boolean;
  accent?: string;
  children: React.ReactNode;
};

/* One full slide. Light by default, with color used as the accent system. */
function Slide({ n, inverted = false, accent = INK, children }: SlideProps) {
  return (
    <section
      className="relative snap-start bg-white text-black border-b-2 border-black/10"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24 min-h-[78vh] flex flex-col">
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-stamp.png" alt="" width={22} height={22} className="opacity-90" />
            <span className="font-[family-name:var(--font-pixel)] text-sm tracking-wider opacity-70">
              FOREVER22
            </span>
          </div>
          <Counter n={n} accent={inverted ? NEON.red : accent} />
        </div>
        <div className="flex-1 flex flex-col justify-center">{children}</div>
      </div>
    </section>
  );
}

function H({ children, size = "clamp(2.5rem, 7vw, 6rem)" }: { children: React.ReactNode; size?: string }) {
  return (
    <h2
      className="font-[family-name:var(--font-anton)] uppercase leading-[0.9] tracking-tight"
      style={{ fontSize: size }}
    >
      {children}
    </h2>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function Pitch() {
  return (
    <div className="pitch-deck h-screen overflow-y-auto md:snap-y md:snap-mandatory bg-white text-black selection:bg-[var(--konbini-yellow)] selection:text-black">
      {/* nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b-2 border-black/10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-14 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-stamp.png" alt="Forever 22" width={26} height={26} />
            <span className="font-[family-name:var(--font-pixel)] text-base tracking-wider">
              FOREVER22
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <span className="anno hidden sm:inline opacity-50">the deck · 2026</span>
            <Link
              href="/connect"
              className="font-[family-name:var(--font-pixel)] text-sm px-3.5 py-1.5 bg-[var(--konbini-yellow)] text-black border-2 border-black hover:bg-white transition-colors"
            >
              → talk
            </Link>
          </div>
        </div>
      </header>

      {/* ═══ 1 · TITLE ═══ */}
      <Slide n={1}>
        <Kicker accent={NEON.green}>AI is a forever thing · applied AI lab</Kicker>
        <span
          className="scrawl block text-[var(--konbini-yellow)] -rotate-2 mb-2"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          a forever thing!
        </span>
        <h1
          className="font-[family-name:var(--font-anton)] uppercase leading-[0.8] tracking-tight"
          style={{ fontSize: "clamp(4rem, 16vw, 13rem)" }}
        >
          FOREVER <span className="text-[var(--konbini-yellow)]">22</span>
        </h1>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/85">
          We build AI products that turn expertise into always-on intelligence,
          and host events that bring builders together to ship.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {["Products", "Events", "Community"].map((t, i) => (
            <span
              key={t}
              className="font-[family-name:var(--font-pixel)] text-sm px-3 py-1 border-2"
              style={{
                borderColor: [NEON.green, NEON.red, NEON.blue][i],
                color: [NEON.green, NEON.red, NEON.blue][i],
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-12 anno opacity-50">Kaya Jones · Forever 22 LLC</div>
      </Slide>

      {/* ═══ 2 · WHAT WE ARE ═══ */}
      <Slide n={2}>
        <Kicker accent={NEON.green}>What we are</Kicker>
        <H>
          A community and an<br />
          <span className="text-[var(--konbini-green)]">applied AI lab</span>
        </H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          We turn human expertise into intelligence that never forgets, one
          product at a time.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            {
              label: "Products",
              tag: "AI that never forgets",
              accent: NEON.green,
              body: "Led by Bestmate, our AI twin that clones your expertise into always-on intelligence and answers on your behalf in Slack and Telegram.",
            },
            {
              label: "Events",
              tag: "Where builders ship",
              accent: NEON.red,
              body: "Hackathons, fireside chats, and dinners that pull the best builders into one room and send them out with something real.",
            },
            {
              label: "Community",
              tag: "Built in the open",
              accent: NEON.blue,
              body: "A studio and a network, working with founders and teams shipping AI-native products.",
            },
          ].map((c) => (
            <div key={c.label} className="bg-black p-6 sm:p-7">
              <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl uppercase">
                {c.label}
              </h3>
              <div className="anno mt-1 mb-4" style={{ color: c.accent }}>
                {c.tag}
              </div>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed text-white/70">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ 3 · BESTMATE ═══ */}
      <Slide n={3} accent={NEON.green}>
        <Kicker accent={NEON.blue}>Featured product</Kicker>
        <div className="flex items-end gap-4 flex-wrap">
          <h2
            className="font-[family-name:var(--font-anton)] uppercase leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
          >
            Bestmate
          </h2>
          <span className="font-[family-name:var(--font-pixel)] text-base mb-3">
            <span style={{ color: NEON.green }}>●</span> LIVE
          </span>
        </div>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Clone your knowledge and expertise into a personal AI twin that lives
          in your Slack and Telegram and answers on your behalf. When it
          doesn&apos;t know, it pings you.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            "Clone your knowledge — feed it docs, notes, and expertise.",
            "Deploy where you work — Slack, Telegram, or wherever your team lives.",
            "It answers for you — and pings you when it's unsure.",
          ].map((step, i) => (
            <div key={i} className="bg-black p-6">
              <span className="font-[family-name:var(--font-anton)] text-4xl" style={{ color: INK }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed text-white/75">
                {step}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Knowledge cloning", "Slack & Telegram", "Smart escalation", "Always learning"].map((f) => (
            <span key={f} className="font-[family-name:var(--font-pixel)] text-xs px-2.5 py-1 border border-white/25">
              {f}
            </span>
          ))}
        </div>
      </Slide>

      {/* ═══ 4 · FLYWHEEL ═══ */}
      <Slide n={4} accent={NEON.red}>
        <Kicker accent={NEON.red}>The flywheel</Kicker>
        <H>Each turn makes the next one easier</H>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { label: "Events", body: "builders gather and ship", accent: NEON.red },
              { label: "Community", body: "studio + network", accent: NEON.blue },
              { label: "Products", body: "expertise becomes always-on AI", accent: NEON.green },
            ].map((node) => (
              <div key={node.label} className="bg-black p-6">
                <span style={{ color: node.accent }} className="font-[family-name:var(--font-anton)] text-2xl uppercase">
                  {node.label}
                </span>
                <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-white/65">{node.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <span className="scrawl text-[var(--konbini-yellow)] text-3xl -rotate-6">the flywheel</span>
            <div className="mt-2 font-[family-name:var(--font-anton)] uppercase text-center leading-[0.85] text-3xl sm:text-4xl">
              FOREVER<br />22
            </div>
          </div>
        </div>
        <Highlight>
          Events gather the builders → community turns them into collaborators
          and clients → products prove the lab and pull the next builders in.
          Three pillars, one compounding system.
        </Highlight>
      </Slide>

      {/* ═══ act divider ═══ */}
      <ActMarquee text="ACT 2 · THE ENGINE" />

      {/* ═══ 5 · WHY NOW ═══ */}
      <Slide n={5} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>Why now</Kicker>
        <H>Tools ship faster than anyone can try them</H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          The bottleneck is awareness — and getting tools hands-on to actual
          consumers. New models ship back-to-back, but most builders only ever
          read about them. An IRL hackathon is the fastest way to turn that into
          trial, opinion, and adoption.
        </p>
        <div className="mt-12 space-y-5">
          {[
            {
              t: "Models outrun attention",
              b: "New models ship back-to-back. Most builders form an opinion from a headline, never having touched the product — so perception sets before a single try.",
            },
            {
              t: "Hands-on flips perception",
              b: "Three to four hours building on a tool removes the barriers and changes minds. A focused, thematic hackathon is the best top-of-funnel there is.",
            },
            {
              t: "And the winners mint companies",
              b: "YC now runs hackathons every weekend, and Founders Inc packs 85 teams into five-hour night hacks at Fort Mason — live demos only — because real businesses form in a day. Nothing like it exists on the East Coast — that's Forever 22's niche.",
            },
          ].map((p, i) => (
            <div key={i} className="flex gap-5 border-b border-white/10 pb-5">
              <span className="font-[family-name:var(--font-anton)] text-3xl text-white/20">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase">{p.t}</h3>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">{p.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ 6 · HACKATHONS ═══ */}
      <Slide n={6} accent={NEON.red}>
        <Kicker accent={NEON.red}>The engine</Kicker>
        <H size="clamp(2.5rem, 9vw, 7rem)">
          FOREVER 22 <span className="text-[var(--konbini-red)]">HACKATHONS</span>
        </H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Thematic, intimate, partner-backed build events. Chicago, now New York.
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            ["2", "hackathons"],
            ["1,000+", "registrants"],
            ["160", "builders in the room"],
            ["59", "projects shipped"],
          ].map(([num, label]) => (
            <div key={label} className="bg-black p-6 text-center">
              <div className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl text-[var(--konbini-yellow)]">{num}</div>
              <div className="anno mt-1 opacity-60">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-7 space-y-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/55 leading-relaxed max-w-2xl">
          <p>
            Google DeepMind Hackathon · Chicago, March — hosted at Drive Capital
            with Google DeepMind and Outbound Collective. 500+ registered, 80 in
            the room, 35 projects shipped.
          </p>
          <p>
            Multimodal Hacks · NY Tech Week — hosted at Betaworks, backed by
            Google for Developers, DeepMind, Pinecone, LangChain, Cursor, Clerk,
            Sendblue. 500+ registered, 80 invited, 24 projects, 5 winners.
          </p>
        </div>
      </Slide>

      {/* ═══ 7 · COMMUNITY ═══ */}
      <Slide n={7} accent={NEON.green}>
        <Kicker accent={NEON.green}>The community</Kicker>
        <H>More than an audience: a two-sided pull</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Builders come to make things and get noticed. Companies come to reach
          them and hire them.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            {
              label: "Builders & talent",
              accent: NEON.green,
              items: [
                "build and ship at the hackathons",
                "a peer network of operators and founders",
                "exposure to companies, capital and roles",
              ],
            },
            {
              label: "Companies & partners",
              accent: NEON.blue,
              items: [
                "reach the exact AI-builder audience",
                "validate products with real users",
                "recruit from a vetted pool of talent",
              ],
            },
          ].map((col) => (
            <div key={col.label} className="bg-black p-6 sm:p-7">
              <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase" style={{ color: col.accent }}>
                {col.label}
              </h3>
              <ul className="mt-4 space-y-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/75">
                {col.items.map((it) => (
                  <li key={it} className="point leading-relaxed">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Highlight>
          The talent pull — builders ask for roles, companies ask to hire.
          Forever 22 is the matchmaker in the middle.
        </Highlight>
      </Slide>

      {/* ═══ 8 · WHAT PARTNERS GET (inverted) ═══ */}
      <Slide n={8} inverted>
        <Kicker accent={NEON.red}>What partners get</Kicker>
        <H>Sponsors get more than a logo</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-black/70">
          Backing a Forever 22 event is not a banner buy. Partners get three
          things they actually want.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/12 border border-black/12">
          {[
            { t: "Product validation", b: "Real builders put your product to work under real constraints.", accent: NEON.green },
            { t: "Awareness & adoption", b: "Your tool reaches the exact builder audience and gets tried, not just seen.", accent: NEON.red },
            { t: "Talent pull", b: "A first look at a vetted pool of builders to hire, recruit, or partner with.", accent: NEON.blue },
          ].map((c) => (
            <div key={c.t} className="bg-white p-6 sm:p-7">
              <span className="block w-8 h-1.5 mb-4" style={{ background: c.accent }} />
              <h3 className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-black/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-[family-name:var(--font-anton)] uppercase text-xl sm:text-3xl leading-tight max-w-3xl">
          Every event is validation, distribution, and recruiting in one.{" "}
          <span className="text-[var(--konbini-red)]">That&apos;s why partners come back.</span>
        </p>
      </Slide>

      {/* ═══ 9 · IRL IS THE MOAT ═══ */}
      <Slide n={9} accent={INK}>
        <Kicker accent={INK}>The edge</Kicker>
        <H size="clamp(3rem, 11vw, 8rem)">
          IRL IS THE <span className="text-[var(--konbini-yellow)]">MOAT</span>
        </H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Online hackathons are a commodity. The energy, trust, and signal of an
          in-person build are not. Forever 22 is building the IRL scene for AI
          builders, starting in New York.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { t: "Truer signal", b: "You see who ships in 48 hours under pressure — sharper diligence than any pitch deck." },
            { t: "Talent compounds", b: "The same builders return, alumni mentor, a scene forms." },
            { t: "Distribution you can't buy", b: "Partners show up because the room is the audience." },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ act divider ═══ */}
      <ActMarquee text="ACT 3 · THE BIG PLAY" />

      {/* ═══ 10 · DIVIDER ═══ */}
      <Slide n={10} accent={NEON.green}>
        <Kicker accent={NEON.green}>The big play</Kicker>
        <h2
          className="font-[family-name:var(--font-anton)] uppercase leading-[0.85] tracking-tight"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          Hackathon
          <span className="text-[var(--konbini-yellow)]"> → </span>
          Fund
        </h2>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Turn the build community into an owned portfolio, without raising a
          fund to start.
        </p>
      </Slide>

      {/* ═══ 11 · TWO MONEY ENGINES ═══ */}
      <Slide n={11} accent={NEON.red}>
        <Kicker accent={NEON.red}>How a hackathon pays</Kicker>
        <H>One event, two money engines</H>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            {
              tag: "Engine 1 · now · cash",
              t: "Talent → matching",
              accent: NEON.green,
              b: "Builders, founders, and job-seekers join the network and opt into matching; partners pay for one-to-one matched candidates from a vetted pool. Recruiting revenue collected now, independent of any startup's outcome.",
            },
            {
              tag: "Engine 2 · later · upside",
              t: "Products → equity",
              accent: NEON.blue,
              b: "3 to 4 hours forces a bare-bones, single-ICP MVP; the ones that spin out enter the incubator program and Forever 22 takes a small equity sliver. Upside that compounds.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6 sm:p-7">
              <div className="anno mb-3" style={{ color: c.accent }}>{c.tag}</div>
              <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl uppercase">{c.t}</h3>
              <p className="mt-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <Highlight>
          Both ride the same hackathon. That is why the event is worth far more
          than ticket or logo money.
        </Highlight>
      </Slide>

      {/* ═══ 12 · PIPELINE ═══ */}
      <Slide n={12} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>The pipeline</Kicker>
        <H>From build weekend to portfolio company</H>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {[
            ["01", "Hackathon"],
            ["02", "Winners", "opt in to spin out"],
            ["03", "Program", "8–12 wks, resources"],
            ["04", "Demo day", "warm capital intros"],
            ["05", "Portfolio", "F22 equity sliver"],
          ].map(([n, t, sub]) => (
            <div key={n} className="bg-black p-5">
              <span className="font-[family-name:var(--font-pixel)] text-base" style={{ color: INK }}>{n}</span>
              <h3 className="mt-1 font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase leading-none">{t}</h3>
              {sub && <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] text-white/60 leading-relaxed">{sub}</p>}
            </div>
          ))}
        </div>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl">
          Equity attaches only to teams that opt into the program. Winning earns
          the invitation, never an automatic grab.
        </p>
      </Slide>

      {/* ═══ 13 · THREE PHASES (inverted) ═══ */}
      <Slide n={13} inverted>
        <Kicker accent={NEON.green}>How we get there</Kicker>
        <H>Three phases, start now without raising a fund</H>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/12 border border-black/12">
          {[
            { tag: "Phase 1 · Now", t: "Incubator program", b: "Resources for a small equity sliver, no LPs, starts immediately.", accent: NEON.green },
            { tag: "Phase 2 · Next", t: "The fund", b: "Small vehicle (rolling fund or SPV), writes real checks, once a portfolio shows traction.", accent: NEON.red },
            { tag: "Phase 3 · Future", t: "Named thesis fund", b: "Context-engineered consumer agents, a proper fund built on a real track record.", accent: NEON.blue },
          ].map((c) => (
            <div key={c.t} className="bg-white p-6 sm:p-7">
              <div className="anno mb-3" style={{ color: c.accent }}>{c.tag}</div>
              <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase">{c.t}</h3>
              <p className="mt-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-black/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ 14 · PHASE 1 DEEP ═══ */}
      <Slide n={14} accent={NEON.green}>
        <Kicker accent={NEON.green}>Phase 1 · Now</Kicker>
        <H>The incubator program</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          An opt-in program for hackathon winners who want to spin out. Forever 22
          supplies the resources and takes a small, vested sliver. No fund, no
          LPs, no waiting.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            {
              t: "We give",
              accent: NEON.green,
              items: [
                "credits and compute from partners",
                "eng support from Filament and interns",
                "mentorship and accountability",
                "network, distribution and demo day",
                "a warm path to outside capital",
              ],
            },
            {
              t: "We take",
              accent: INK,
              items: [
                "a small equity sliver, opt-in only",
                "vested across the program",
                "roughly 1–5% depending on cash and scope",
                "via a clean instrument (FAST or small SAFE)",
              ],
            },
          ].map((col) => (
            <div key={col.t} className="bg-black p-6 sm:p-7">
              <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase" style={{ color: col.accent }}>{col.t}</h3>
              <ul className="mt-4 space-y-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/75">
                {col.items.map((it) => (
                  <li key={it} className="point leading-relaxed">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs text-white/50 leading-relaxed">
          Exact terms and instruments go past counsel before any offer.
        </p>
      </Slide>

      {/* ═══ 15 · RESOURCES ═══ */}
      <Slide n={15} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>What winners get</Kicker>
        <H>The resources that make the sliver worth it</H>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10">
          {[
            { t: "Credits & compute", b: "Google for Developers, DeepMind, Pinecone, LangChain, Cursor, Clerk, Sendblue.", accent: NEON.green },
            { t: "Eng support", b: "Filament eng team on skills and agent config, plus interns.", accent: NEON.red },
            { t: "Mentorship", b: "Kaya on context and agents, plus operator advisors.", accent: NEON.blue },
            { t: "Network & distribution", b: "The Kaya Jones brand, the Betaworks platform, exec and media intros.", accent: INK },
            { t: "Capital path", b: "A warm feeder into Betaworks, Factorial, Drive Capital and Google for Startups.", accent: NEON.green },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase" style={{ color: c.accent }}>{c.t}</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <Highlight>
          Most of this is partner-subsidized. The program&apos;s real cost is
          time, not cash.
        </Highlight>
      </Slide>

      {/* ═══ 16 · ECONOMICS ═══ */}
      <Slide n={16} accent={NEON.red}>
        <Kicker accent={NEON.red}>The economics</Kicker>
        <H>Low cash in, portfolio out</H>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { t: "Low cash out", b: "Resources mostly partner-subsidized." },
            { t: "Portfolio optionality", b: "The spinout pattern is the upside." },
            { t: "Feeds the pillars", b: "Alumni become clients and brand proof." },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 font-[family-name:var(--font-anton)] uppercase text-lg sm:text-2xl">
          {["500 registrants", "100 seats", "24 projects", "5 winners", "1–3 join"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2 sm:gap-3">
              <span className={i === arr.length - 1 ? "text-[var(--konbini-yellow)]" : ""}>{step}</span>
              {i < arr.length - 1 && <span className="text-[var(--konbini-red)]">→</span>}
            </span>
          ))}
        </div>
        <Highlight>
          A few events a year is a handful of portfolio companies — enough to
          justify a Phase 2 raise within a year.
        </Highlight>
      </Slide>

      {/* ═══ act divider ═══ */}
      <ActMarquee text="ACT 4 · PROOF & FORWARD" />

      {/* ═══ 17 · TRACK RECORD (case studies) ═══ */}
      <Slide n={17} accent={NEON.red}>
        <Kicker accent={NEON.red}>Track record</Kicker>
        <H>We&apos;ve already filled the room</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Three events, two cities, one pattern: get a partner&apos;s product in
          front of the exact builders, and let the room do the rest.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            {
              tag: "Hackathon · NY Tech Week · Jun 2026",
              t: "Multimodal Hacks",
              accent: NEON.green,
              stats: ["500+ registered", "80 invited · 24 projects · 5 winners"],
              b: "Hosted at Betaworks, backed by Google for Developers, DeepMind, Pinecone, LangChain, Cursor, Clerk and Sendblue. 500+ signups curated down to a room of 80.",
            },
            {
              tag: "Hackathon · Chicago · Mar 2026",
              t: "Google DeepMind",
              accent: NEON.blue,
              stats: ["100+ builders", "30+ projects in a day"],
              b: "Put Gemini directly in the hands of 100+ builders in a single day — real apps shipped on the platform, not slideware.",
            },
            {
              tag: "Fireside · Chicago · Oct 2025",
              t: "Pinecone",
              accent: "var(--konbini-black)",
              stats: ["Packed room", "Unlocking Context Engineering"],
              b: "A fireside with Pinecone that turned context engineering into a packed-room conversation. Speakers: Forever 22 & Arjun Patel.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6 sm:p-7 flex flex-col">
              <div className="anno mb-3" style={{ color: c.accent }}>{c.tag}</div>
              <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl uppercase leading-none">{c.t}</h3>
              <div className="mt-4 space-y-1">
                {c.stats.map((s) => (
                  <div key={s} className="font-[family-name:var(--font-pixel)] text-sm" style={{ color: c.accent }}>
                    {s}
                  </div>
                ))}
              </div>
              <p className="mt-4 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed flex-1">{c.b}</p>
            </div>
          ))}
        </div>
        <Highlight>
          Every event put a partner&apos;s product in front of the room — and
          sent it home with builders who actually shipped on it.
        </Highlight>
      </Slide>

      {/* ═══ 18 · TOP-OF-FUNNEL AWARENESS ═══ */}
      <Slide n={18} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>What partners actually get</Kicker>
        <H>Top-of-funnel, not just a logo</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Each event is an awareness engine aimed at the exact AI builders
          partners are trying to reach — measured in trial and adoption, not
          impressions.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            { t: "Awareness", b: "Hundreds of qualified builders register per event — a clean top-of-funnel for partner tools.", accent: NEON.green },
            { t: "Trial", b: "Builders don't just hear about the product — they build on it under real constraints, in 48 hours.", accent: NEON.red },
            { t: "Adoption & signal", b: "Winners, demos and recaps become distribution that keeps compounding after the room clears.", accent: NEON.blue },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6">
              <span className="block w-8 h-1.5 mb-4" style={{ background: c.accent }} />
              <h3 className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 font-[family-name:var(--font-anton)] uppercase text-lg sm:text-2xl">
          {["Awareness", "Trial", "Adoption"].map((step, i, arr) => (
            <span key={step} className="flex items-center gap-2 sm:gap-3">
              <span className={i === arr.length - 1 ? "text-[var(--konbini-yellow)]" : ""}>{step}</span>
              {i < arr.length - 1 && <span className="text-[var(--konbini-blue)]">→</span>}
            </span>
          ))}
        </div>
      </Slide>

      {/* ═══ 20 · REST OF SUMMER ═══ */}
      <Slide n={19} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>Rest of summer</Kicker>
        <H>What launches next</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          The machinery to switch both engines on, sequenced June to August.
        </p>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10">
          {[
            { when: "Late Jun", t: "Foundation", b: "send Amit proposal · winners community (Circle or Slack) · resources hub", accent: NEON.green },
            { when: "Jul", t: "The Network", b: "talent profiles + matching · soft-launch to Multimodal pool · partner pricing · first partner matches", accent: NEON.red },
            { when: "Jul–Aug", t: "Program", b: "Phase 1 kickoff · skills library + mentorship", accent: NEON.blue },
            { when: "Aug", t: "Next hackathon", b: "co-design with Google PMs · open registrations · run the weekend · demo day + intake", accent: INK },
            { when: "Late Aug", t: "Wrap", b: "network + revenue metrics · Phase 2 fund conversation", accent: NEON.green },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[120px_180px_1fr] gap-1 sm:gap-5 items-baseline">
              <span className="anno" style={{ color: c.accent }}>{c.when}</span>
              <h3 className="font-[family-name:var(--font-anton)] text-lg uppercase">{c.t}</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs text-white/65 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ 21 · CLOSE ═══ */}
      <Slide n={20} accent={NEON.green}>
        <Kicker accent={INK}>Where we&apos;re going</Kicker>
        <span className="scrawl text-[var(--konbini-yellow)] text-3xl sm:text-5xl -rotate-2 mb-4 inline-block">
          let&apos;s build
        </span>
        <h2
          className="font-[family-name:var(--font-anton)] uppercase leading-[0.85] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
        >
          Build the community.<br />
          <span className="text-[var(--konbini-yellow)]">Own the upside.</span>
        </h2>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/85">
          Forever 22 already runs the events, holds the partners, and ships the
          products. The incubator pipeline turns all of it into a portfolio,
          starting with the next hackathon.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/connect"
            className="font-[family-name:var(--font-pixel)] text-lg px-6 py-3 bg-[var(--konbini-yellow)] text-black border-2 border-black hover:bg-white transition-colors"
          >
            → GET IN TOUCH
          </Link>
          <a
            href="https://x.com/forever22ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-pixel)] text-base text-black/65 hover:text-[var(--konbini-green)] transition-colors"
          >
            @forever22ai
          </a>
        </div>
        <div className="mt-12 anno opacity-50">Kaya Jones · Forever 22 LLC</div>
      </Slide>

      {/* footer */}
      <footer className="snap-start bg-white border-t-2 border-black/10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-14 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-mono)] text-[11px] opacity-50">
            © 2026 Forever 22 LLC. All rights reserved.
          </div>
          <Link href="/" className="retro-link font-[family-name:var(--font-mono)] text-[11px]">
            ← back to forever22.com
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* Act-divider band — borrows the home page marquee, on yellow. */
function ActMarquee({ text }: { text: string }) {
  const items = [text, "✦", "FOREVER 22", "★", text, "◆", "FOREVER 22", "●"];
  return (
    <div className="border-y-2 border-black overflow-hidden py-3" style={{ background: "var(--konbini-yellow)" }}>
      <div className="marquee-track whitespace-nowrap flex items-center" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-anton)] text-base sm:text-xl uppercase mx-5 sm:mx-8 text-black"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
