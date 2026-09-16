"use client";

import { useState } from "react";
import { specializations, experience, t, pick, type Lang } from "@/lib/content";
import { AsteriskEmblem } from "./Icons";
import Reveal from "./Reveal";

export default function Specializations({ lang }: { lang: Lang }) {
  const [activeTab, setActiveTab] = useState<string>("01");
  const s = t[lang].services;

  return (
    <section id="services" className="scroll-mt-24 px-5 py-28 sm:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header with Asterisk Emblem */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <AsteriskEmblem className="mb-6 shadow-[0_0_45px_rgba(204,255,0,0.35)]" />
          </Reveal>

          <Reveal delay={80}>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
              {s.tag}
            </span>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {s.title}
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-muted/95">
              {s.sub}
            </p>
          </Reveal>
        </div>

        {/* Numbered Specialization Cards Grid (#01 to #06) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {specializations.map((spec, i) => {
            const isSelected = activeTab === spec.id;
            return (
              <Reveal key={spec.id} delay={i * 80}>
                <div
                  onClick={() => setActiveTab(spec.id)}
                  className={`group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 cursor-pointer h-full ${
                    isSelected
                      ? "border-accent bg-ink-2/95 shadow-[0_0_25px_rgba(204,255,0,0.2)] -translate-y-1.5"
                      : "border-line bg-ink-2/60 hover:border-accent/50 hover:bg-ink-2/90 hover:-translate-y-1"
                  }`}
                >
                  <div>
                    {/* Number Tag & Arrow Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-2xl font-black tracking-wider transition-colors ${
                          isSelected ? "text-accent" : "text-muted group-hover:text-accent"
                        }`}
                      >
                        #{spec.id}
                      </span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all ${
                          isSelected
                            ? "border-accent bg-accent text-ink font-black rotate-45"
                            : "border-line text-muted group-hover:border-accent/60 group-hover:text-accent"
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-fg group-hover:text-accent transition-colors">
                      {spec.title[lang]}
                    </h3>

                    <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted/95">
                      {spec.desc[lang]}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="mt-7 flex flex-wrap gap-2.5 pt-5 border-t border-line/60">
                    {spec.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-line/80 bg-ink-3/80 px-3 py-1 text-xs font-semibold text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Experience Timeline Subsection ("Real Problem Solutions Experience") */}
        <div className="mt-28 rounded-3xl border border-line bg-ink-2/50 p-8 sm:p-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-7">
            <div>
              <span className="text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
                {lang === "uz" ? "Kasbiy yo'l" : "Career Path"}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-fg">
                {lang === "uz" ? "Haqiqiy Yechimlar & Tajriba" : "Real Problem Solutions Experience"}
              </h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-accent hover:underline cursor-pointer"
            >
              <span>{lang === "uz" ? "Hamkorlik qilish" : "Let's work together"}</span>
              <span>→</span>
            </a>
          </div>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-7">
            {experience.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="relative rounded-2xl border border-line/80 bg-ink-3/70 p-6 transition-all hover:border-accent/50">
                  <span className="inline-block rounded-lg bg-accent/15 px-3 py-1.5 text-xs font-bold text-accent">
                    {exp.period[lang]}
                  </span>
                  <h4 className="mt-3.5 text-lg sm:text-xl font-bold text-fg">
                    {exp.role[lang]}
                  </h4>
                  <div className="text-sm font-bold text-muted mt-0.5">
                    {pick(exp.org, lang)}
                  </div>
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted/95">
                    {exp.description[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
