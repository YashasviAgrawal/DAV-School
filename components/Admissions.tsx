import { Info } from "lucide-react";
import { admissionSteps, timings } from "@/lib/data";

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="h2">Getting admission is simple.</h2>
            <p className="lead">Admissions are open from Nursery to Class XII. Here’s what happens after you enquire.</p>
          </div>
          <a href="#enquire" className="btn btn-ink self-start">Start with an enquiry</a>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl bg-white p-6 ring-1 ring-ink/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-marigold font-display font-bold text-ink">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-text/70">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 flex max-w-3xl gap-3 rounded-2xl bg-sky/70 p-4 text-sm leading-relaxed text-ink">
          <Info className="mt-0.5 h-5 w-5 shrink-0" />
          Class XI has its own eligibility norms. Subject combinations in Commerce and Science are fixed and
          can’t be changed after admission, so please choose after careful thought.
        </p>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-ink">School timings</h3>
          <div className="mt-6 overflow-x-auto rounded-3xl bg-white ring-1 ring-ink/10">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Classes</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Time</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Building</th>
                </tr>
              </thead>
              <tbody>
                {timings.map((t) => (
                  <tr key={t.who} className="border-t border-ink/10">
                    <td className="px-6 py-4 font-medium text-ink">{t.who}</td>
                    <td className="px-6 py-4 tabular-nums text-text/80">{t.time}</td>
                    <td className="px-6 py-4 text-text/80">{t.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
