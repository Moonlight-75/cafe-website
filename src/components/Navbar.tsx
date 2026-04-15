"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-charcoal-900/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <PlaceholderImage
              src="/images/logo.png"
              alt="XOFI"
              width={40}
              height={40}
              className="object-cover"
              label="Logo"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-cream-50 tracking-wider">
              XOFI
            </span>
            <span className="text-[10px] font-medium text-cream-400 tracking-[0.3em]">
              TRG
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-200 hover:text-warm-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="bg-warm-700 text-cream-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-warm-600 transition-colors"
          >
            View Menu
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream-50 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream-50 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream-50 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-cream-200 hover:text-warm-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="mt-2 bg-warm-700 text-cream-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-warm-600 transition-colors text-center"
          >
            View Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}
