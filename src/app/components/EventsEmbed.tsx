"use client";
import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const EMBED_SRC =
  process.env.NEXT_PUBLIC_FATSOMA_EMBED ??
  "https://www.fatsoma.com/p/santa-loca/posts"; // fallback

export default function EventsEmbed() {
  return (
    <section id="events" className="py-16 md:py-24" style={{ background: BRAND.darkBg }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Tickets"
          subtitle="Secure checkout powered by Fatsoma — embedded on-site"
        />

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <iframe
            src={EMBED_SRC}
            className="w-full"
            style={{ minHeight: 980 }}
            frameBorder={0}
            loading="lazy"
            title="Fatsoma Checkout"
            // some providers need these permissions for payment flows
            allow="payment *; clipboard-read; clipboard-write; fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Fallback / open-in-new-tab */}
        <div className="mt-4 text-right text-sm">
          <a
            href={EMBED_SRC.replace("/embed", "")}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white underline"
          >
            Open on Fatsoma ↗
          </a>
        </div>
      </div>
    </section>
  );
}
