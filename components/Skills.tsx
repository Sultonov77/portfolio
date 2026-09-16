"use client";

import { skillsList, t, type Lang } from "@/lib/content";
import { techIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Skills({ lang }: { lang: Lang }) {
  const c = t[lang].skills;

  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 sm:px-8 relative overflow-hidden bg-ink-2/30">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {c.tag}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {c.title}
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-3 max-w-xl text-base text-slate-400">
                {c.sub}
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-blue-500 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{c.exploreMore}</span>
              <span>↓</span>
            </a>
          </Reveal>
        </div>

        {/* 2x4 Grid of Popular Skill Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {skillsList.map((skill, idx) => {
            const IconComponent = techIcons[skill.icon];
            return (
              <Reveal key={skill.name} delay={idx * 60}>
                <div className="group relative flex flex-col items-center justify-between rounded-2xl border border-line bg-ink-2/90 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/60 hover:bg-ink-3 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                  
                  {/* Top blue level badge */}
                  <div className="self-end rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {skill.level}%
                  </div>

                  {/* Centered Brand Icon */}
                  <div className="my-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-ink-3/90 p-2.5 shadow-inner transition-transform group-hover:scale-110">
                    {IconComponent ? (
                      <IconComponent className="h-8 w-8" />
                    ) : (
                      <span className="text-xl font-bold text-blue-400">⚡</span>
                    )}
                  </div>

                  {/* Skill Name */}
                  <div className="w-full">
                    <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
