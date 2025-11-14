import ShopifyCollectionEmbed from "@/app/components/ShopifyCollectionEmbed";

export default function ShopPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% 20%, rgba(199,36,177,0.18), transparent 55%), radial-gradient(45rem 35rem at 85% 80%, rgba(123,63,228,0.16), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          Shop
        </h1>
        <p className="mt-2 text-gray-300">
          Fulfilled by Printful • Secure checkout via Shopify
        </p>

        <div className="mt-10">
          <ShopifyCollectionEmbed />
        </div>
      </div>
    </main>
  );
}
