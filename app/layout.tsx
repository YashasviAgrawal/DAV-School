import type { Metadata } from "next";
import { Bricolage_Grotesque, EB_Garamond, Hind } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Used only in the footer's Get In Touch block, which is set in a serif to match
// thevpss.com. Nothing else on the site uses it, so it is a small extra download.
const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
