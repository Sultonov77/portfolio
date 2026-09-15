"use client";

import { experience, t, pick, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience({ lang }: { lang: Lang }) {
  const c = t[lang].experience;

  return (
    <Section id="experience" title={c.title} sub={c.sub}>
      <ol className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <Reveal key={`${item.period.en}-${i}`} delay={i * 90} as="li" className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[39px]">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-ink" />
            </span>
            <p className="text-xs font-medium tracking-widest text-accent uppercase">{item.period[lang]}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              {item.role[lang]}
              <span className="text-muted"> · {pick(item.org, lang)}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description[lang]}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
