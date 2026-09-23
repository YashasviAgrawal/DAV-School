"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { heroSlides, school } from "@/lib/data";

const DURATION = 7000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [animated, setAnimated] = useState(false);

  // `data-anim` is set by the boot script, so it already carries the reader's
  // reduced-motion preference. No preference, no autoplay: the arrows still work.
  useEffect(() => setAnimated(document.documentElement.hasAttribute("data-anim")), []);

  useEffect(() => {
    if (!animated || held) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % heroSlides.length), DURATION);
    return () => clearTimeout(t);
  }, [active, held, animated]);

  const slide = heroSlides[active];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Life at D.A.V."
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      className="relative isolate flex min-h-[max(34rem,calc(100dvh-7.25rem))] flex-col justify-end overflow-hidden bg-band"
    >
      {heroSlides.map((s, i) => {
        const on = i === active;
        return (
          <div
            key={s.src}
            aria-hidden={!on}
            className={`absolute inset-0 -z-10 ${on ? "opacity-100" : "opacity-0"}`}
            style={{
              transitionProperty: "opacity",
              transitionDuration: "1100ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {/* The slow push on the live frame. Scale resets quickly on the way out,
                while the slide is already invisible, so the next turn starts clean. */}
            <div
              className="h-full w-full"
              style={{
                transform: on ? "scale(1.12)" : "scale(1.02)",
                transitionProperty: "transform",
                transitionDuration: on ? "9000ms" : "900ms",
                transitionTimingFunction: "ease-out",
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

      {/* Two scrims: one down the page, one in from the left, so the copy block keeps
          its contrast over every frame without flattening the photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-scrim via-scrim/70 to-scrim/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-scrim/85 via-scrim/35 to-transparent"
      />

      <div className="wrap relative w-full pb-12 pt-28 sm:pb-16 lg:pb-20">
        <div className="grid gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-x-16">
          <div className="text-band-fg">
            <h1
              key={`h-${active}`}
              className="rise max-w-[14ch] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.4rem] lg:text-[4.4rem]"
            >
              {slide.headline}
            </h1>
            <p
              key={`p-${active}`}
              className="rise mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/85 sm:text-[1.15rem]"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              {slide.text}
            </p>
            <div
              className="rise mt-9 flex flex-wrap gap-3"
              style={{ "--rise-delay": "220ms" } as React.CSSProperties}
            >
              <a href="#enquire" className="btn btn-primary">
                Apply now
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={`tel:${school.phones[0].replace(/-/g, "")}`}
                className="btn border border-white/45 text-white hover:bg-white hover:text-band"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call {school.phones[0]}
              </a>
            </div>
          </div>

          <div className="lg:pb-2 lg:text-right">
            <p key={`c-${active}`} className="rise text-[0.82rem] text-white/70">
              {slide.caption}
            </p>
            <div className="mt-4 flex gap-6 lg:justify-end" role="tablist" aria-label="Choose a photograph">
              {heroSlides.map((s, i) => {
                const on = i === active;
                return (
                  <button
                    key={s.src}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-label={`Photograph ${i + 1}: ${s.caption}`}
                    onClick={() => setActive(i)}
                    className="relative pb-2.5 font-display text-sm font-semibold tabular-nums"
                  >
                    <span className={on ? "text-white" : "text-white/45 transition-colors hover:text-white/80"}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
                    {on && (
                      <span
                        key={`sweep-${active}`}
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
                        style={{
                          animation: animated ? `sweep ${DURATION}ms linear both` : undefined,
                          transform: animated ? undefined : "scaleX(1)",
                          animationPlayState: held ? "paused" : "running",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
