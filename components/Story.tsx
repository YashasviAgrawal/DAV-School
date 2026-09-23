import Image from "next/image";
import { awards, timeline } from "@/lib/data";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="section bg-band text-band-fg">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <h2 className="h2 text-band-fg">Founded in 1972. Still run like a family.</h2>
          <p className="lead text-band-muted">
            What began as one Montessori school in Brahampuri is now three, under experienced
            management and qualified teachers. The idea has not changed.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 90} className="border-t border-band-fg/25 pt-6">
              <p className="font-display text-[2.2rem] font-semibold leading-none tracking-[-0.04em] text-accent">
                {t.year}
              </p>
              <p className="mt-4 leading-relaxed text-band-muted">{t.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 border-t border-band-fg/15 pt-12">
          <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-band-fg">
            Recognised by
          </h3>
          <ul className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 90}>
                <div className="relative aspect-[16/9] overflow-hidden bg-band-fg/10">
                  <Image
                    src={a.photo}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-display text-[1.05rem] font-semibold leading-snug text-band-fg">
                  {a.title}
                </p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-band-muted">{a.by}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
