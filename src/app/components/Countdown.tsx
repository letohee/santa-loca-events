"use client";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site";

// ✅ define once, outside of Countdown
type CellProps = { v: number; label: string };
function Cell({ v, label }: CellProps) {
  return (
    <div className="flex flex-col items-center bg-neutral-900 rounded-xl p-3 min-w-[72px]">
      <div className="text-2xl md:text-3xl font-black" style={{ color: BRAND.accent }}>
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[11px] uppercase tracking-widest text-gray-400">{label}</div>
    </div>
  );
}

export default function Countdown({ target }: { target: string }) {
  const [t, setT] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      const end = new Date(target).getTime();
      const diff = Math.max(0, end - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!t) return null;

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <Cell v={t.d} label="Days" />
      <Cell v={t.h} label="Hours" />
      <Cell v={t.m} label="Mins" />
      <Cell v={t.s} label="Secs" />
    </div>
  );
}
