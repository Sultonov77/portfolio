"use client";

import { profile, t, type Lang } from "@/lib/content";
import { ArrowUpIcon, socialIcons } from "./Icons";

export default function Footer({ lang }: { lang: Lang }) {
  const c = t[lang].footer;

  return (
    <footer className="border-t border-line bg-ink-2/80 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="text-base font-semibold text-white">{profile.fullName}</div>
          <p className="mt-1 text-sm text-slate-400">
            © {new Date().getFullYear()} · {c.rights}
          </p>
        </div>

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
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-slate-400 transition-colors hover:border-blue-500/60 hover:text-blue-400"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={c.backToTop}
            title={c.backToTop}
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-500 cursor-pointer"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
