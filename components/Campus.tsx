import Image from "next/image";
import {
  BookOpen,
  Building2,
  Clock,
  FlaskConical,
  Monitor,
  Presentation,
  ShieldCheck,
  Smile,
  Stethoscope,
  Trophy,
} from "lucide-react";
import { care, facilities } from "@/lib/data";
import Reveal from "./Reveal";

const icons = [Monitor, FlaskConical, Presentation, BookOpen, Trophy, Smile, Building2];
const careIcons = [ShieldCheck, Stethoscope, Clock];

// Seven facilities, seven cells, three rows of four. The big navy tile carries the
// number worth reading twice; the play zone carries the only photograph we have of
// the room it describes. Nothing here is padding.
const spans = [
  "md:col-span-2 md:row-span-2 bg-band text-band-fg",
  "bg-bg border border-line",
  "bg-bg border border-line",
  "bg-bg border border-line",
  "bg-band text-band-fg",
  "md:col-span-2",
  "md:col-span-2 bg-bg border border-line",
];

export default function Campus() {
  return (
    <section className="section bg-surface">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <h2 className="h2">Two buildings in the heart of the old city.</h2>
          <p className="lead">
            Spacious, well-ventilated classrooms and every teaching aid your child needs, with games
            and sports at the historic Chaugan Stadium a short walk away.
          </p>
        </Reveal>

        <ul className="mt-14 grid auto-rows-[minmax(11rem,auto)] gap-4 md:grid-cols-4 lg:mt-16">
          {facilities.map((f, i) => {
            const Icon = icons[i];
            const big = i === 0;
            // Tiles 0 and 4 are navy, so their body copy has to take the on-band
            // muted colour. The page's default muted grey is unreadable there.
            const onBand = i === 0 || i === 4;

            if (f.photo) {
              return (
                <Reveal
                  as="li"
                  key={f.title}
                  delay={40 * i}
                  className={`relative flex min-h-[15rem] flex-col justify-end overflow-hidden p-7 text-white ${spans[i]}`}
                >
                  <Image
                    src={f.photo}
                    alt={f.alt ?? ""}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[center_40%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-scrim via-scrim/60 to-scrim/10"
                  />
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.015em]">{f.title}</h3>
                    <p className="mt-2 max-w-[42ch] leading-relaxed text-white/85">{f.text}</p>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal
                as="li"
                key={f.title}
                delay={40 * i}
                className={`flex flex-col justify-between p-7 ${spans[i]}`}
              >
                <Icon className={big ? "h-9 w-9 text-accent" : "h-7 w-7 opacity-70"} strokeWidth={1.5} />
                <div className="mt-8">
                  <h3
                    className={`font-display font-semibold tracking-[-0.02em] ${
                      big ? "text-[1.6rem] sm:text-[2rem]" : "text-xl"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2.5 leading-relaxed ${big ? "max-w-[40ch]" : "text-[0.95rem]"} ${
                      onBand ? "text-band-muted" : "text-muted"
                    }`}
                  >
                    {f.text}
                  </p>
                  {big && (
                    <p className="mt-8 border-t border-band-fg/15 pt-6">
                      <span className="font-display text-[3.4rem] font-semibold leading-none tracking-[-0.04em] text-accent">
                        45
                      </span>
                      <span className="mt-2 block text-[0.9rem] text-band-muted">
                        multimedia computers in the main building
                      </span>
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-16 border-t border-line pt-10 lg:mt-20">
          <h3 className="h3">Care beyond the classroom</h3>
          <ul className="mt-8 grid gap-10 md:grid-cols-3">
            {care.map((c, i) => {
              const Icon = careIcons[i];
              return (
                <li key={c.title} className="flex gap-4">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-fg" strokeWidth={1.6} />
                  <div>
                    <p className="font-semibold text-fg">{c.title}</p>
                    <p className="mt-1.5 leading-relaxed text-muted">{c.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
