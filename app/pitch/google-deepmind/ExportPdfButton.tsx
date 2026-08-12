"use client";

export default function ExportPdfButton() {
  return (
    <button
      type="button"
      data-print
      onClick={() => window.print()}
      className="cursor-pointer font-[family-name:var(--font-pixel)] text-sm px-3.5 py-1.5 bg-white text-black border-2 border-black hover:bg-[var(--konbini-yellow)] transition-colors"
    >
      ↓ export pdf
    </button>
  );
}
