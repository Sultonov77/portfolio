"use client";

import { profile, heroStats, t, pick, type Lang } from "@/lib/content";
import { ArrowIcon, StarIcon, socialIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Hero({ lang }: { lang: Lang }) {
  const c = t[lang].hero;

  return (
    <section id="top" className="relative min-h-[94vh] flex items-center px-6 pt-40 sm:pt-44 pb-24 sm:px-8 overflow-hidden">
      {/* Background ambient deep blue glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-blue-600/12 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-6 z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                <span>{c.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-6">
                <p className="text-sm sm:text-base font-bold tracking-widest text-blue-400 uppercase">
                  {c.intro}
                </p>
                <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.06]">
                  {profile.surname} <br />
                  <span className="text-blue-500">
                    {profile.name}
                  </span>
                </h1>
                <p className="mt-3 text-lg sm:text-2xl font-bold text-slate-200">
                  {profile.role[lang]}
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
                {profile.headline[lang]}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={270}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] cursor-pointer"
                >
                  <span>{c.ctaPrimary}</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-fg transition-all hover:border-blue-500/50 hover:text-blue-400 cursor-pointer"
                >
                  <span>{c.ctaSecondary}</span>
                  <span className="text-muted text-base">↓</span>
                </a>
              </div>
            </Reveal>

            {/* Socials & Location */}
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-4 pt-5 border-t border-line/60">
                <div className="flex items-center gap-2">
                  {profile.socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noreferrer noopener"
                        aria-label={social.label}
                        title={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink-2 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:text-blue-400"
                      >
                        {Icon ? <Icon className="h-4 w-4" /> : social.label[0]}
                      </a>
                    );
                  })}
                </div>
                <div className="hidden sm:block h-4 w-px bg-line" />
                <span className="text-sm font-medium text-slate-400">
                  📍 {pick(profile.location, lang)}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Center Column: Portrait with Blue Crescent Halo */}
          <div className="lg:col-span-4 flex justify-center z-10">
            <Reveal delay={150}>
              <div className="relative flex items-center justify-center">
                {/* Electric Blue Crescent Halo */}
                <div className="absolute h-72 w-72 sm:h-88 sm:w-88 rounded-full bg-blue-600 shadow-[0_0_100px_rgba(59,130,246,0.45)] transition-transform duration-700 hover:rotate-12" />
                
                {/* Inner dark circle cutout */}
                <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-ink bg-ink-3 shadow-2xl">
                  {/* Stylized Modern Avatar Graphic */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#090d16] to-[#05070c]">
                    <div className="relative mt-6 flex flex-col items-center">
                      <svg viewBox="0 0 160 160" className="h-52 w-52 text-slate-700/50">
                        <path
                          d="M80 95 C55 95 30 115 25 155 L135 155 C130 115 105 95 80 95 Z"
                          fill="#131b2e"
                        />
                        <path d="M72 80 L88 80 L88 100 L72 100 Z" fill="#e2b887" />
                        <ellipse cx="80" cy="60" rx="24" ry="28" fill="#e2b887" />
                        <path
                          d="M56 55 C56 35 68 25 80 25 C92 25 104 35 104 55 C96 46 88 44 80 44 C72 44 64 46 56 55 Z"
                          fill="#0f172a"
                        />
                        <rect x="64" y="55" width="12" height="9" rx="2" stroke="#3b82f6" strokeWidth="2" fill="none" />
                        <rect x="84" y="55" width="12" height="9" rx="2" stroke="#3b82f6" strokeWidth="2" fill="none" />
                        <line x1="76" y1="59" x2="84" y2="59" stroke="#3b82f6" strokeWidth="2" />
                      </svg>
                      <div className="absolute -bottom-1 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 border border-blue-500/40 shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-white">Sultonov SS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Satisfaction badge */}
                <div className="absolute -bottom-4 -left-6 sm:-left-8 rounded-2xl border border-line bg-ink-2/95 px-4 py-3 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-1.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[10px] font-black text-white">★</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-black text-white">✓</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">100% Quality</div>
                      <div className="text-[10px] text-slate-400">Guaranteed Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Stats Cards */}
          <div className="lg:col-span-2 flex flex-col gap-3.5 z-10">
            {heroStats.map((stat, i) => (
              <Reveal key={stat.value} delay={120 + i * 80}>
                <div className="group rounded-2xl border border-line bg-ink-2/80 p-4 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:bg-ink-2">
                  <div className="text-2xl sm:text-3xl font-black text-blue-400 group-hover:text-blue-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                    {stat.label[lang]}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Overall Rating card */}
            <Reveal delay={480}>
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4">
                <div className="flex items-center gap-1 text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-blue-400" />
                  ))}
                </div>
                <div className="mt-1.5 text-xs font-bold text-white">
                  5.0 Star Rating
                </div>
                <div className="text-[11px] text-slate-400">
                  Client Satisfaction
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
