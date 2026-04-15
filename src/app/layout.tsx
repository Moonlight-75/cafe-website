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
  title: "XOFI — Love, Peace, and Good Coffee",
  description:
    "XOFI is a cozy cafe in Gong Badak, Kuala Terengganu. Expertly crafted coffee, ice blended drinks, and pastries — your go-to spot for great vibes and better coffee.",
  openGraph: {
    title: "XOFI — Love, Peace, and Good Coffee",
    description:
      "Expertly crafted coffee, ice blended drinks, and pastries — all at pocket-friendly prices. Visit us in Gong Badak, Kuala Terengganu.",
    url: "https://xofi.com.my",
    siteName: "XOFI",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XOFI — Love, Peace, and Good Coffee",
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
