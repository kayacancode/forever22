import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: "multimodal-hacks",
    title: "Multimodal Hacks",
    date: "June 2026",
    location: "New York, NY · NY Tech Week",
    tag: "hackathon",
    accent: "var(--konbini-green)",
    description: "A one-day sprint on the next wave of interfaces for AI agents with Betaworks. 500+ registered — we invited just 80 builders into the room. 5 winners.",
    photo: null as string | null,
    link: "/events/multimodal-hacks",
  },
  {
    id: "google-deepmind-hackathon",
    title: "Google DeepMind Hackathon",
    date: "March 2026",
    location: "Chicago, IL",
    tag: "hackathon",
    accent: "var(--konbini-red)",
    description: "100+ builders came together to hack on Gemini. 30+ projects shipped in one day.",
    photo: "/events/deepmind/hackathon1.jpeg",
    link: "/events/google-deepmind-hackathon",
  },
  {
    id: "pinecone-fireside",
    title: "Unlocking Context Engineering",
    date: "October 2025",
    location: "Chicago, IL",
    tag: "fireside chat",
    accent: "var(--konbini-blue)",
    description: "A fireside chat with Pinecone on the power of context engineering. Speakers: Forever22 & Arjun Patel.",
    photo: "/events/pinecone/pineconeevent1.jpeg",
    link: null,
  },
];

const pillars = [
  {
    n: "01",
    label: "Products",
    headline: "AI that never forgets.",
    body: "We turn personal and institutional expertise into always-on intelligence — AI twins and systems that remember, learn, and answer on your behalf.",
    cta: { text: "See our products", href: "/companies" },
  },
  {
    n: "02",
    label: "Events",
    headline: "Where builders ship.",
    body: "Hackathons, fireside chats, and dinners that pull the best builders into one room for a day — and send them out with something real.",
    cta: { text: "See our events", href: "/events" },
  },
  {
    n: "03",
    label: "Community",
    headline: "Built in the open.",
    body: "A studio and a network. We work with founders and teams shipping AI-native products, and we keep the door open to the people building the future.",
    cta: { text: "Work with us", href: "/connect" },
  },
];

// `logo` = full wordmark logo, shown on its own.
// `mark` = small brand glyph, shown alongside the name.
// Neither = styled wordmark fallback. Drop files in /public/partners/.
const partners: { name: string; logo?: string; mark?: string }[] = [
  { name: "Pinecone", logo: "/partners/pinecone.png" },
  { name: "Google DeepMind", logo: "/partners/google-deepmind.png" },
  { name: "Betaworks", logo: "/partners/betaworks.png" },
  { name: "Drive Capital", logo: "/partners/drive.svg" },
  { name: "LangChain", logo: "/partners/langchain-community.png" },
  { name: "Sendblue", logo: "/partners/sendblue.png" },
  { name: "Clerk", mark: "/partners/clerk.svg" },
  { name: "Cursor", mark: "/partners/cursor.svg" },
  { name: "ClawCon", logo: "/partners/clawcon.png" },
];

const marqueeItems = [
  "AI is a forever thing",
  "★",
  "context engineering",
  "✦",
  "hackathons",
  "◆",
  "fireside chats",
  "●",
  "we build what remembers",
  "▲",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* ═══ HEADER / NAV ═══ */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo-stamp.png"
              alt="Forever 22"
              width={30}
              height={30}
              className="sm:w-[36px] sm:h-[36px]"
            />
            <span className="font-[family-name:var(--font-pixel)] text-base sm:text-lg tracking-wider text-white drop-shadow">
              FOREVER22
            </span>
          </div>
          <nav className="flex gap-4 sm:gap-7 text-white">
            <Link href="/connect" className="font-[family-name:var(--font-mono)] text-xs sm:text-sm hover:text-[var(--konbini-yellow)] transition-colors drop-shadow">
              [connect]
            </Link>
            <Link href="/companies" className="font-[family-name:var(--font-mono)] text-xs sm:text-sm hover:text-[var(--konbini-yellow)] transition-colors hidden sm:inline drop-shadow">
              [companies]
            </Link>
            <Link href="/events" className="font-[family-name:var(--font-mono)] text-xs sm:text-sm hover:text-[var(--konbini-yellow)] transition-colors drop-shadow">
              [events]
            </Link>
          </nav>
        </div>
      </header>

      {/* ═══ HERO — full-bleed video loop ═══ */}
      <section
        className="relative w-full h-[90vh] min-h-[560px] overflow-hidden"
        style={{ background: "var(--konbini-green)" }}
      >
        {/* Drop a clip at /public/hero/hero.mp4 (+ optional /public/hero/hero-poster.jpg)
            and it auto-plays here. Until then the green block stands in. */}
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-poster.jpg"
        >
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
        {/* legibility overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />

        {/* content pinned to bottom */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16">
            <div className="anno text-white/80 mb-3">
              { "{ APPLIED AI LAB — CHICAGO → NYC }" }
            </div>
            {/* marker scrawl accent — sits above the wordmark, no overlap */}
            <span
              className="scrawl block text-[var(--konbini-yellow)] -rotate-2 mb-1 sm:mb-2"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.25rem)" }}
            >
              a forever thing!
            </span>
            <h1
              className="uppercase font-[family-name:var(--font-anton)] text-white leading-[0.82] tracking-tight"
              style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
            >
              FOREVER <span className="text-[var(--konbini-yellow)]">22</span>
            </h1>
            <p className="mt-5 font-[family-name:var(--font-mono)] text-sm sm:text-base text-white max-w-xl leading-relaxed drop-shadow">
              We build AI products that turn expertise into always-on intelligence
              — and host events that bring builders together to ship.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 items-center">
              <Link
                href="/connect"
                className="font-[family-name:var(--font-pixel)] text-base sm:text-lg px-5 py-2.5 bg-[var(--konbini-yellow)] text-black border-2 border-black hover:bg-white transition-colors"
              >
                → WORK WITH US
              </Link>
              <span className="font-[family-name:var(--font-pixel)] text-xs text-white/80">
                ● ACCEPTING CLIENTS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="border-y-2 border-black overflow-hidden py-3 bg-black">
        <div className="marquee-track whitespace-nowrap flex items-center" style={{ width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-anton)] text-base sm:text-xl uppercase mx-4 sm:mx-7 text-[var(--konbini-yellow)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ MISSION — green color block (AGI House tone) ═══ */}
      <section style={{ background: "var(--konbini-green)" }} className="text-white">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
          <div className="anno text-white/70 mb-8">[ our mission ]</div>
          <h2
            className="font-[family-name:var(--font-anton)] uppercase leading-[0.95] tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(2.25rem, 6.5vw, 6rem)" }}
          >
            From human expertise to{" "}
            <span className="scrawl normal-case text-[var(--konbini-yellow)] inline-block -rotate-2">
              always-on
            </span>{" "}
            intelligence.
          </h2>
          <p className="mt-10 font-[family-name:var(--font-mono)] text-sm sm:text-lg text-white/90 max-w-2xl leading-relaxed">
            Forever 22 is a community and an applied AI lab empowering the
            builders shaping AI-native software.
          </p>
          <p className="mt-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm text-white/65 max-w-2xl leading-relaxed">
            In 2025, Kaya Jones launched Forever 22 — now building out of New
            York — on a simple belief: AI is a forever thing. By building AI that
            remembers and bringing the best builders together to ship, we turn
            human expertise into intelligence that never forgets, one product at
            a time.
          </p>
        </div>
      </section>

      {/* ═══ PILLARS — Products / Events / Community ═══ */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
        <div className="flex items-baseline gap-3 mb-12 sm:mb-16">
          <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-5xl uppercase">
            What we do
          </h2>
          <span className="scrawl text-[var(--konbini-red)] text-2xl sm:text-4xl -rotate-3">
            the three things
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/12 border hairline">
          {pillars.map((p) => (
            <div key={p.n} className="bg-white p-7 sm:p-9 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-[family-name:var(--font-anton)] text-5xl sm:text-6xl text-black/12">
                  {p.n}
                </span>
                <span className="anno text-black/50">{p.label}</span>
              </div>
              <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl uppercase leading-none mb-4">
                {p.headline}
              </h3>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed text-black/70 flex-1">
                {p.body}
              </p>
              <Link
                href={p.cta.href}
                className="retro-link font-[family-name:var(--font-pixel)] text-sm mt-6"
              >
                → {p.cta.text}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PRODUCT — Bestmate, editorial spread ═══ */}
      <section className="border-t hairline">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            {/* Left: the pitch */}
            <div>
              <div className="anno text-black/50 mb-5">[ featured product ]</div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs px-2 py-0.5 uppercase text-white"
                  style={{ background: "var(--konbini-blue)" }}
                >
                  AI Twin Platform
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs opacity-70">
                  <span style={{ color: "var(--konbini-green)" }}>●</span> live
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-anton)] uppercase leading-none" style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
                Bestmate
              </h3>
              <p className="mt-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed text-black/75 max-w-md">
                Clone your knowledge and expertise into a personal AI twin.
                Bestmate lives in your Slack, Telegram, and more — answering
                questions on your behalf. When it doesn&apos;t know the answer,
                it pings you.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Knowledge cloning", "Slack & Telegram", "Smart escalation", "Always learning"].map((f) => (
                  <span key={f} className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs px-2 py-1 border hairline">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: how-it-works, on black */}
            <div className="bg-black text-white p-7 sm:p-9 relative">
              <span className="scrawl absolute -top-5 -right-3 text-[var(--konbini-yellow)] text-3xl sm:text-4xl rotate-6">
                how?
              </span>
              <p className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs mb-6" style={{ color: "var(--konbini-green)" }}>
                &gt; HOW IT WORKS
              </p>
              <div className="space-y-6 font-[family-name:var(--font-mono)] text-xs sm:text-sm">
                <p className="point leading-relaxed">
                  <span style={{ color: "var(--konbini-yellow)" }}>01.</span> Clone your knowledge — feed it docs, notes, expertise.
                </p>
                <p className="point leading-relaxed">
                  <span style={{ color: "var(--konbini-yellow)" }}>02.</span> Deploy to Slack, Telegram, or wherever your team lives.
                </p>
                <p className="point leading-relaxed">
                  <span style={{ color: "var(--konbini-yellow)" }}>03.</span> It answers for you — and pings you when it&apos;s unsure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EVENTS — zine list ═══ */}
      <section style={{ background: "var(--konbini-green)" }} className="text-white">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
          <div className="flex items-baseline gap-3 mb-12 sm:mb-16">
            <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-5xl uppercase">
              Events
            </h2>
            <span className="scrawl text-[var(--konbini-yellow)] text-2xl sm:text-4xl -rotate-3">
              come build
            </span>
          </div>

          <div className="space-y-px bg-white/15 border border-white/20">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-[var(--konbini-green)] grid grid-cols-1 sm:grid-cols-[180px_1fr_auto] gap-4 sm:gap-7 items-start p-6 sm:p-8"
              >
                {/* photo / banner */}
                <div className="relative w-full sm:w-[180px] h-32 overflow-hidden border border-white/25">
                  {event.photo ? (
                    <Image src={event.photo} alt={event.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-center px-2" style={{ background: "#0b0b0d" }}>
                      <span className="font-[family-name:var(--font-anton)] uppercase leading-none text-lg" style={{ color: "#f4f1ea" }}>
                        Multimodal <span style={{ color: "#ccff35" }}>Hacks</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* info */}
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <span className="anno px-2 py-0.5 text-black" style={{ background: "var(--konbini-yellow)" }}>
                      {event.tag}
                    </span>
                    <h3 className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase">
                      {event.title}
                    </h3>
                  </div>
                  <div className="anno text-white/70 mb-3">{event.date} · {event.location}</div>
                  <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed text-white/85 max-w-xl">
                    {event.description}
                  </p>
                </div>

                {/* link */}
                <div className="sm:text-right">
                  {event.link ? (
                    <Link
                      href={event.link}
                      className="font-[family-name:var(--font-pixel)] text-sm text-[var(--konbini-yellow)] hover:text-white transition-colors whitespace-nowrap"
                    >
                      → view
                    </Link>
                  ) : (
                    <span className="anno text-white/40">recap soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EVENT PARTNERS ═══ */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <div className="flex items-baseline gap-3 mb-3">
          <h2 className="font-[family-name:var(--font-anton)] text-2xl sm:text-4xl uppercase">
            Event partners
          </h2>
          <span className="scrawl text-[var(--konbini-green)] text-xl sm:text-3xl -rotate-2">
            who we build with
          </span>
        </div>
        <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm text-black/60 mb-8 sm:mb-10 max-w-xl">
          Companies we&apos;ve teamed up with to host hackathons, fireside chats,
          and dinners.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {partners.map((p) => (
            <div
              key={p.name}
              className="border hairline bg-white flex items-center justify-center gap-2.5 h-24 sm:h-28 px-4 group"
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={180}
                  height={44}
                  className="max-h-6 sm:max-h-7 max-w-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <>
                  {p.mark && (
                    <Image
                      src={p.mark}
                      alt=""
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="font-[family-name:var(--font-anton)] text-base sm:text-xl uppercase text-black/70 group-hover:text-black transition-colors text-center leading-tight">
                    {p.name}
                  </span>
                </>
              )}
            </div>
          ))}
          {/* CTA cell to round out the grid */}
          <Link
            href="/connect"
            className="border-2 border-black bg-black text-white flex items-center justify-center h-24 sm:h-28 px-4 font-[family-name:var(--font-pixel)] text-sm hover:bg-[var(--konbini-green)] transition-colors text-center"
          >
            → partner with us
          </Link>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
        <span className="scrawl text-[var(--konbini-red)] text-3xl sm:text-5xl -rotate-2 mb-4 inline-block">
          let&apos;s build
        </span>
        <h2 className="font-[family-name:var(--font-anton)] uppercase leading-[0.9]" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
          Work with<br />Forever 22
        </h2>
        <div className="mt-7">
          <Link
            href="/connect"
            className="inline-block font-[family-name:var(--font-pixel)] text-base sm:text-lg px-5 py-2.5 border-2 border-black hover:bg-[var(--konbini-red)] hover:text-white hover:border-[var(--konbini-red)] transition-colors"
          >
            → GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t-2 border-black">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs opacity-70">
            © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/forever22studio" target="_blank" rel="noopener noreferrer" className="retro-link font-[family-name:var(--font-mono)] text-[10px] sm:text-xs">
              @forever22studio
            </a>
            <a href="mailto:kaya@forever22.com" className="retro-link font-[family-name:var(--font-mono)] text-[10px] sm:text-xs">
              email
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs opacity-40">visitors:</span>
            <span className="visitor-counter text-[10px] sm:text-xs">004,219</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
