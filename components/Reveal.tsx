"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "figure" | "header";
};

/**
 * Reveals its children once they scroll into view.
 *
 * The hidden state lives in globals.css behind `html[data-anim]`, and the boot
 * script only sets that attribute when JavaScript is running and the reader has
 * not asked for reduced motion. So this component can never leave content
 * invisible: if anything here fails, the page is simply already finished.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.hasAttribute("data-anim")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
