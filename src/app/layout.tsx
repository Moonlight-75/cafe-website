import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiction Cafe — Brewed With Imagination",
  description:
    "Fiction Cafe is a cozy cafe where stories meet coffee. Expertly crafted coffee, ice blended drinks, and pastries — your go-to spot for great vibes and better coffee.",
  openGraph: {
    title: "Fiction Cafe — Brewed With Imagination",
    description:
      "Expertly crafted coffee, ice blended drinks, and pastries — all at pocket-friendly prices. A cafe where every cup tells a story.",
    siteName: "Fiction Cafe",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiction Cafe — Brewed With Imagination",
    description:
      "Expertly crafted coffee, ice blended drinks, and pastries — all at pocket-friendly prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
