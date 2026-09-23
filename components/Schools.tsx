import Image from "next/image";
import { MapPin } from "lucide-react";
import { campuses } from "@/lib/data";
import Reveal from "./Reveal";

const [flagship, ...rest] = campuses;

function Meta({ since, address }: { since: string; address: string }) {
  return (
    <p className="mt-5 flex items-start gap-2 text-[0.86rem] leading-snug text-muted">
      <MapPin className="mt-px h-4 w-4 shrink-0" strokeWidth={1.8} />
      <span>
        {since}. {address}.
      </span>
    </p>
  );
}

export default function Schools() {
  return (
    <section id="campus" className="section scroll-mt-28 bg-bg">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Three schools, one family</p>
          <h2 className="h2 mt-4">Brahampuri Khurra, from Play Group to Class XII.</h2>
          <p className="lead">
            Three schools under one management, a few streets apart. A child can start at two and a
            half and leave with a board certificate without ever changing family.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-x-10">
          <Reveal as="article" className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-line sm:aspect-[16/11]">
              <Image
                src={flagship.photo}
                alt={flagship.alt}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className={`object-cover ${flagship.focus}`}
              />
            </div>
            <div className="mt-7">
              <p className="text-[0.95rem] font-semibold text-muted">{flagship.covers}</p>
              <h3 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] text-fg sm:text-[2.1rem]">
                {flagship.name}
              </h3>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">{flagship.text}</p>
              <Meta since={flagship.since} address={flagship.address} />
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-5">
            {rest.map((c, i) => (
              <Reveal
                as="article"
                key={c.name}
                delay={120 + i * 100}
                className="grid gap-6 border-t border-line pt-8 sm:grid-cols-[38%_1fr] sm:gap-7"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-line">
                  <Image
                    src={c.photo}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 38vw, 100vw"
                    className={`object-cover ${c.focus}`}
                  />
                </div>
                <div>
                  <p className="text-[0.88rem] font-semibold text-muted">{c.covers}</p>
                  <h3 className="h3 mt-2.5">{c.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{c.text}</p>
                  <Meta since={c.since} address={c.address} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
