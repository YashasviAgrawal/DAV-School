import Image from "next/image";

export default function Logo({ onBand = false }: { onBand?: boolean }) {
  const title = onBand ? "text-band-fg" : "text-fg";
  const sub = onBand ? "text-band-muted" : "text-muted";

  return (
    <a href="/#top" className="flex items-center gap-3.5" aria-label="D.A.V. Group of Schools, home">
      {/* The crest is a 95px source file, so it is never drawn above 36px. It sits on
          its own white plate, which keeps the emblem legible in either colour mode. */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white">
        <Image src="/brand/crest.png" alt="" width={95} height={81} priority className="h-8 w-auto" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.05rem] font-bold tracking-[0.08em] ${title}`}>D.A.V.</span>
        <span className={`mt-1 block text-[0.7rem] font-medium tracking-[0.04em] ${sub}`}>
          Group of Schools, Jaipur
        </span>
      </span>
    </a>
  );
}
