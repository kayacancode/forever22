const companies = [
  "Betaworks",
  "Andus Labs",
  "Youdle",
  "Sunday Money Fantasy Sports",
  "Thryve AI",
  "Insuave We Trust",
  "S2G Investments",
  "Blade",
];

export default function Companies() {
  return (
    <div className="min-h-screen bg-white py-16 px-8 sm:px-16 md:px-24">
      <div className="max-w-4xl">
        {companies.map((company, index) => (
          <div
            key={index}
            className="text-black font-light font-[family-name:var(--font-mono)] text-base tracking-wide mb-3"
          >
            {company}
          </div>
        ))}
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-6 px-8">
        <p className="text-black text-sm font-light font-[family-name:var(--font-mono)] text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
