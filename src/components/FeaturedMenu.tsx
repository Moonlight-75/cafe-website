"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import useScrollReveal from "@/hooks/useScrollReveal";

const featured = [
  {
    name: "XOF Latte",
    description:
      "Our signature silky latte — the drink that put XOFI on the map. Smooth, rich, and perfectly balanced.",
    price: "RM 6",
    category: "Signature",
    image: "/images/menu/xof-latte.jpg",
  },
  {
    name: "Salted Caramel Macchiato",
    description:
      "Indulgent layers of espresso, steamed milk, and buttery salted caramel. A fan favourite for a reason.",
    price: "RM 7",
    category: "Popular",
    image: "/images/menu/salted-caramel-macchiato.jpg",
  },
  {
    name: "Cinnamon Dolce Latte",
    description:
      "A warm, aromatic latte infused with cinnamon — it's got that extra umph that keeps you coming back.",
    price: "RM 7",
    category: "Popular",
    image: "/images/menu/cinnamon-latte.jpg",
  },
  {
    name: "Strawberry Smoothie",
    description:
      "A refreshing ice blended strawberry smoothie — perfect for cooling down on warm Terengganu days.",
    price: "RM 9",
    category: "Ice Blended",
    image: "/images/menu/strawberry-smoothie.jpg",
  },
];

export default function FeaturedMenu() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold text-warm-700 uppercase tracking-widest">
            Fan Favourites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mt-3 tracking-tight">
            What People Love
          </h2>
          <p className="text-charcoal-600 mt-3 max-w-md mx-auto">
            The drinks our customers keep coming back for, every single day.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {featured.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden border border-cream-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square bg-cream-100">
                <PlaceholderImage
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  label={item.name}
                />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-medium text-warm-700 bg-cream-100 px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-lg font-bold text-warm-700">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-sm font-medium text-warm-700 hover:text-warm-800 transition-colors"
          >
            See Full Menu
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3h7v7M13 3L5 11" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
