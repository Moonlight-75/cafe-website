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
          Since 2022
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
                Where Stories Begin
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-600 leading-relaxed">
                <p>
                  Fiction Cafe started with a simple idea — what if a cafe
                  could feel like your favourite book? A place where you walk
                  in, the aroma of freshly brewed coffee wraps around you, and
                  suddenly the world outside fades into the pages of something
                  beautiful.
                </p>
                <p>
                  We crafted every corner with intention: warm lighting for late-
                  night readers, cozy nooks for deep conversations, and a menu
                  that reads like a bestseller. Each drink has a story — from
                  our signature Fiction Latte to our seasonal chapter specials.
                </p>
                <p>
                  What hasn&apos;t changed is our commitment to quality,
                  affordability, and that warm, welcoming feeling you get the
                  moment you walk through our doors. Whether you&apos;re here
                  to work, read, catch up with friends, or simply exist —
                  there&apos;s always a seat and a story waiting for you.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <PlaceholderImage
                src="/images/about-story.jpg"
                alt="Fiction Cafe Story"
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
