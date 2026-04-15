import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — XOFI",
  description:
    "Learn the story behind XOFI — from KOFI to three locations across Terengganu. Love, peace, and good coffee since 2020.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
