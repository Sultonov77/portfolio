"use client";

import { events, talks, t, type Lang } from "@/lib/content";
import { ExternalIcon, MapPinIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Events({ lang }: { lang: Lang }) {
  const c = t[lang].events;

  return (
    <Section id="events" tag={c.tag} title={c.title} sub={c.sub}>
      <div className="grid gap-6 lg:grid-cols-2">
        {talks.map((talk, idx) => (
          <Reveal key={talk.youtubeId} delay={idx * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
              <div className="relative aspect-video w-full border-b border-line bg-ink-3">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${talk.youtubeId}`}
                  title={talk.title[lang]}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">YouTube · Live</span>
                <h3 className="mt-2 text-xl font-semibold text-white">{talk.title[lang]}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-300">{talk.description[lang]}</p>

                <div className="mt-auto pt-6">
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    {c.watch}
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {events.map((event, idx) => (
          <Reveal key={event.name} delay={(talks.length + idx) * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
              <div className="grid grid-cols-[2fr_3fr] gap-px border-b border-line bg-line">
                <a href={event.photo} target="_blank" rel="noreferrer noopener" className="relative block overflow-hidden bg-ink-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.photo}
                    alt={`${event.name} — Samandar Sultonov`}
                    className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
                <a
                  href={event.certificate}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={c.openCertificate}
                  className="relative flex aspect-[1280/905] items-center justify-center bg-[#f7f6f2] p-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.certificate}
                    alt={`${event.name} — ${c.certificate}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 right-2 rounded-md bg-ink/80 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {c.certificate}
                  </span>
                </a>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {event.place[lang]}
                  </span>
                  <span className="text-sm text-slate-400">{event.date[lang]}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">{event.name}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-300">{event.description[lang]}</p>

                <div className="mt-auto pt-6">
                  <a
                    href={event.certificate}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-line px-5 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-500/60"
                  >
                    {c.openCertificate}
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
