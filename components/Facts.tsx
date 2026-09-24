import { heroFacts } from "@/lib/data";

// The numbers used to sit inside the hero. The hero is photographs now, so they get
// their own quiet band directly beneath it.
export default function Facts() {
  return (
    <section aria-label="The school at a glance" className="border-b border-ink/10 bg-white">
      <dl className="container-x grid grid-cols-2 gap-x-8 gap-y-8 py-12 sm:grid-cols-4 lg:py-14">
        {heroFacts.map((f) => (
          <div key={f.label}>
            <dt className="sr-only">{f.label}</dt>
            <dd className="font-display text-4xl font-extrabold leading-none tracking-tight text-ink">
              {f.value}
            </dd>
            <dd className="mt-2.5 max-w-[22ch] text-sm leading-snug text-text/60">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
