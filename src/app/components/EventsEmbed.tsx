"use client";
import { BRAND, FATSOMA } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function EventsEmbed() {
  return (
    <section id="events" className="py-16 md:py-24" style={{ background: BRAND.darkBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Tickets" subtitle="Secure checkout powered by Fatsoma — embedded on-site" />
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <iframe src={FATSOMA.embedSrc} className="w-full" style={{ minHeight: 920 }} frameBorder="0" loading="lazy" title="Fatsoma Checkout" />
        </div>
        <div className="mt-4 text-right text-sm">
          <a href={FATSOMA.eventsUrl} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white underline">
            See all events on Fatsoma ↗
          </a>
        </div>
      </div>
    </section>
  );
}
