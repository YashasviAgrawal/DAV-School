import { ArrowRight, Info } from "lucide-react";
import { admissionSteps, timings } from "@/lib/data";
import Reveal from "./Reveal";

export default function Admissions() {
  return (
    <section id="admissions" className="section scroll-mt-28 bg-surface">
      <div className="wrap">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Nursery to Class XII</p>
            <h2 className="h2 mt-4">Getting a seat is simple.</h2>
            <p className="lead">Four steps, and the first one takes about a minute.</p>
          </div>
          <a href="#enquire" className="btn btn-solid shrink-0 self-start lg:self-auto">
            Apply now
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </Reveal>

        <ol className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="border-t border-line pt-6">
              <span className="font-display text-[0.82rem] font-semibold tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="h3 mt-4">{s.title}</h3>
              <p className="mt-2.5 leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex max-w-3xl gap-4 border-l-2 border-accent bg-bg p-6">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-fg" strokeWidth={1.8} />
          <p className="text-[0.95rem] leading-relaxed text-muted">
            Class XI has its own eligibility norms. Subject combinations in Commerce and Science are
            fixed and cannot be changed after admission, so please choose after careful thought.
          </p>
        </Reveal>

        <Reveal className="mt-16 lg:mt-20">
          <h3 className="h3">School timings</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <thead>
                <tr className="bg-band text-band-fg">
                  <th scope="col" className="px-6 py-4 font-semibold">Classes</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Time</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Building</th>
                </tr>
              </thead>
              <tbody className="bg-bg">
                {timings.map((t) => (
                  <tr key={t.who} className="border-t border-line">
                    <td className="px-6 py-4 font-medium text-fg">{t.who}</td>
                    <td className="px-6 py-4 tabular-nums text-muted">{t.time}</td>
                    <td className="px-6 py-4 text-muted">{t.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
