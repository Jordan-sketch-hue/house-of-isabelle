import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "House of Isabel — Luxury Hair Extensions Jamaica",
  description:
    "Raw single-donor hair extensions, wigs and closures. Sourced with intention. Worn with confidence.",
  openGraph: {
    title: "House of Isabel",
    description: "Luxury hair extensions. Sourced with intention.",
    url: "https://house-of-isabel.vercel.app",
    siteName: "House of Isabel",
    locale: "en_JM",
    type: "website",
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
      className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body style={{ background: "var(--obsidian)", color: "var(--fg)" }}>
        {children}
      </body>
    </html>
  );
}
