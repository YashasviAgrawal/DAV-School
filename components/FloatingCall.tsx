import { Phone } from "lucide-react";
import { school } from "@/lib/data";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${school.phones[0].replace(/-/g, "")}`}
      aria-label={`Call the school on ${school.phones[0]}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink shadow-lg shadow-ink/30 transition-transform hover:scale-105"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
