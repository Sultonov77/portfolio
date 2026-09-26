import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

const description =
  "Samandar Sultonov — AI ustozi va AvtoAI asoschisi. AI yordamida dasturlash va prompt engineering bo'yicha 200+ o'quvchiga dars bergan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sultonovsamandar.vercel.app"),
  title: {
    default: `${profile.fullName} — AI Mentor & Startup Founder`,
    template: `%s — ${profile.fullName}`,
  },
  description,
  keywords: [
    profile.fullName,
    "Samandar Sultonov",
    "Portfolio",
    "AI ustozi",
    "AI Mentor",
    "Prompt Engineering",
    "AI Coding",
    "AvtoAI",
    "Najot Ta'lim",
    "Uzbekistan",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    title: `${profile.fullName} — AI Mentor & Startup Founder`,
    description,
    siteName: profile.fullName,
    images: [{ url: profile.photo, width: 1023, height: 1537, alt: profile.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — AI Mentor & Startup Founder`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
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
