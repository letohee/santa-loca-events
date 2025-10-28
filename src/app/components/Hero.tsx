"use client";
import { BRAND } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[80vh] grid place-items-center overflow-hidden"
      style={{ background: BRAND.darkBg }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        poster="/merch2.jpg"
        src="/hero.mp4"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.2),transparent_50%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-6xl font-black leading-tight"
          style={{ color: BRAND.lightText }}
        >
          Feel the <span style={{ color: BRAND.accent }}>Energy</span>. Live the Night.
        </h1>
        <p className="mt-4 text-gray-300 text-base md:text-lg">
          Santa Loca Events — club nights, DJs, unforgettable parties.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#events"
            className="rounded-full px-6 py-3 font-semibold"
            style={{ background: BRAND.accent, color: "#0a0a0a" }}
          >
            Get Tickets
          </a>
          <a
            href="#merch"
            className="rounded-full px-6 py-3 border border-white/20 text-gray-200 hover:bg-white/10"
          >
            Shop Merch
          </a>
        </div>
      </div>
    </section>
  );
}
