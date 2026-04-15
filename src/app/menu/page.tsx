import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Menu — Fiction Cafe",
  description:
    "Browse Fiction Cafe's full menu — hot & iced coffee, ice blended drinks, and more. Affordable prices, expertly crafted.",
  openGraph: {
    title: "Menu — Fiction Cafe",
    description:
      "Browse Fiction Cafe's full menu — hot & iced coffee, ice blended drinks, and more. Affordable prices, expertly crafted.",
  },
};

const categories = [
  {
    name: "Coffee (Hot / Iced)",
    items: [
      { name: "Latte", description: "Smooth and silky espresso with steamed milk", price: "RM 6" },
      { name: "Caramel Latte", description: "Rich latte with buttery caramel sweetness", price: "RM 7" },
      { name: "Caramel Macchiato", description: "Layered espresso, milk, and vanilla-infused foam", price: "RM 7" },
      { name: "Hazelnut Latte", description: "Nutty, aromatic hazelnut paired with espresso", price: "RM 7" },
      { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "RM 6" },
      { name: "Americano", description: "Bold espresso diluted with hot water", price: "RM 5" },
      { name: "Mocha", description: "Espresso meets rich chocolate and steamed milk", price: "RM 7" },
      { name: "Chocolate", description: "Creamy hot chocolate — comfort in a cup", price: "RM 6" },
      { name: "Matcha", description: "Japanese matcha whisked to perfection", price: "RM 6" },
      { name: "Mojito", description: "Refreshing mint and lime cooler", price: "RM 5" },
    ],
  },
  {
    name: "Ice Blended",
    items: [
      { name: "Choc Chip Frappuccino", description: "Chocolate frappe loaded with chocolate chips", price: "RM 11.50" },
      { name: "Ice Blended Caramel Macchiato", description: "Iced caramel macchiato blended to perfection", price: "RM 11" },
      { name: "Ice Blended Mocha", description: "Rich chocolate and espresso blended smooth", price: "RM 11" },
      { name: "Ice Blended Mocha Oreo", description: "Mocha frappe with crushed Oreo cookies", price: "RM 13" },
      { name: "Ice Blended Vanilla Oreo", description: "Vanilla frappe topped with Oreo crumble", price: "RM 10" },
      { name: "Ice Blended Vanilla Caramel", description: "Smooth vanilla and caramel ice blend", price: "RM 9" },
      { name: "Ice Blended Double Choc Chip", description: "Double chocolate with extra choc chips", price: "RM 9.50" },
      { name: "Ice Blended Chocolate", description: "Classic chocolate ice blended", price: "RM 9" },
      { name: "Ice Blended Matcha", description: "Refreshing matcha frappe", price: "RM 8" },
      { name: "Strawberry Smoothie", description: "Fresh strawberry smoothie — cool and fruity", price: "RM 9" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <section className="bg-charcoal-900 text-cream-50 py-16 px-6 text-center">
        <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest">
          Something for Everyone
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          Our Menu
        </h1>
        <p className="text-cream-300 mt-3 max-w-md mx-auto">
          Expertly crafted coffee, refreshing ice blended drinks, and tasty
          pastries — all at pocket-friendly prices.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm text-cream-400">
          <span>10% student discount daily</span>
          <span>&middot;</span>
          <span>Happy hour 9–11AM (20% off)</span>
        </div>
      </section>

      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((category, i) => (
            <RevealOnScroll key={category.name} delay={i === 1 ? "delay-200" : ""}>
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6 pb-3 border-b border-cream-200">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 bg-white rounded-xl p-4 border border-cream-200"
                  >
                    <div>
                      <h3 className="font-semibold text-charcoal-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-charcoal-600 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-warm-700 font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
