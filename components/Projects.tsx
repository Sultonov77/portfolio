"use client";

import { useState } from "react";
import { projects, t, type Lang } from "@/lib/content";
import { ExternalIcon, GithubIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Projects({ lang }: { lang: Lang }) {
  const [filter, setFilter] = useState<string>("all");
  const c = t[lang].projects;

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
              {c.tag}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {c.title}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-3 max-w-2xl text-base text-slate-400">
              {c.sub}
            </p>
          </Reveal>

          {/* Interactive Filter Tabs */}
          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-full border border-line bg-ink-2/80 p-1.5 backdrop-blur-md">
              {[
                { id: "all", label: c.filterAll },
                { id: "web", label: c.filterWeb },
                { id: "mobile", label: c.filterMobile },
                { id: "ai", label: c.filterAi },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    filter === tab.id
                      ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            return (
              <Reveal key={`${project.name}-${idx}`} delay={idx * 100}>
                <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-ink-2/80 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  
                  {/* Mockup Preview Area */}
                  <div className="relative mb-6 flex h-60 sm:h-72 w-full items-center justify-center overflow-hidden rounded-2xl border border-line/70 bg-gradient-to-b from-[#0e1424] to-[#080b12] p-4 transition-transform group-hover:scale-[1.02]">
                    
                    {/* Background blue glow circle */}
                    <div className="absolute h-40 w-40 rounded-full bg-blue-600/15 blur-2xl transition-all group-hover:scale-125" />

                    {/* Device representation */}
                    {project.previewType === "mobile_web" || project.previewType === "mobile" ? (
                      <div className="relative z-10 flex items-center justify-center">
                        {/* Phone Mockup Frame */}
                        <div className="relative h-52 w-28 sm:h-60 sm:w-32 rounded-[28px] border-4 border-slate-800 bg-black p-1.5 shadow-2xl">
                          <div className="mx-auto h-2.5 w-10 rounded-full bg-slate-800 mb-1" />
                          <div className="h-full w-full rounded-[20px] bg-gradient-to-br from-[#06080e] to-[#0c101c] p-2 border border-blue-500/20 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] font-bold text-blue-400">AvtoAI</span>
                              <span className="text-[7px] text-slate-400">98%</span>
                            </div>
                            <div className="space-y-1 my-auto">
                              <div className="h-10 rounded-lg bg-blue-600/15 border border-blue-500/30 p-1 flex items-center justify-center">
                                <span className="text-[8px] font-bold text-blue-300 text-center">AI Imtihon Test</span>
                              </div>
                              <div className="h-2 rounded bg-white/10" />
                              <div className="h-2 w-3/4 rounded bg-white/10" />
                            </div>
                            <div className="h-4 rounded-md bg-blue-600 text-[8px] font-black text-white flex items-center justify-center">
                              Boshlash
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative z-10 flex items-center justify-center w-full">
                        {/* Desktop Mockup Frame */}
                        <div className="relative h-44 sm:h-48 w-full max-w-[340px] rounded-xl border-2 border-slate-800 bg-slate-950 p-2 shadow-2xl">
                          <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5 mb-2">
                            <span className="h-2 w-2 rounded-full bg-red-500/80" />
                            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                            <span className="h-2 w-2 rounded-full bg-green-500/80" />
                            <span className="ml-2 text-[9px] text-slate-400 font-mono truncate">https://app.demo</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="col-span-1 rounded-lg bg-ink-3 p-2 border border-line">
                              <div className="text-[9px] text-slate-400">Revenue</div>
                              <div className="text-xs font-bold text-blue-400">$48.2k</div>
                            </div>
                            <div className="col-span-2 rounded-lg bg-ink-3 p-2 border border-line">
                              <div className="text-[9px] text-slate-400">Active Users</div>
                              <div className="text-xs font-bold text-sky-400">14,290 +24%</div>
                            </div>
                          </div>
                          <div className="mt-2 h-14 rounded-lg bg-gradient-to-r from-blue-600/15 via-sky-500/10 to-transparent border border-blue-500/20 p-2 flex items-end">
                            <div className="h-6 w-full flex items-end gap-1">
                              <div className="h-3 w-1/6 bg-blue-500/60 rounded-t" />
                              <div className="h-5 w-1/6 bg-blue-500/80 rounded-t" />
                              <div className="h-4 w-1/6 bg-blue-400/50 rounded-t" />
                              <div className="h-6 w-1/6 bg-blue-500 rounded-t" />
                              <div className="h-5 w-1/6 bg-blue-400/70 rounded-t" />
                              <div className="h-7 w-1/6 bg-blue-500 rounded-t" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <span className="rounded-md border border-line bg-ink-3 px-2 py-0.5 text-xs text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {project.description[lang]}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-line bg-ink-3 px-2.5 py-1 text-xs font-medium text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mt-6 flex items-center gap-4 pt-4 border-t border-line/60">
                    {project.site && (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 transition-colors hover:text-blue-300 cursor-pointer"
                      >
                        <span>{c.visit}</span>
                        <ExternalIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white cursor-pointer"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>{c.code}</span>
                      </a>
                    )}
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
