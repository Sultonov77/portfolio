"use client";

import { experience, pick, type Lang } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 sm:px-8 relative overflow-hidden bg-ink-2/30">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {lang === "uz" ? "Kasbiy yo'l" : "Career Journey"}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {lang === "uz" ? "Ish Tajribasi" : "Work Experience"}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-3 max-w-xl text-base text-slate-400">
              {lang === "uz"
                ? "Startaplar, mahsulotlar va xalqaro mijozlar bilan ishlash yo'lim"
                : "My professional background building products and delivering scalable solutions"}
            </p>
          </Reveal>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l-2 border-line/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-blue-500 bg-[#050608] group-hover:scale-125 group-hover:bg-blue-500 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-line bg-ink-2/80 p-6 transition-all hover:border-blue-500/50 hover:bg-ink-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-block rounded-lg bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-400">
                      {item.period[lang]}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {pick(item.org, lang)}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.role[lang]}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                    {item.description[lang]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
