"use client";

import { aiCertificates, pick, t, type Lang } from "@/lib/content";
import { CheckIcon, ExternalIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Certificates({ lang }: { lang: Lang }) {
  const c = t[lang].certificates;

  return (
    <Section id="certificates" tag={c.tag} title={c.title} sub={c.sub}>
      <div className="grid gap-6 md:grid-cols-2">
        {aiCertificates.map((cert, idx) => {
          const multi = cert.images.length > 1;
          return (
            <Reveal key={cert.title} delay={idx * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                {/* Preview */}
                <div
                  className={`grid aspect-[4/3] gap-px border-b border-line bg-line ${multi ? "grid-cols-2" : "grid-cols-1"}`}
                >
                  {cert.images.map((src) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${cert.title} — ${c.open}`}
                      className={`relative block overflow-hidden ${multi ? "bg-ink-3" : "bg-[#f4f3ef] p-3 sm:p-4"}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${cert.title} — ${pick(cert.issuer, lang)}`}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                          multi ? "object-cover" : "object-contain"
                        }`}
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {pick(cert.issuer, lang)}
                    </span>
                    <span className="shrink-0 text-sm text-slate-400">{cert.date[lang]}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">{cert.description[lang]}</p>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {cert.verify && (
                      <a
                        href={cert.verify}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                      >
                        <CheckIcon />
                        {c.verify}
                      </a>
                    )}
                    <a
                      href={cert.images[0]}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-11 items-center gap-2 rounded-xl border border-line px-5 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-500/60"
                    >
                      {c.open}
                      <ExternalIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
