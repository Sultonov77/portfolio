"use client";

import { pricingPlans, t, type Lang } from "@/lib/content";
import { CheckIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Pricing({ lang }: { lang: Lang }) {
  const c = t[lang].pricing;

  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-28 sm:px-8 relative overflow-hidden bg-ink-2/30">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
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

        {/* 3 Pricing Cards Grid */}
        <div className="mt-18 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => {
            return (
              <Reveal key={plan.id} delay={idx * 100}>
                <div
                  className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300 h-full ${
                    plan.featured
                      ? "border-2 border-accent bg-ink-2/95 shadow-[0_0_35px_rgba(204,255,0,0.25)] md:-translate-y-2.5"
                      : "border border-line bg-ink-2/70 hover:border-accent/50 hover:bg-ink-2/90"
                  }`}
                >
                  {/* Featured Badge */}
                  {plan.featured && plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-5 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-md">
                      {plan.badge[lang]}
                    </div>
                  )}

                  <div>
                    {/* Plan Header */}
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-2xl font-black text-fg">
                        {plan.title[lang]}
                      </h3>
                    </div>

                    <p className="mt-2.5 text-sm text-muted">
                      {plan.desc[lang]}
                    </p>

                    {/* Price Tag */}
                    <div className="mt-7 flex items-baseline gap-1.5 border-b border-line pb-7">
                      <span className="text-5xl sm:text-6xl font-black tracking-tight text-accent">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-muted">
                        {plan.period[lang]}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="mt-7 space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3.5">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent font-bold mt-0.5">
                            <CheckIcon className="h-3.5 w-3.5 text-accent" />
                          </div>
                          <span className="text-sm sm:text-base font-medium text-fg/90">
                            {feature[lang]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Plan CTA Button */}
                  <div className="mt-9 pt-4">
                    <a
                      href="#contact"
                      className={`flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm sm:text-base font-extrabold transition-all cursor-pointer ${
                        plan.featured
                          ? "bg-accent text-ink shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(204,255,0,0.55)]"
                          : "border-2 border-line bg-ink-3 text-fg hover:border-accent/60 hover:text-accent"
                      }`}
                    >
                      <span>{c.choosePlan}</span>
                      <span className="text-lg">→</span>
                    </a>
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
