"use client";

import { BRAND } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import ShopifyCollectionEmbed from "./ShopifyCollectionEmbed";

export default function MerchCTA() {
  return (
    <section
      id="merch"
      className="py-16 md:py-24"
      style={{ background: BRAND.darkBg }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Shop"
          subtitle="Official Santa Loca merch – fulfilled by Printful, checkout via Shopify."
        />

        {/* Center the Shopify collection and limit width */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-xl">
            <ShopifyCollectionEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
