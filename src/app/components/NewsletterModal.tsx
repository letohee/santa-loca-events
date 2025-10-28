"use client";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOpen(true), 3000); return () => clearTimeout(t); }, []);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setOpen(false)}>
      <div className="w-full max-w-md bg-neutral-950 rounded-2xl border border-white/10 p-6" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-2xl font-extrabold text-white">Join the Mailing List</h3>
        <p className="mt-2 text-gray-300 text-sm">Get first access to tickets, drops, and exclusive news.</p>
        <form onSubmit={(e) => { e.preventDefault(); setOpen(false); }} className="mt-4 grid grid-cols-1 gap-3">
          <input type="email" required placeholder="Enter your email" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500" />
          <button className="rounded-lg px-4 py-3 font-semibold" style={{ background: BRAND.accent, color: "#0a0a0a" }}>Subscribe</button>
        </form>
        <button onClick={() => setOpen(false)} className="mt-3 text-gray-400 text-sm underline">No thanks</button>
      </div>
    </div>
  );
}
