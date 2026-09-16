"use client";

import { profile, t, type Lang } from "@/lib/content";
import { socialIcons } from "./Icons";

export default function Footer({ lang }: { lang: Lang }) {
  const c = t[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink-2/90 px-6 pt-16 pb-12 sm:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-line/60">
          
          {/* Logo & Role */}
          <div>
            <a href="#top" className="flex items-center gap-3 font-bold tracking-tight">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black text-white shadow-[0_0_15px_rgba(59,130,246,0.35)]">
                ✦
              </span>
              <span className="text-xl font-bold text-white">
                {profile.surname} <span className="text-blue-500">{profile.name}</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              {profile.role[lang]}
            </p>
          </div>

          {/* Minimal Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink-3 text-slate-400 hover:border-blue-500/60 hover:text-blue-400 transition-all"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : social.label[0]}
                  </a>
                );
              })}
            </div>

            {/* Back to top blue button */}
            <button
              onClick={scrollToTop}
              title={c.backToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500 transition-all hover:scale-105 cursor-pointer"
            >
              ↑
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. {c.rights}
          </p>
          <p>
            {c.built}
          </p>
        </div>
      </div>
    </footer>
  );
}
