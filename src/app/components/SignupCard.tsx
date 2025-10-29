"use client";
import { useState } from "react";

export default function SignupCard({
  title = "Join the list",
  copy = "Get first access to tickets, drops, and exclusive news.",
  onSubmit,
}: {
  title?: string;
  copy?: string;
  onSubmit?: (email: string) => void | Promise<void>;
}) {
  const [email, setEmail] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(email);
    setEmail("");
  };

  return (
    <div className="sl-card">
      <span className="sl-card__title">{title}</span>
      <p className="sl-card__content">{copy}</p>

      <form className="sl-card__form" onSubmit={submit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="sl-card__button" type="submit">Subscribe</button>
      </form>
    </div>
  );
}
