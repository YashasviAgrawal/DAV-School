"use client";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { classOptions, school } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (!/^[6-9]\d{9}$/.test(String(payload.phone))) {
      setStatus("error");
      setError("Enter a 10-digit mobile number starting with 6, 7, 8 or 9.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error && err.message ? err.message : `Couldn’t send the enquiry. Call us on ${school.phones[0]}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status">
        <CheckCircle2 className="h-14 w-14 text-leaf" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Enquiry sent</h3>
        <p className="mt-2 max-w-xs text-muted">
          The school office will call you on {phone} within one working day.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-ink/15 bg-chalk px-4 py-3 text-text placeholder:text-text/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/15";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="parent" className="text-sm font-semibold text-ink">Parent’s name</label>
        <input id="parent" name="parent" required autoComplete="name" className={field} placeholder="e.g. Sunita Sharma" />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-ink">Mobile number</label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 mt-[3px] -translate-y-1/2 text-text/50">+91</span>
          <input
            id="phone" name="phone" required inputMode="numeric" maxLength={10} autoComplete="tel-national"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className={`${field} pl-14`} placeholder="98XXXXXXXX"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="child" className="text-sm font-semibold text-ink">Child’s name</label>
          <input id="child" name="child" className={field} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="grade" className="text-sm font-semibold text-ink">Class</label>
          <select id="grade" name="grade" required defaultValue="" className={field}>
            <option value="" disabled>Select</option>
            {classOptions.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>
      {status === "error" && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full py-3.5 text-base disabled:opacity-70">
        {status === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending</> : "Request a call back"}
      </button>
      <p className="text-center text-xs text-text/50">We’ll only use your number to talk about admission.</p>
    </form>
  );
}
