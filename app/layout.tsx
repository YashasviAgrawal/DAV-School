import type { Metadata, Viewport } from "next";
import { Hind, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Loaded only so the Devanagari in the announcement bar has a face to fall back to.
const deva = Hind({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D.A.V. Group of Schools, Brahampuri Jaipur | Play Group to Class XII",
  description:
    "English-medium, co-educational school in Brahampuri, Jaipur since 1972. Play Group to Class XII with Commerce and Science. Admissions open. Book a campus visit.",
  openGraph: {
    title: "D.A.V. Group of Schools, Jaipur",
    description: "Individual attention for every child, from Play Group to Class XII. Since 1972.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#101e4a" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1226" },
  ],
};

// Runs before the page below it is parsed. It marks the document as animated, which
// is what switches on the pre-reveal hidden state in globals.css. Readers who have
// asked for reduced motion, or who have no JavaScript, never get that hidden state
// and so never get a blank page.
const BOOT = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-anim","")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${deva.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-accent-fg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
