"use client";

import { useState } from "react";
import { profile, t, type Lang } from "@/lib/content";
import { ArrowIcon, CheckIcon, CopyIcon, socialIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Contact({ lang }: { lang: Lang }) {
  const c = t[lang].contact;
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard bloklangan bo'lsa — jim o'tamiz
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-2/60 p-8 text-center sm:p-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(40rem 20rem at 50% 0%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="grad-text text-3xl font-bold tracking-tight text-balance sm:text-5xl">{c.title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{c.sub}</p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {c.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink/60 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/60"
                >
                  {copied ? <CheckIcon className="h-4 w-4 text-emerald-400" /> : <CopyIcon className="h-4 w-4" />}
                  {copied ? c.copied : profile.email}
                </button>
              </div>

              <div className="mt-9 flex items-center justify-center gap-3">
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
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg"
                    >
                      {Icon ? <Icon className="h-[18px] w-[18px]" /> : social.label[0]}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
