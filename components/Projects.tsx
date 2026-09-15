"use client";

import { projects, t, type Lang } from "@/lib/content";
import { ExternalIcon, GithubIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects({ lang }: { lang: Lang }) {
  const c = t[lang].projects;

  return (
    <Section id="projects" title={c.title} sub={c.sub}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={`${project.name}-${i}`} delay={i * 80} className={project.featured ? "md:col-span-2" : ""}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2/50 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 sm:p-7">
              <div
                className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(40rem 12rem at 20% 100%, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)",
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.name}</h3>
                <span className="shrink-0 rounded-lg border border-line/70 px-2 py-1 text-xs text-muted">
                  {project.year}
                </span>
              </div>

              <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {project.description[lang]}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex flex-wrap items-center gap-4 pt-1">
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    {c.visit}
                    <ExternalIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
                  >
                    <GithubIcon className="h-4 w-4" />
                    {c.code}
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
