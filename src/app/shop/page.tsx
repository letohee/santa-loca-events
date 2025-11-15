import ShopifyCollectionEmbed from "@/app/components/ShopifyCollectionEmbed";
import { BRAND } from "@/lib/site";

export default function ShopPage() {
  return (
    <main
      className="min-h-screen text-gray-100"
      style={{ background: BRAND.darkBg }} // same gradient / purple as rest of site
    >
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500">
          Shop
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Fulfilled by <span className="text-gray-200">Printful</span> · Secure
          checkout via <span className="text-gray-200">Shopify</span>
        </p>

        <div className="mt-10">
          <ShopifyCollectionEmbed />
        </div>
      </section>
    </main>
  );
}
