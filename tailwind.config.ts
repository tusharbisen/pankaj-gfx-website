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
        heading: ["var(--font-heading)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        primary: "#F59E0B",
        secondary: "#0F172A",
        foreground: "#334155",
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #7C3AED, #3B82F6)',
      },
    },
  },
  plugins: [],
};
export default config;
