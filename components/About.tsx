"use client";

import { about, t, type Lang } from "@/lib/content";
import { GraduationIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ lang }: { lang: Lang }) {
  const c = t[lang].about;

  return (
    <Section id="about" tag={about.tag[lang]} title={about.title[lang]}>
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Bio + education */}
        <div className="space-y-6 lg:col-span-3">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">{about.bio[lang]}</p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">{c.education}</h3>
            <div className="space-y-3">
              {about.education.map((edu) => (
                <div key={edu.school.en} className="flex gap-4 rounded-2xl border border-line bg-ink-2 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <div className="text-base font-semibold text-white sm:text-lg">{edu.school[lang]}</div>
                      {edu.period && <span className="text-sm text-slate-400">{edu.period}</span>}
                    </div>
                    {edu.field[lang] && <div className="mt-1 text-sm text-slate-200">{edu.field[lang]}</div>}
                    <div className="mt-1 text-sm text-slate-400">{edu.detail[lang]}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Languages + certificates */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{c.languages}</h3>
              <ul className="mt-5 space-y-4">
                {about.languages.map((l) => (
                  <li key={l.name.en} className="flex items-center justify-between gap-4">
                    <span className="text-base text-slate-200">
                      {l.name[lang]}
                      <span className="ml-2 text-sm text-slate-500">{l.level[lang]}</span>
                    </span>
                    <span className="flex gap-1.5" aria-label={`${l.dots}/5`}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className={`h-2 w-5 rounded-full ${i <= l.dots ? "bg-blue-500" : "bg-slate-700"}`}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{c.certificates}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {about.certificates.map((cert) => (
                  <span
                    key={cert.name}
                    className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 text-sm font-semibold text-white"
                  >
                    {cert.name}
                    {cert.score && <span className="ml-2 text-blue-300">{cert.score}</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
