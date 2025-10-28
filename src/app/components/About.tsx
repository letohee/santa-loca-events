"use client";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ background: "#0d0d0d" }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="About Santa Loca" />
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Born in the club and raised on the dancefloor. Santa Loca Events curates high-energy nights with top DJs,
          immersive production, and a loyal crowd. Tickets via Fatsoma. Merch via Printful.
        </p>
      </div>
    </section>
  );
}
