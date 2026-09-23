import Image from "next/image";
import { voices } from "@/lib/data";
import Reveal from "./Reveal";

const [aim, principal] = voices;

export default function Vision() {
  return (
    <section id="story" className="section scroll-mt-28 bg-surface">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <h2 className="h2">What the school is for.</h2>
          <p className="lead">
            Two lines the school has kept to since 1972. Everything else on this page is an attempt
            to live up to them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
          <Reveal as="figure" className="flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden bg-line">
              <Image
                src={aim.photo}
                alt={aim.alt}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
            <figcaption className="mt-8">
              <blockquote className="font-display text-[1.3rem] font-medium leading-[1.35] tracking-[-0.02em] text-fg sm:text-[1.55rem]">
                &ldquo;{aim.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-fg">{aim.source}</p>
              <p className="mt-1 text-[0.92rem] text-muted">{aim.note}</p>
            </figcaption>
          </Reveal>

          {/* The navy panel is the same structural device as the hero scrim and the
              footer, so this reads as the school's voice rather than a second theme. */}
          <Reveal as="figure" delay={120} className="flex flex-col justify-between bg-band p-8 sm:p-10">
            <blockquote className="font-display text-[1.3rem] font-medium leading-[1.35] tracking-[-0.02em] text-band-fg sm:text-[1.55rem]">
              &ldquo;{principal.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-5 border-t border-band-fg/15 pt-8">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-band-fg/10 sm:h-24 sm:w-20">
                <Image
                  src={principal.photo}
                  alt={principal.alt}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-accent">{principal.source}</p>
                <p className="mt-1 text-[0.92rem] leading-snug text-band-muted">{principal.note}</p>
              </div>
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
