import { nav, school } from "@/lib/data";
import Logo from "./Logo";

const social = [
  { label: "Facebook", href: school.facebook },
  { label: "YouTube", href: school.youtube },
  { label: "Instagram", href: school.instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-band-fg/15 bg-band text-band-muted">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr] lg:gap-10">
        <div>
          <Logo onBand />
          <p className="mt-6 max-w-[34ch] leading-relaxed">
            English-medium, co-educational schooling from Play Group to Class XII in Brahampuri,
            Jaipur. The school&rsquo;s motto: {school.motto}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-band-fg">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-band-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-band-fg">Reach us</p>
          <ul className="mt-5 space-y-3">
            {school.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p.replace(/-/g, "")}`} className="transition-colors hover:text-band-fg">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${school.email}`} className="transition-colors hover:text-band-fg">
                {school.email}
              </a>
            </li>
            <li className="pt-1 leading-relaxed">{school.address}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-band-fg">Follow the school</p>
          <ul className="mt-5 space-y-3">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-band-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-band-fg/15">
        {/* The extra space below clears the docked call button, which is phones only. */}
        <p className="wrap pb-20 pt-6 text-[0.85rem] lg:pb-6">
          &copy; {new Date().getFullYear()} {school.name}, Jaipur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
