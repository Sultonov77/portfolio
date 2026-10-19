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
    uz: "AI ustozi va AvtoAI asoschisi",
    en: "AI mentor and founder of AvtoAI",
  },
  headline: {
    uz: "3 yildan beri kod yozaman, oxirgi 2 yilda asosan AI bilan ishlayapman. Najot Ta'limda AI coding'dan dars beraman va AvtoAI'ni quryapman.",
    en: "I've been writing code for 3 years, and for the last 2 I've mostly worked with AI. I teach AI coding at Najot Ta'lim and I'm building AvtoAI.",
  },
  sub: {
    uz: "Hozirgacha 200 dan ortiq o'quvchiga AI bilan dasturlash va prompt yozishni o'rgatganman. 5 dan ortiq loyiha qilganman, ulardan biri haydovchilik imtihoniga tayyorlov platformasi AvtoAI. Yangi AI vositasi chiqsa, odatda birinchilardan bo'lib sinab ko'raman.",
    en: "So far I've taught more than 200 students how to code with AI and write good prompts. I've built 5+ projects, one of them AvtoAI, a platform for driver's licence exam prep. When a new AI tool comes out, I'm usually among the first to try it.",
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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/samandar-sultonov-a81324416/", icon: "linkedin" },
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
    uz: "AI bilan kod yozaman va buni boshqalarga ham o'rgataman",
    en: "I code with AI and teach others to do the same",
  },
  bio: {
    uz: profile.sub.uz,
    en: profile.sub.en,
  },
  languages: [
    { name: { uz: "O'zbek", en: "Uzbek" }, level: { uz: "Ona tili", en: "Native" }, dots: 5 },
    { name: { uz: "Ingliz", en: "English" }, level: { uz: "B2", en: "B2" }, dots: 4 },
    { name: { uz: "Rus", en: "Russian" }, level: { uz: "B1", en: "B1" }, dots: 3 },
    { name: { uz: "Turk", en: "Turkish" }, level: { uz: "B1", en: "B1" }, dots: 3 },
  ],
  // TODO: CEFR darajasini qo'shing (bo'sh qolsa faqat nomi chiqadi).
  certificates: [
    { name: "IELTS", score: "6.0" },
    { name: "SAT", score: "1210" },
    { name: "CEFR", score: "" },
  ],
  education: [
    {
      school: { uz: "Turin politexnika universiteti (TTPU)", en: "Turin Polytechnic University (TTPU)" },
      detail: { uz: "Toshkent", en: "Tashkent" },
      field: { uz: "Software Engineering", en: "Software Engineering" },
      // TODO: o'qish yillarini qo'shing, masalan "2024 — 2028".
      period: "",
    },
  ],
};

export const skillsList: { name: L; desc: L; icon: string }[] = [
  {
    name: { uz: "AI coding", en: "AI coding" },
    desc: {
      uz: "Kodni AI bilan birga yozaman: ish tezroq bitadi, sifatini esa o'zim nazorat qilaman",
      en: "I write code together with AI: it gets done faster, and I stay in charge of the quality",
    },
    icon: "sparkles",
  },
  {
    name: { uz: "Prompt engineering", en: "Prompt engineering" },
    desc: {
      uz: "Modeldan kerakli javobni chiqaradigan promptlar yozaman",
      en: "Writing prompts that actually get the model to the answer you need",
    },
    icon: "prompt",
  },
  {
    name: { uz: "Dasturlash", en: "Programming" },
    desc: {
      uz: "Veb-sayt va platformalar yarataman, keyin ularning ishlab turishiga qarayman",
      en: "I build websites and platforms, then keep them running",
    },
    icon: "code",
  },
  {
    name: { uz: "AI orqali avtomatlashtirish", en: "AI automation" },
    desc: {
      uz: "Bir xil ishni qayta-qayta qilmaslik uchun bot va AI agentlar yasayman",
      en: "Bots and AI agents that take repetitive work off your plate",
    },
    icon: "automation",
  },
  {
    name: { uz: "O'qitish va mentorlik", en: "Teaching & mentoring" },
    desc: {
      uz: "Hozirgacha 200 dan ortiq o'quvchi bilan amaliy dars o'tganman",
      en: "Practical classes with 200+ students so far",
    },
    icon: "graduation",
  },
  {
    name: { uz: "Startap boshqaruvi", en: "Startup management" },
    desc: {
      uz: "AvtoAI'ni g'oyadan ishlaydigan saytgacha olib keldim",
      en: "Took AvtoAI from an idea to a live product",
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
      uz: "Haydovchilik guvohnomasi imtihoniga tayyorlanish uchun platforma. Yo'l harakati qoidalarini AI yordamida o'rganasiz va imtihon savollarini yechib mashq qilasiz.",
      en: "A platform for getting ready for the driver's licence exam. You learn the traffic rules with help from AI and practise on real exam-style questions.",
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
      uz: "Onlayn test platformasi. Jamoada dasturchi bo'lib ishlaganman: yangi imkoniyatlar qo'shganman va saytning ishlab turishiga qaraganman.",
      en: "An online testing platform. I worked on it as a developer, adding features and keeping the site running.",
    },
    site: "https://testbor.uz",
    repo: "",
  },
];

// Chiqishlar (video) va tadbirlar
export const talks = [
  {
    title: { uz: "AI bilan kod yozish: jonli efir", en: "Coding with AI: live stream" },
    description: {
      uz: "Qaysi vositalardan foydalanaman, ular bilan qanday ishlayman va endi boshlayotganlarga nima maslahat beraman. Shular haqida gaplashdik.",
      en: "Which tools I use, how I work with them, and what I'd tell someone who's just starting out.",
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
      uz: "Istanbulda o'tgan xalqaro yoshlar assambleyasi, mavzusi “Sustainable Leadership in a Changing World” edi. Muhokamalarda qatnashdim va ishtirok sertifikatini oldim.",
      en: "An international youth assembly in Istanbul on “Sustainable Leadership in a Changing World”. I joined the discussions and received a certificate of participation.",
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
      uz: "Google tayyorlagan 4 ta kursdan iborat dastur. Unda prompt yozish, ma'lumotni tahlil qilish va murakkab vazifalarni AI bilan bajarish o'rgatiladi.",
      en: "Four courses from Google on writing prompts, analysing data and handling bigger tasks with AI.",
    },
    images: ["/certificates/google-prompting-essentials.webp"],
    verify: "https://coursera.org/verify/specialization/XJ70XFV45JPT",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: { uz: "2026", en: "2026" },
    description: {
      uz: "Anthropic'ning Claude bilan ishlash bo'yicha rasmiy kursi.",
      en: "Anthropic's official course on working with Claude.",
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
      uz: "BAA va O'zbekiston hukumatlarining qo'shma dasturi. Maqsad 5 million kishiga AI bilan ishlash va prompt yozishni o'rgatish.",
      en: "A joint UAE–Uzbekistan government program that aims to teach five million people to work with AI and write prompts.",
    },
    images: ["/certificates/five-million-ai-leaders.webp"],
    verify: "",
  },
  {
    title: "Prompt Engineering",
    issuer: { uz: "Najot Ta'lim o'quv markazi", en: "Najot Ta'lim training center" },
    date: { uz: "28 fevral, 2026", en: "February 28, 2026" },
    description: {
      uz: "Kursni a'lo baholar bilan tugatdim. Sertifikatdan tashqari markaz rahbariyati tashakkurnoma ham berdi.",
      en: "Finished the course with top marks. On top of the certificate, the center's leadership gave me a letter of thanks.",
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
      uz: "Haydovchilik imtihoniga AI yordamida tayyorlanish platformasi",
      en: "A platform that helps people prepare for the driver's licence exam with AI",
    },
    bullets: [
      {
        uz: "Mahsulotni o'zim boshqaraman: nima qilinadi, qanday qilinadi va qachon chiqadi",
        en: "I run the product: what gets built, how, and when it ships",
      },
      {
        uz: "AI'ni imtihonga tayyorlanish jarayonining ichiga olib kiraman",
        en: "Bringing AI into the way people actually study for the exam",
      },
    ],
  },
  {
    period: { uz: "Hozirgi vaqtda", en: "Present" },
    role: { uz: "AI coding va prompt engineering ustozi", en: "AI Coding & Prompt Engineering Mentor" },
    org: "Najot Ta'lim o'quv markazi",
    description: { uz: "", en: "" },
    bullets: [
      { uz: "Hozirgacha 200 dan ortiq o'quvchiga dars berdim", en: "Taught more than 200 students so far" },
      {
        uz: "Darslarda AI vositalari bilan haqiqiy kod yozamiz",
        en: "In class we write real code with AI tools",
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
        uz: "Onlayn test platformasiga yangi imkoniyatlar qo'shganman va uning ishlab turishiga qaraganman",
        en: "Added features to an online testing platform and kept it running",
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
      badge: "Yangi loyiha va darslarga tayyorman",
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
      title: "Nima bilan shug'ullanaman",
      sub: "Kundalik ishimda shulardan foydalanaman",
    },
    projects: {
      tag: "Loyihalar",
      title: "Loyihalarim",
      sub: "O'zim asos solgan va jamoada qatnashgan loyihalar",
      visit: "Saytga o'tish",
      code: "Kodni ko'rish",
    },
    events: {
      tag: "Chiqishlar va tadbirlar",
      title: "Video va tadbirlar",
      sub: "AI coding haqidagi chiqishlarim va qatnashgan tadbirlarim",
      watch: "YouTube'da ko'rish",
      certificate: "Sertifikat",
      openCertificate: "Sertifikatni kattalashtirish",
    },
    certificates: {
      tag: "Sertifikatlar",
      title: "AI sertifikatlarim",
      sub: "AI va prompt engineering bo'yicha tugatgan kurslarim",
      verify: "Tekshirish",
      open: "Kattalashtirish",
    },
    experience: {
      tag: "Kasbiy yo'l",
      title: "Ish tajribasi",
      sub: "Qayerlarda ishlaganman va u yerda nima qilganman",
    },
    contact: {
      tag: "Aloqa",
      title: "Biror fikringiz bormi?",
      sub: "Dars, hamkorlik yoki loyiha bo'yicha bemalol yozing. Imkon qadar tez javob beraman.",
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
        "Startap yoki mahsulot ustida birga ishlash",
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
      badge: "Taking on new projects and classes",
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
      sub: "The things I work with day to day",
    },
    projects: {
      tag: "Projects",
      title: "My Projects",
      sub: "Things I founded or helped build",
      visit: "Visit site",
      code: "View code",
    },
    events: {
      tag: "Talks & events",
      title: "Videos & Events",
      sub: "My talks on AI coding and events I've attended",
      watch: "Watch on YouTube",
      certificate: "Certificate",
      openCertificate: "Open certificate",
    },
    certificates: {
      tag: "Certificates",
      title: "AI Certificates",
      sub: "Courses I've completed in AI and prompt engineering",
      verify: "Verify",
      open: "View full size",
    },
    experience: {
      tag: "Career",
      title: "Work Experience",
      sub: "Where I've worked and what I did there",
    },
    contact: {
      tag: "Contact",
      title: "Got something in mind?",
      sub: "Classes, a collaboration or a project idea: just send a message and I'll get back to you as soon as I can.",
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
        "Working together on a startup or product",
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
