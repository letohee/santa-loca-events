import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B3FE4", // disco purple
        accent: "#C724B1",  // fuchsia glow
        dark: "#0A0014",    // deep club black
        light: "#FFFFFF",   // clean white
      },
      backgroundImage: {
        "gradient-disco": "linear-gradient(90deg, #7B3FE4 0%, #C724B1 100%)",
        "gradient-disco-diag": "linear-gradient(135deg, #7B3FE4 0%, #C724B1 100%)",
      },
      fontFamily: {
        sans: ["var(--font-uni-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
