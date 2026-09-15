import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

const description =
  "Founder & full-stack developer. Startaplar va raqamli mahsulotlar quraman — g'oyadan ishga tushirishgacha.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vercel.app"),
  title: {
    default: `${profile.fullName} — Founder & Full-stack Developer`,
    template: `%s — ${profile.fullName}`,
  },
  description,
  keywords: [
    profile.fullName,
    "portfolio",
    "full-stack developer",
    "Next.js",
    "React",
    "Uzbekistan",
    "startup founder",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    title: `${profile.fullName} — Founder & Full-stack Developer`,
    description,
    siteName: profile.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — Founder & Full-stack Developer`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={inter.className}>
      <body className="glow-bg grid-bg">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
