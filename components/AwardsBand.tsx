import Image from "next/image";
import { awards } from "@/lib/data";

// This was a full-width marigold band. At that scale the gold overpowered everything
// around it and fought with the very different colour casts of the three photographs.
// The accent now does its work as a single short rule, and the photographs carry the
// colour on a plain white ground.
export default function AwardsBand() {
  return (
    <section aria-labelledby="awards-heading" className="border-y border-ink/10 bg-white py-16 lg:py-20">
      <div className="container-x">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-[3px] w-10 shrink-0 bg-marigold" />
          <h2
            id="awards-heading"
            className="font-display text-[0.8rem] font-bold uppercase tracking-[0.16em] text-ink"
          >
            Recognised by
          </h2>
        </div>

        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {awards.map((a) => (
            <li key={a.title}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-chalk">
                <Image
                  src={a.photo}
                  alt={a.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 font-display text-lg font-bold leading-snug text-ink">{a.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.by}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
