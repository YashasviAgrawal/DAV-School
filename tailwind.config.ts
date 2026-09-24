import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Jaipur blue-pottery palette
        ink: "#16275C",      // deep indigo — primary brand
        cobalt: "#2F5DD0",   // blue-pottery glaze — links, highlights
        sky: "#E3EAFB",      // pale glaze — soft section fills
        marigold: "#F4B63F", // festival marigold — calls to action
        leaf: "#2E7D5B",     // henna leaf — small positive accents
        chalk: "#F7F8FC",    // page background
        text: "#141B34",     // body text
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        bloom: {
          "0%": { opacity: "0", transform: "rotate(-40deg) scale(0.85)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
      },
      animation: { bloom: "bloom 1.6s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
export default config;
