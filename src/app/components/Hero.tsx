"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center justify-center bg-dark overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        src="/hero.mp4"
      />

      {/* Overlay gradients for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-light">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-light font-heading disco-glow">
  <span>Feel the </span>
  <span className="disco-text font-accent">Energy</span>
  <span>. </span>
  <br className="hidden md:block" />
  <span>Live the </span>
  <span className="disco-text font-heading">Night</span>
  <span>.</span>
</h1>


        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Club nights, DJs, and unforgettable parties.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#events"
            className="rounded-full px-8 py-3 font-semibold text-light bg-gradient-disco hover:opacity-90 transition"
          >
            Get Tickets
          </a>
          <a
            href="#merch"
            className="rounded-full px-8 py-3 border border-white/20 text-light/90 hover:bg-white/10 transition"
          >
            Shop Merch
          </a>
        </div>
      </div>
    </section>
  );
}
