"use client";

import { useState } from "react";
import { profile, t, type Lang } from "@/lib/content";
import { CheckIcon, CopyIcon, MailIcon, PhoneIcon, TelegramIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact({ lang }: { lang: Lang }) {
  const c = t[lang].contact;
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-8 relative overflow-hidden">
      {/* Ambient background blue glow */}
      <div className="pointer-events-none absolute bottom-0 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Perks */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {c.tag}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                {c.title}
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {c.sub}
              </p>
            </Reveal>

            {/* Perks with blue checkmarks */}
            <Reveal delay={270}>
              <div className="mt-8 space-y-3">
                {c.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-black shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal delay={360}>
              <div className="mt-9 space-y-3">
                {/* Email card */}
                <div className="flex items-center justify-between rounded-2xl border border-line bg-ink-2/80 p-4 transition-all hover:border-blue-500/50">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-3 text-blue-400">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400">Email</div>
                      <a href={`mailto:${profile.email}`} className="text-sm font-bold text-white hover:text-blue-400">
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy email"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-ink-3 text-slate-400 hover:border-blue-500 hover:text-blue-400 cursor-pointer"
                  >
                    {copied ? <CheckIcon className="h-4 w-4 text-blue-400" /> : <CopyIcon className="h-4 w-4" />}
                  </button>
                </div>

                {/* Telegram card */}
                <a
                  href="https://t.me/sultonov28"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3.5 rounded-2xl border border-line bg-ink-2/80 p-4 transition-all hover:border-blue-500/50 hover:bg-ink-2 cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-3 text-sky-400">
                    <TelegramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Telegram</div>
                    <div className="text-sm font-bold text-white">@sultonov28 ↗</div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${profile.phoneRaw || "+998945225070"}`}
                  className="flex items-center gap-3.5 rounded-2xl border border-line bg-ink-2/80 p-4 transition-all hover:border-blue-500/50 hover:bg-ink-2 cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-3 text-emerald-400">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400">Phone / Call</div>
                    <div className="text-sm font-bold text-white hover:text-blue-400 transition-colors">{profile.phone}</div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={180}>
              <div className="relative rounded-3xl border border-line bg-ink-2/90 p-7 sm:p-10 shadow-2xl backdrop-blur-xl">
                
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 border-2 border-blue-500 text-blue-400">
                      <CheckIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {c.form.sent}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {lang === "uz"
                        ? "Tez orada siz bilan bog'lanamiz."
                        : "I will review your message and reply promptly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {lang === "uz" ? "Ismingiz" : "Your Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={lang === "uz" ? "Ali Valiyev" : "John Doe"}
                          className="w-full rounded-xl border border-line bg-ink-3 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {c.form.email} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@mail.com"
                          className="w-full rounded-xl border border-line bg-ink-3 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {c.form.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-line bg-ink-3 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">{c.form.servicePlaceholder}</option>
                        <option value="web">Web Application / SaaS</option>
                        <option value="mobile">Mobile Application</option>
                        <option value="design">UI/UX Design</option>
                        <option value="ai">AI Integration</option>
                        <option value="other">Other Collaboration</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {c.form.message} *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={c.form.messagePlaceholder}
                        className="w-full rounded-xl border border-line bg-ink-3 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] disabled:opacity-70 cursor-pointer"
                    >
                      {submitting ? c.form.sending : c.form.send}
                    </button>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
