"use client";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Events</h1>
      <iframe
        src="https://www.fatsoma.com/embed/p/santa-loca/events"
        className="w-full"
        style={{ minHeight: 920 }}
        frameBorder={0}
        loading="lazy"
        title="Fatsoma Events"
      />
    </div>
  );
}
