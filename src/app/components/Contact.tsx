"use client";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24" style={{ background: BRAND.darkBg }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Contact" subtitle="Bookings, partnerships, and general enquiries" />
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={(e) => e.preventDefault()} className="bg-neutral-900 p-6 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 gap-4">
              <input className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500" placeholder="Your name" />
              <input className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500" placeholder="Email" type="email" />
              <textarea className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 h-32" placeholder="Message" />
            </div>
            <button type="submit" className="mt-4 rounded-full px-6 py-3 font-semibold" style={{ background: BRAND.accent, color: "#0a0a0a" }}>
              Send Message
            </button>
          </form>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-white/10">
            <p className="text-gray-300">Prefer WhatsApp?</p>
            <a href="https://wa.me/" className="mt-2 inline-block underline text-gray-200">Tap to chat ↗</a>
            <div className="mt-6 text-sm text-gray-400">
              <p>Email: info@santalocaevents.com</p>
              <p>Instagram: @santalocaevents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
