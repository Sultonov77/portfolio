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

// Chiqishlar (video) va tadbirlar
export const talks = [
  {
    title: { uz: "AI coding haqida batafsil", en: "AI coding in depth" },
    description: {
      uz: "AI yordamida dasturlash: vositalar, ish jarayoni va amaliy maslahatlar haqida jonli efir.",
      en: "A live stream on AI-assisted programming: tools, workflow and practical tips.",
    },
    youtubeId: "CcoT6LRXrz4",
    url: "https://www.youtube.com/live/CcoT6LRXrz4",
  },
];

export const events = [
  {
    name: "Future Leaders Assembly 2026",
    place: { uz: "Istanbul, Turkiya", en: "Istanbul, Turkey" },
    date: { uz: "25–28 fevral, 2026", en: "February 25–28, 2026" },
    description: {
      uz: "“Sustainable Leadership in a Changing World” mavzusidagi xalqaro yoshlar assambleyasida ishtirok etdim va muhokamalarda qatnashdim. Ishtirok sertifikati bilan taqdirlandim.",
      en: "Took part in the international youth assembly on “Sustainable Leadership in a Changing World” and contributed to its discussions. Awarded a certificate of participation.",
    },
    photo: "/events/fla-2026.webp",
    certificate: "/events/fla-2026-certificate.webp",
  },
];

// AI yo'nalishidagi sertifikatlar
export const aiCertificates = [
  {
    title: "Google Prompting Essentials",
    issuer: "Google · Coursera",
    date: { uz: "28 mart, 2026", en: "March 28, 2026" },
    description: {
      uz: "Google tomonidan ishlab chiqilgan 4 ta kursdan iborat mutaxassislik: samarali promptlar yozish, ma'lumotlarni tahlil qilish va AI bilan murakkab vazifalarni bajarish.",
      en: "A 4-course specialization developed by Google: designing effective prompts, analyzing data and completing complex tasks with AI.",
    },
    images: ["/certificates/google-prompting-essentials.webp"],
    verify: "https://coursera.org/verify/specialization/XJ70XFV45JPT",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: { uz: "2026", en: "2026" },
    description: {
      uz: "Anthropic kompaniyasining Claude AI assistenti bilan samarali ishlash bo'yicha rasmiy kursi.",
      en: "Anthropic's official course on working effectively with the Claude AI assistant.",
    },
    images: ["/certificates/anthropic-claude-101.webp"],
    verify: "",
  },
  {
    title: "Five Million AI Leaders",
    issuer: {
      uz: "O'zbekiston Raqamli texnologiyalar vazirligi · Dubai Future Foundation",
      en: "Ministry of Digital Technologies of Uzbekistan · Dubai Future Foundation",
    },
    date: { uz: "26 mart, 2026", en: "March 26, 2026" },
    description: {
      uz: "BAA va O'zbekiston hukumatlarining besh million kishini AI tizimlari uchun prompt engineering bo'yicha o'qitish tashabbusi.",
      en: "A joint UAE–Uzbekistan government initiative training five million people in prompt engineering for AI systems.",
    },
    images: ["/certificates/five-million-ai-leaders.webp"],
    verify: "",
  },
  {
    title: "Prompt Engineering",
    issuer: { uz: "Najot Ta'lim o'quv markazi", en: "Najot Ta'lim training center" },
    date: { uz: "28 fevral, 2026", en: "February 28, 2026" },
    description: {
      uz: "Kursni a'lo baholarga tamomladim. Sertifikat bilan birga markaz rahbariyatidan tashakkurnoma oldim.",
      en: "Completed the course with excellent grades and received a letter of appreciation from the center's leadership alongside the certificate.",
    },
    images: [
      "/certificates/najot-talim-prompt-engineering.webp",
      "/certificates/najot-talim-tashakkurnoma.webp",
    ],
    verify: "",
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
      events: "Tadbirlar",
      certificates: "Sertifikatlar",
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
    events: {
      tag: "Chiqishlar va tadbirlar",
      title: "Video va tadbirlar",
      sub: "AI coding bo'yicha chiqishlarim va ishtirok etgan xalqaro tadbirlarim",
      watch: "YouTube'da ko'rish",
      certificate: "Sertifikat",
      openCertificate: "Sertifikatni kattalashtirish",
    },
    certificates: {
      tag: "Sertifikatlar",
      title: "AI sertifikatlarim",
      sub: "Sun'iy intellekt va prompt engineering yo'nalishida olgan sertifikatlarim",
      verify: "Tekshirish",
      open: "Kattalashtirish",
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
      events: "Events",
      certificates: "Certificates",
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
    events: {
      tag: "Talks & events",
      title: "Videos & Events",
      sub: "My talks on AI coding and the international events I've taken part in",
      watch: "Watch on YouTube",
      certificate: "Certificate",
      openCertificate: "Open certificate",
    },
    certificates: {
      tag: "Certificates",
      title: "AI Certificates",
      sub: "Certificates I've earned in artificial intelligence and prompt engineering",
      verify: "Verify",
      open: "View full size",
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
