import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ExportPdfButton from "./ExportPdfButton";

export const metadata: Metadata = {
  title: "Forever 22 × Google DeepMind — Program Proposal",
  description:
    "Six-month hackathon program, August 2026 to January 2027. Four events, five channels, one operator.",
};

const NEON = {
  yellow: "var(--konbini-yellow)",
  red: "var(--konbini-red)",
  green: "var(--konbini-green)",
  blue: "var(--konbini-blue)",
};

/* Yellow accents used as TEXT need the darker ink to stay readable on white. */
const INK = "var(--konbini-yellow-ink)";

const TOTAL = 14;

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
        <div className="mt-12 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 anno opacity-40">
          <span>confidential &amp; proprietary · forever 22 llc</span>
          <span>proposal valid through 09.11.2026</span>
        </div>
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

/* Labeled field row used on the event slides. */
function FieldRows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-10 space-y-px bg-white/10 border border-white/10">
      {rows.map(([label, value]) => (
        <div key={label} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 items-baseline">
          <span className="anno" style={{ color: INK }}>{label}</span>
          <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/75 leading-relaxed">{value}</p>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function DeepMindPitch() {
  return (
    <div className="pitch-deck h-screen overflow-y-auto md:snap-y md:snap-mandatory bg-white text-black selection:bg-[var(--konbini-yellow)] selection:text-black">
      {/* nav */}
      <header className="print:hidden sticky top-0 z-40 bg-white/90 backdrop-blur border-b-2 border-black/10">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-14 py-3.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-stamp.png" alt="Forever 22" width={26} height={26} />
            <span className="font-[family-name:var(--font-pixel)] text-base tracking-wider">
              FOREVER22
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="anno hidden sm:inline opacity-50">× google deepmind · 2026</span>
            <ExportPdfButton />
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
        <Kicker accent={NEON.blue}>Six-month hackathon program · August 2026 → January 2027</Kicker>
        <span
          className="scrawl block text-[var(--konbini-yellow)] -rotate-2 mb-2"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          draft for reaction
        </span>
        <h1
          className="font-[family-name:var(--font-anton)] uppercase leading-[0.8] tracking-tight"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          FOREVER<span className="text-[var(--konbini-yellow)]">22</span>
          <span className="text-[var(--konbini-blue)]"> × </span>
          <br />
          GOOGLE DEEPMIND
        </h1>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/85">
          Four hackathons across six months, each activating a different part of
          the ecosystem, run by the operator behind Multimodal Hacks.
        </p>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed max-w-2xl text-white/60">
          The themes and partners below are the shape of the program. The costs
          are indicative per-event budgets so you have a sense of scale for
          internal approval. We firm them per event once we lock themes and
          venues.
        </p>
        <div className="mt-12 anno opacity-50">
          Prepared by Kaya Jones · Forever 22 LLC · @forever22ai
        </div>
        <p className="mt-4 font-[family-name:var(--font-mono)] text-[11px] leading-relaxed max-w-2xl text-black/50">
          Confidential &amp; proprietary to Forever 22 LLC — prepared
          exclusively for Google DeepMind for the purpose of evaluating this
          hackathon program partnership. Please keep it within your team. This
          proposal is valid for 30 days and expires September 11, 2026.
        </p>
      </Slide>

      {/* ═══ 2 · WHERE THIS COMES FROM ═══ */}
      <Slide n={2} accent={NEON.green}>
        <Kicker accent={NEON.green}>Where this comes from</Kicker>
        <H>Chicago proved the funnel. June proved the room.</H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          The Google DeepMind Hackathon (March 14, Chicago, at Drive Capital)
          ran 500-plus registrants down to 80 in the room and 35 shipped
          projects — pure top-of-funnel awareness, and it worked. Multimodal
          Hacks (June 6, NYC) ran 500-plus registrants down to 80 invited, 24
          projects, and 5 winners, with the Gemini team on site demoing live.
          It worked because it was small enough that your team could actually
          talk to people, and thematic enough that PMs had a reason to be in
          the room.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            ["2", "hackathons"],
            ["1,000+", "registrants"],
            ["160", "in the room"],
            ["59", "projects shipped"],
          ].map(([num, label]) => (
            <div key={label} className="bg-black p-6 text-center">
              <div className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl text-[var(--konbini-yellow)]">{num}</div>
              <div className="anno mt-1 opacity-60">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-5">
          {[
            {
              t: "Top-of-funnel, hands on",
              b: "You said the goal is top-of-funnel awareness and getting hands on the product, because most negative perception comes from people who never actually used the thing.",
            },
            {
              t: "Sustainable, not a burst",
              b: "And that you want anything we build together to be sustainable, not a burst that fades.",
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

      {/* ═══ 3 · WHY KAYA ═══ */}
      <Slide n={3} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>Why Kaya</Kicker>
        <H>Why I&apos;m the one to build these four</H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          The numbers behind us say the format works. The reason to run four
          more with me is what each of these rooms actually requires.
        </p>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10">
          {[
            {
              t: "Computer Use Hacks",
              b: "I've run this format with this product twice. The invite funnel, the alumni list, and the working relationship with the Gemini team already exist — event one starts warm, not cold.",
              accent: NEON.green,
            },
            {
              t: "Build for Business",
              b: "Forever 22 is an applied AI lab, not an events agency. I ship on these tools myself, which is what it takes to translate between an SMB owner's real problem and a builder's weekend.",
              accent: NEON.blue,
            },
            {
              t: "Agents at Work",
              b: "The draw is the VC panel, and it comes from rooms I've already run — Chicago at Drive Capital's office, June at Betaworks. I've put builders in front of capital at every event so far.",
              accent: NEON.red,
            },
            {
              t: "Creator Track",
              b: "A non-engineer room lives or dies on who's in it, and curation is the core of my format: 500-plus registrants cut to the 80 who belong there, twice now.",
              accent: INK,
            },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase" style={{ color: c.accent }}>{c.t}</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <Highlight>
          One operator across all four means nothing resets: the alumni return,
          the partners carry forward, and your product feedback compounds from
          event to event.
        </Highlight>
      </Slide>

      {/* ═══ 4 · THE SHAPE ═══ */}
      <Slide n={4} accent={NEON.red}>
        <Kicker accent={NEON.red}>The shape</Kicker>
        <H>A six-month cadence, not another one-off</H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-lg leading-relaxed max-w-2xl text-white/80">
          Four events, roughly every six to eight weeks, each activating a
          different part of the ecosystem so the reach compounds instead of
          hitting the same NYC room four times.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { when: "Aug 2026", t: "Computer Use Hacks", sub: "computer use · Betaworks", accent: NEON.green },
            { when: "Oct 2026", t: "Build for Business", sub: "SMB problems · two-sided", accent: NEON.blue },
            { when: "Nov 2026", t: "Agents at Work", sub: "agents · campus + VC panel", accent: NEON.red },
            { when: "Jan 2027", t: "Creator Track", sub: "Veo & Imagen · non-engineers", accent: INK },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5">
              <span className="anno" style={{ color: c.accent }}>{c.when}</span>
              <h3 className="mt-1 font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase leading-none">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] text-white/60 leading-relaxed">{c.sub}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">
          Not every event needs a full day. Founders Inc fills 85 teams for
          five-hour night hacks at Fort Mason — doors at 5:30, demos by 10,
          live demos only. We can mix formats across the program: some events
          run as hack nights hosted in partner offices (a night hack at
          Datadog&apos;s NYC space, for instance) — shorter, sharper, and
          easier for working builders to say yes to. We think we can do it
          even better.
        </p>
        <Highlight>
          Same operator, same quality bar — four different rooms, so the reach
          compounds instead of repeating.
        </Highlight>
      </Slide>

      {/* ═══ 5 · THE REACH ARGUMENT ═══ */}
      <Slide n={5} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>The reach argument</Kicker>
        <H>Five channels, five different rooms</H>
        <p className="mt-7 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          Everyone knows Google for search — the consumer AI market is the one
          still up for grabs, and hands-on is how you take it. Betaworks is one
          venue and one network. It is a good one, and it is not enough on its
          own. To earn real volume, the program deliberately spreads across
          five channels that are hard to reach directly — past the dev bubble,
          toward the people who build for consumers and the consumers
          themselves.
        </p>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10">
          {[
            { t: "Funds & VCs", b: "Judging panels and demo days that put builders in front of capital.", accent: NEON.green },
            { t: "Universities", b: "Campus hosts and entrepreneurship programs — student builders and early founders.", accent: NEON.red },
            { t: "Non-profits & professional orgs", b: "Communities like NSBE for reach beyond the NYC AI bubble.", accent: NEON.blue },
            { t: "Accelerators & incubators", b: "Techstars, ERA, Antler — rooms already deciding what to build next.", accent: INK },
            { t: "Small business & creators", b: "SMB owners with real problems and creator communities for the non-developer track.", accent: NEON.green },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-2 sm:gap-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase" style={{ color: c.accent }}>{c.t}</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <Highlight>
          And it travels. Chicago&apos;s March funnel was strong enough to run
          again this fall, the NYC run doubles as the case-study sprint, and
          Boston is the natural next room. Same playbook, new cities.
        </Highlight>
      </Slide>

      {/* ═══ 6 · PARTNERS ═══ */}
      <Slide n={6} accent={NEON.green}>
        <Kicker accent={NEON.green}>Partners we would activate</Kicker>
        <H>Confirmed base, targeted reach</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed max-w-2xl text-white/60">
          Betaworks and the existing sponsor roster are already in the fold. The
          rest are targets we would bring in as the calendar firms up.
        </p>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10">
          {[
            { t: "Confirmed base", b: "Betaworks (host and co-programming) — the first venue, not the only one.", accent: NEON.green },
            { t: "Intro in motion", b: "Cornell Tech — a facilities introduction is underway for the November campus event, with a faculty champion inside the school.", accent: NEON.green },
            { t: "Venues we'd expand to", b: "Datadog's NYC office and other partner offices around the city.", accent: NEON.blue },
            { t: "Funds & VCs", b: "Factorial Capital, Drive Capital, and a rotating VC panel drawn from the Betaworks network.", accent: NEON.red },
            { t: "Universities", b: "NYU Tandon, Columbia, Princeton, Penn, and their entrepreneurship programs.", accent: NEON.blue },
            { t: "Non-profits & orgs", b: "NSBE (National Society of Black Engineers) and similar communities for reach beyond the NYC AI bubble.", accent: INK },
            { t: "Accelerators", b: "Techstars NYC, ERA, Antler, plus the Forever 22 winner program.", accent: NEON.green },
            { t: "Creator & media", b: "Creator and media communities for the non-developer track.", accent: NEON.red },
          ].map((c) => (
            <div key={c.t} className="bg-black p-5 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-6">
              <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase" style={{ color: c.accent }}>{c.t}</h3>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ act divider ═══ */}
      <ActMarquee text="THE FOUR EVENTS" />

      {/* ═══ 7 · EVENT 1 ═══ */}
      <Slide n={7} accent={NEON.green}>
        <Kicker accent={NEON.green}>Event 1 · August 2026</Kicker>
        <H size="clamp(2.5rem, 9vw, 7rem)">
          Computer <span className="text-[var(--konbini-green)]">Use Hacks</span>
        </H>
        <FieldRows
          rows={[
            ["Theme", "Computer use — agents that see the screen, click, and act."],
            ["Google surface", "Gemini computer use, PMs co-designing from the start."],
            ["Sample partners", "Betaworks (host) — or a partner office like Datadog's NYC space."],
            ["Who comes", "NYC AI builders, Multimodal Hacks alumni."],
            ["Size & vibe", "~80 invited, intimate, submission-first."],
          ]}
        />
        <Highlight>
          Repeat the proven format with your product team baked in from day one
          rather than showing up to it.
        </Highlight>
      </Slide>

      {/* ═══ 8 · EVENT 2 ═══ */}
      <Slide n={8} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>Event 2 · October 2026</Kicker>
        <H size="clamp(2.5rem, 9vw, 7rem)">
          Build for <span className="text-[var(--konbini-blue)]">Business</span>
        </H>
        <FieldRows
          rows={[
            ["Theme", "Your idea from June. Small business owners bring real problems, builders ship solutions, aim for signed SOWs by the end of the weekend."],
            ["Google surface", "Gemini for practical business use, low-cost multi-model builds."],
            ["Sample partners", "NSBE and local business and professional orgs, one accelerator."],
            ["Who comes", "Builders on one side, SMB owners on the other."],
            ["Size & vibe", "~60 to 80, smaller and more matched, two-sided."],
          ]}
        />
        <Highlight>
          The adoption story a dev-only room cannot give you. SMBs want AI,
          cannot afford big firms, and lack time to learn the tools. This puts
          your product in their hands through someone who already knows it.
        </Highlight>
      </Slide>

      {/* ═══ 9 · EVENT 3 ═══ */}
      <Slide n={9} accent={NEON.red}>
        <Kicker accent={NEON.red}>Event 3 · November 2026</Kicker>
        <H size="clamp(2.5rem, 9vw, 7rem)">
          Agents <span className="text-[var(--konbini-red)]">at Work</span>
        </H>
        <FieldRows
          rows={[
            ["Theme", "Managed agents and agentic workflows."],
            ["Google surface", "Managed agents and agent tooling; PM intro plus a post-hack feedback session."],
            ["Sample partners", "Cornell Tech as the likely host — facilities intro underway — plus their entrepreneurship program, one accelerator, and a multi-fund VC panel as judges."],
            ["Who comes", "Student builders, early founders, operators."],
            ["Size & vibe", "~100, campus energy, VC panel as the draw."],
          ]}
        />
        <Highlight>
          Campus reach and a room deciding what to build next. The VC panel is
          the hook that makes it worth their weekend.
        </Highlight>
      </Slide>

      {/* ═══ 10 · EVENT 4 ═══ */}
      <Slide n={10} accent={INK}>
        <Kicker accent={INK}>Event 4 · January 2027</Kicker>
        <H size="clamp(2.5rem, 9vw, 7rem)">
          Creator <span className="text-[var(--konbini-yellow)]">Track</span>
        </H>
        <p className="mt-3 anno opacity-50">working title</p>
        <FieldRows
          rows={[
            ["Theme", "Multimodal generation for creators and media."],
            ["Google surface", "Veo, Imagen, multimodal generation."],
            ["Sample partners", "Creator community and media partners, one fund."],
            ["Who comes", "Creators, designers, media builders, not just engineers."],
            ["Size & vibe", "~80, showcase-heavy, output you can watch."],
          ]}
        />
        <Highlight>
          A non-engineer audience and demo content that travels further than a
          repo.
        </Highlight>
      </Slide>

      {/* ═══ act divider ═══ */}
      <ActMarquee text="THE MONEY & THE ASK" />

      {/* ═══ 11 · COSTS ═══ */}
      <Slide n={11} accent={NEON.red}>
        <Kicker accent={NEON.red}>What each event costs</Kicker>
        <H>Indicative budget per event</H>
        <p className="mt-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed max-w-2xl text-white/60">
          These were the estimated expenses for the June hackathon at
          Betaworks — the same payment structure carries over as the baseline
          for each full-day event.
        </p>
        <div className="mt-10 space-y-px bg-white/10 border border-white/10 max-w-3xl">
          {[
            ["Venue, AV, staffing, and food (Betaworks full-day package — June hackathon model)", "$5,000"],
            ["Photography and videography", "$2,000"],
            ["Forever 22 planning, admin, hosting, and day-of logistics", "$5,000"],
          ].map(([item, cost]) => (
            <div key={item} className="bg-black p-5 flex items-baseline justify-between gap-6">
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/75 leading-relaxed">{item}</p>
              <span className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl whitespace-nowrap">{cost}</span>
            </div>
          ))}
          <div className="bg-black p-5 flex items-baseline justify-between gap-6 border-t-2 border-white/25">
            <p className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase">Per-event total</p>
            <span className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl text-[var(--konbini-yellow)]">$12,000</span>
          </div>
        </div>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">
          Across four events, the program runs to roughly $48,000 over six
          months. The venue, AV, staffing, and food line moves with the host,
          and campus reads as a swap rather than a discount: early guidance from
          Cornell Tech puts space and refreshments for a hackathon at a few
          thousand dollars plus — the same order as the Betaworks line. We will
          firm every line against the actual venue before anything is committed.
        </p>
        <div className="mt-8 border-l-2 pl-5 max-w-2xl" style={{ borderColor: NEON.red }}>
          <p className="font-[family-name:var(--font-anton)] text-lg sm:text-xl uppercase">
            Google does not have to carry it alone
          </p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">
            We are open to bringing in co-sponsors to share the per-event cost —
            with Google as the anchor partner and the themes still set with your
            teams. If there are companies in your orbit that make sense next to
            you in these rooms, we would rather build that list with you than
            around you. Any partner we bring is yours to approve.
          </p>
          <p className="mt-3 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/55 leading-relaxed">
            This is not hypothetical: at Cornell Tech, the AI &amp; Blockchain
            student org has already been raised as a partner that would help
            fundraise against the November event.
          </p>
        </div>
      </Slide>

      {/* ═══ 12 · THE ASK ═══ */}
      <Slide n={12} accent={NEON.blue}>
        <Kicker accent={NEON.blue}>The ask</Kicker>
        <H>What we would want from Google</H>
        <div className="mt-12 space-y-5">
          {[
            {
              t: "Credits & compute",
              b: "Credits and compute for participants at each event, same mechanism as June.",
            },
            {
              t: "PM involvement per theme",
              b: "Co-design input up front, an intro or demo on the day, and a post-hack feedback session.",
            },
            {
              t: "Event spend",
              b: "Covering the per-event budget above — venue, AV, staffing, food, media, and the coordination it takes to run each one.",
            },
            {
              t: "Google for Startups path",
              b: "For teams that spin out — the piece you floated in June and the piece I most want to build with you.",
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

      {/* ═══ 13 · WHAT GOOGLE GETS ═══ */}
      <Slide n={13} accent={NEON.green}>
        <Kicker accent={NEON.green}>The return</Kicker>
        <H>What Google gets</H>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            { t: "Four rooms, six months", b: "Each a different audience, all hands-on with the product.", accent: NEON.green },
            { t: "PMs with real builders", b: "In front of builders using the product under real constraints, plus structured feedback after.", accent: NEON.red },
            { t: "A repeatable format", b: "Run by the same operator, so quality does not reset every time.", accent: NEON.blue },
            { t: "A spinout pipeline", b: "With a natural path into Google for Startups.", accent: INK },
          ].map((c) => (
            <div key={c.t} className="bg-black p-6 sm:p-7">
              <span className="block w-8 h-1.5 mb-4" style={{ background: c.accent }} />
              <h3 className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase">{c.t}</h3>
              <p className="mt-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/70 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* ═══ 14 · OPEN QUESTIONS ═══ */}
      <Slide n={14} accent={INK}>
        <Kicker accent={INK}>Open questions for you</Kicker>
        <span className="scrawl text-[var(--konbini-yellow)] text-3xl sm:text-5xl -rotate-2 mb-4 inline-block">
          your move
        </span>
        <div className="space-y-5">
          {[
            "Which of the four themes are worth doing, and which would you swap?",
            "Which Google product teams should be baked in, and at what point in the design?",
            "Is the SMB format interesting enough to be its own event, or better as a track inside a bigger one?",
            "On Google for Startups: are we a feeder, a co-program, or both?",
            "Are you open to co-sponsors on cost — and who would you want in the room?",
          ].map((q, i) => (
            <div key={i} className="flex gap-5 border-b border-white/10 pb-5">
              <span className="font-[family-name:var(--font-anton)] text-3xl text-white/20">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-[family-name:var(--font-anton)] text-lg sm:text-2xl uppercase leading-tight max-w-3xl">{q}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-sm sm:text-base leading-relaxed max-w-2xl text-white/80">
          Once these land, we will firm the per-event numbers against the actual
          venues.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/connect"
            className="font-[family-name:var(--font-pixel)] text-lg px-6 py-3 bg-[var(--konbini-yellow)] text-black border-2 border-black hover:bg-white transition-colors"
          >
            → LET&apos;S TALK
          </Link>
          <a
            href="https://x.com/forever22studio"
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
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-14 py-8">
          <p className="font-[family-name:var(--font-mono)] text-[11px] leading-relaxed opacity-50 max-w-3xl">
            This proposal and its contents are the confidential and proprietary
            property of Forever 22 LLC, prepared exclusively for Google
            DeepMind for the purpose of evaluating a potential hackathon
            program partnership. It may be shared within Google for that
            purpose only, and may not be distributed, reproduced, or shared
            outside Google without the prior written consent of Forever 22 LLC.
            Program terms and pricing are valid for 30 days from August 12,
            2026 and expire on September 11, 2026.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-[family-name:var(--font-mono)] text-[11px] opacity-50">
              © 2026 Forever 22 LLC. All rights reserved.
            </div>
            <Link href="/" className="print:hidden retro-link font-[family-name:var(--font-mono)] text-[11px]">
              ← back to forever22.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Act-divider band — borrows the home page marquee, on yellow. */
function ActMarquee({ text }: { text: string }) {
  const items = [text, "✦", "FOREVER 22", "★", text, "◆", "FOREVER 22", "●"];
  return (
    <div className="print:hidden border-y-2 border-black overflow-hidden py-3" style={{ background: "var(--konbini-yellow)" }}>
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
