"use client";

import { Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const BRAND_NAME = "Santa Loca Events";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10 text-gray-300">
      {/* Pulsing disco glow (behind content) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(199,36,177,0.25), transparent 60%), radial-gradient(closest-side, rgba(123,63,228,0.25), transparent 60%)",
          mixBlendMode: "screen",
        }}
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
        {/* BRAND + ABOUT */}
        <div>
          <a
            href="#top"
            className="inline-block text-2xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Santa Loca
          </a>
          <p className="mt-3 text-gray-400">
            Club nights, DJs & unforgettable experiences. Join us on the dance floor.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-fuchsia-400 font-semibold tracking-wide uppercase">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li><a href="#events" className="hover:text-fuchsia-300">Events</a></li>
            <li><a href="#merch" className="hover:text-fuchsia-300">Merch</a></li>
            <li><a href="#gallery" className="hover:text-fuchsia-300">Gallery</a></li>
            <li><a href="/privacy" className="hover:text-fuchsia-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-fuchsia-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* CONTACT + SOCIALS */}
        <div>
          <h4 className="text-fuchsia-400 font-semibold tracking-wide uppercase">
            Connect
          </h4>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <a href="mailto:info@santalocaevents.com" className="hover:text-fuchsia-300">
                info@santalocaevents.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-fuchsia-300">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>

          <h4 className="mt-6 text-fuchsia-400 font-semibold tracking-wide uppercase">
            Follow
          </h4>
          <div className="mt-3 flex items-center gap-5">
            <motion.a
              href="https://www.instagram.com/santalocaevents/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-fuchsia-300"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://www.fatsoma.com/p/santa-loca"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-fuchsia-300"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between">
          <span>Built by Reneksites.co.uk</span>
          <span className="text-fuchsia-400 font-semibold">Made for the night.</span>
        </div>
      </div>
    </footer>
  );
}
