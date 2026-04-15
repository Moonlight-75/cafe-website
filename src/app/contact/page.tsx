import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact — Fiction Cafe",
  description:
    "Find Fiction Cafe at Imagination District, Kuala Lumpur. Open daily 9AM–10PM.",
  openGraph: {
    title: "Contact — Fiction Cafe",
    description:
      "Find Fiction Cafe at Imagination District, Kuala Lumpur. Open daily 9AM–10PM.",
  },
};

const locations = [
  {
    name: "Fiction Cafe — Main Branch",
    address: "123 Storybook Lane, Imagination District, Kuala Lumpur",
    hours: "9:00 AM – 10:00 PM",
    closed: "None",
  },
  {
    name: "Fiction Cafe — Chapter Two",
    address: "45 Novel Street, Arts Quarter, Kuala Lumpur",
    hours: "9:00 AM – 10:00 PM",
    closed: "None",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal-900 text-cream-50 py-16 px-6 text-center">
        <span className="text-xs font-semibold text-warm-600 uppercase tracking-widest">
          Come Say Hi
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
          Find Us
        </h1>
      </section>

      <section className="py-16 px-6 bg-cream-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <RevealOnScroll>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">
                  Our Locations
                </h2>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div
                      key={loc.name}
                      className="bg-white rounded-xl p-4 border border-cream-200"
                    >
                      <h3 className="font-semibold text-charcoal-900 text-sm">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-charcoal-600 mt-1">
                        {loc.address}
                      </p>
                      <p className="text-xs text-charcoal-600 mt-1">
                        {loc.hours}
                      </p>
                      <p className="text-xs text-red-500 mt-0.5">
                        Closed on {loc.closed}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-charcoal-900 mb-2">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    Instagram (@fictioncafe)
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    Facebook (Fiction Cafe)
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    TikTok (@fictioncafe)
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.69!3d3.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4955e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fiction Cafe Location"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay="delay-200">
            <div>
              <h2 className="text-lg font-bold text-charcoal-900 mb-4">
                Get in Touch
              </h2>
              <div className="bg-white rounded-2xl p-6 border border-cream-200">
                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
