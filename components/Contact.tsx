"use client";

import { useState } from "react";
import { profile, t, type Lang } from "@/lib/content";
import { ArrowIcon, CheckIcon, CopyIcon, GithubIcon, MailIcon, PhoneIcon, TelegramIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-ink-3 px-4 text-base text-white placeholder:text-zinc-500 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export default function Contact({ lang }: { lang: Lang }) {
  const c = t[lang].contact;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", topic: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setFormData({ name: "", phone: "", topic: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
    },
    {
      label: lang === "uz" ? "Telefon" : "Phone",
      value: profile.phone,
      href: `tel:${profile.phoneRaw}`,
      Icon: PhoneIcon,
    },
    {
      label: "Telegram",
      value: profile.telegram.handle,
      href: profile.telegram.href,
      Icon: TelegramIcon,
    },
    {
      label: "GitHub",
      value: profile.github.handle,
      href: profile.github.href,
      Icon: GithubIcon,
    },
  ];

  return (
    <Section id="contact" tag={c.tag} title={c.title} sub={c.sub}>
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Direct channels */}
        <div className="space-y-3 lg:col-span-2">
          {channels.map(({ label, value, href, Icon }, i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="flex items-center gap-3 glass rounded-2xl border border-line p-4 transition-colors hover:border-brand-500/50">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-zinc-400">{label}</span>
                    <span className="block truncate text-base font-semibold text-white">{value}</span>
                  </span>
                </a>
                {label === "Email" && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={lang === "uz" ? "Emailni nusxalash" : "Copy email"}
                    title={lang === "uz" ? "Nusxalash" : "Copy"}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-zinc-400 transition-colors hover:border-brand-500 hover:text-brand-400 cursor-pointer"
                  >
                    {copied ? <CheckIcon className="h-4 w-4 text-brand-400" /> : <CopyIcon />}
                  </button>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <ul className="space-y-3 pt-4">
              {c.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-base text-zinc-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-brand-400">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={120} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5 glass rounded-2xl border border-line p-5 sm:p-8">
            {/* Honeypot for bots: hidden from people and screen readers */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="hidden"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">{c.form.name} *</span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={c.form.namePlaceholder}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">{c.form.phone} *</span>
                <input
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 90 123 45 67"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">{c.form.topic}</span>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">{c.form.topicPlaceholder}</option>
                {c.form.topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-zinc-300">{c.form.message} *</span>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={c.form.messagePlaceholder}
                className={`${inputClass} h-auto resize-none py-3`}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl btn-grad px-6 text-base font-semibold text-white transition-colors cursor-pointer disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? c.form.sending : c.form.send}
              <ArrowIcon />
            </button>
            <p
              role="status"
              className={`text-center text-sm ${
                status === "sent" ? "text-mint" : status === "error" ? "text-amber" : "text-zinc-500"
              }`}
            >
              {status === "sent" ? c.form.sent : status === "error" ? c.form.error : c.form.note}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
