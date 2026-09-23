import { school, timeline } from "@/lib/data";
import { Rosette, TilePattern } from "./Motif";

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <TilePattern id="story-tile" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Founded in 1972. Still run like a family.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            What began as a Montessori school in Brahampuri is now three schools under experienced
            management and qualified teachers. The idea hasn’t changed: give each child individual attention.
          </p>

          <figure className="mt-10 flex items-start gap-5 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <Rosette className="h-14 w-14 shrink-0" />
            <figcaption>
              <p className="leading-relaxed text-white/85">
                Every new family is welcomed into the D.A.V. school family, and we ask one thing in return:
                work with us, so your child grows towards self-reliance.
              </p>
              <p className="mt-3 font-semibold text-marigold">From the Principal’s desk</p>
              <p className="text-sm text-white/60">Led by {school.director}, Director</p>
            </figcaption>
          </figure>
        </div>

        <ol className="relative border-l-2 border-white/15 pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-ink bg-marigold ring-2 ring-marigold" aria-hidden="true" />
              <p className="font-display text-4xl font-extrabold text-marigold">{t.year}</p>
              <p className="mt-2 max-w-md text-lg leading-relaxed text-white/80">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
