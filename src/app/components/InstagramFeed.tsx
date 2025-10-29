// src/app/components/InstagramFeed.tsx
"use client";

import SectionHeading from "./SectionHeading";
import { BRAND } from "@/lib/site";

export default function InstagramFeed() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24"
      style={{ background: BRAND.darkBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <SectionHeading
            title="From the Gram"
            subtitle="Follow and tag us @santalocaevents"
          />
          <a
            href="https://www.instagram.com/santalocaevents/"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline text-gray-300 hover:text-white"
          >
            Open Instagram ↗
          </a>
        </div>

        {/* Fixed to 3:2 to match SnapWidget's 3x2 grid (6 posts) */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 mx-auto" style={{ maxWidth: 1200 }}>
          <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
            <iframe
              src="https://snapwidget.com/embed/1111340"
              title="Posts from Instagram"
              className="absolute inset-0 w-full h-full"
              allowTransparency={true}
              frameBorder={0}
              scrolling="no"
              style={{ border: "none", overflow: "hidden" }}
            />
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://www.instagram.com/santalocaevents/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold border border-white/20 text-gray-200 hover:bg-white/10"
          >
            Follow @santalocaevents
          </a>
        </div>
      </div>
    </section>
  );
}
