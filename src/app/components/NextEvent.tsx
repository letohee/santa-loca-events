"use client";
import Image from "next/image";
import { BRAND, FATSOMA, NEXT_EVENT_DATE } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Countdown from "./Countdown";

export default function NextEvent() {
  return (
    <section id="next-event" className="py-16 md:py-24" style={{ background: "#0d0d0d" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Next Event"
          subtitle="Don’t miss the drop — limited tickets available"
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-extrabold text-white">Countdown</h3>
            <div className="mt-4">
              <Countdown target={NEXT_EVENT_DATE} />
            </div>
            <a
              href="#events"
              className="mt-6 inline-flex items-center rounded-full px-5 py-2 font-semibold"
              style={{ background: BRAND.accent, color: "#0a0a0a" }}
            >
              Buy Tickets
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/next-poster.jpg"
              alt="Event poster"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            <a
              href={FATSOMA.featuredEventUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 text-xs text-white/80 underline"
            >
              View on Fatsoma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
