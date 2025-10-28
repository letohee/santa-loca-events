"use client";
import { BRAND } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10" style={{ background: "#0a0a0a" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/privacy" className="underline text-gray-400 hover:text-gray-200">Privacy Policy</a>
          <a href="/terms" className="underline text-gray-400 hover:text-gray-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
