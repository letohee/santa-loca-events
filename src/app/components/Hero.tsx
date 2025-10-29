"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./Motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Loop only the first 15 seconds of the background video
  const onTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.currentTime >= 15) v.currentTime = 0;
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, [onTimeUpdate]);

  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background video (looped segment) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        autoPlay
        muted
        playsInline
        poster="/hero-poster.jpg"
        src="/hero.mp4"
      />

      {/* Ambient animated gradient for subtle motion */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 20%, rgba(199,36,177,0.24), transparent 55%), radial-gradient(circle at 80% 80%, rgba(123,63,228,0.18), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-light">
        {/* ======== DO NOT CHANGE SLOGAN CONTENT ======== */}
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-light font-heading disco-glow">
            <span>GO FROM </span>
            <span className="disco-text font-accent">SANTA</span>
            <span>. </span>
            <br className="hidden md:block" />
            <span>TO </span>
            <span className="disco-text font-heading">LOCA</span>
            <span>.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            Club nights, DJs, and unforgettable parties.
          </p>
        </FadeIn>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#events"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-8 py-3 font-semibold text-light 
                       bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-400
                       shadow-[0_0_22px_rgba(199,36,177,0.35)]
                       hover:shadow-[0_0_34px_rgba(199,36,177,0.55)]
                       transition-all"
          >
            Get Tickets
          </motion.a>

          <motion.a
            href="#merch"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-8 py-3 border border-white/20 text-light/90 
                       backdrop-blur-sm hover:bg-white/10 transition-all
                       shadow-[0_0_16px_rgba(255,255,255,0.08)]"
          >
            Shop Merch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
