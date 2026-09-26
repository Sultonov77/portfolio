"use client";

import { profile, heroStats, t, type Lang } from "@/lib/content";
import { ArrowIcon, DownloadIcon, MapPinIcon, socialIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Hero({ lang }: { lang: Lang }) {
  const c = t[lang].hero;

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Photo — first on mobile, right on desktop */}
        <Reveal className="order-first mx-auto w-full max-w-[250px] sm:max-w-[320px] lg:order-last lg:max-w-[400px]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-600/40 via-blue-500/10 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-ink-3">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.photo}
                  alt={profile.fullName}
                  className="h-full w-full object-cover object-[50%_25%]"
                  fetchPriority="high"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-7xl font-bold text-blue-500/80">SS</div>
              )}
            </div>

            <a
              href={`https://${profile.website}`}
              target="_blank"
              rel="noreferrer noopener"
              className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-ink-2/95 px-4 py-3 shadow-2xl backdrop-blur-md transition-colors hover:border-blue-500/60 lg:left-auto lg:-left-6 lg:translate-x-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/avtoai.webp" alt="" className="h-10 w-10 rounded-xl bg-white object-contain" />
              <span className="text-left">
                <span className="block text-sm font-semibold text-white">
                  {lang === "uz" ? "AvtoAI asoschisi" : "Founder of AvtoAI"}
                </span>
                <span className="block text-xs text-slate-400">{profile.website}</span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Text */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-300 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              {c.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-sm font-medium text-slate-400 sm:text-base">{c.intro}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name} <span className="text-blue-500">{profile.surname}</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">{profile.role[lang]}</p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
              {profile.headline[lang]}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {c.ctaPrimary}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-ink-2 px-6 text-base font-semibold text-white transition-colors hover:border-blue-500/60"
              >
                {c.ctaProjects}
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-ink-2 px-6 text-base font-semibold text-white transition-colors hover:border-blue-500/60"
                >
                  <DownloadIcon />
                  {c.ctaSecondary}
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink-2 text-slate-300 transition-colors hover:border-blue-500/60 hover:text-blue-400"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
              <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-slate-400">
                <MapPinIcon className="h-4 w-4" />
                {profile.location[lang]}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label.en} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 px-4 py-6 text-center sm:py-7">
              <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
                {stat.label[lang]}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
