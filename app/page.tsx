import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="px-4 sm:px-8 pt-8 sm:pt-16 text-center">
        <h1
          className="uppercase tracking-tight color-flash font-[family-name:var(--font-anton)]"
          style={{
            fontSize: "clamp(2.5rem, 15vw, 12rem)",
            lineHeight: 0.9,
          }}
        >
          FOREVER22
        </h1>
        <nav className="flex justify-center gap-4 sm:gap-8 mt-4">
          <Link
            href="/connect"
            className="text-black font-[family-name:var(--font-mono)] text-base sm:text-xl tracking-wide hover:text-purple-600 transition-colors"
          >
            Connect
          </Link>
          <Link
            href="/companies"
            className="text-black font-[family-name:var(--font-mono)] text-base sm:text-xl tracking-wide hover:text-purple-600 transition-colors"
          >
            Companies
          </Link>
          <Link
            href="/events"
            className="text-black font-[family-name:var(--font-mono)] text-base sm:text-xl tracking-wide hover:text-purple-600 transition-colors"
          >
            Events
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-2xl text-center">
          <p className="text-black font-light font-[family-name:var(--font-mono)] text-sm sm:text-base tracking-wide leading-relaxed mb-8">
            We build institutional intelligence systems — AI that turns your team&apos;s knowledge into systems that remember, learn, and scale with you.
          </p>
          <p className="text-black font-light font-[family-name:var(--font-mono)] text-sm sm:text-base tracking-wide leading-relaxed">
            Founded by Kaya Jones
          </p>
          <div className="mt-10 sm:mt-16 flex justify-center">
            <Image
              src="/forever22artlogo.png"
              alt="Created with Institutional Intelligence"
              width={160}
              height={160}
              className="sm:w-[200px] sm:h-[200px]"
            />
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-8">
        <p className="text-black text-sm font-light font-[family-name:var(--font-mono)] text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
