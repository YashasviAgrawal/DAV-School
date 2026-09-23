"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_1px_0_#16275C1a]" : ""}`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main">
        <Logo />
        {/* gap tightens between lg and xl so the seven links clear the Enquire button at 1024px */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="font-medium text-text/80 hover:text-cobalt">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="/#enquire" className="btn btn-ink hidden sm:inline-flex">Enquire now</a>
          <button
            className="rounded-lg p-2 text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-white lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium text-ink">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a href="/#enquire" onClick={() => setOpen(false)} className="btn btn-primary w-full">Enquire now</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
