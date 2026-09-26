"use client";

import { projects, t, type Lang } from "@/lib/content";
import { ExternalIcon, GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects({ lang }: { lang: Lang }) {
  const c = t[lang].projects;

  return (
    <Section id="projects" tag={c.tag} title={c.title} sub={c.sub}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => {
          const domain = project.site.replace(/^https?:\/\//, "");
          return (
            <Reveal key={project.name} delay={idx * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
                {/* Preview */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-blue-600/20 via-ink-3 to-ink-2 sm:h-52">
                  <div className="absolute h-40 w-40 rounded-full bg-blue-600/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                  {project.logo ? (
                    <span className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-32">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.logo} alt={`${project.name} logo`} className="h-full w-full object-contain" loading="lazy" />
                    </span>
                  ) : (
                    <span className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.name}</span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {project.subtitle[lang]}
                    </span>
                    {project.year && <span className="text-sm text-slate-400">{project.year}</span>}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">{project.description[lang]}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-ink-3 px-2.5 py-1 text-xs font-medium text-slate-400">
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
                        className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                      >
                        {domain}
                        <ExternalIcon />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-11 items-center gap-2 rounded-xl border border-line px-5 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-500/60"
                      >
                        <GithubIcon className="h-4 w-4" />
                        {c.code}
                      </a>
                    )}
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
