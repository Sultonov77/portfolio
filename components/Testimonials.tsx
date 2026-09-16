"use client";

import { testimonials, t, type Lang } from "@/lib/content";
import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Testimonials({ lang }: { lang: Lang }) {
  const c = t[lang].testimonials;

  return (
    <section className="scroll-mt-24 px-5 py-28 sm:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-accent uppercase tracking-wider">
              {c.tag}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {c.title}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-muted/95">
              {c.sub}
            </p>
          </Reveal>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-18 grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((item, idx) => {
            return (
              <Reveal key={item.name} delay={idx * 100}>
                <div className="group relative flex flex-col justify-between rounded-3xl border border-line bg-ink-2/70 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-ink-2/95 hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] h-full">
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1.5 text-accent">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 fill-accent" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted/95 italic">
                      "{item.quote[lang]}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="mt-7 flex items-center gap-4 pt-5 border-t border-line/60">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 border border-accent/40 font-black text-accent text-sm">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-fg">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
