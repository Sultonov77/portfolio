"use client";

import { profile, t, type Lang } from "@/lib/content";

export default function Footer({ lang }: { lang: Lang }) {
  const c = t[lang].footer;

  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. {c.rights}
        </p>
        <p>{c.built}</p>
      </div>
    </footer>
  );
}
