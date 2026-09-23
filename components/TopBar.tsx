import { Mail, Phone } from "lucide-react";
import { school } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-ink text-sm text-white/80">
      <div className="container-x flex h-10 items-center justify-between gap-4">
        <p className="truncate">
          <span className="font-semibold text-marigold">Admissions open</span> for session {school.session}
        </p>
        <div className="hidden items-center gap-6 md:flex">
          <a href={`tel:${school.phones[0].replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" /> {school.phones.join(" / ")}
          </a>
          <a href={`mailto:${school.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> {school.email}
          </a>
        </div>
      </div>
    </div>
  );
}
