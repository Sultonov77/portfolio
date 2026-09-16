"use client";

import { problemSolvers, type Lang } from "@/lib/content";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ProblemSolvers({ lang }: { lang: Lang }) {
  const p = problemSolvers;

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-3xl border border-line bg-gradient-to-br from-ink-2/90 via-ink-2/50 to-ink-3/90 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle ambient blue glow inside card */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-88 w-88 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
                  {p.tag[lang]}
                </span>
              </Reveal>

              <Reveal delay={90}>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                  {p.title[lang]}
                </h2>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                  {p.desc[lang]}
                </p>
              </Reveal>

              {/* Checklist with Electric Blue Checkmarks */}
              <Reveal delay={270}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {p.checkmarks.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-black shadow-[0_0_12px_rgba(59,130,246,0.35)]">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200">
                        {item[lang]}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={360}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-blue-500 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{lang === "uz" ? "Loyihalarni ko'rish" : "View Projects"}</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink-3 px-6 py-3 text-sm font-semibold text-fg transition-all hover:border-blue-500/50 hover:text-blue-400 cursor-pointer"
                  >
                    <span>{lang === "uz" ? "Bog'lanish" : "Get in Touch"}</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Card with Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <Reveal delay={200}>
                <div className="relative w-full max-w-md rounded-2xl border border-line bg-ink-3/90 p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">system-status: verified</span>
                  </div>

                  {/* Visual metrics */}
                  <div className="mt-5 space-y-3.5">
                    <div className="rounded-xl border border-line bg-ink-2/90 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">Sprint Delivery Rate</span>
                        <span className="text-xs font-bold text-blue-400">99.4%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[99%] rounded-full bg-blue-500" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-line bg-ink-2/90 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">Code Architecture</span>
                        <span className="text-xs font-bold text-sky-400">A+ Grade</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[95%] rounded-full bg-sky-400" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-line bg-ink-2/90 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">Performance Score</span>
                        <span className="text-xs font-bold text-emerald-400">98 / 100</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[98%] rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Metric footer */}
                  <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white shadow-md">
                        {p.metric.badge}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{p.metric.title[lang]}</div>
                        <div className="text-[11px] text-slate-400">{p.metric.desc[lang]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
