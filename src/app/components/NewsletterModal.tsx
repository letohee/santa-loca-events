"use client";

import { useEffect, useState } from "react";
import SignupCard from "./SignupCard";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000); // show after 3s
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  async function handleSubmit(email: string) {
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(await res.text());
      setDone(true);
    } catch (e) {
  if (e instanceof Error) {
    setError(e.message);
  } else {
    setError("Something went wrong. Please try again.");
  }
}

  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setOpen(false)}>
      <div
        className="w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="sl-card">
            <span className="sl-card__title">You’re on the list 🎉</span>
            <p className="sl-card__content">
              We’ll email you when Santa Loca posts updates on Fatsoma.
            </p>
            <button className="sl-card__button" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <>
            <SignupCard
              title="Get Fatsoma Updates"
              copy="Subscribe and we’ll email you when Santa Loca posts announcements on Fatsoma."
              onSubmit={handleSubmit}
            />
            {error && (
              <p className="mt-3 text-center text-sm text-red-400">{error}</p>
            )}
            <button
              onClick={() => setOpen(false)}
              className="mt-3 block w-full text-center text-sm text-gray-300 underline"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
