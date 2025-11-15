// src/app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NextEvent from "./components/NextEvent";
import EventsEmbed from "./components/EventsEmbed";
import MerchCTA from "./components/MerchCTA";
import InstagramFeed from "./components/InstagramFeed";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewsletterModal from "./components/NewsletterModal";
import { BRAND } from "@/lib/site";

export default function HomePage() {
  return (
    <main
      className="min-h-screen text-gray-100"
      style={{ background: BRAND.darkBg }}
    >
      {/* fixed navbar on top */}
      <Navbar />

      {/* push content below the fixed navbar */}
      <div className="pt-20 md:pt-24">
        <Hero />
        <NextEvent />
        <EventsEmbed />
        <MerchCTA />          {/* <-- this has id="merch" inside */}
        <InstagramFeed />
        <About />
        <Contact />
        <Footer />
      </div>

      {/* newsletter pop-up */}
      <NewsletterModal />
    </main>
  );
}
