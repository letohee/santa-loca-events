"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ShopifyBuy?: ShopifyBuyNamespace;
  }
}

type ShopifyBuyNamespace = {
  buildClient(config: { domain: string; storefrontAccessToken: string }): ShopifyBuyClient;
  UI: {
    onReady(client: ShopifyBuyClient): Promise<ShopifyUI>;
  };
};

type ShopifyBuyClient = unknown;

type ShopifyUI = {
  createComponent(
    type: "collection" | string,
    options: {
      id: string;
      node: HTMLElement;
      moneyFormat?: string;
      options?: Record<string, unknown>;
    }
  ): void;
};

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION_ID!;
const SCRIPT_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

export default function ShopifyCollectionEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    function initShopifyBuy() {
      if (!window.ShopifyBuy || !containerRef.current) return;

      const client = window.ShopifyBuy.buildClient({
        domain: DOMAIN,
        storefrontAccessToken: TOKEN,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        if (!containerRef.current || cancelled) return;

        containerRef.current.innerHTML = "";

        ui.createComponent("collection", {
          id: COLLECTION_ID,
          node: containerRef.current,
          moneyFormat: "£{{amount}}",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    width: "calc(25% - 20px)",
                  },
                  "background-color": "rgba(0,0,0,0.65)",
                  "border-radius": "14px",
                  padding: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                },
                title: { color: "#fff", "font-weight": "700" },
                price: { color: "#f0abfc" },
                button: {
                  "background-image":
                    "linear-gradient(90deg,#C724B1,#7B3FE4,#00D4FF)",
                  "border-radius": "9999px",
                  color: "#fff",
                  "font-weight": "700",
                  "box-shadow": "0 0 24px rgba(199,36,177,0.35)",
                },
              },
              text: { button: "Add to cart" },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                  "grid-gap": "16px",
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                  "background-color": "#050011",
                  color: "#fff",
                },
                button: {
                  "background-color": "#7B3FE4",
                  "border-radius": "9999px",
                  color: "#fff",
                },
              },
              text: { button: "Add to cart" },
            },
            option: {},
            cart: {
              styles: {
                cart: {
                  "background-color": "#060019", // deep purple, matches site
                  color: "#f9fafb",
                  "border-left": "1px solid rgba(255,255,255,0.08)",
                  "box-shadow": "-12px 0 40px rgba(0,0,0,0.7)",
                },
                header: {
                  "border-bottom": "1px solid rgba(255,255,255,0.08)",
                  "background-color": "#060019",
                  color: "#e5e7eb",
                },
                title: {
                  color: "#f9fafb",
                  "font-weight": "700",
                },
                lineItems: {
                  color: "#e5e7eb",
                },
                footer: {
                  "background-color": "#060019",
                  "border-top": "1px solid rgba(255,255,255,0.08)",
                },
                subtotalText: {
                  color: "#e5e7eb", // "Subtotal" label
                  "font-size": "13px",
                  "letter-spacing": "0.06em",
                },
                subtotal: {
                  color: "#ffffff", // £ value
                  "font-weight": "700",
                },
                notice: {
                  color: "#9ca3af",
                },
                currency: {
                  color: "#e5e7eb",
                },
                close: {
                  color: "#f9fafb",
                },
                empty: {
                  color: "#e5e7eb",
                },
                // quantity controls
                quantityIncrement: {
                  "background-color": "#111322",
                  color: "#f9fafb",
                  border: "1px solid rgba(255,255,255,0.25)",
                  "border-radius": "4px",
                },
                quantityDecrement: {
                  "background-color": "#111322",
                  color: "#f9fafb",
                  border: "1px solid rgba(255,255,255,0.25)",
                  "border-radius": "4px",
                },
                quantityInput: {
                  "background-color": "#050011",
                  color: "#f9fafb",
                  border: "1px solid rgba(255,255,255,0.25)",
                },
                button: {
                  "background-image":
                    "linear-gradient(90deg,#C724B1,#7B3FE4,#00D4FF)",
                  "border-radius": "9999px",
                  color: "#fff",
                  "font-weight": "700",
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-image":
                    "linear-gradient(90deg,#C724B1,#7B3FE4,#00D4FF)",
                  "border-radius": "9999px",
                  color: "#fff",
                },
              },
            },
          },
        });
      });
    }

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      initShopifyBuy();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = SCRIPT_URL;
      script.onload = initShopifyBuy;
      (document.head || document.body).appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={containerRef} />;
}
