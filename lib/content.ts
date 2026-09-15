// ─────────────────────────────────────────────────────────────
//  BARCHA MATNLAR SHU YERDA. Faqat shu faylni tahrirlang.
//  ALL SITE CONTENT LIVES HERE. Edit only this file.
// ─────────────────────────────────────────────────────────────

export type Lang = "uz" | "en";

export const profile = {
  name: "Samandar",
  fullName: "Samandar Sultonov",
  email: "samtall758@gmail.com",
  location: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" },
  avatarInitials: "SS",
  resumeUrl: "", // masalan: "/resume.pdf" — faylni public/ ichiga qo'ying
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "Telegram", href: "https://t.me/", icon: "telegram" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" },
    { label: "Email", href: "mailto:samtall758@gmail.com", icon: "mail" },
  ],
};

export const t = {
  uz: {
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Aloqa",
    },
    hero: {
      badge: "Yangi loyihalarga ochiq",
      role: "Founder & Full-stack dasturchi",
      headline: "Ideyani ishlaydigan mahsulotga aylantiraman.",
      sub: "Men startaplar quraman va odamlar har kuni foydalanadigan raqamli mahsulotlar yarataman. G'oyadan tortib ishga tushirishgacha — hammasini boshdan oxirigacha olib boraman.",
      ctaPrimary: "Loyihalarni ko'rish",
      ctaSecondary: "Bog'lanish",
    },
    about: {
      title: "Men haqimda",
      body: [
        "Salom! Men Samandar — O'zbekistonda startaplar quruvchi va full-stack dasturchiman. Asosiy e'tiborim: real muammoni yechadigan, foydalanuvchi sevib ishlatadigan mahsulot yaratish.",
        "Men uchun kod — maqsad emas, vosita. Shuning uchun har bir loyihada mahsulot strategiyasi, dizayn va texnik yechimni birga olib boraman: tez prototip, foydalanuvchidan fikr, keyin miqyoslash.",
        "Hozir sun'iy intellekt asosidagi ta'lim mahsulotlari ustida ishlayapman va yangi hamkorliklarga ochiqman.",
      ],
      stats: [
        { value: "5+", label: "Yil tajriba" },
        { value: "20+", label: "Yakunlangan loyiha" },
        { value: "10k+", label: "Foydalanuvchi" },
      ],
    },
    skills: { title: "Ko'nikmalar", sub: "Har kuni ishlatadigan texnologiyalarim" },
    projects: {
      title: "Loyihalar",
      sub: "Men qurgan va qurayotgan mahsulotlar",
      visit: "Saytga o'tish",
      code: "Kodni ko'rish",
    },
    experience: { title: "Tajriba", sub: "Kasbiy yo'lim" },
    contact: {
      title: "Keling, gaplashamiz",
      sub: "Yangi loyiha, hamkorlik yoki shunchaki savol — yozing, albatta javob beraman.",
      cta: "Email yuborish",
      copy: "Nusxalash",
      copied: "Nusxalandi!",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      built: "Next.js va Tailwind bilan qurilgan",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Open to new projects",
      role: "Founder & Full-stack Developer",
      headline: "I turn ideas into products that ship.",
      sub: "I build startups and digital products people actually use — from the first idea and prototype all the way to launch and growth.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
    },
    about: {
      title: "About me",
      body: [
        "Hi! I'm Samandar — a startup builder and full-stack developer based in Uzbekistan. My focus is building products that solve a real problem and that people enjoy using.",
        "For me code is a tool, not the goal. That's why I carry product strategy, design and engineering together: prototype fast, listen to users, then scale what works.",
        "Right now I'm building AI-powered education products, and I'm open to new collaborations.",
      ],
      stats: [
        { value: "5+", label: "Years of experience" },
        { value: "20+", label: "Projects shipped" },
        { value: "10k+", label: "Users reached" },
      ],
    },
    skills: { title: "Skills", sub: "The tools I work with every day" },
    projects: {
      title: "Projects",
      sub: "Products I've built and I'm building",
      visit: "Visit site",
      code: "View code",
    },
    experience: { title: "Experience", sub: "My professional path" },
    contact: {
      title: "Let's talk",
      sub: "New project, collaboration or just a question — write to me and I'll get back to you.",
      cta: "Send an email",
      copy: "Copy",
      copied: "Copied!",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js and Tailwind",
    },
  },
} as const;

type Localized = string | { uz: string; en: string };

export const skillGroups: { title: { uz: string; en: string }; items: Localized[] }[] = [
  {
    title: { uz: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: { uz: "Backend", en: "Backend" },
    items: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST API"],
  },
  {
    title: { uz: "AI va ma'lumot", en: "AI & Data" },
    items: ["Claude API", "OpenAI API", "Prompt engineering", "RAG", "Analytics"],
  },
  {
    title: { uz: "Mahsulot", en: "Product" },
    items: [
      { uz: "Mahsulot strategiyasi", en: "Product strategy" },
      { uz: "UI/UX dizayn", en: "UI/UX design" },
      { uz: "Figma", en: "Figma" },
      { uz: "Marketing", en: "Growth marketing" },
      { uz: "Jamoa boshqaruvi", en: "Team leadership" },
    ],
  },
];

export const projects: {
  name: string;
  year: string;
  tags: string[];
  featured: boolean;
  description: { uz: string; en: string };
  site: string;
  repo: string;
}[] = [
  {
    name: "AvtoAI",
    year: "2025",
    tags: ["Next.js", "AI", "EdTech"],
    featured: true,
    description: {
      uz: "Haydovchilik guvohnomasi imtihoniga tayyorlov platformasi. Sun'iy intellekt har bir savolni tushuntiradi, xatolaringizni tahlil qiladi va shaxsiy tayyorgarlik rejasini tuzadi.",
      en: "A driving-licence exam prep platform. AI explains every question, analyses your mistakes and builds a personal study plan.",
    },
    site: "https://avtoai.uz",
    repo: "",
  },
  {
    name: "Loyiha nomi",
    year: "2024",
    tags: ["React", "Node.js"],
    featured: false,
    description: {
      uz: "Bu yerga loyihangiz tavsifini yozing: qanday muammoni yechadi, siz nima qildingiz va qanday natija bo'ldi.",
      en: "Describe your project here: what problem it solves, what you did and what the outcome was.",
    },
    site: "",
    repo: "",
  },
  {
    name: "Loyiha nomi",
    year: "2023",
    tags: ["Python", "Automation"],
    featured: false,
    description: {
      uz: "Bu yerga loyihangiz tavsifini yozing: qanday muammoni yechadi, siz nima qildingiz va qanday natija bo'ldi.",
      en: "Describe your project here: what problem it solves, what you did and what the outcome was.",
    },
    site: "",
    repo: "",
  },
];

export const experience: {
  period: { uz: string; en: string };
  role: { uz: string; en: string };
  org: Localized;
  description: { uz: string; en: string };
}[] = [
  {
    period: { uz: "2025 — hozir", en: "2025 — present" },
    role: { uz: "Asoschi va dasturchi", en: "Founder & Developer" },
    org: "AvtoAI",
    description: {
      uz: "Platformani noldan qurdim: mahsulot g'oyasi, dizayn, frontend va backend, AI integratsiyasi va ishga tushirish.",
      en: "Built the platform from scratch: product concept, design, frontend and backend, AI integration and launch.",
    },
  },
  {
    period: { uz: "2023 — 2025", en: "2023 — 2025" },
    role: { uz: "Full-stack dasturchi", en: "Full-stack Developer" },
    org: "Freelance",
    description: {
      uz: "Mahalliy va xorijiy mijozlar uchun veb-ilovalar, landing sahifalar va ichki tizimlar ishlab chiqdim.",
      en: "Delivered web apps, landing pages and internal tools for local and international clients.",
    },
  },
  {
    period: { uz: "2021 — 2023", en: "2021 — 2023" },
    role: { uz: "Frontend dasturchi", en: "Frontend Developer" },
    org: { uz: "Kompaniya nomi", en: "Company name" },
    description: {
      uz: "Bu yerga ish tajribangizni yozing.",
      en: "Describe your role and impact here.",
    },
  },
];

export function pick(value: Localized, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}
