import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        background: "#0B0F19",
        surface: "#111827",
        primary: "#7C3AED",
        secondary: "#3B82F6",
        foreground: "#f3f4f6",
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #7C3AED, #3B82F6)',
      },
    },
  },
  plugins: [],
};
export default config;
