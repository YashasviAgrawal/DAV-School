import { nav, school } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed">
            English-medium, co-educational schooling from Play Group to Class XII in Brahampuri, Jaipur. Motto: {school.motto}.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white">Reach us</p>
          <ul className="mt-4 space-y-2">
            {school.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/-/g, "")}`} className="hover:text-white">{p}</a></li>
            ))}
            <li><a href={`mailto:${school.email}`} className="hover:text-white">{school.email}</a></li>
          </ul>
          <p className="mt-6 font-semibold text-white">Follow the school</p>
          <ul className="mt-4 space-y-2">
            <li><a href={school.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
            <li><a href={school.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li>
            <li><a href={school.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-6 text-sm text-white/50">
          © {new Date().getFullYear()} {school.name}, Jaipur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
