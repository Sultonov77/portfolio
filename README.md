# Portfolio

Shaxsiy portfolio sayt — Next.js, TypeScript va Tailwind CSS asosida. Dark, minimal dizayn, o'zbekcha/inglizcha til almashtirgichi bilan.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda [http://localhost:3000](http://localhost:3000) ni oching.

## Matnlarni o'zgartirish

Saytdagi **barcha matnlar, loyihalar, ko'nikmalar va aloqa ma'lumotlari** bitta faylda:

```
lib/content.ts
```

Boshqa hech qaysi faylga tegish shart emas. U yerda:

| Bo'lim | Nima uchun |
| --- | --- |
| `profile` | Ism, email, joylashuv, ijtimoiy tarmoq havolalari |
| `t` | Sayt interfeysi matnlari (uz / en) |
| `skillGroups` | Ko'nikmalar bo'limi |
| `projects` | Loyihalar ro'yxati |
| `experience` | Ish tajribasi (timeline) |

## Rangni o'zgartirish

`app/globals.css` faylidagi `@theme` blokida:

```css
--color-accent: #6d8bff;   /* asosiy aksent */
--color-accent-2: #b07cff; /* ikkinchi aksent */
```

## Rezyume (CV) qo'shish

1. PDF faylni `public/resume.pdf` ga qo'ying
2. `lib/content.ts` da `resumeUrl: "/resume.pdf"` deb yozing

## Build

```bash
npm run build
```

## Deploy

Vercel'ga ulangan — `main` branch'ga har bir push avtomatik deploy bo'ladi.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
