// ─────────────────────────────────────────────────────────────
//  BARCHA SAYT MA'LUMOTLARI VA MATNLARI
//  ALL SITE CONTENT & DATA FOR SULTONOV SAMANDAR
// ─────────────────────────────────────────────────────────────

export type Lang = "uz" | "en";

export const profile = {
  name: "Samandar",
  surname: "Sultonov",
  fullName: "Sultonov Samandar",
  role: {
    uz: "Full-Stack Dasturchi & Mahsulot Yaratuvchisi",
    en: "Full-Stack Developer & Product Builder",
  },
  headline: {
    uz: "G'oyalarni ishlaydigan va daromad keltiruvchi raqamli mahsulotlarga aylantiraman.",
    en: "I turn ideas into high-converting, scalable digital products that people love.",
  },
  sub: {
    uz: "Veb-ilovalar, mobil tizimlar va sun'iy intellekt integratsiyalari — g'oyadan boshlab arxitektura, dizayn va to'liq ishga tushirishgacha.",
    en: "From idea & UI/UX design to robust backend architecture and scalable web & mobile apps that ship on time.",
  },
  email: "samtall758@gmail.com",
  phone: "+998 94 522 50 70",
  phoneRaw: "+998945225070",
  location: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" },
  avatarInitials: "SS",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Sultonov77", icon: "github" },
    { label: "Telegram", href: "https://t.me/sultonov28", icon: "telegram" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" },
    { label: "Email", href: "mailto:samtall758@gmail.com", icon: "mail" },
  ],
};

export const heroStats = [
  {
    value: "5+",
    label: { uz: "Yillik Tajriba", en: "Years Experience" },
  },
  {
    value: "25+",
    label: { uz: "Yakunlangan Loyiha", en: "Shipped Projects" },
  },
  {
    value: "10k+",
    label: { uz: "Faol Foydalanuvchilar", en: "Active Users" },
  },
  {
    value: "99%",
    label: { uz: "Mijozlar Mamnuniyati", en: "Client Satisfaction" },
  },
];

export const problemSolvers = {
  tag: { uz: "Bizning Yondashuv", en: "Our Approach" },
  title: {
    uz: "Raqamli Mahsulotlar Uchun Professional Yechimlar",
    en: "Professional Problem Solvers For Digital Products",
  },
  desc: {
    uz: "Zamonaviy biznes faqat koddan iborat emas. Har bir loyihada mahsulot qiymati, yuqori tezlik, intuitiv UI/UX dizayn va ishonchli arxitektura uyg'unligini ta'minlaymiz.",
    en: "Digital success requires more than just code. We blend product strategy, intuitive UI/UX design, and clean scalable engineering to achieve real business impact.",
  },
  checkmarks: [
    { uz: "Tezkor va sifatli yetkazib berish", en: "Fast & reliable turnaround" },
    { uz: "Piksel darajasida aniq UI/UX dizayn", en: "Pixel-perfect modern UI/UX" },
    { uz: "Toza, xavfsiz va kengayuvchan kod", en: "Clean, secure & scalable architecture" },
    { uz: "24/7 To'g'ridan-to'g'ri asoschi aloqasi", en: "Direct founder-level communication" },
  ],
  metric: {
    badge: "100%",
    title: { uz: "Sifat Kafolati", en: "Quality Guarantee" },
    desc: { uz: "Har bir buyurtma sinchkovlik bilan sinovdan o'tadi", en: "Every product is meticulously tested before launch" },
  },
};

export const specializations = [
  {
    id: "01",
    title: { uz: "Veb Ilovalar & SaaS", en: "Web Applications & SaaS" },
    desc: {
      uz: "Next.js va React asosida yuqori tezlikda ishlaydigan, SEO optimallashgan murakkab veb platformalar va CRM tizimlari.",
      en: "High-performance Next.js & React web platforms, enterprise SaaS portals, and responsive dashboards.",
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "02",
    title: { uz: "Mobil Ilovalar Ishlab Chiqish", en: "Mobile App Development" },
    desc: {
      uz: "iOS va Android uchun silliq animatsiyali, qulay interfeysli va offline rejimda ishlay oluvchi zamonaviy ilovalar.",
      en: "Cross-platform mobile applications for iOS & Android with buttery-smooth interactions and native feel.",
    },
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "03",
    title: { uz: "UI/UX & Mahsulot Dizayni", en: "UI/UX & Product Design" },
    desc: {
      uz: "Figma orqali foydalanuvchi psixologiyasiga mos zamonaviy dizayn-tizimlar, interaktiv prototiplar va wireframelar.",
      en: "Conversion-oriented design systems, intuitive user flows, dark/light interfaces, and interactive Figma prototypes.",
    },
    tags: ["Figma", "Design Systems", "Prototyping", "Micro-UX"],
  },
  {
    id: "04",
    title: { uz: "Sun'iy Intellekt & Avtomatlashtirish", en: "AI & Smart Automation" },
    desc: {
      uz: "OpenAI, Claude API va mahalliy LLM larni veb-loyihalarga ulash, AI botlar va aqlli biznes-jarayonlar integratsiyasi.",
      en: "Integrating LLMs (Claude, OpenAI, Gemini), RAG knowledge bases, intelligent assistants, and automated workflows.",
    },
    tags: ["OpenAI API", "Claude API", "RAG", "Automation"],
  },
  {
    id: "05",
    title: { uz: "Backend & Bulutli API lar", en: "Backend & Cloud Architecture" },
    desc: {
      uz: "Node.js, Python, PostgreSQL va Supabase yordamida millionlab so'rovlarni ko'tara oluvchi xavfsiz backend arxitekturasi.",
      en: "Resilient REST/GraphQL APIs, relational database design, caching layers, and serverless cloud functions.",
    },
    tags: ["Node.js", "Python", "PostgreSQL", "Supabase", "Docker"],
  },
  {
    id: "06",
    title: { uz: "SEO & Tezlik Optimizatsiyasi", en: "SEO & Speed Optimization" },
    desc: {
      uz: "Google PageSpeed 95+ ballga erishish, qidiruv tizimlarida birinchi o'rinlarga chiqish va konversiyani oshirish.",
      en: "Core Web Vitals tuning, technical SEO audits, 95+ PageSpeed scores, and conversion rate optimization.",
    },
    tags: ["Core Web Vitals", "Technical SEO", "Lighthouse 99+", "Analytics"],
  },
];

export const skillsList = [
  { name: "React / Next.js", level: 95, icon: "react", category: "frontend" },
  { name: "TypeScript", level: 92, icon: "typescript", category: "frontend" },
  { name: "Node.js / Express", level: 88, icon: "nodejs", category: "backend" },
  { name: "Python / AI APIs", level: 86, icon: "python", category: "ai" },
  { name: "Tailwind CSS", level: 96, icon: "tailwind", category: "frontend" },
  { name: "PostgreSQL / Supabase", level: 90, icon: "supabase", category: "backend" },
  { name: "Figma UI/UX", level: 94, icon: "figma", category: "design" },
  { name: "Docker & Cloud", level: 82, icon: "docker", category: "devops" },
];

export const projects = [
  {
    name: "AvtoAI — Aqlli Imtihon Platformasi",
    subtitle: "Mobile & Web App",
    category: "ai",
    year: "2025",
    tags: ["Next.js", "AI Integratsiya", "Tailwind", "Supabase"],
    featured: true,
    description: {
      uz: "Haydovchilik guvohnomasi imtihoniga tayyorlovchi sun'iy intellekt platformasi. AI har bir savol mantig'ini tushuntiradi, test natijalarini tahlil qilib individual o'quv rejasini tuzadi.",
      en: "AI-driven exam preparation portal for driver license candidates. Features contextual explanations, real-time analytics, and personalized learning curves.",
    },
    site: "https://avtoai.uz",
    repo: "",
    previewType: "mobile_web",
  },
  {
    name: "Apex SaaS — Analitika & Moliya Dashboard",
    subtitle: "Website & Dashboard",
    category: "web",
    year: "2024",
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    featured: false,
    description: {
      uz: "Kompaniyalar uchun real vaqtdagi moliyaviy oqimlar, daromadlar va konversiyalarni kuzatish imkonini beruvchi yuqori tezlikdagi analitika paneli.",
      en: "High-density real-time financial tracking and KPI dashboard with customizable widgets, CSV exports, and multi-tenant authorization.",
    },
    site: "https://apex-saas-demo.vercel.app",
    repo: "https://github.com/Sultonov77",
    previewType: "desktop",
  },
  {
    name: "Nova Pay — Kripto & Fintech Mobil Hamyon",
    subtitle: "Mobile Application",
    category: "mobile",
    year: "2024",
    tags: ["React Native", "Tailwind", "Web3", "Node.js"],
    featured: false,
    description: {
      uz: "Xalqaro to'lovlar, valyuta ayirboshlash va xavfsiz tranzaksiyalarni boshqarish uchun yaratilgan qulay interfeysli mobil ilova dizayni va kodi.",
      en: "Ultra-sleek mobile crypto wallet interface featuring instant P2P transfers, biometrics, and interactive financial charts.",
    },
    site: "",
    repo: "https://github.com/Sultonov77",
    previewType: "mobile",
  },
  {
    name: "Lumina CRM — Savdo va Mijozlar Tizimi",
    subtitle: "Brand Identity & Web System",
    category: "web",
    year: "2023",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    featured: false,
    description: {
      uz: "Savdo bo'limlari uchun avtomatlashtirilgan mijozlar bazasi, sotuv voronkalari va Telegram bot orqali integratsiyalashgan boshqaruv platformasi.",
      en: "Turnkey sales management CRM with automated lead routing, pipeline Kanban boards, and Telegram notification bots.",
    },
    site: "",
    repo: "https://github.com/Sultonov77",
    previewType: "desktop",
  },
];

export const pricingPlans = [
  {
    id: "starter",
    title: { uz: "Boshlang'ich", en: "Starter Plan" },
    price: "$399",
    period: { uz: "/ loyiha", en: "/ project" },
    desc: {
      uz: "Startaplar va shaxsiy brendlar uchun zamonaviy landing sahifa.",
      en: "Ideal for early startups, portfolio showcases and landing pages.",
    },
    featured: false,
    features: [
      { uz: "Maxsus responsiv UI/UX dizayn", en: "Custom responsive UI/UX design" },
      { uz: "Next.js va Tailwind CSS asosida", en: "Built with Next.js & Tailwind CSS" },
      { uz: "Asosiy SEO va tezlik optimizatsiyasi", en: "Essential SEO & speed optimization" },
      { uz: "Aloqa formasi va Telegram integratsiyasi", en: "Contact form & Telegram alert" },
      { uz: "3 oylik texnik kafolat", en: "3 months technical warranty" },
    ],
  },
  {
    id: "standard",
    title: { uz: "Standart / Ommabop", en: "Standard / Popular" },
    price: "$899",
    period: { uz: "/ loyiha", en: "/ project" },
    desc: {
      uz: "To'liq veb-ilova, ma'lumotlar bazasi va admin paneli bilan biznes yechim.",
      en: "Full-featured web application with database, auth and admin dashboard.",
    },
    featured: true,
    badge: { uz: "Tavsiya etiladi", en: "Most Popular" },
    features: [
      { uz: "Boshlang'ich tarifning barcha xususiyatlari", en: "Everything in Starter Plan" },
      { uz: "To'liq ma'lumotlar bazasi (PostgreSQL / Supabase)", en: "Full DB setup (PostgreSQL/Supabase)" },
      { uz: "Foydalanuvchilar autentifikatsiyasi & Ruxsatlar", en: "User authentication & roles" },
      { uz: "Admin boshqaruv paneli & Analitika", en: "Custom admin dashboard & analytics" },
      { uz: "To'lov tizimlari integratsiyasi (Payme/Click/Stripe)", en: "Payment gateway integration" },
      { uz: "6 oylik bepul qo'llab-quvvatlash", en: "6 months dedicated priority support" },
    ],
  },
  {
    id: "enterprise",
    title: { uz: "Professional / SaaS", en: "Premium SaaS" },
    price: "$1,799",
    period: { uz: "/ loyiha", en: "/ project" },
    desc: {
      uz: "Murakkab korporativ platformalar, sun'iy intellekt va mobil ilovalar.",
      en: "End-to-end enterprise platform, custom AI integration and mobile app.",
    },
    featured: false,
    features: [
      { uz: "Standart tarifning barcha imkoniyatlari", en: "Everything in Standard Plan" },
      { uz: "OpenAI / Claude AI integratsiyasi & Agentlar", en: "OpenAI / Claude LLM integration & agents" },
      { uz: "Mobil ilova (iOS & Android)", en: "Cross-platform mobile app" },
      { uz: "Yuqori yuklamalarga chidamli arxitektura", en: "High-concurrency cloud architecture" },
      { uz: "DevOps & CI/CD avtomatlashtirish", en: "DevOps, Docker & automated CI/CD" },
      { uz: "1 yillik doimiy texnik nazorat", en: "1 full year SLA support & monitoring" },
    ],
  },
];

export const testimonials = [
  {
    name: "Alisher Qodirov",
    role: "CEO, FinLine Group",
    avatar: "AQ",
    rating: 5,
    quote: {
      uz: "Samandar bilan ishlash juda maroqli kechdi. Mahsulotimiz dizaynidan tortib to to'liq ishga tushishigacha barcha bosqichlarni muddatidan oldin sifatli yakunlab berdi.",
      en: "Working with Samandar was seamless. From product architecture to UI/UX and live deployment, everything was delivered ahead of schedule with top-tier quality.",
    },
  },
  {
    name: "Elena Vance",
    role: "Product Lead, EdVenture",
    avatar: "EV",
    rating: 5,
    quote: {
      uz: "AvtoAI loyihasidagi sun'iy intellekt integratsiyasi va foydalanuvchilar oqimini tashkil qilish bo'yicha yechimlari juda professional darajada amalga oshirildi.",
      en: "His expertise in AI-driven web apps and high-conversion UX design truly transformed our user engagement metrics. Highly recommended!",
    },
  },
  {
    name: "Jasur Rahimov",
    role: "Founder, Apex Logistics",
    avatar: "JR",
    rating: 5,
    quote: {
      uz: "Kompaniyamizning ichki monitoring tizimini noldan qurdik. Tezlik, qulaylik va xavfsizlik a'lo darajada. Eng muhimi — doimiy va tezkor aloqa!",
      en: "Built our enterprise dashboard from scratch. Blazing fast, clean codebase, and effortless communication. An outstanding engineer and partner.",
    },
  },
];

export const partnersLogos = [
  "Next.js",
  "React",
  "TailwindCSS",
  "TypeScript",
  "Supabase",
  "OpenAI",
  "Vercel",
  "PostgreSQL",
  "Figma",
  "Docker",
];

export const experience = [
  {
    period: { uz: "2025 — Hozir", en: "2025 — Present" },
    role: { uz: "Asoschi & Bosh Muhandis", en: "Founder & Lead Engineer" },
    org: "AvtoAI Platformasi",
    description: {
      uz: "AvtoAI platformasini noldan yaratdim: mahsulot g'oyasi, UI/UX dizayn, Next.js frontend, backend va sun'iy intellekt tahlil algoritmlari.",
      en: "Architected AvtoAI from ground zero: product validation, design system, full-stack Next.js implementation and AI scoring pipeline.",
    },
  },
  {
    period: { uz: "2023 — 2025", en: "2023 — 2025" },
    role: { uz: "Senior Full-Stack Dasturchi", en: "Senior Full-Stack Developer" },
    org: "Freelance & Startups",
    description: {
      uz: "Xalqaro va mahalliy mijozlar uchun 15+ dan ortiq veb-ilovalar, fintech hamyonlar va avtomatlashtirilgan CRM tizimlarini ishlab chiqdim.",
      en: "Engineered 15+ custom web applications, SaaS dashboards and fintech products for international and domestic clients.",
    },
  },
  {
    period: { uz: "2021 — 2023", en: "2021 — 2023" },
    role: { uz: "Frontend Dasturchi", en: "Frontend Developer" },
    org: "Digital Agency",
    description: {
      uz: "React va zamonaviy JavaScript asosida yuqori tezlikda yuklanuvchi interfeyslar, animatsiyalar va dizayn-tizimlar yaratdim.",
      en: "Built responsive web applications, design systems, and fluid micro-interactions with React, TypeScript and Tailwind CSS.",
    },
  },
];

export const t = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      services: "Xizmatlar",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      pricing: "Narxlar",
      contact: "Aloqa",
      cta: "Bog'lanish",
    },
    hero: {
      badge: "Yangi loyihalarga ochiq",
      intro: "Salom, men",
      ctaPrimary: "Loyiha boshlash",
      ctaSecondary: "CV yuklab olish",
    },
    services: {
      tag: "Mutaxassislik",
      title: "Sizning Loyihangiz Uchun Asosiy Yo'nalishlar",
      sub: "Biznesingizni yangi bosqichga olib chiqadigan professional texnik yechimlar",
    },
    skills: {
      tag: "Texnologiyalar",
      title: "Ommabop Ko'nikmalar & Tajriba",
      sub: "Har kuni ishlatadigan va eng yuqori darajada o'zlashtirilgan stack",
      exploreMore: "Ko'proq ko'rish",
    },
    projects: {
      tag: "Portfolio",
      title: "Mening Ommabop Loyihalarim",
      sub: "Real natijalar ko'rsatgan veb va mobil mahsulotlar",
      filterAll: "Barchasi",
      filterWeb: "Web Apps",
      filterMobile: "Mobile",
      filterAi: "AI & SaaS",
      visit: "Saytga o'tish",
      code: "Kodni ko'rish",
    },
    pricing: {
      tag: "Narxlar",
      title: "Loyihangiz Uchun Mos Tariflar",
      sub: "Shakllangan reja, aniq muddat va yashirin to'lovlarsiz qat'iy narxlar",
      choosePlan: "Tarifni tanlash",
    },
    testimonials: {
      tag: "Fikrlar",
      title: "Mijozlarimiz Nima Deydi?",
      sub: "Biz bilan ishlagan startap egalari va biznes rahbarlarining fikrlari",
    },
    contact: {
      tag: "Aloqa",
      title: "Keling, Yangi Loyihangiz Haqida Gaplashamiz",
      sub: "G'oyangiz bormi yoki mavjud loyihangizni yaxshilamoqchimisiz? Bizga yozing, 24 soat ichida javob qaytaramiz.",
      form: {
        firstName: "Ismingiz",
        lastName: "Familiyangiz",
        email: "Email manzilingiz",
        phone: "Telefon raqamingiz",
        service: "Qiziqtirayotgan xizmat",
        servicePlaceholder: "Xizmat turini tanlang",
        budget: "Taxminiy byudjet",
        budgetPlaceholder: "Byudjetni tanlang",
        message: "Loyiha haqida qisqacha",
        messagePlaceholder: "Loyihangiz maqsadi, talablar va muddat haqida yozing...",
        send: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        sent: "Xabaringiz muvaffaqiyatli yuborildi!",
      },
      perks: [
        "Bepul dastlabki konsultatsiya va baholash",
        "Loyiha arxitekturasi va dizayn tahlili",
        "To'g'ridan-to'g'ri dasturchi bilan muloqot",
        "Xavfsizlik va maxfiylik kafolati (NDA)",
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
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Open to new projects",
      intro: "Hello, I'm",
      ctaPrimary: "Hire Me",
      ctaSecondary: "Download CV",
    },
    services: {
      tag: "Specialization",
      title: "My Specialization For Your Next Project",
      sub: "Professional engineering solutions tailored to scale your product",
    },
    skills: {
      tag: "Tech Stack",
      title: "Let's Explore Popular Skills & Experience",
      sub: "Mastered tools and technologies applied on a daily basis",
      exploreMore: "Explore More",
    },
    projects: {
      tag: "Portfolio",
      title: "Explore My Popular Projects",
      sub: "Proven digital products built with obsessive attention to detail",
      filterAll: "All",
      filterWeb: "Web Apps",
      filterMobile: "Mobile",
      filterAi: "AI & SaaS",
      visit: "Live Demo",
      code: "View Code",
    },
    pricing: {
      tag: "Pricing",
      title: "Amazing Pricing For Your Projects",
      sub: "Transparent pricing models with clear deliverables and zero hidden fees",
      choosePlan: "Choose Plan",
    },
    testimonials: {
      tag: "Testimonials",
      title: "Positive Clients Feedback",
      sub: "What founders and product teams say about working together",
    },
    contact: {
      tag: "Get in Touch",
      title: "Let's Talk For Your Next Projects",
      sub: "Have an ambitious project or want to revamp an existing product? Let's connect.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Interested Service",
        servicePlaceholder: "Select a service",
        budget: "Estimated Budget",
        budgetPlaceholder: "Select budget range",
        message: "Project Details",
        messagePlaceholder: "Tell me about your product, timeline, and goals...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message sent successfully!",
      },
      perks: [
        "Free initial technical discovery call",
        "Architecture & design estimation",
        "Direct founder-to-founder communication",
        "NDA and confidentiality guaranteed",
      ],
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS",
      backToTop: "Back to Top",
    },
  },
} as const;

export function pick<T>(val: string | { uz: T; en: T }, lang: Lang): T | string {
  if (typeof val === "string") return val;
  return val[lang];
}
