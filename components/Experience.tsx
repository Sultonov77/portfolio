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
                  current ? "border-blue-500 bg-blue-500" : "border-slate-500 bg-ink"
                }`}
              />
              <div className="rounded-2xl border border-line bg-ink-2 p-5 transition-colors hover:border-blue-500/40 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.org}</h3>
                    <div className="mt-1 text-sm font-medium text-blue-400">{item.role[lang]}</div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      current ? "bg-blue-500/15 text-blue-300" : "bg-ink-3 text-slate-400"
                    }`}
                  >
                    {item.period[lang]}
                  </span>
                </div>

                {item.description[lang] && (
                  <p className="mt-3 text-base text-slate-300">{item.description[lang]}</p>
                )}

                <ul className="mt-3 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b.en} className="flex gap-3 text-base leading-relaxed text-slate-400">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
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
