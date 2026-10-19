import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-geist-mono" });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bricolage",
});

const description =
  "Samandar Sultonov — AI ustozi va AvtoAI asoschisi. AI'ni noldan o'rgatadi va ishlarni AI bilan avtomatlashtiradi. 200+ o'quvchiga dars bergan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sultonovsamandar.vercel.app"),
  title: {
    default: `${profile.fullName} — AI Mentor & Automation`,
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
    "AI Automation",
    "AI avtomatlashtirish",
    "AvtoAI",
    "Najot Ta'lim",
    "Uzbekistan",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    title: `${profile.fullName} — AI Mentor & Automation`,
    description,
    siteName: profile.fullName,
    images: [{ url: profile.photo, width: 1023, height: 1537, alt: profile.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — AI Mentor & Automation`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${geist.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body className="glow-bg grid-bg">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
