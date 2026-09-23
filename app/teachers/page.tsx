import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, GraduationCap, Phone } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Reveal from "@/components/Reveal";
import { leadership, school, teachers, teachingApproach } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our teachers | D.A.V. Group of Schools, Brahampuri Jaipur",
  description:
    "The people who teach at D.A.V. Group of Schools, Brahampuri, Jaipur. Montessori-trained in the early years, subject specialists through to Class XII, led by Director CA Manoj Kumar Agarwal.",
};

export default function TeachersPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main">
        <section className="bg-band text-band-fg">
          <div className="wrap grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28">
            <div>
              <h1 className="font-display text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.035em] text-band-fg sm:text-[3.2rem] lg:text-[3.8rem]">
                The people who will know your child by name.
              </h1>
            </div>
            <p className="max-w-[46ch] leading-[1.75] text-band-muted lg:pb-3">
              Since 1972 the school has been run by one family and staffed by teachers who stay. That
              is the whole method: the same faces, year after year, from Play Group to Class XII.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="section bg-bg">
          <div className="wrap">
            <Reveal className="max-w-3xl">
              <h2 className="h2">Who runs the school.</h2>
              <p className="lead">
                Three schools in Brahampuri Khurra, under one management, for over fifty years.
              </p>
            </Reveal>

            <ul className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-16">
              {leadership.map((p, i) => (
                <Reveal as="li" key={p.name} delay={i * 90} className="border-t border-line pt-7">
                  {p.photo ? (
                    <div className="relative h-28 w-[5.5rem] overflow-hidden bg-surface">
                      <Image
                        src={p.photo}
                        alt={p.alt ?? ""}
                        fill
                        sizes="88px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <span
                      className="flex h-28 w-[5.5rem] items-center justify-center bg-surface text-muted"
                      aria-hidden="true"
                    >
                      <GraduationCap className="h-8 w-8" strokeWidth={1.4} />
                    </span>
                  )}
                  <h3 className="mt-7 font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-fg">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] font-semibold text-muted">{p.role}</p>
                  <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How the teaching staff works */}
        <section className="section bg-surface">
          <div className="wrap grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="h2">How our teachers work.</h2>
              <p className="lead">
                Small enough that nobody gets lost, structured enough to take a child to a board exam.
              </p>
              <a href="/#enquire" className="btn btn-solid mt-9">
                Apply now
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </Reveal>
            <ul className="grid gap-x-12 sm:grid-cols-2">
              {teachingApproach.map((t, i) => (
                <Reveal as="li" key={t.title} delay={(i % 2) * 90} className="border-t border-line py-7">
                  <h3 className="h3">{t.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{t.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* The roster. Renders as soon as `teachers` in lib/data.ts has entries. */}
        {teachers.length > 0 && (
          <section className="section bg-bg">
            <div className="wrap">
              <Reveal className="max-w-3xl">
                <h2 className="h2">Meet the teaching staff.</h2>
                <p className="lead">The teachers your child will see every day.</p>
              </Reveal>
              <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {teachers.map((t, i) => (
                  <Reveal as="li" key={t.name} delay={(i % 4) * 70}>
                    <div className="relative aspect-[4/5] bg-surface">
                      {t.photo ? (
                        <Image
                          src={t.photo}
                          alt={t.alt ?? ""}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <span
                          className="flex h-full items-center justify-center text-muted"
                          aria-hidden="true"
                        >
                          <GraduationCap className="h-10 w-10" strokeWidth={1.4} />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] text-fg">
                      {t.name}
                    </h3>
                    <p className="mt-1 text-[0.88rem] font-semibold text-muted">{t.role}</p>
                    {t.subjects && (
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{t.subjects}</p>
                    )}
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Closing call to action */}
        <section className="bg-band text-band-fg">
          <div className="wrap flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center lg:py-20">
            <div>
              <h2 className="font-display text-[1.6rem] font-semibold tracking-[-0.025em] text-band-fg sm:text-[2.1rem]">
                The best way to meet the teachers is to come in.
              </h2>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-band-muted">
                Walk through the classrooms, meet the staff and ask them anything. Call the office to
                fix a time.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href="/#enquire" className="btn btn-primary">
                Apply now
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={`tel:${school.phones[0].replace(/-/g, "")}`}
                className="btn btn-on-band"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call {school.phones[0]}
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
