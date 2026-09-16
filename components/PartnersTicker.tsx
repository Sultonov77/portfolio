"use client";

import { partnersLogos } from "@/lib/content";

export default function PartnersTicker() {
  return (
    <div className="border-y border-line/60 bg-ink-2/30 py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs sm:text-sm font-bold text-muted tracking-widest uppercase mb-7">
          Ishlatilayotgan ilg'or texnologiyalar va platformalar
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
          {partnersLogos.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-2 text-base sm:text-lg font-extrabold tracking-wider text-muted hover:text-accent hover:opacity-100 transition-all cursor-default"
            >
              <span className="text-accent font-mono">✦</span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
