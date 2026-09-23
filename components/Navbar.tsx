"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // The panel is as tall as the page on a phone, so the page behind it must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav className="wrap flex h-[4.5rem] items-center justify-between gap-6" aria-label="Main">
        <Logo />

        {/* Seven links on one line from 1024px up; the gap tightens rather than wrapping. */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-[0.93rem] font-medium text-muted transition-colors hover:text-fg"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a href="/#enquire" className="btn btn-primary hidden px-6 py-3 sm:inline-flex">
            Apply now
          </a>
          <button
            type="button"
            className="-mr-2 p-2 text-fg lg:hidden"
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
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <ul className="wrap flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-lg font-medium text-fg"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="py-6">
              <a href="/#enquire" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Apply now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
