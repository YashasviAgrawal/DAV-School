import { Phone } from "lucide-react";
import { school } from "@/lib/data";
import EnquiryForm from "./EnquiryForm";
import Reveal from "./Reveal";

export default function Enquire() {
  return (
    <section id="enquire" className="section scroll-mt-28 bg-band text-band-fg">
      <div className="wrap grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal className="lg:pt-2">
          <h2 className="h2 text-band-fg">Tell us about your child.</h2>
          <p className="lead text-band-muted">
            Leave your number and the school office will call you back, usually the same day. No
            forms to collect, no queue at the gate.
          </p>

          <div className="mt-10 border-t border-band-fg/20 pt-8">
            <p className="text-[0.92rem] text-band-muted">Would you rather talk to someone?</p>
            <a
              href={`tel:${school.phones[0].replace(/-/g, "")}`}
              className="btn btn-on-band mt-4"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              Call {school.phones[0]}
            </a>
            <p className="mt-6 text-[0.92rem] leading-relaxed text-band-muted">
              The office keeps school hours. Find us at {school.address}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="bg-bg p-7 sm:p-10">
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-fg">
            Admission enquiry, session {school.session}
          </h3>
          <p className="mb-8 mt-2 text-[0.95rem] leading-relaxed text-muted">
            Open from Nursery to Class XII.
          </p>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
