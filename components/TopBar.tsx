import { ArrowRight, Phone } from "lucide-react";
import { school } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-band text-band-fg">
      <div className="wrap flex h-11 items-center justify-between gap-6 text-[0.83rem]">
        <a href="/#enquire" className="link-arrow group min-w-0 text-band-fg">
          <span className="truncate">
            <span className="font-semibold text-accent">Admissions open</span>
            <span className="text-band-muted"> for session {school.session}</span>
          </span>
          <ArrowRight className="arrow hidden h-3.5 w-3.5 shrink-0 sm:block" strokeWidth={2} />
        </a>

        <a
          href={`tel:${school.phones[0].replace(/-/g, "")}`}
          className="hidden shrink-0 items-center gap-2 text-band-muted transition-colors hover:text-band-fg md:flex"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={2} />
          {school.phones.join(" / ")}
        </a>
      </div>
    </div>
  );
}
