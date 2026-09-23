import { Mail, MapPin, Phone } from "lucide-react";
import { campuses, school } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-bg">
      <div className="grid lg:grid-cols-2">
        {/* The copy column keeps the page gutter on the left and stops at the fold,
            so the map can run all the way to the edge of the screen. */}
        <div className="px-5 py-20 sm:px-8 lg:py-28 lg:pl-12 lg:pr-16">
          <Reveal className="mx-auto w-full max-w-[36rem] lg:ml-auto lg:mr-0">
            <h2 className="h2">Come and see us in Brahampuri.</h2>
            <p className="lead">
              Walk through the classrooms, meet the teachers and ask us anything. Call the office and
              we will fix a time that suits you.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted" strokeWidth={1.8} />
                <span className="leading-relaxed text-fg">{school.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-muted" strokeWidth={1.8} />
                <span>
                  {school.phones.map((p, i) => (
                    <span key={p}>
                      <a
                        href={`tel:${p.replace(/-/g, "")}`}
                        className="font-semibold text-fg underline-offset-4 hover:underline"
                      >
                        {p}
                      </a>
                      {i < school.phones.length - 1 && <span className="text-muted"> / </span>}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-muted" strokeWidth={1.8} />
                <a
                  href={`mailto:${school.email}`}
                  className="font-semibold text-fg underline-offset-4 hover:underline"
                >
                  {school.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-14 text-[0.92rem] font-semibold text-fg">Where each school sits</h3>
            <ul className="mt-5">
              {campuses.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col gap-1 border-t border-line py-4 sm:flex-row sm:justify-between sm:gap-8"
                >
                  <span className="font-medium text-fg">{c.name}</span>
                  <span className="text-[0.92rem] text-muted sm:text-right">{c.address}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative min-h-[24rem] border-t border-line lg:min-h-0 lg:border-l lg:border-t-0">
          <iframe
            title="Map to D.A.V. Sr. Secondary School, Brahampuri, Jaipur"
            src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
