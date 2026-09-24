import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Phone } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import { Rosette, TilePattern } from "@/components/Motif";
import { leadership, school, teachers, teachingApproach } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our teachers | D.A.V. Group of Schools, Brahampuri Jaipur",
  description:
    "The people who teach at D.A.V. Group of Schools, Brahampuri, Jaipur — Montessori-trained in the early years, subject specialists through to Class XII, led by Director CA Manoj Kumar Agarwal.",
};

export default function TeachersPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-ink text-white">
          <TilePattern id="teachers-tile" />
          <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] lg:-right-32 lg:top-1/2 lg:h-[680px] lg:w-[680px] lg:-translate-y-1/2" aria-hidden="true">
            <Rosette className="h-full w-full opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" aria-hidden="true" />

          <div className="container-x relative py-16 lg:py-24">
            <p className="text-base font-medium text-marigold">Our teachers</p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              The people who will know your child by name.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Since 1972 the school has been run by one family and staffed by teachers who stay.
              That is the whole method: the same faces, year after year, from Play Group to Class XII.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 lg:py-28">
          <div className="container-x">
            <div className="max-w-3xl">
              <h2 className="h2">Who runs the school.</h2>
              <p className="lead">Three schools in Brahampuri Khurra, under one management, for over fifty years.</p>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {leadership.map((p) => (
                <li key={p.name} className="rounded-3xl bg-white p-7 ring-1 ring-ink/10">
                  {p.photo ? (
                    <Image
                      src={p.photo}
                      alt={p.alt ?? ""}
                      width={464}
                      height={580}
                      sizes="96px"
                      className="h-24 w-24 rounded-2xl object-cover object-top"
                    />
                  ) : (
                    <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-sky text-muted" aria-hidden="true">
                      <GraduationCap className="h-10 w-10" strokeWidth={1.5} />
                    </span>
                  )}
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 font-semibold text-muted">{p.role}</p>
                  <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How the teaching staff works */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="h2">How our teachers work.</h2>
              <p className="lead">
                Small enough that nobody gets lost, structured enough to take a child to a board exam.
              </p>
              <a href="/#enquire" className="btn btn-ink mt-8">Book a campus visit</a>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {teachingApproach.map((t) => (
                <li key={t.title} className="border-t border-ink/10 py-6">
                  <h3 className="font-display text-xl font-bold text-ink">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The roster. Renders as soon as `teachers` in lib/data.ts has entries. */}
        {teachers.length > 0 && (
          <section className="py-20 lg:py-28">
            <div className="container-x">
              <div className="max-w-3xl">
                <h2 className="h2">Meet the teaching staff.</h2>
                <p className="lead">The teachers your child will see every day.</p>
              </div>
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {teachers.map((t) => (
                  <li key={t.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10">
                    <div className="relative aspect-[4/5] bg-sky">
                      {t.photo ? (
                        <Image src={t.photo} alt={t.alt ?? ""} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      ) : (
                        <span className="flex h-full items-center justify-center text-muted" aria-hidden="true">
                          <GraduationCap className="h-12 w-12" strokeWidth={1.4} />
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold leading-snug text-ink">{t.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted">{t.role}</p>
                      {t.subjects && <p className="mt-2 text-sm leading-relaxed text-muted">{t.subjects}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Closing call to action. Kept white so the footer's sweep still starts from a
            light background rather than meeting the pale blue at a hard edge. */}
        <section className="bg-white py-16 lg:py-20">
          <div className="container-x flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                The best way to meet the teachers is to come in.
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                Walk through the classrooms, meet the staff and ask them anything. Call the office to fix a time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/#enquire" className="btn btn-primary">Book a campus visit</a>
              <a href={`tel:${school.phones[0].replace(/-/g, "")}`} className="btn btn-ink">
                <Phone className="h-4 w-4" /> {school.phones[0]}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
