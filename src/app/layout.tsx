import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/data/portfolioData";
import { SITE_URL } from "@/data/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PERSONAL_INFO.name} | Full Stack Software Engineer`,
  description: PERSONAL_INFO.summary,
  keywords: [PERSONAL_INFO.name, "Full Stack Developer", ...SKILL_CATEGORIES.flatMap(category => category.skills.map(skill => skill.name))],
  authors: [{ name: PERSONAL_INFO.name }],
  alternates: { canonical: SITE_URL },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }] },
  openGraph: {
    title: `${PERSONAL_INFO.name} | Full Stack Software Engineer`,
    description: PERSONAL_INFO.summary,
    url: SITE_URL,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    locale: "en_PK",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${PERSONAL_INFO.name} - Full Stack Software Engineer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full Stack Software Engineer`,
    description: PERSONAL_INFO.summary,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-gray-100 selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
