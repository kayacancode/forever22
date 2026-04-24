import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: "google-deepmind-hackathon",
    title: "Google DeepMind Hackathon",
    date: "March 2026",
    location: "Chicago, IL",
    tag: "hackathon",
    tagColor: "var(--konbini-red)",
    description: "100+ builders came together to hack on Gemini. 30+ projects shipped in one day.",
    stats: { builders: "100+", projects: "30+", hours: "12" },
    photos: [
      "/events/deepmind/hackathon1.jpeg",
      "/events/deepmind/hackathon2.jpeg",
      "/events/deepmind/hackathon3.jpeg",
    ],
    featured: true,
    link: "/events/google-deepmind-hackathon",
  },
  {
    id: "pinecone-fireside",
    title: "Unlocking Context Engineering",
    date: "October 2025",
    location: "Chicago, IL",
    tag: "fireside chat",
    tagColor: "var(--konbini-blue)",
    description: "A fireside chat with Pinecone on the power of context engineering. Speakers: Forever22 & Arjun Patel.",
    stats: { attendees: "40+", speakers: "2", partners: "3" },
    photos: [
      "/events/pinecone/pineconeevent1.jpeg",
      "/events/pinecone/pc2.jpeg",
      "/events/pinecone/pc3.jpeg",
    ],
    featured: false,
    link: null,
  },
];

const clients = [
  "Betaworks",
  "Sunday Money",
  "S2G Investments",
  "Thryve AI",
  "Blade",
  "Youdle",
];

const products = [
  {
    name: "Bestmate",
    tag: "AI Twin Platform",
    tagColor: "var(--konbini-blue)",
    description:
      "Clone your knowledge and expertise into a personal AI twin. Bestmate lives in your Slack, Telegram, and more — answering questions on your behalf. When it doesn't know the answer, it pings you.",
    features: [
      "Knowledge cloning",
      "Slack & Telegram",
      "Smart escalation",
      "Always learning",
    ],
    status: "live",
  },
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
  "products that think for you",
  "✦",
];

export default function Home() {
  return (
    <div className="min-h-screen pixel-grid relative overflow-x-hidden">
      {/* Scanline effect */}
      <div className="scanline" />

      {/* ═══ HEADER / NAV ═══ */}
      <header className="border-b-2 border-dashed border-black">
        <div className="flex items-center justify-between px-3 sm:px-8 py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo-stamp.png"
              alt="Forever 22"
              width={32}
              height={32}
              className="stamp sm:w-[40px] sm:h-[40px]"
            />
            <span className="font-[family-name:var(--font-pixel)] text-base sm:text-xl tracking-wider">
              FOREVER22
            </span>
          </div>
          <nav className="flex gap-3 sm:gap-6">
            <Link href="/connect" className="retro-link font-[family-name:var(--font-mono)] text-xs sm:text-sm">
              [connect]
            </Link>
            <Link href="/companies" className="retro-link font-[family-name:var(--font-mono)] text-xs sm:text-sm hidden sm:inline">
              [companies]
            </Link>
            <Link href="/events" className="retro-link font-[family-name:var(--font-mono)] text-xs sm:text-sm">
              [events]
            </Link>
          </nav>
        </div>
        <div className="construction-tape" />
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative px-3 sm:px-8 pt-10 sm:pt-20 pb-10 sm:pb-16">
        {/* Mobile: stacked layout, Desktop: side by side */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left: Big title block */}
          <div className="flex-1 relative w-full">
            <div className="tilt-ccw inline-block mb-2">
              <span
                className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm px-2 py-1"
                style={{ background: "var(--konbini-yellow)" }}
              >
                ☆ WELCOME TO ☆
              </span>
            </div>
            <h1
              className="uppercase tracking-tight color-flash font-[family-name:var(--font-anton)] leading-[0.85]"
              style={{ fontSize: "clamp(3rem, 16vw, 14rem)" }}
            >
              FOREVER
              <br />
              22
            </h1>
            <div className="mt-3 sm:mt-4 border-dashed-konbini p-3 sm:p-4 max-w-md" style={{ transform: "rotate(1deg)" }}>
              <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed">
                We build <span style={{ background: "var(--konbini-yellow)", padding: "0 4px" }}>AI products</span> that turn expertise into always-on intelligence,
                and host events that bring builders together.
              </p>
            </div>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3 items-center">
              <Link
                href="/connect"
                className="font-[family-name:var(--font-pixel)] text-sm sm:text-lg px-3 sm:px-4 py-2 border-2 border-black hover:bg-[var(--konbini-red)] hover:text-white hover:border-[var(--konbini-red)] transition-colors"
              >
                → WORK WITH US
              </Link>
              <span className="font-[family-name:var(--font-pixel)] text-xs opacity-60 blink">
                ● ACCEPTING CLIENTS
              </span>
            </div>
          </div>

          {/* Right: Sticker collage — hidden on small mobile, compact on tablet */}
          <div className="relative w-full sm:w-[320px] lg:w-[380px] h-[220px] sm:h-[300px] lg:h-[380px] hidden sm:block">
            {/* Logo stamp — floating */}
            <div className="absolute top-0 right-0 float">
              <Image
                src="/forever22artlogo.png"
                alt="Created with Institutional Intelligence"
                width={100}
                height={100}
                className="stamp lg:w-[140px] lg:h-[140px]"
              />
            </div>
            {/* Fake browser window */}
            <div
              className="absolute top-12 lg:top-16 left-0 border-2 border-black bg-white tilt-cw w-[220px] lg:w-[260px]"
            >
              <div className="flex items-center gap-1 px-2 py-1 border-b-2 border-black bg-gray-200 text-xs font-[family-name:var(--font-mono)]">
                <span className="w-2 h-2 rounded-full bg-[var(--konbini-red)] inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--konbini-yellow)] inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--konbini-green)] inline-block" />
                <span className="ml-2 truncate">forever22.com</span>
              </div>
              <div className="p-2 lg:p-3 font-[family-name:var(--font-pixel)] text-xs lg:text-sm">
                <p>&gt; building the future</p>
                <p>&gt; one product at a time</p>
                <p className="mt-2 text-xs opacity-60">AI studio // chicago → nyc</p>
                <p className="text-xs opacity-60">products · events · community</p>
              </div>
            </div>
            {/* Decorative sticker */}
            <div
              className="absolute bottom-4 lg:bottom-6 right-2 lg:right-4 tilt-ccw-more px-2 lg:px-3 py-1 lg:py-2 font-[family-name:var(--font-pixel)] text-xs lg:text-sm border-2"
              style={{ background: "var(--konbini-green)", color: "white", borderColor: "var(--konbini-black)" }}
            >
              AI IS A<br />FOREVER THING
            </div>
          </div>

          {/* Mobile-only: inline stickers row */}
          <div className="flex sm:hidden items-center gap-3 w-full">
            <Image
              src="/forever22artlogo.png"
              alt="Created with Institutional Intelligence"
              width={60}
              height={60}
              className="stamp"
            />
            <div
              className="px-2 py-1 font-[family-name:var(--font-pixel)] text-xs border-2"
              style={{ background: "var(--konbini-green)", color: "white", borderColor: "var(--konbini-black)" }}
            >
              AI IS A FOREVER THING
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="border-y-2 border-black overflow-hidden py-2.5 sm:py-4" style={{ background: "var(--konbini-yellow)" }}>
        <div className="marquee-track whitespace-nowrap flex items-center" style={{ width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-anton)] text-base sm:text-2xl uppercase mx-3 sm:mx-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ PRODUCTS ═══ */}
      <section className="px-3 sm:px-8 py-16 sm:py-28">
        <div className="flex items-baseline gap-2 sm:gap-3 mb-8 sm:mb-12">
          <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-5xl uppercase">
            PRODUCTS
          </h2>
          <span className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm opacity-50">
            // what we&apos;ve built
          </span>
        </div>

        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.name} className="border-2 border-black bg-white">
              {/* Product header bar */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-black"
                style={{ background: "var(--konbini-yellow)" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span
                    className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 uppercase border border-black"
                    style={{ background: product.tagColor, color: "white" }}
                  >
                    {product.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-2xl uppercase">
                    {product.name}
                  </h3>
                </div>
                <div className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs mt-1 sm:mt-0">
                  <span style={{ color: "var(--konbini-green)" }}>●</span> {product.status}
                </div>
              </div>

              {/* Product info */}
              <div className="p-4 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-10">
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:w-64">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs px-2 py-1 border-2 border-black"
                      style={{ background: "var(--konbini-cream)" }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="border-t-2 border-dashed border-black px-4 sm:px-8 py-5 sm:py-6 bg-black text-white">
                <p className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs mb-3 sm:mb-4" style={{ color: "var(--konbini-green)" }}>
                  &gt; HOW IT WORKS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 font-[family-name:var(--font-mono)] text-[10px] sm:text-xs">
                  <div>
                    <span style={{ color: "var(--konbini-yellow)" }}>01.</span> Clone your knowledge — feed it docs, notes, expertise
                  </div>
                  <div>
                    <span style={{ color: "var(--konbini-yellow)" }}>02.</span> Deploy to Slack, Telegram, or wherever your team lives
                  </div>
                  <div>
                    <span style={{ color: "var(--konbini-yellow)" }}>03.</span> It answers for you — and pings you when it&apos;s unsure
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ EVENTS ═══ */}
      <section className="px-3 sm:px-8 py-16 sm:py-28 border-t-2 border-dashed border-black">
        <div className="flex items-baseline gap-2 sm:gap-3 mb-8 sm:mb-12">
          <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-5xl uppercase">
            EVENTS
          </h2>
          <span className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm opacity-50">
            // hackathons & talks
          </span>
        </div>

        <div className="space-y-12 sm:space-y-20">
          {events.map((event) => (
            <div key={event.id} className="border-2 border-black bg-white">
              {/* Event header bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-black" style={{ background: event.featured ? "var(--konbini-yellow)" : "var(--konbini-cream)" }}>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span
                    className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 uppercase border border-black"
                    style={{ background: event.tagColor, color: event.tagColor === "var(--konbini-yellow)" ? "var(--konbini-black)" : "white" }}
                  >
                    {event.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-anton)] text-lg sm:text-2xl uppercase">
                    {event.title}
                  </h3>
                </div>
                <div className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs mt-1 sm:mt-0 opacity-70">
                  {event.date} · {event.location}
                </div>
              </div>

              {/* Photo collage — stack on mobile, 3-col on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-b-2 border-black">
                {event.photos.map((photo, i) => (
                  <div key={i} className={`relative h-48 sm:h-72 lg:h-80 overflow-hidden ${i < 2 ? "sm:border-r-2 border-b-2 sm:border-b-0 border-black" : ""}`}>
                    <Image
                      src={photo}
                      alt={`${event.title} photo ${i + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              {/* Event info */}
              <div className="p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
                <p className="font-[family-name:var(--font-mono)] text-xs sm:text-sm leading-relaxed max-w-lg">
                  {event.description}
                </p>
                <div className="flex gap-4 sm:gap-6 items-start">
                  {Object.entries(event.stats).map(([label, value]) => (
                    <div key={label} className="text-center">
                      <div className="font-[family-name:var(--font-anton)] text-xl sm:text-3xl" style={{ color: event.tagColor }}>
                        {value}
                      </div>
                      <div className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs uppercase opacity-60">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View event link */}
              {event.link && (
                <div className="border-t-2 border-dashed border-black px-3 sm:px-4 py-2">
                  <Link
                    href={event.link}
                    className="retro-link font-[family-name:var(--font-pixel)] text-xs sm:text-sm"
                  >
                    → VIEW ALL PROJECTS
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PROJECT SCREENSHOTS ═══ */}
      <section className="px-3 sm:px-8 pb-16 sm:pb-24 pt-8 sm:pt-16 border-t-2 border-dashed border-black">
        <div className="flex items-baseline gap-2 sm:gap-3 mb-6 sm:mb-8">
          <h2 className="font-[family-name:var(--font-anton)] text-xl sm:text-3xl uppercase">
            FROM THE HACKATHON
          </h2>
          <span className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm opacity-50">
            // what people built
          </span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {[
            { name: "CareCompass", img: "/hackathon-screenshots/carecompass.png" },
            { name: "Let's Jam", img: "/hackathon-screenshots/lets-jam.png" },
            { name: "ChiQuest", img: "/hackathon-screenshots/chiquest.png" },
            { name: "Hollis", img: "/hackathon-screenshots/hollis.png" },
            { name: "Tenken", img: "/hackathon-screenshots/tenken.png" },
            { name: "OwnIt", img: "/hackathon-screenshots/ownit.png" },
          ].map((project, i) => {
            const rotations = ["tilt-cw", "tilt-ccw", "", "tilt-ccw", "tilt-cw", ""];
            return (
              <div
                key={project.name}
                className={`project-card border-2 border-black bg-white ${rotations[i]} overflow-hidden`}
              >
                <div className="relative w-full h-20 sm:h-28 overflow-hidden border-b-2 border-black">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-1.5 sm:px-2 py-1">
                  <span className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs">
                    {project.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 text-center">
          <Link
            href="/events/google-deepmind-hackathon"
            className="retro-link font-[family-name:var(--font-pixel)] text-xs sm:text-sm"
          >
            → see all 30+ projects
          </Link>
        </div>
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section className="border-t-2 border-dashed border-black mx-3 sm:mx-8">
        <div className="py-10 sm:py-20">
          <div className="flex items-baseline gap-2 sm:gap-3 mb-4">
            <h2 className="font-[family-name:var(--font-anton)] text-2xl sm:text-5xl uppercase">
              CLIENTS
            </h2>
            <span className="font-[family-name:var(--font-pixel)] text-xs sm:text-sm opacity-50">
              // who we&apos;ve worked with
            </span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {clients.map((client) => (
              <div
                key={client}
                className="border-2 border-black px-3 sm:px-4 py-1.5 sm:py-2 font-[family-name:var(--font-mono)] text-xs sm:text-sm hover:bg-[var(--konbini-yellow)] transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT + STATUS ═══ */}
      <section className="border-t-2 border-dashed border-black mx-3 sm:mx-8">
        <div className="py-10 sm:py-20 flex flex-col md:flex-row gap-6 sm:gap-12">
          {/* About box */}
          <div className="border-dashed-konbini p-3 sm:p-6 flex-1 bg-white" style={{ transform: "rotate(-1deg)" }}>
            <h3 className="font-[family-name:var(--font-pixel)] text-base sm:text-lg mb-2 sm:mb-3" style={{ color: "var(--konbini-red)" }}>
              ★ ABOUT ★
            </h3>
            <div className="font-[family-name:var(--font-mono)] text-[11px] sm:text-xs leading-relaxed space-y-2">
              <p>
                FOREVER22 is an AI studio that builds products and hosts events for the builder community.
              </p>
              <p>
                Our products turn personal expertise into always-on AI systems. Our events — hackathons, fireside chats, and more — bring builders together to ship.
              </p>
              <p>
                Based in Chicago. NYC June 2026.
              </p>
            </div>
          </div>

          {/* Status box */}
          <div className="border-2 border-black p-3 sm:p-6 bg-black text-white w-full md:w-72 font-[family-name:var(--font-pixel)]">
            <h3 className="text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: "var(--konbini-green)" }}>
              &gt; SYSTEM STATUS
            </h3>
            <div className="text-xs sm:text-sm space-y-1">
              <p><span style={{ color: "var(--konbini-green)" }}>●</span> bestmate: online</p>
              <p><span style={{ color: "var(--konbini-green)" }}>●</span> askkaya: online</p>
              <p><span style={{ color: "var(--konbini-yellow)" }}>●</span> reachy: standby</p>
              <p><span style={{ color: "var(--konbini-green)" }}>●</span> youdle: online</p>
            </div>
            <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-700 text-[10px] sm:text-xs opacity-60">
              <p>next event: TBD</p>
              <p>events hosted: 2</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t-2 border-black">
        <div className="construction-tape" />
        <div className="px-3 sm:px-8 py-6 sm:py-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs">
            © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://x.com/forever22studio"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-link font-[family-name:var(--font-mono)] text-[10px] sm:text-xs"
            >
              @forever22studio
            </a>
            <a
              href="mailto:kaya@forever22studios.com"
              className="retro-link font-[family-name:var(--font-mono)] text-[10px] sm:text-xs"
            >
              email
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs opacity-50">visitors:</span>
            <span className="visitor-counter text-[10px] sm:text-xs">004,219</span>
          </div>
        </div>
        <div className="text-center pb-3 sm:pb-4">
          <span className="font-[family-name:var(--font-pixel)] text-[10px] sm:text-xs opacity-30">
            best viewed on netscape navigator 4.0 ● 800x600 resolution
          </span>
        </div>
      </footer>
    </div>
  );
}
