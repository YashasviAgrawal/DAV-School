import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/#top" className="flex items-center gap-3" aria-label="D.A.V. Group of Schools, home">
      {/* The school's own crest. It is a small source file, so it is never drawn
          larger than 40px — at that size it still has room to spare on retina. */}
      <Image
        src="/brand/crest.png"
        alt=""
        width={95}
        height={81}
        priority
        className="h-10 w-auto shrink-0"
      />
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          D.A.V.
        </span>
        <span className={`block text-xs font-medium ${light ? "text-white/70" : "text-text/60"}`}>
          Group of Schools, Jaipur
        </span>
      </span>
    </a>
  );
}
