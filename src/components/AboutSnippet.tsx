"use client";

import PlaceholderImage from "./PlaceholderImage";
import Link from "next/link";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function AboutSnippet() {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-charcoal-900 text-cream-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          ref={textRef}
          className={`transition-all duration-700 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight leading-tight">
            Where Stories Begin
          </h2>
          <p className="text-cream-300 mt-6 leading-relaxed">
            Fiction Cafe was born from a love of two things — great coffee and
            great stories. We believe every cup should spark a conversation,
            every visit should feel like a new chapter, and every customer
            should leave feeling inspired.
          </p>
          <p className="text-cream-300 mt-4 leading-relaxed">
            We keep our prices pocket-friendly while never compromising on
            quality — from the beans we choose to the care our baristas put into
            every cup. Because the best stories are the ones everyone can
            access.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 bg-warm-700 text-cream-50 px-8 py-3 rounded-full font-medium hover:bg-warm-600 transition-colors"
          >
            Read More
          </Link>
        </div>
        <div
          ref={imgRef}
          className={`relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <PlaceholderImage
            src="/images/about-cafe.jpg"
            alt="Fiction Cafe Interior"
            fill
            className="object-cover"
            label="Cafe interior photo"
          />
        </div>
      </div>
    </section>
  );
}
