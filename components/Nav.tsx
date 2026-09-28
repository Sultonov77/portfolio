"use client";

import { useEffect, useState } from "react";
import { profile, t, type Lang } from "@/lib/content";
import { ArrowIcon, CloseIcon, MenuIcon } from "./Icons";

type Props = { lang: Lang; setLang: (l: Lang) => void };

export default function Nav({ lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#events", label: nav.events },
    { href: "#certificates", label: nav.certificates },
    { href: "#experience", label: nav.experience },
    { href: "#contact", label: nav.contact },
  ];

  const langSwitch = (
    <div className="flex items-center rounded-lg border border-line bg-ink-2 p-1" role="group" aria-label="Language">
      {(["uz", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`h-8 min-w-10 rounded-md px-2.5 text-xs font-semibold uppercase transition-colors cursor-pointer ${
            lang === code ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
            SS
          </span>
          <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">{profile.fullName}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2.5 py-2 2xl:px-3.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">{langSwitch}</div>
          <a
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-500 md:inline-flex"
          >
            {nav.cta}
            <ArrowIcon />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink-2 text-white xl:hidden cursor-pointer"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-4 pb-8 pt-4 sm:px-6 xl:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-4 text-lg font-medium text-slate-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex items-center justify-between gap-4">
              {langSwitch}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-base font-semibold text-white"
              >
                {nav.cta}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
