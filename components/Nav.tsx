"use client";

import { useEffect, useState } from "react";
import { profile, t, type Lang } from "@/lib/content";

type Props = { lang: Lang; setLang: (l: Lang) => void };

export default function Nav({ lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#top", label: nav.home },
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#experience", label: lang === "uz" ? "Tajriba" : "Experience" },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/90 bg-[#050608]/92 backdrop-blur-xl shadow-xl shadow-black/60 py-4.5"
          : "border-b border-transparent bg-transparent py-6 sm:py-7"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand Logo */}
        <a href="#top" className="group flex items-center gap-3.5 tracking-tight">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white text-xl font-black shadow-[0_0_25px_rgba(59,130,246,0.45)] transition-transform group-hover:scale-105">
            ✦
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-white tracking-wide">
              {profile.surname} <span className="text-blue-500">{profile.name}</span>
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-bold tracking-widest uppercase -mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-2 rounded-full border border-line bg-ink-2/85 px-5 py-2.5 backdrop-blur-md lg:flex shadow-lg shadow-black/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm sm:text-base font-bold text-slate-300 transition-all hover:bg-white/10 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Lang Switcher & CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-line bg-ink-2/95 p-1 text-xs font-bold">
            {(["uz", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-3.5 py-1.5 uppercase text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  lang === code
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {/* Prominent Blue CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm sm:text-base font-black text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] cursor-pointer"
          >
            <span>{nav.cta}</span>
            <span className="text-lg leading-none">↗</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-ink-2 text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-2xl lg:hidden mt-4">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-base font-bold text-slate-300 hover:text-blue-400 border-b border-line/40 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-base font-black text-white"
              >
                {nav.cta} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
