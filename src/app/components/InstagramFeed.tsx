"use client";
import { useMemo } from "react";
import { BRAND, SOCIALS } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function InstagramFeed() {
  const posts = useMemo(
    () => new Array(8).fill(0).map((_, i) =>
      `https://images.unsplash.com/photo-15${i + 10}25253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop`
    ),
    []
  );

  return (
    <section id="gallery" className="py-16 md:py-24" style={{ background: BRAND.darkBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <SectionHeading title="From the Gram" subtitle="Follow and tag us @santalocaevents" />
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-sm underline text-gray-300 hover:text-white">
            Open Instagram ↗
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {posts.map((src, idx) => (
            <a key={idx} href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt="IG" className="h-40 md:h-48 w-full object-cover group-hover:scale-105 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
