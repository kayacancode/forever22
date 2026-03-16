import Link from "next/link";

export default function Events() {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1
        className="uppercase tracking-tight text-gray-400 font-[family-name:var(--font-anton)]"
        style={{
          fontSize: "clamp(2.5rem, 15vw, 12rem)",
          lineHeight: 0.9,
        }}
      >
        EVENTS
      </h1>
      <nav className="flex gap-4 sm:gap-6 mt-4">
        <Link
          href="/"
          className="text-gray-400 font-[family-name:var(--font-mono)] text-base sm:text-lg tracking-wide hover:text-black transition-colors"
        >
          Home
        </Link>
        <Link
          href="/connect"
          className="text-gray-400 font-[family-name:var(--font-mono)] text-base sm:text-lg tracking-wide hover:text-black transition-colors"
        >
          Connect
        </Link>
      </nav>

      <div className="mt-10 sm:mt-16">
        <Link
          href="/events/google-deepmind-hackathon"
          className="text-black font-[family-name:var(--font-mono)] text-lg sm:text-2xl tracking-wide hover:text-gray-500 transition-colors"
        >
          Google DeepMind Hackathon
        </Link>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-6 px-4 sm:px-8">
        <p className="text-black text-sm font-light font-[family-name:var(--font-mono)] text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
