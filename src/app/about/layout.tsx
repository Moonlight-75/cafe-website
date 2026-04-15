import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Fiction Cafe",
  description:
    "Learn the story behind Fiction Cafe — where stories meet coffee and every cup sparks a new chapter.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
