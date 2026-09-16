import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" });

const description =
  "Sultonov Samandar — Full-Stack Dasturchi & Mahsulot Yaratuvchisi. Veb-ilovalar, SaaS, mobil tizimlar va sun'iy intellekt integratsiyalari.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sultonovsamandar.uz"),
  title: {
    default: `${profile.fullName} — Full-Stack Developer & Product Builder`,
    template: `%s — ${profile.fullName}`,
  },
  description,
  keywords: [
    profile.fullName,
    "Samandar Sultonov",
    "Portfolio",
    "Full-Stack Developer",
    "Web Designer",
    "Next.js",
    "React",
    "UI/UX Design",
    "Uzbekistan",
    "AI Integration",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    title: `${profile.fullName} — Full-Stack Developer & Product Builder`,
    description,
    siteName: profile.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — Full-Stack Developer & Product Builder`,
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
