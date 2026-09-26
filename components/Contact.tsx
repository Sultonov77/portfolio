"use client";

import { useState } from "react";
import { profile, t, type Lang } from "@/lib/content";
import { ArrowIcon, CheckIcon, CopyIcon, GithubIcon, MailIcon, PhoneIcon, TelegramIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

const inputClass =
  "h-12 w-full rounded-xl border border-line bg-ink-3 px-4 text-base text-white placeholder:text-slate-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30";

export default function Contact({ lang }: { lang: Lang }) {
  const c = t[lang].contact;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "", message: "" });

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
    const subject = formData.topic || c.title;
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-ink-2 p-4 transition-colors hover:border-blue-500/50">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-400">{label}</span>
                    <span className="block truncate text-base font-semibold text-white">{value}</span>
                  </span>
                </a>
                {label === "Email" && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={lang === "uz" ? "Emailni nusxalash" : "Copy email"}
                    title={lang === "uz" ? "Nusxalash" : "Copy"}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-slate-400 transition-colors hover:border-blue-500 hover:text-blue-400 cursor-pointer"
                  >
                    {copied ? <CheckIcon className="h-4 w-4 text-blue-400" /> : <CopyIcon />}
                  </button>
                )}
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <ul className="space-y-3 pt-4">
              {c.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-base text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
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
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-ink-2 p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">{c.form.name} *</span>
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
                <span className="mb-2 block text-sm font-medium text-slate-300">{c.form.email} *</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@mail.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">{c.form.topic}</span>
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
              <span className="mb-2 block text-sm font-medium text-slate-300">{c.form.message} *</span>
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
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-base font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-500 cursor-pointer"
            >
              {c.form.send}
              <ArrowIcon />
            </button>
            <p className="text-center text-sm text-slate-500">{c.form.note}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
