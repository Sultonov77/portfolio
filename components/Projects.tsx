"use client";

import { projects, t, type Lang } from "@/lib/content";
import { ExternalIcon } from "./Icons";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import Section from "./Section";

export default function Projects({ lang }: { lang: Lang }) {
  const c = t[lang].projects;
  const single = projects.length === 1;

  return (
    <Section id="projects" tag={c.tag} title={c.title} sub={c.sub}>
      <div className={`grid gap-6 ${projects.length > 1 ? "md:grid-cols-2" : ""}`}>
        {projects.map((project, idx) => {
          const domain = project.site.replace(/^https?:\/\//, "");
          return (
            <Reveal key={project.name} delay={idx * 80}>
              <Tilt className="h-full">
                <article className={`group flex h-full flex-col overflow-hidden ${single ? "md:flex-row" : ""} glass rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50`}>
                  {/* Preview */}
                  <div className={`relative flex h-44 shrink-0 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-brand-600/25 via-ink-3 to-glow/10 sm:h-52 ${single ? "md:h-auto md:w-2/5 md:border-b-0 md:border-r" : ""}`}>
                    <div className="absolute h-40 w-40 rounded-full bg-brand-600/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                    {project.logo ? (
                      <span className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.logo} alt={`${project.name} logo`} className="h-full w-full object-contain" loading="lazy" />
                      </span>
                    ) : (
                      <span className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.name}</span>
                    )}
                  </div>

                  <div className={`flex flex-1 flex-col p-6 ${single ? "md:p-10" : ""}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand-300">
                        {project.subtitle[lang]}
                      </span>
                      {project.year && <span className="text-sm text-zinc-400">{project.year}</span>}
                    </div>

                    <h3 className={`mt-2 font-semibold text-white ${single ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.name}</h3>
                    <p className="mt-2 text-base leading-relaxed text-zinc-300">{project.description[lang]}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line bg-ink-3 px-3 py-1 font-mono text-[11px] font-medium text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {project.site && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex h-11 items-center gap-2 rounded-xl btn-grad px-5 text-sm font-semibold text-white transition-colors"
                        >
                          {domain}
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
