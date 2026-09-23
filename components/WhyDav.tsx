import { ArrowRight } from "lucide-react";
import { features } from "@/lib/data";
import Reveal from "./Reveal";

export default function WhyDav() {
  return (
    <section className="section bg-bg">
      <div className="wrap grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="h2">Why parents in Brahampuri choose us.</h2>
          <p className="lead">
            High academic expectations, paired with the things that are harder to put on a report
            card: honesty, leadership, and knowing that somebody is watching out for your child.
          </p>
          <a href="/#enquire" className="btn btn-solid mt-9">
            Apply now
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </Reveal>

        <ul className="grid gap-x-12 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 2) * 90} className="border-t border-line py-7">
              <h3 className="h3">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{f.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
