"use client";

import { useEffect, useState } from "react";

const dockItems = [
  { href: "#top", label: "Home", icon: "⌂" },
  { href: "#about", label: "About", icon: "✦" },
  { href: "#services", label: "Services", icon: "⚡" },
  { href: "#skills", label: "Skills", icon: "◈" },
  { href: "#projects", label: "Projects", icon: "◫" },
  { href: "#pricing", label: "Pricing", icon: "★" },
  { href: "#contact", label: "Contact", icon: "✉" },
];

export default function QuickDock() {
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = dockItems.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection("#" + sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Navigation Dock"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2.5 rounded-full border border-line bg-ink-2/80 p-2 shadow-2xl backdrop-blur-xl"
    >
      {dockItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            title={item.label}
            className={`group relative flex h-9 w-9 items-center justify-center rounded-full text-xs transition-all ${
              isActive
                ? "bg-accent text-ink font-bold shadow-[0_0_15px_rgba(204,255,0,0.4)] scale-110"
                : "text-muted hover:bg-white/10 hover:text-fg"
            }`}
          >
            <span>{item.icon}</span>

            {/* Hover tooltip */}
            <span className="pointer-events-none absolute right-12 rounded-lg border border-line bg-ink-3 px-2.5 py-1 text-[11px] font-semibold text-fg opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
