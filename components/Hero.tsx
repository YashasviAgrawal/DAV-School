import { Phone } from "lucide-react";
import { heroFacts, school } from "@/lib/data";
import { Rosette, TilePattern } from "./Motif";
import EnquiryForm from "./EnquiryForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <TilePattern id="hero-tile" />
      {/* The one orchestrated motion on the page: the rosette blooms in on load */}
      <div className="pointer-events-none absolute -right-48 -top-24 h-[640px] w-[640px] lg:-right-56 lg:top-1/2 lg:h-[900px] lg:w-[900px] lg:-translate-y-1/2" aria-hidden="true">
        <Rosette className="animate-bloom h-full w-full opacity-90" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20" aria-hidden="true" />

      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="text-base font-medium text-marigold">
            <span lang="hi">स्वागत है</span>, welcome to the D.A.V. family, {school.place}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Every child known by name, from Play Group to Class XII.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            An English-medium, co-educational school with Hindi and Sanskrit at its roots. For over fifty years,
            Brahampuri families have trusted us with one promise: {school.motto.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquire" className="btn btn-primary">Book a campus visit</a>
            <a href={`tel:${school.phones[0].replace(/-/g, "")}`} className="btn btn-ghost">
              <Phone className="h-4 w-4" /> Call {school.phones[0]}
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {heroFacts.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-display text-3xl font-bold text-white">{f.value}</dd>
                <dd className="mt-1 text-sm leading-snug text-white/60">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="enquire" className="scroll-mt-28 rounded-3xl bg-white p-6 text-text shadow-2xl shadow-black/30 sm:p-8">
          <h2 className="font-display text-2xl font-bold text-ink">Admission enquiry {school.session}</h2>
          <p className="mb-6 mt-1 text-text/65">Leave your number and the office will call you back.</p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
