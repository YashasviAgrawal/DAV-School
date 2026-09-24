import Image from "next/image";
import { BookOpen, Building2, FlaskConical, Monitor, Presentation, Smile, Trophy, ShieldCheck, Stethoscope, Clock } from "lucide-react";
import { care, facilities } from "@/lib/data";
import { TilePattern } from "./Motif";

const icons = [Monitor, FlaskConical, Presentation, BookOpen, Trophy, Smile, Building2];
const careIcons = [ShieldCheck, Stethoscope, Clock];

// Bento layout: the first tile is the hero tile. Swap in real campus photos by adding
// an <Image> inside any tile (put files in /public/campus/).
const spans = [
  "md:col-span-2 md:row-span-2 bg-ink text-white",
  "bg-sky",
  "bg-white ring-1 ring-ink/10",
  "bg-white ring-1 ring-ink/10",
  "md:col-span-2 bg-cobalt text-white",
  "bg-marigold",
  "md:col-span-2 bg-sky",
];

export default function Campus() {
  return (
    <section id="campus" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="h2">Two buildings in the heart of the old city.</h2>
          <p className="lead">
            Spacious, well-ventilated classrooms, good furniture and every teaching aid your child needs,
            with games and sports at Chaugan Stadium.
          </p>
        </div>

        <figure className="mt-12">
          <Image
            src="/campus/play-outdoor.jpg"
            alt="Pre-primary children playing on slides, swings and ride-ons in the school's outdoor play area"
            width={1366}
            height={534}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="w-full rounded-3xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-text/60">The outdoor play area at the Montessori wing.</figcaption>
        </figure>

        <ul className="mt-10 grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-flow-dense md:grid-cols-4">
          {facilities.map((f, i) => {
            const Icon = icons[i];
            const big = i === 0;
            // Tiles with a real photograph carry it edge to edge, with the text over a
            // scrim. A wide tile is half the grid, a normal one a quarter, so `sizes`
            // has to follow the span or the browser fetches the wrong resolution.
            if (f.photo) {
              const wide = spans[i].includes("col-span-2");
              return (
                <li
                  key={f.title}
                  className={`relative flex min-h-[13rem] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ${spans[i]}`}
                >
                  <Image
                    src={f.photo}
                    alt={f.alt ?? ""}
                    fill
                    sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                    className={`object-cover ${f.focus ?? ""}`}
                  />
                  {/* The 2x2 tile carries far more copy than the small ones, so it gets
                      a heavier scrim to keep all of it legible over the photograph. */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-t ${
                      big ? "from-ink via-ink/80 to-ink/35" : "from-ink via-ink/60 to-ink/10"
                    }`}
                  />
                  <div className="relative">
                    <h3 className={`font-display font-bold ${big ? "text-3xl lg:text-4xl" : "text-xl"}`}>
                      {f.title}
                    </h3>
                    <p className={`mt-2 leading-relaxed text-white/85 ${big ? "max-w-sm text-lg" : ""}`}>
                      {f.text}
                    </p>
                    {/* Keep the headline number when this tile becomes a photograph, so
                        adding an image does not quietly delete the best stat on the page. */}
                    {big && (
                      <>
                        <p className="mt-5 font-display text-5xl font-extrabold leading-none text-marigold lg:text-6xl">
                          45
                        </p>
                        <p className="mt-2 text-sm text-white/75">
                          multimedia computers in the main building
                        </p>
                      </>
                    )}
                  </div>
                </li>
              );
            }
            return (
              <li key={f.title} className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 ${spans[i]}`}>
                {big && <TilePattern id="campus-tile" opacity={0.08} />}
                <Icon className={`relative ${big ? "h-12 w-12 text-marigold" : "h-8 w-8"}`} strokeWidth={1.6} />
                <div className="relative mt-6">
                  <h3 className={`font-display font-bold ${big ? "text-3xl lg:text-4xl" : "text-xl"}`}>{f.title}</h3>
                  <p className={`mt-2 leading-relaxed ${big ? "max-w-sm text-lg text-white/75" : "opacity-80"}`}>{f.text}</p>
                  {big && <p className="mt-6 font-display text-6xl font-extrabold text-marigold">45</p>}
                  {big && <p className="text-white/60">multimedia computers in the main building</p>}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 rounded-3xl bg-white p-8 ring-1 ring-ink/10 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-ink">Care beyond the classroom</h3>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {care.map((c, i) => {
              const Icon = careIcons[i];
              return (
                <li key={c.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-cobalt">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="mt-1 leading-relaxed text-text/70">{c.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
