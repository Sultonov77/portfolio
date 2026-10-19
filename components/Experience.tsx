"use client";

import { experience, t, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience({ lang }: { lang: Lang }) {
  const c = t[lang].experience;

  return (
    <Section id="experience" tag={c.tag} title={c.title} sub={c.sub}>
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((item, idx) => {
          const current = item.period.en === "Present";
          return (
            <Reveal as="li" key={item.org} delay={idx * 80} className="relative">
              <span
                className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 sm:-left-[47px] ${
                  current ? "border-glow bg-gradient-to-br from-brand-500 to-glow shadow-[0_0_14px_rgba(16,185,129,0.6)]" : "border-zinc-500 bg-ink"
                }`}
              />
              <div className="glass rounded-2xl border border-line p-5 transition-colors hover:border-brand-500/40 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.org}</h3>
                    <div className="mt-1 text-sm font-medium text-brand-400">{item.role[lang]}</div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      current ? "bg-brand-500/15 text-brand-300" : "bg-ink-3 text-zinc-400"
                    }`}
                  >
                    {item.period[lang]}
                  </span>
                </div>

                {item.description[lang] && (
                  <p className="mt-3 text-base text-zinc-300">{item.description[lang]}</p>
                )}

                <ul className="mt-3 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b.en} className="flex gap-3 text-base leading-relaxed text-zinc-400">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>{b[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
