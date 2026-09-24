import Image from "next/image";
import { gallery } from "@/lib/data";

// 2-1 / 1-2 / 2-1: every row fills three columns exactly, so the band has a
// rhythm without leaving holes. Rows are a fixed height and the photos crop to
// fill, which keeps the grid even however tall the source photograph is.
const spans = ["sm:col-span-2", "", "", "sm:col-span-2", "sm:col-span-2", ""];

export default function Gallery() {
  return (
    <section id="life" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="h2">A year at D.A.V., in photographs.</h2>
          <p className="lead">
            The Annual Function, the pre-primary wing, and the mornings we stop everything to garland
            a child who has done well.
          </p>
        </div>

        <ul className="mt-12 grid auto-rows-[220px] gap-5 sm:grid-cols-3 lg:auto-rows-[280px]">
          {gallery.map((g, i) => (
            <li key={g.src} className={spans[i]}>
              <figure className="relative h-full overflow-hidden rounded-3xl bg-sky">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${g.pos ?? ""}`}
                />
                {/* These captions sit over busy, brightly lit photographs, so the scrim
                    reaches full navy at the foot and runs taller than it used to. */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium leading-relaxed text-white">
                  {g.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
