import { heroFacts } from "@/lib/data";
import Reveal from "./Reveal";

export default function Facts() {
  return (
    <section aria-label="The school at a glance" className="border-b border-line bg-bg">
      <dl className="wrap grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:gap-x-12 lg:grid-cols-4 lg:py-16">
        {heroFacts.map((f, i) => (
          <Reveal key={f.label} delay={i * 70} className="border-t border-line pt-5">
            <dt className="sr-only">{f.label}</dt>
            <dd className="font-display text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-fg lg:text-[3rem]">
              {f.value}
            </dd>
            <dd className="mt-3 max-w-[22ch] text-[0.9rem] leading-snug text-muted">{f.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
