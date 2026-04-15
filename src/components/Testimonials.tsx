"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Sarah S.",
    text: "The XOF Latte and iced chocolate — chef's kiss! Strawberry danish sedap! Fast service and the staff are super helpful with suggestions.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Ben Hur T.",
    text: "The aroma of coffee is so good! Cinnamon coffee with extra cinnamon is my fav. The best coffee in Kuala Terengganu.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Nurhanisah N.",
    text: "Nice and convenient cafe with affordable price. Various choices of beverages and pastries. Hygiene and open kitchen concept.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Rahaizad J.",
    text: "Salted Caramel Latte and pastries were great. The barista was friendly and the ambiance was cozy. Will definitely be returning.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Min K.",
    text: "My favourite coffee place ever! I strongly recommend their XOF Latte and Salted Caramel Macchiato! Love the friendly staff.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Muhammad Y.",
    text: "Suitable for special occasions with loved ones. Clean, friendly staff, great atmosphere and cozy place. Recommended!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Intro To Lang",
    text: "Staff are super friendly and very polite. The food is tasty and comes at an affordable price. Service is tip top!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Ainaa A.",
    text: "Friendly staff & their star coffee definitely worthy. Definitely worth a visit if you're in the area!",
    rating: 5,
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-warm-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [sliderRef, sliderVisible] = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doubled = [...testimonials, ...testimonials];

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
      resumeTimeout.current = null;
    }
  }, []);

  const resumeAutoScroll = useCallback(() => {
    clearResumeTimeout();
    resumeTimeout.current = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 1s ease-in-out";
        trackRef.current.style.transform = "";
        currentTranslate.current = 0;
        prevTranslate.current = 0;
        setPaused(false);
      }
    }, 2000);
  }, [clearResumeTimeout]);

  useEffect(() => {
    return () => clearResumeTimeout();
  }, [clearResumeTimeout]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      prevTranslate.current = currentTranslate.current;
      setPaused(true);
      clearResumeTimeout();
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
    },
    [clearResumeTimeout]
  );

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const diff = e.touches[0].clientX - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
    trackRef.current.style.transform = `translateX(calc(-50% + ${currentTranslate.current}px))`;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    resumeAutoScroll();
  }, [resumeAutoScroll]);

  return (
    <section className="py-24 px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold text-warm-700 uppercase tracking-widest">
            625+ Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-3 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        <div
          ref={sliderRef}
          className={`overflow-hidden transition-all duration-700 delay-200 ${
            sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            resumeAutoScroll();
          }}
          style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}
        >
          <div
            ref={trackRef}
            className={`flex gap-6 ${paused ? "animate-scroll-paused" : "animate-scroll"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {doubled.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-white rounded-2xl p-5 border border-cream-200 w-[300px] md:w-[340px] shrink-0"
              >
                <Stars count={t.rating} />
                <p className="text-charcoal-600 text-sm leading-relaxed mb-3 line-clamp-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
                  <span className="text-xs text-cream-400">{t.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
