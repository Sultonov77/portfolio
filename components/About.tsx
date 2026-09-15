"use client";

import { t, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About({ lang }: { lang: Lang }) {
  const c = t[lang].about;

  return (
    <Section id="about" title={c.title}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {c.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {c.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-2xl border border-line bg-ink-2/50 p-5 transition-colors hover:border-accent/40">
                <div className="grad-text text-3xl font-bold tracking-tight">{stat.value}</div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
