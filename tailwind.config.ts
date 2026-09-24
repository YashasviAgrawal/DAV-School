import type { Config } from "tailwindcss";

const config: Config = {
  // lib/ has to be scanned too: data.ts carries the per-photo `focus` crop classes
  // (object-[center_40%] and friends). Leave it out and Tailwind never generates them,
  // so every crop silently falls back to centre.
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // One navy, one gold, and neutrals. Everything else is a tint of those.
        //
        // The rule that keeps this coherent: navy carries structure (headings, bands,
        // solid buttons), gold is the single accent and only ever appears on navy or as
        // a fill under navy text, and anything secondary is `muted` rather than a second
        // brighter blue. Introducing a third hue is what made the page feel assembled.
        ink: "#16275C", // brand navy: headings, dark bands, solid buttons
        cobalt: "#2F5DD0", // interactive state only (progress fill, focus ring)
        sky: "#E3EAFB", // pale navy tint for soft fills and icon plates
        marigold: "#F4B63F", // the one accent. Never as text on a light background.
        leaf: "#2E7D5B", // success state only, nowhere decorative
        chalk: "#F1F4FA", // alternating section fill, deep enough to actually read
        muted: "#57607A", // secondary text and metadata. Replaces cobalt for labels.
        text: "#141B34", // body text
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
        // Used when the academics panel swaps to another stage's photograph.
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        bloom: "bloom 1.6s cubic-bezier(.2,.7,.2,1) both",
        fade: "fade .5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
