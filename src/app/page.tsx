"use client";

import { BRAND } from "@/lib/site";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import NextEvent from "@/app/components/NextEvent";
import EventsEmbed from "@/app/components/EventsEmbed";
import MerchCTA from "@/app/shop/page";
import InstagramFeed from "@/app/components/InstagramFeed";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import NewsletterModal from "@/app/components/NewsletterModal";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: BRAND.darkBg, color: BRAND.lightText }}>
      <Navbar />
      <Hero />
      <NextEvent />
      <EventsEmbed />
      <MerchCTA />
      <InstagramFeed />
      <About />
      <Contact />
      <Footer />
      <NewsletterModal />
    </main>
  );
}
