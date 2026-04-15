"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-charcoal-900 placeholder:text-charcoal-500/50 focus:outline-none focus:ring-2 focus:ring-warm-600/40 focus:border-warm-600 transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-charcoal-900 placeholder:text-charcoal-500/50 focus:outline-none focus:ring-2 focus:ring-warm-600/40 focus:border-warm-600 transition-colors"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-white text-charcoal-900 placeholder:text-charcoal-500/50 focus:outline-none focus:ring-2 focus:ring-warm-600/40 focus:border-warm-600 transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-warm-700 text-cream-50 py-3 rounded-full font-medium hover:bg-warm-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
