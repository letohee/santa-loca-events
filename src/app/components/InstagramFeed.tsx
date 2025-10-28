// src/app/components/InstagramFeed.tsx
"use client";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function InstagramFeed() {
  return (
    <section id="gallery" className="py-16 md:py-24" style={{ background: BRAND.darkBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <SectionHeading title="From the Gram" subtitle="Follow and tag us @santalocaevents" />
          <a href="https://www.instagram.com/santalocaevents/" target="_blank" rel="noreferrer" className="text-sm underline text-gray-300 hover:text-white">
            Open Instagram ↗
          </a>
        </div>

        {/* Replace src= with your widget’s URL */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <iframe
            src={process.env.NEXT_PUBLIC_IG_IFRAME_URL}
            className="w-full"
            style={{ minHeight: 750 }}
            loading="lazy"
            frameBorder={0}
            title="Instagram Feed"
          />
        </div>
      </div>
    </section>
  );
}
