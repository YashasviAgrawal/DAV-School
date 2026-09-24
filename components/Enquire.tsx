import { Phone } from "lucide-react";
import { school } from "@/lib/data";
import EnquiryForm from "./EnquiryForm";

// The enquiry form used to share the hero with the headline. The hero is photographs
// now, so the form gets its own section and keeps the #enquire id, which every "Book
// a campus visit" link on both pages points at.
export default function Enquire() {
  return (
    <section id="enquire" className="scroll-mt-28 bg-ink py-20 text-white lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Tell us about your child.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Leave your number and the school office will call you back, usually the same day.
            No forms to collect, no queue at the gate.
          </p>

          <div className="mt-10 border-t border-white/15 pt-8">
            <p className="text-white/70">Would you rather talk to someone?</p>
            <a href={`tel:${school.phones[0].replace(/-/g, "")}`} className="btn btn-ghost mt-4">
              <Phone className="h-4 w-4" /> Call {school.phones[0]}
            </a>
            <p className="mt-6 leading-relaxed text-white/60">
              The office keeps school hours. Find us at {school.address}.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-text shadow-2xl shadow-black/30 sm:p-8">
          <h3 className="font-display text-2xl font-bold text-ink">
            Admission enquiry {school.session}
          </h3>
          <p className="mb-6 mt-1 text-text/65">Open from Nursery to Class XII.</p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
