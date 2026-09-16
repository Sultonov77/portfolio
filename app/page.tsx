"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolvers from "@/components/ProblemSolvers";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const STORAGE_KEY = "portfolio-lang";

export default function Home() {
  const [lang, setLang] = useState<Lang>("uz");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "uz" || saved === "en") setLang(saved);
    } catch {
      // fallback
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <div className="relative min-h-screen bg-ink text-fg selection:bg-accent selection:text-white">
      {/* Navigation */}
      <Nav lang={lang} setLang={setLang} />

      {/* Main Content: Clean, Minimal, Impactful */}
      <main>
        <Hero lang={lang} />
        <ProblemSolvers lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
