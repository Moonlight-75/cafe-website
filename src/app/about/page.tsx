"use client";

import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

const values = [
  {
    title: "Quality First",
    description:
      "Every cup is brewed with precision and care. We source quality beans and train our baristas to bring out the best in every pour.",
  },
  {
    title: "Affordable for All",
    description:
      "Great coffee shouldn't break the bank. Our prices are kept pocket-friendly so everyone can enjoy a good cup — students included.",
  },
  {
    title: "Community Hub",
    description:
      "More than a cafe — we're a gathering place for university students, families, friends, and anyone who needs a cozy spot to work or unwind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal-900 text-cream-50 py-16 px-6 text-center">
        <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest">
          Since 2020
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          Our Story
        </h1>
      </section>

      <section className="py-20 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold text-charcoal-900 tracking-tight">
                From KOFI to XOFI
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  It all started in 2020 with a simple dream — serve the best
                  coffee in Kuala Terengganu. Back then, we were called KOFI. A
                  small spot, big dreams, and an unwavering belief that everyone
                  deserves access to great coffee.
                </p>
                <p>
                  As we grew, so did our identity. We rebranded to XOFI — a
                  name that reflects who we&apos;ve become: bold, modern, and
                  rooted in our community. Today, XOFI has three locations
                  across Terengganu: Gong Badak, Jalan Sultan Omar, and Chukai.
                </p>
                <p>
                  What hasn&apos;t changed is our commitment to quality,
                  affordability, and that warm, welcoming feeling you get the
                  moment you walk through our doors. Whether you&apos;re a
                  first-timer or a regular, we treat everyone like family.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <PlaceholderImage
                src="/images/about-story.jpg"
                alt="XOFI Story"
                fill
                className="object-cover"
                label="Story photo"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 tracking-tight text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="text-center bg-white rounded-2xl p-6 border border-cream-200"
                >
                  <h3 className="text-lg font-bold text-charcoal-900 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/menu"
              className="inline-block bg-warm-700 text-cream-50 px-8 py-3 rounded-full font-medium hover:bg-warm-600 transition-colors"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
