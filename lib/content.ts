// ─────────────────────────────────────────────────────────────
//  BARCHA SAYT MA'LUMOTLARI VA MATNLARI
//  ALL SITE CONTENT & DATA FOR SAMANDAR SULTONOV
//  "TODO" deb belgilangan joylarni o'zingiz to'ldiring.
// ─────────────────────────────────────────────────────────────

export type Lang = "uz" | "en";
type L = { uz: string; en: string };

export const profile = {
  name: "Samandar",
  surname: "Sultonov",
  fullName: "Samandar Sultonov",
  role: {
    uz: "AI Ustozi · Startap Asoschisi",
    en: "AI Mentor · Startup Founder",
  },
  headline: {
    uz: "Dasturlash sohasida 3 yillik, sun'iy intellekt yo'nalishida 2 yillik tajribaga ega mutaxassis.",
    en: "Developer with 3 years of coding and 2 years of hands-on AI experience.",
  },
  sub: {
    uz: "200 dan ortiq o'quvchiga AI yordamida dasturlash va prompt engineering bo'yicha dars berganman, 5 dan ortiq loyihani amalga oshirganman. AI texnologiyalari va yangiliklariga doimo ochiqman.",
    en: "I have taught AI-assisted programming and prompt engineering to 200+ students and shipped 5+ projects. Always open to new AI technologies and ideas.",
  },
  email: "samtall758@gmail.com",
  phone: "+998 94 522 50 70",
  phoneRaw: "+998945225070",
  website: "avtoai.uz",
  location: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" },
  photo: "/photo.webp",
  // TODO: tayyor CV faylini public/resume.pdf ga qo'ysangiz, "CV yuklab olish" tugmasi paydo bo'ladi.
  resumeUrl: "",
  telegram: { handle: "@sultonov28", href: "https://t.me/sultonov28" },
  github: { handle: "Sultonov77", href: "https://github.com/Sultonov77" },
  socials: [
    { label: "GitHub", href: "https://github.com/Sultonov77", icon: "github" },
    { label: "Telegram", href: "https://t.me/sultonov28", icon: "telegram" },
    // TODO: LinkedIn profilingiz havolasini qo'ying (bo'sh qolsa ko'rsatilmaydi).
    { label: "LinkedIn", href: "", icon: "linkedin" },
    { label: "Email", href: "mailto:samtall758@gmail.com", icon: "mail" },
  ].filter((s) => s.href),
};

export const heroStats = [
  { value: "3+", label: { uz: "Yil kod", en: "Years coding" } },
  { value: "2+", label: { uz: "Yil AI", en: "Years in AI" } },
  { value: "200+", label: { uz: "O'quvchi", en: "Students" } },
  { value: "5+", label: { uz: "Loyiha", en: "Projects" } },
];

export const about = {
  tag: { uz: "Men haqimda", en: "About me" },
  title: {
    uz: "AI bilan dasturlashni o'rgataman va mahsulot quraman",
    en: "I teach AI-assisted coding and build products",
  },
  bio: {
    uz: `${profile.headline.uz} ${profile.sub.uz}`,
    en: `${profile.headline.en} ${profile.sub.en}`,
  },
  languages: [
    { name: { uz: "O'zbek", en: "Uzbek" }, level: { uz: "Ona tili", en: "Native" }, dots: 5 },
    { name: { uz: "Ingliz", en: "English" }, level: { uz: "B2", en: "B2" }, dots: 4 },
    { name: { uz: "Rus", en: "Russian" }, level: { uz: "B1", en: "B1" }, dots: 3 },
    { name: { uz: "Turk", en: "Turkish" }, level: { uz: "B1", en: "B1" }, dots: 3 },
  ],
  // TODO: ballarni qo'shing, masalan score: "7.0" (bo'sh qolsa faqat nomi chiqadi).
  certificates: [
    { name: "IELTS", score: "" },
    { name: "SAT", score: "" },
    { name: "CEFR", score: "" },
  ],
  education: [
    {
      school: { uz: "Turin politexnika universiteti", en: "Turin Polytechnic University" },
      detail: { uz: "Toshkent shahridagi filiali", en: "Tashkent branch" },
      // TODO: fakultet / yo'nalish va o'qish yillari, masalan "Dasturiy injiniring" va "2022 — 2026".
      field: { uz: "", en: "" },
      period: "",
    },
  ],
};

export const skillsList: { name: L; desc: L; icon: string }[] = [
  {
    name: { uz: "AI coding", en: "AI coding" },
    desc: {
      uz: "AI vositalari yordamida tez va sifatli dasturlash",
      en: "Building software fast with AI coding tools",
    },
    icon: "sparkles",
  },
  {
    name: { uz: "Prompt engineering", en: "Prompt engineering" },
    desc: {
      uz: "LLM lardan aniq va barqaror natija olish",
      en: "Getting precise, reliable results from LLMs",
    },
    icon: "prompt",
  },
  {
    name: { uz: "Dasturlash", en: "Programming" },
    desc: {
      uz: "Veb-platformalarni ishlab chiqish va qo'llab-quvvatlash",
      en: "Developing and maintaining web platforms",
    },
    icon: "code",
  },
  {
    name: { uz: "AI orqali avtomatlashtirish", en: "AI automation" },
    desc: {
      uz: "Takroriy ishlarni AI agentlar va botlar yordamida avtomatlashtirish",
      en: "Automating repetitive work with AI agents and bots",
    },
    icon: "automation",
  },
  {
    name: { uz: "O'qitish va mentorlik", en: "Teaching & mentoring" },
    desc: {
      uz: "200+ o'quvchiga amaliy darslar",
      en: "Hands-on lessons for 200+ students",
    },
    icon: "graduation",
  },
  {
    name: { uz: "Startap boshqaruvi", en: "Startup management" },
    desc: {
      uz: "G'oyadan ishlaydigan mahsulotgacha",
      en: "From idea to a working product",
    },
    icon: "rocket",
  },
];

// TODO: qolgan loyihalaringizni shu ko'rinishda qo'shing (nomi, yili, tavsifi, havolasi).
export const projects = [
  {
    name: "AvtoAI",
    logo: "/logos/avtoai.webp",
    subtitle: { uz: "Asoschi", en: "Founder" },
    year: "",
    tags: ["AI", "EdTech", "Web"],
    description: {
      uz: "Haydovchilik guvohnomasi imtihoniga AI yordamida tayyorlov platformasi.",
      en: "AI-powered preparation platform for the driver's license exam.",
    },
    site: "https://avtoai.uz",
    repo: "",
  },
  {
    name: "testbor.uz",
    logo: "/logos/testbor.webp",
    subtitle: { uz: "Dasturchi", en: "Developer" },
    year: "",
    tags: ["Web", "EdTech"],
    description: {
      uz: "Onlayn test platformasi — ishlab chiqish va qo'llab-quvvatlashda ishtirok etganman.",
      en: "Online testing platform — I took part in its development and maintenance.",
    },
    site: "https://testbor.uz",
    repo: "",
  },
];

// TODO: har bir ish joyi uchun yillarni qo'shmoqchi bo'lsangiz period ni o'zgartiring (masalan "2024 — Hozir").
export const experience = [
  {
    period: { uz: "Hozirgi vaqtda", en: "Present" },
    role: { uz: "Asoschi", en: "Founder" },
    org: "AvtoAI",
    description: {
      uz: "Haydovchilik guvohnomasi imtihoniga AI yordamida tayyorlov platformasi",
      en: "AI-powered driver's license exam preparation platform",
    },
    bullets: [
      {
        uz: "Mahsulot g'oyasi, ishlab chiqish va rivojlantirishni boshqarish",
        en: "Leading the product vision, development and growth",
      },
      {
        uz: "AI texnologiyalarini o'quv jarayoniga tatbiq etish",
        en: "Applying AI technologies to the learning process",
      },
    ],
  },
  {
    period: { uz: "Hozirgi vaqtda", en: "Present" },
    role: { uz: "AI coding va prompt engineering ustozi", en: "AI Coding & Prompt Engineering Mentor" },
    org: "Najot Ta'lim o'quv markazi",
    description: { uz: "", en: "" },
    bullets: [
      { uz: "200+ o'quvchini o'qitganman", en: "Taught 200+ students" },
      {
        uz: "AI vositalari bilan dasturlash bo'yicha amaliy darslar olib boraman",
        en: "Running hands-on classes on programming with AI tools",
      },
    ],
  },
  {
    period: { uz: "Oldingi ish", en: "Previous" },
    role: { uz: "Dasturchi", en: "Developer" },
    org: "testbor.uz",
    description: { uz: "", en: "" },
    bullets: [
      {
        uz: "Onlayn test platformasini ishlab chiqish va qo'llab-quvvatlash",
        en: "Developing and maintaining an online testing platform",
      },
    ],
  },
];

export const t = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Aloqa",
      cta: "Bog'lanish",
    },
    hero: {
      badge: "Hamkorlik va darslar uchun ochiq",
      intro: "Salom, men",
      ctaPrimary: "Bog'lanish",
      ctaSecondary: "CV yuklab olish",
      ctaProjects: "Loyihalarim",
    },
    about: {
      languages: "Tillar",
      certificates: "Sertifikatlar",
      education: "Ta'lim",
    },
    skills: {
      tag: "Ko'nikmalar",
      title: "Nimalar qila olaman",
      sub: "Har kuni ishlatadigan asosiy ko'nikmalarim",
    },
    projects: {
      tag: "Loyihalar",
      title: "Loyihalarim",
      sub: "Men asos solgan va ishlab chiqishda qatnashgan mahsulotlar",
      visit: "Saytga o'tish",
      code: "Kodni ko'rish",
    },
    experience: {
      tag: "Kasbiy yo'l",
      title: "Ish tajribasi",
      sub: "Qayerda ishlaganman va nima qilganman",
    },
    contact: {
      tag: "Aloqa",
      title: "Keling, gaplashamiz",
      sub: "Hamkorlik, AI bo'yicha darslar yoki loyiha taklifi bo'lsa — yozing, tez orada javob beraman.",
      form: {
        name: "Ismingiz",
        namePlaceholder: "Ali Valiyev",
        email: "Email manzilingiz",
        topic: "Mavzu",
        topicPlaceholder: "Mavzuni tanlang",
        topics: [
          "AI coding / prompt engineering darslari",
          "Mentorlik",
          "Loyiha / hamkorlik",
          "AvtoAI haqida",
          "Boshqa",
        ],
        message: "Xabaringiz",
        messagePlaceholder: "Nima haqida gaplashmoqchisiz?",
        send: "Email orqali yuborish",
        note: "Tugma email ilovangizni tayyor xabar bilan ochadi.",
      },
      perks: [
        "AI bilan dasturlash bo'yicha darslar",
        "Prompt engineering bo'yicha maslahat",
        "Startap va mahsulot bo'yicha hamkorlik",
      ],
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      built: "Next.js va Tailwind CSS bilan yaratilgan",
      backToTop: "Tepaga qaytish",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Open to collaborations & classes",
      intro: "Hello, I'm",
      ctaPrimary: "Get in touch",
      ctaSecondary: "Download CV",
      ctaProjects: "My projects",
    },
    about: {
      languages: "Languages",
      certificates: "Certificates",
      education: "Education",
    },
    skills: {
      tag: "Skills",
      title: "What I do",
      sub: "The core skills I use every day",
    },
    projects: {
      tag: "Projects",
      title: "My Projects",
      sub: "Products I founded or helped build",
      visit: "Visit site",
      code: "View code",
    },
    experience: {
      tag: "Career",
      title: "Work Experience",
      sub: "Where I've worked and what I did",
    },
    contact: {
      tag: "Contact",
      title: "Let's talk",
      sub: "Collaboration, AI classes or a project idea — write to me and I'll reply soon.",
      form: {
        name: "Your name",
        namePlaceholder: "John Doe",
        email: "Your email",
        topic: "Topic",
        topicPlaceholder: "Choose a topic",
        topics: [
          "AI coding / prompt engineering classes",
          "Mentoring",
          "Project / collaboration",
          "About AvtoAI",
          "Other",
        ],
        message: "Message",
        messagePlaceholder: "What would you like to talk about?",
        send: "Send via email",
        note: "The button opens your email app with the message ready.",
      },
      perks: [
        "Classes on programming with AI",
        "Prompt engineering consulting",
        "Startup & product collaboration",
      ],
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS",
      backToTop: "Back to top",
    },
  },
} as const;

export function pick<T>(val: string | { uz: T; en: T }, lang: Lang): T | string {
  if (typeof val === "string") return val;
  return val[lang];
}
