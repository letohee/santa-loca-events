"use client";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import SignupCard from "./SignupCard"; // ✅ import the UIverse-styled card

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ background: BRAND.darkBg }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Contact"
          subtitle="Bookings, partnerships, and general enquiries"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* ==== LEFT: Contact form ==== */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-neutral-900 p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(199,36,177,0.1)]"
          >
            <div className="grid grid-cols-1 gap-4">
              <input
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
              <input
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-accent focus:outline-none"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 h-32 focus:border-accent focus:outline-none"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full px-6 py-3 font-semibold transition-transform hover:scale-105"
              style={{ background: BRAND.gradient, color: "#fff" }}
            >
              Send Message
            </button>

            {/* WhatsApp + contact info (moved below form) */}
            <div className="mt-6 text-sm text-gray-400 space-y-2">
              <p>
                Prefer WhatsApp?{" "}
                <a
                  href="https://wa.me/"
                  className="underline text-gray-200 hover:text-accent"
                >
                  Tap to chat ↗
                </a>
              </p>
              <p>Email: locasanta51@gmail.com</p>
              <p>Instagram: @santalocaevents</p>
            </div>
          </form>


        </div>
      </div>
    </section>
  );
}
