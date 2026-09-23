"use client";
import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const strip = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = strip.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <section id="life" className="section scroll-mt-28 overflow-hidden bg-bg">
      <div className="wrap flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="h2">A year at D.A.V., in photographs.</h2>
          <p className="lead">
            The Annual Function, the pre-primary wing, and the mornings we stop everything to garland
            a child who has done well.
          </p>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll photographs left"
            className="border border-line p-3.5 text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll photographs right"
            className="border border-line p-3.5 text-fg transition-colors hover:bg-fg hover:text-bg"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* The strip starts on the page gutter and runs off the right edge, so it reads
          as an album you can keep pulling rather than a grid that has ended. */}
      <div
        ref={strip}
        tabIndex={0}
        role="group"
        aria-label="Photographs from the school year, scrollable"
        className="no-bar strip-gutter mt-12 flex snap-x snap-proximity gap-5 overflow-x-auto scroll-smooth pb-2 pr-5 sm:pr-8 lg:mt-14 lg:pr-12"
      >
        {gallery.map((g) => (
          <figure key={g.src} className="w-[78vw] shrink-0 snap-start sm:w-[21rem] lg:w-[25rem]">
            <div className="relative aspect-[4/3] overflow-hidden bg-line">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 25rem, (min-width: 640px) 21rem, 78vw"
                className={`object-cover ${g.pos ?? ""}`}
              />
            </div>
            <figcaption className="mt-4 text-[0.92rem] leading-snug text-muted">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
