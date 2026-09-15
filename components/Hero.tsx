"use client";

import { profile, t, pick, type Lang } from "@/lib/content";
import { ArrowIcon, socialIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Hero({ lang }: { lang: Lang }) {
  const c = t[lang].hero;

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center px-5 pt-32 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {c.badge}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-8 text-sm font-medium tracking-widest text-accent uppercase">{c.role}</p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="grad-text mt-4 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {c.headline}
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{c.sub}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {c.ctaPrimary}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink-2/60 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:bg-white/5"
            >
              {c.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-12 flex items-center gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink-2/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
                >
                  {Icon ? <Icon className="h-[18px] w-[18px]" /> : social.label[0]}
                </a>
              );
            })}
            <span className="ml-2 text-sm text-muted">{pick(profile.location, lang)}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
