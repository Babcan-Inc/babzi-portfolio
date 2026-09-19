import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BABZI — Protocol incentives, governance, agent economies",
  description:
    "Independent research on protocol incentive design, governance architecture, and economies for autonomous agents. Written reviews for teams shipping token or points systems.",
  metadataBase: new URL("https://babzi.xyz"),
  openGraph: {
    title: "BABZI",
    description:
      "Protocol incentives, governance design, and agent economies. Written Protocol Incentive and Actor Reviews.",
    url: "https://babzi.xyz",
    siteName: "BABZI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Babzi_web3",
    creator: "@Babzi_web3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
