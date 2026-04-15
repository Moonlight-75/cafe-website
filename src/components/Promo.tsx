"use client";

import Link from "next/link";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Promo() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [btnRef, btnVisible] = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-warm-800 text-cream-50">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-cream-50">
            Deals & Perks
          </h2>
          <p className="text-cream-300 mt-4 text-lg leading-relaxed">
            We love giving back to our community.
          </p>
        </div>
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-6 mt-10 transition-all duration-700 delay-200 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-cream-50 rounded-2xl p-6">
            <p className="text-3xl font-bold text-warm-700">10%</p>
            <p className="text-sm text-charcoal-800 font-medium mt-2">Student Discount</p>
            <p className="text-xs text-charcoal-600 mt-1">
              Available every day — just show your student ID
            </p>
          </div>
          <div className="bg-cream-50 rounded-2xl p-6">
            <p className="text-3xl font-bold text-warm-700">20%</p>
            <p className="text-sm text-charcoal-800 font-medium mt-2">Happy Hour</p>
            <p className="text-xs text-charcoal-600 mt-1">
              Every day from 9AM – 11AM
            </p>
          </div>
          <div className="bg-cream-50 rounded-2xl p-6">
            <p className="text-3xl font-bold text-warm-700">Free</p>
            <p className="text-sm text-charcoal-800 font-medium mt-2">Street Parking</p>
            <p className="text-xs text-charcoal-600 mt-1">
              Free parking lot available for all customers
            </p>
          </div>
        </div>
        <div
          ref={btnRef}
          className={`mt-10 transition-all duration-700 delay-300 ${
            btnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/contact"
            className="inline-block bg-cream-50 text-charcoal-900 px-8 py-3 rounded-full font-medium hover:bg-cream-100 transition-colors"
          >
            Visit Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
