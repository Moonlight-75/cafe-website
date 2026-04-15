"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative bg-charcoal-900 text-cream-50 overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <PlaceholderImage
          src="/images/hero.jpg"
          alt="Fiction Cafe"
          fill
          className="object-cover"
          label="Hero background image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-charcoal-900/50 to-charcoal-900" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-44 flex flex-col items-center text-center w-full">
        <span className="text-sm font-medium text-warm-600 uppercase tracking-widest mb-4">
          Where Stories Meet Coffee
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Brewed With
          <br />
          <span className="text-warm-600">Imagination</span>
        </h1>
        <p className="text-lg text-cream-300 max-w-xl leading-relaxed mb-10">
          A cozy cafe where every cup tells a story. Expertly crafted coffee,
          ice blended drinks, and pastries — all at pocket-friendly prices.
        </p>
        <div className="flex gap-4">
          <Link
            href="/menu"
            className="bg-warm-700 text-cream-50 px-8 py-3 rounded-full font-medium hover:bg-warm-600 transition-colors"
          >
            Explore Menu
          </Link>
          <Link
            href="/contact"
            className="border border-cream-300/30 text-cream-50 px-8 py-3 rounded-full font-medium hover:bg-cream-50/10 transition-colors"
          >
            Visit Us
          </Link>
        </div>

        <div className="mt-12 flex gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-warm-600">4.8</p>
            <p className="text-xs text-cream-400 mt-1">Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-warm-600">625+</p>
            <p className="text-xs text-cream-400 mt-1">Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-warm-600">3</p>
            <p className="text-xs text-cream-400 mt-1">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
