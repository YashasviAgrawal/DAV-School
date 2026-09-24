"use client";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { extras, stages } from "@/lib/data";

export default function Journey() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section id="academics" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="h2">One school family, from first steps to board exams.</h2>
          <p className="lead">
            Five stages under one management, so your child grows up with teachers who already know them.
            Pick a stage to see what they learn and how.
          </p>
        </div>

        {/* Stage path: a real sequence, so it reads left to right like a road */}
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-1 rounded-full bg-sky md:block" aria-hidden="true" />
          <div
            className="absolute left-0 top-5 hidden h-1 rounded-full bg-cobalt transition-all duration-500 md:block"
            style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
            aria-hidden="true"
          />
          <div role="tablist" aria-label="School stages" className="relative flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
            {stages.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={s.key}
                  role="tab"
                  id={`tab-${s.key}`}
                  aria-selected={on}
                  aria-controls={`panel-${s.key}`}
                  onClick={() => setActive(i)}
                  className="group flex shrink-0 flex-col items-start gap-3 rounded-xl p-1 text-left md:items-center md:text-center"
                >
                  <span
                    className={`hidden h-11 w-11 items-center justify-center rounded-full border-4 font-display font-bold transition-colors md:flex ${
                      on ? "border-marigold bg-ink text-white" : done ? "border-cobalt bg-cobalt text-white" : "border-sky bg-white text-ink/50 group-hover:border-cobalt/40"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`rounded-full px-4 py-2 font-semibold transition-colors md:rounded-none md:bg-transparent md:p-0 ${
                      on ? "bg-ink text-white md:text-ink" : "bg-sky text-ink/70 md:text-text/60"
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${stage.key}`}
          aria-labelledby={`tab-${stage.key}`}
          className="mt-10 grid gap-10 rounded-3xl bg-white p-6 ring-1 ring-ink/10 sm:p-10 lg:grid-cols-[1fr_1.1fr]"
        >
          <div>
            <p className="text-sm font-semibold text-cobalt">{stage.classes}</p>
            <h3 className="mt-2 font-display text-3xl font-bold text-ink">{stage.name}</h3>
            <ul className="mt-6 space-y-3">
              {stage.approach.map((a) => (
                <li key={a} className="flex gap-3 text-text/80">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" strokeWidth={2.5} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* One photograph per stage, keyed so it fades in when the tab changes. It
              stretches to the height of the list beside it from lg up, and falls back
              to a 4:3 crop once the panel stacks. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky lg:aspect-auto lg:h-full lg:min-h-[19rem]">
            <Image
              key={stage.key}
              src={stage.photo}
              alt={stage.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={`animate-fade object-cover ${stage.focus}`}
            />
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-ink p-8 text-white sm:p-10">
          <h3 className="font-display text-2xl font-bold">Included with your child&rsquo;s seat</h3>
          <p className="mt-2 max-w-2xl text-white/70">
            Run inside the school day, so nobody has to arrange a second commute for coaching.
          </p>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {extras.map((e) => (
              <li key={e.title}>
                <p className="font-display text-lg font-bold text-marigold">{e.title}</p>
                <p className="mt-2 leading-relaxed text-white/75">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
