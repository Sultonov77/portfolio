"use client";

import { skillsList, t, type Lang } from "@/lib/content";
import { skillIcons } from "./Icons";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import Section from "./Section";

export default function Skills({ lang }: { lang: Lang }) {
  const c = t[lang].skills;

  return (
    <Section id="skills" tag={c.tag} title={c.title} sub={c.sub}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsList.map((skill, idx) => {
          const Icon = skillIcons[skill.icon];
          return (
            <Reveal key={skill.name.en} delay={idx * 60}>
              <Tilt className="h-full">
                <div className="group h-full glass rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    {Icon && <Icon className="h-6 w-6" />}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{skill.name[lang]}</h3>
                  <p className="mt-2 text-base leading-relaxed text-zinc-400">{skill.desc[lang]}</p>
                </div>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
