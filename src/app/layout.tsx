import type { Metadata } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const display = Newsreader({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" as const };

export const metadata: Metadata = {
  title: "Babzi.xyz — Protocol incentives · Governance · Token design · Agentic economies",
  description: "The economy receives the behaviour it makes profitable. I stress test that system.",
  metadataBase: new URL("https://www.babzi.xyz"),
  openGraph: {
    title: "Babzi.xyz",
    description: "The economy receives the behaviour it makes profitable.",
    url: "https://www.babzi.xyz",
    siteName: "Babzi.xyz",
    type: "website",
    images: [{ url: "https://www.babzi.xyz/og.png", width: 1200, height: 630, alt: "Babzi.xyz" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Its_Babzi",
    creator: "@Its_Babzi",
    title: "Babzi.xyz",
    description: "The economy receives the behaviour it makes profitable.",
    images: ["https://www.babzi.xyz/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={display.variable + " " + sans.variable}><body className="font-sans min-h-screen antialiased">{children}</body></html>;
}
