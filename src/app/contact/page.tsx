import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact — XOFI",
  description:
    "Find XOFI at Gong Badak, Kuala Terengganu. Open daily 9AM–10PM (closed Fridays).",
  openGraph: {
    title: "Contact — XOFI",
    description:
      "Find XOFI at Gong Badak, Kuala Terengganu. Open daily 9AM–10PM (closed Fridays).",
  },
};

const locations = [
  {
    name: "XOFI Gong Badak",
    address: "Lot 7825-2, Jalan Kubur Shariff, Taman Baiduri, 21300 Kuala Terengganu",
    hours: "9:00 AM – 7:00 PM, 8:00 PM – 10:00 PM",
    closed: "Friday",
  },
  {
    name: "XOFI Jalan Sultan Omar",
    address: "Jalan Sultan Omar, Kuala Terengganu",
    hours: "9:00 AM – 7:00 PM, 8:00 PM – 10:00 PM",
    closed: "Friday",
  },
  {
    name: "XOFI Chukai",
    address: "Chukai, Terengganu",
    hours: "3:00 PM – 11:00 PM",
    closed: "Friday",
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
                    href="https://www.instagram.com/xofi.trg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    Instagram (@xofi.trg)
                  </a>
                  <a
                    href="https://www.facebook.com/xofi.trg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    Facebook (XOFI.trg)
                  </a>
                  <a
                    href="https://www.tiktok.com/@xofi.trg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm-700 hover:text-warm-800 transition-colors"
                  >
                    TikTok (@xofi.trg)
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d103.12!3d5.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7c91229b1b2d7%3A0x0!2sXOFI%20Gong%20Badak!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XOFI Gong Badak Location"
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
