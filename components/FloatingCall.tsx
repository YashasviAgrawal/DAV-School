import { Phone } from "lucide-react";
import { school } from "@/lib/data";

// Phones only. From `lg` up the sticky header keeps a visible call to action, so a
// floating button there would just be a second one shouting over the page.
export default function FloatingCall() {
  return (
    <a
      href={`tel:${school.phones[0].replace(/-/g, "")}`}
      className="btn btn-primary fixed bottom-0 right-0 z-30 shadow-[0_-2px_24px_rgb(var(--scrim)/0.25)] lg:hidden"
    >
      <Phone className="h-4 w-4" strokeWidth={2} />
      Call {school.phones[0]}
    </a>
  );
}
