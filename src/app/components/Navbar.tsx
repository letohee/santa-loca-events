"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide icons for the mobile toggle

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#top" },
    { label: "Events", href: "#events" },
    { label: "Shop", href: "#merch" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {/* ====== BRAND / LOGO ====== */}
        <a
          href="#top"
          className="flex items-center gap-2 select-none"
        >
          {/* Replace with your own file e.g. /logo.png */}
          <img
            src="/logo2.PNG"
            alt="Santa Loca Logo"
            className="h-8 w-8 object-contain"
          />
          <span
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-uni-sans)",
              background: "linear-gradient(90deg, #C724B1 0%, #7B3FE4 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Santa Loca
          </span>
        </a>

        {/* ====== DESKTOP NAV ====== */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-accent transition-colors font-medium"
              style={{ fontFamily: "var(--font-uni-sans)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#events"
            className="ml-3 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-light bg-gradient-disco hover:opacity-90 transition"
          >
            Buy Tickets
          </a>
        </nav>

        {/* ====== MOBILE TOGGLE ====== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-light focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ====== MOBILE MENU ====== */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 px-6 pb-4">
          <nav className="flex flex-col gap-4 mt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-gray-300 hover:text-accent transition-colors font-medium"
                style={{ fontFamily: "var(--font-uni-sans)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#events"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-light bg-gradient-disco hover:opacity-90 transition text-center"
            >
              Buy Tickets
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
