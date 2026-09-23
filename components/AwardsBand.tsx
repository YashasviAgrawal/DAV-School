import Image from "next/image";
import { Award } from "lucide-react";
import { awards } from "@/lib/data";

export default function AwardsBand() {
  return (
    <section aria-label="Awards" className="bg-marigold text-ink">
      <div className="container-x grid gap-8 py-10 md:grid-cols-3 md:gap-10">
        {awards.map((a) => (
          <figure key={a.title}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-ink/10 ring-1 ring-ink/10">
              <Image
                src={a.photo}
                alt={a.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex gap-4">
              <Award className="mt-1 h-7 w-7 shrink-0" strokeWidth={1.8} />
              <div>
                <p className="font-display text-lg font-bold leading-snug">{a.title}</p>
                <p className="mt-1 text-sm text-ink/75">{a.by}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
