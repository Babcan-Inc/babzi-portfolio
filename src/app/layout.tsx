import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "BABZI — Protocol incentives, governance, agent economies",
  description:
    "Independent research on protocol incentive design, governance architecture, and economies for autonomous agents.",
  metadataBase: new URL("https://babzi.xyz"),
  openGraph: {
    title: "BABZI",
    description:
      "I design systems for how economies reward behaviour, including when agents become actors.",
    url: "https://babzi.xyz",
    siteName: "BABZI",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BABZI — protocol systems for how economies reward behaviour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Babzi_web3",
    creator: "@Babzi_web3",
    title: "BABZI",
    description:
      "I design systems for how economies reward behaviour, including when agents become actors.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen antialiased">{children}</body>
    </html>
  );
}
