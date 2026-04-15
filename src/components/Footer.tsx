import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold text-cream-50 tracking-wider">
                  XOFI
                </span>
                <span className="text-[10px] font-medium text-cream-400 tracking-[0.3em]">
                  TRG
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-cream-400">
              Love, peace, and good coffee. Your cozy escape in Gong Badak,
              Kuala Terengganu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream-50 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream-400 hover:text-warm-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cream-50 mb-4 text-sm uppercase tracking-wider">
              Find Us
            </h4>
            <div className="flex flex-col gap-2 text-sm text-cream-400">
              <p>Lot 7825-2, Jalan Kubur Shariff</p>
              <p>Taman Baiduri, 21300</p>
              <p>Kuala Terengganu, Terengganu</p>
              <p className="mt-2">Mon–Thu, Sat–Sun: 9AM – 10PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-400/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400/60">
            &copy; {new Date().getFullYear()} XOFI GROUP SDN. BHD. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/xofi.trg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream-400/60 hover:text-warm-600 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/xofi.trg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream-400/60 hover:text-warm-600 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@xofi.trg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream-400/60 hover:text-warm-600 transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
