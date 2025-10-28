"use client";
import { BRAND } from "@/lib/site";

export default function Navbar() {
  const links = [
    { label: "Home", href: "#top" },
    { label: "Events", href: "#events" },
    { label: "Merch", href: "#merch" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-xl font-black tracking-tight" style={{ color: BRAND.lightText }}>
          {BRAND.name}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a
            href="#events"
            className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
            style={{ background: BRAND.accent, color: "#0a0a0a" }}
          >
            Buy Tickets
          </a>
        </nav>
      </div>
    </header>
  );
}
