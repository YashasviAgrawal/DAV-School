import { features, school } from "@/lib/data";

export default function WhyDav() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h2">Why parents choose D.A.V.</h2>
          <blockquote className="mt-8 border-l-4 border-marigold pl-6">
            <p className="font-display text-2xl font-semibold leading-snug text-ink">
              Love and firmness go hand in hand. We aim to balance each child’s moral, intellectual and physical growth.
            </p>
            <footer className="mt-4 text-text/60">The school’s founding aim</footer>
          </blockquote>
          <p className="mt-8 max-w-md leading-relaxed text-muted">
            We set high academic expectations and pair them with values, so students grow into
            peace-building, productive citizens, and leaders who are good people first.
          </p>
          <a href="#enquire" className="btn btn-ink mt-8">Talk to the school office</a>
          <p className="sr-only">Motto: {school.motto}</p>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="border-t border-ink/10 py-6">
              <h3 className="font-display text-xl font-bold text-ink">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
