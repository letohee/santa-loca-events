"use client";
import { BRAND } from "@/lib/site";

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND.lightText }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
