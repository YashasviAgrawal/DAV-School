"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/data";

const DURATION = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // The slides turn on their own. Deliberately NOT paused on hover: this section is a
  // full viewport tall, so the pointer sits inside it almost the whole time a reader is
  // on the page, and hover-pausing meant it never advanced at all on a desktop.
  // Reduced motion is handled in globals.css, which drops the transition duration to
  // nothing, so those readers get a clean cut between photographs instead of a fade
  // rather than a hero that never moves.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  const slide = heroSlides[active];

  return (
    // -mt-20 pulls the photograph up under the header, which is transparent at the top
    // of this page, so the nav floats on the image rather than sitting in a bar above
    // it. The 5rem of top padding below puts the copy back clear of it.
    //
    // The focus handlers hold the slides only while a dot has keyboard focus, so
    // tabbing through them does not shift the photograph under the reader.
    <section
      aria-roledescription="carousel"
      aria-label="Life at D.A.V."
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative isolate -mt-20 flex min-h-[max(34rem,calc(100dvh-2.5rem))] flex-col justify-center overflow-hidden bg-ink"
    >
      {heroSlides.map((s, i) => {
        const on = i === active;
        return (
          <div
            key={s.src}
            aria-hidden={!on}
            className={`absolute inset-0 -z-10 ${on ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "opacity 1100ms ease-in-out" }}
          >
            {/* A slow push on the live frame. The scale snaps back on the way out,
                while the slide is already invisible, so each turn starts clean. */}
            <div
              className="h-full w-full"
              style={{
                transform: on ? "scale(1.1)" : "scale(1.02)",
                transition: `transform ${on ? "8000ms" : "900ms"} ease-out`,
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover ${s.focus}`}
              />
            </div>
          </div>
        );
      })}

      {/* Weighted to the left, where the type is, so the right of every frame stays
          close to the real photograph. The top corner is darkened enough to carry the
          white crest and links, the foot enough to carry the slide dots. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/55 via-transparent to-ink/35"
      />

      <div className="container-x relative w-full pb-28 pt-28">
        <h1
          key={`h-${active}`}
          className="max-w-[15ch] font-serif text-[2.75rem] font-normal leading-[1.08] text-white sm:text-6xl lg:text-[4.25rem]"
        >
          {slide.headline}
        </h1>
        <p
          key={`p-${active}`}
          className="mt-6 max-w-[38ch] text-lg leading-relaxed text-white/85"
        >
          {slide.text}
        </p>
      </div>

      {/* Dots bottom right, the live one an open marigold ring with its number. The
          right padding clears the docked call button, which is fixed over this corner
          at every width and otherwise sits on top of the last two dots. */}
      <div className="container-x absolute inset-x-0 bottom-9">
        <div className="flex items-center justify-end gap-4 pr-20">
          {heroSlides.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.src}
                type="button"
                aria-label={`Show photograph ${i + 1} of ${heroSlides.length}`}
                aria-current={on}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 py-1"
              >
                {on ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="block h-5 w-5 rounded-full border-2 border-marigold"
                    />
                    <span aria-hidden="true" className="block h-px w-3 bg-marigold" />
                    <span className="font-display text-sm font-bold tabular-nums text-marigold">
                      {i + 1}
                    </span>
                  </>
                ) : (
                  <span
                    aria-hidden="true"
                    className="block h-2.5 w-2.5 rounded-full bg-white/70 transition-colors hover:bg-white"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
