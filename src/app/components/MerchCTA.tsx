"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import type { CSSProperties } from "react";

type BorderMaskStyle = CSSProperties & {
  WebkitMaskComposite?: string;
  maskComposite?: string;
};

const animatedBorderStyle: BorderMaskStyle = {
  background: "linear-gradient(120deg, #7B3FE4, #C724B1, #00D4FF, #7B3FE4)",
  backgroundSize: "400% 400%",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  padding: "2px",
};

const products = [
  {
    src: "/merch1.JPG",
    name: "Santa Loca Tee",
    price: "£24",
    info: "Heavy cotton • DTG print • XS–XXL",
  },
  {
    src: "/merch2.JPG",
    name: "Glow Hoodie",
    price: "£49",
    info: "Midweight fleece • Screen print • XS–XXL",
  },
  {
       src: "/merch16.JPG",
    name: "Coupons",
    price: "£0",
    info: "guest tickets free entry and free booze",
  },
];

export default function MerchCTA() {
  return (
    <section id="merch" className="relative overflow-hidden py-20 md:py-28 text-white">
      {/* Ambient animated background */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% 20%, rgba(199,36,177,0.18), transparent 55%), radial-gradient(45rem 35rem at 85% 80%, rgba(123,63,228,0.16), transparent 60%)",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Merch Drop"
          subtitle="Print-on-demand (Printful) — hoodies, tees, caps"
        />

        <motion.div
          className="mt-10 grid lg:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left: hero image with animated border */}
          <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              style={animatedBorderStyle}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            />
            <Image
              src="/merch1.JPG"
              alt="Merch preview"
              width={1600}
              height={1066}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Right: product info + Printful placeholder */}
          <div>
            <h3 className="text-2xl font-extrabold">Official Merchandise</h3>
            <p className="mt-3 text-gray-300">
              Rep the night. Our merch is fulfilled via <strong>Printful</strong> —
              quality blanks, fast shipping, and easy returns.
            </p>

            {/* Feature bullets */}
            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                • Premium cotton / fleece
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                • Sizes XS–XXL
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                • DTG / screen / embroidery
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                • Global shipping
              </li>
            </ul>

            {/* 3-item preview */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {products.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 * i }}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/40"
                >
                  <div className="relative aspect-[4/5]">
                    <Image src={p.src} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{p.name}</p>
                      <span className="text-fuchsia-400 font-bold">{p.price}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{p.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Placeholder for Printful integration */}
              <button
                disabled
                className="rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-400 text-white opacity-70 cursor-not-allowed"
                title="Store launching soon"
              >
                Store launching soon
              </button>

              <Link
                href="/gallery"
                className="rounded-full px-6 py-3 border border-white/20 text-gray-200 hover:bg-white/10 transition"
              >
                View full gallery
              </Link>
            </div>

            {/* Roadmap note */}
            <p className="mt-3 text-xs text-gray-400">
              Roadmap: connect to Printful products (SKU, size/colour variants), live stock,
              and on-site checkout.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
