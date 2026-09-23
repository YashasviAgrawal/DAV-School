import type { Config } from "tailwindcss";

// Colours are declared as channel triplets in globals.css so every utility keeps
// its opacity modifier (text-fg/70, border-line/60) and both colour modes come
// from one set of class names.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        band: token("band"),
        "band-fg": token("band-fg"),
        "band-muted": token("band-muted"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        danger: token("danger"),
        scrim: token("scrim"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Hind sits behind the Latin face purely to carry the Devanagari glyphs.
        body: ["var(--font-display)", "var(--font-deva)", "system-ui", "sans-serif"],
      },
      // Shape lock: this page is square. Setting the scale to zero means a stray
      // `rounded-xl` from an older component cannot quietly break the system.
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
