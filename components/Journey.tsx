"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { extras, stages } from "@/lib/data";

export default function Journey() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section id="academics" className="section scroll-mt-28 bg-surface">
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 className="h2">What your child learns, stage by stage.</h2>
          <p className="lead">
            Five stages under one management, so your child grows up taught by people who already
            know them. Pick a stage to see the subjects and how they are taught.
          </p>
        </div>

        {/* Tabs sit on a single hairline, the live one carrying the marigold. On a phone
            the row scrolls sideways rather than wrapping into a block of buttons. */}
        <div className="no-bar mt-12 overflow-x-auto border-b border-line">
          <div role="tablist" aria-label="School stages" className="flex min-w-max gap-8 sm:gap-10">
            {stages.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  id={`tab-${s.key}`}
                  aria-selected={on}
                  aria-controls={`panel-${s.key}`}
                  onClick={() => setActive(i)}
                  className={`relative -mb-px shrink-0 border-b-2 pb-4 font-display text-[1.02rem] font-semibold tracking-[-0.01em] transition-colors ${
                    on ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={stage.key}
          role="tabpanel"
          id={`panel-${stage.key}`}
          aria-labelledby={`tab-${stage.key}`}
          className="swap mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div>
            <h3 className="font-display text-[1.6rem] font-semibold tracking-[-0.025em] text-fg sm:text-[2rem]">
              {stage.name}
            </h3>
            <p className="mt-2 text-[0.95rem] font-medium text-muted">{stage.classes}</p>
            <ul className="mt-8 space-y-4">
              {stage.approach.map((a) => (
                <li key={a} className="flex gap-3.5 leading-relaxed text-fg/85">
                  <Check className="mt-1 h-[1.05rem] w-[1.05rem] shrink-0 text-fg" strokeWidth={2.4} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16">
            <p className="font-semibold text-fg">Subjects</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stage.subjects.map((s) => (
                <li
                  key={s}
                  className="border border-line bg-bg px-3.5 py-2 text-[0.88rem] font-medium text-fg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The one marigold panel on the page. It belongs to the thing parents in
            Brahampuri are actually shopping for: coaching they do not have to pay for. */}
        <div className="mt-16 bg-accent p-8 text-accent-fg sm:p-12 lg:mt-20">
          <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.025em] sm:text-[1.9rem]">
            Included with your child&rsquo;s seat.
          </h3>
          <p className="mt-3 max-w-[56ch] leading-relaxed text-accent-fg/80">
            All three run inside the school day, so no family has to arrange a second commute for
            coaching.
          </p>
          <ul className="mt-10 grid gap-8 sm:gap-10 md:grid-cols-3">
            {extras.map((e) => (
              <li key={e.title} className="border-t border-accent-fg/25 pt-5">
                <p className="font-display text-[1.1rem] font-semibold leading-snug">{e.title}</p>
                <p className="mt-2 leading-relaxed text-accent-fg/80">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
