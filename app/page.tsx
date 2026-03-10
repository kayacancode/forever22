import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <p className="text-black font-light font-[family-name:var(--font-mono)] text-base tracking-wide text-center pt-8">
        AI is a forever thing.
      </p>

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="w-fit text-center">
          <h1
            className="uppercase tracking-tight color-flash font-[family-name:var(--font-anton)]"
            style={{
              fontSize: "clamp(4rem, 20vw, 20rem)",
              lineHeight: 1,
            }}
          >
            FOREVER22
          </h1>

          <div className="mt-48 text-center">
            <p className="text-black font-light font-[family-name:var(--font-mono)] text-base tracking-wide leading-relaxed mb-6">
              We are in pursuit of building institutional intelligence systems that understand the real world.
            </p>
            <p className="text-black font-light font-[family-name:var(--font-mono)] text-base tracking-wide leading-relaxed mb-6">
              AI consulting that turns your team&apos;s knowledge into institutional intelligence — systems that remember, learn, and scale with you.
            </p>
            <p className="text-black font-light font-[family-name:var(--font-mono)] text-base tracking-wide leading-relaxed">
              Founded by Kaya Jones
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-16">
            <Link
              href="/connect"
              className="text-black font-light font-[family-name:var(--font-mono)] text-lg tracking-wide hover:text-purple-600 transition-colors"
            >
              Connect
            </Link>
            <Link
              href="/companies"
              className="text-black font-light font-[family-name:var(--font-mono)] text-lg tracking-wide hover:text-purple-600 transition-colors"
            >
              Companies
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 px-8">
        <p className="text-black text-sm font-light font-[family-name:var(--font-mono)] text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
