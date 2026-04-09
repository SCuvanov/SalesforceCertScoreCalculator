import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative border-b border-white/40 bg-white/55 shadow-sm shadow-slate-900/[0.04] backdrop-blur-xl print:border-slate-300 print:bg-white print:shadow-none">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:gap-10">
        <div className="relative shrink-0">
          <div
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-teal-400/20 via-indigo-400/15 to-cyan-400/20 blur-xl"
            aria-hidden
          />
          <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-white/60 bg-white/80 shadow-lg shadow-teal-900/10 ring-1 ring-slate-200/50 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:hover:scale-[1.04] motion-safe:hover:shadow-xl motion-safe:hover:shadow-teal-900/15 motion-reduce:hover:scale-100">
            <Image
              src="/img/icons8-calculator-pastel-glyph-96.png"
              alt="Calculator"
              width={96}
              height={96}
              className="h-14 w-14 object-contain"
              priority
            />
          </div>
        </div>
        <div className="min-w-0 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0891b2]">
            Score estimator
          </p>
          <h1 className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Salesforce Certification Calculator
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Did you ever want to figure out how close you were to passing your
            Salesforce Certification exam?
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            This tool makes it easy to calculate your total score by removing the
            need to do all the math yourself.
          </p>
        </div>
      </div>
    </header>
  );
}
