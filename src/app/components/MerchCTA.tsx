"use client";
import Image from "next/image";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function MerchCTA() {
  return (
    <section id="merch" className="py-16 md:py-24" style={{ background: "#0d0d0d" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <SectionHeading
            title="Merch Drop"
            subtitle="Print-on-demand (Printful) — hoodies, tees, caps"
          />
          <p className="text-gray-300 mb-6">
            Rep the night. We’ll integrate a Printful-powered store. For now, this is a placeholder
            CTA.
          </p>
          <a
            href="#"
            className="rounded-full px-6 py-3 font-semibold"
            style={{ background: BRAND.accent, color: "#0a0a0a" }}
          >
            View Merch
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/merch.jpg"
            alt="Merch preview"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
