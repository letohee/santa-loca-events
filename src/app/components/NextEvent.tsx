"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { BRAND, FATSOMA, NEXT_EVENT_DATE } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Countdown from "./Countdown";
import { useCallback, useRef } from "react";
import type { CSSProperties } from "react";

/* ---------- Type-safe styles for masked animated borders ---------- */
type BorderMaskStyle = CSSProperties & {
  WebkitMaskComposite?: string;
  maskComposite?: string;
};

const neonBorderA: BorderMaskStyle = {
  background: "linear-gradient(90deg, #C724B1, #7B3FE4, #00D4FF, #C724B1)",
  backgroundSize: "400% 400%",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  padding: "2px",
};

const neonBorderB: BorderMaskStyle = {
  background:
    "linear-gradient(135deg, #7B3FE4, #C724B1, #FF8A00, #00D4FF, #7B3FE4)",
  backgroundSize: "400% 400%",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  padding: "2px",
};

export default function NextEvent() {
  // --- Spotlight motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // buttery motion
  const xS = useSpring(x, { stiffness: 150, damping: 25, mass: 0.3 });
  const yS = useSpring(y, { stiffness: 150, damping: 25, mass: 0.3 });

  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    },
    [x, y]
  );

  // spotlight radial gradient (two-color disco glow)
  const spotlight = useMotionTemplate`
    radial-gradient(650px 350px at ${xS}px ${yS}px,
      rgba(199,36,177,0.18), transparent 60%),
    radial-gradient(550px 300px at ${xS}px ${yS}px,
      rgba(123,63,228,0.16), transparent 65%)
  `;

  return (
    <section
      id="next-event"
      className="relative overflow-hidden py-20 md:py-28 text-white bg-black"
    >
      {/* Ambient background */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(199,36,177,0.18), transparent 60%), radial-gradient(circle at 85% 75%, rgba(123,63,228,0.14), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      />

      {/* Spotlight follows cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{ backgroundImage: spotlight }}
      />

      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="relative max-w-6xl mx-auto px-6"
      >
        <SectionHeading
          title="Next Event"
          subtitle="Don’t miss the drop — limited tickets available"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Countdown card */}
          <motion.div
            className="relative rounded-2xl p-6 bg-neutral-900 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              style={neonBorderA}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            />
            <h3 className="relative text-2xl font-extrabold z-10">Countdown</h3>
            <div className="relative mt-4 z-10">
              <Countdown target={NEXT_EVENT_DATE} />
            </div>
            <a
              href="#events"
              className="relative mt-6 inline-flex items-center rounded-full px-6 py-2 font-semibold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-400 text-white hover:scale-105 transition-transform z-10"
            >
              Buy Tickets
            </a>
          </motion.div>

          {/* Event poster / reel */}
          <motion.div
            className="relative rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              style={neonBorderB}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            />
            {/* Swap this image with your reel iframe if you prefer */}
            <Image
              src="/events-banner.jpg"
              alt="Event poster"
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <a
              href={FATSOMA.featuredEventUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 text-xs text-white/90 underline z-10"
            >
              View on Fatsoma
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
