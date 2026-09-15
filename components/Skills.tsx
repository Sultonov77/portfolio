"use client";

import { skillGroups, t, pick, type Lang } from "@/lib/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills({ lang }: { lang: Lang }) {
  const c = t[lang].skills;

  return (
    <Section id="skills" title={c.title} sub={c.sub}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title.en} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-ink-2/50 p-5 transition-colors hover:border-accent/40">
              <h3 className="text-sm font-semibold tracking-wide text-fg uppercase">{group.title[lang]}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const label = pick(item, lang);
                  return (
                    <li
                      key={label}
                      className="rounded-lg border border-line/70 bg-white/[0.03] px-2.5 py-1.5 text-xs text-muted"
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
