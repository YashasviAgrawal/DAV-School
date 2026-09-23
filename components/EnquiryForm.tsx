"use client";
import { useState } from "react";
import { AlertCircle, ArrowRight, Check, Loader2 } from "lucide-react";
import { classOptions, school } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

// Label above the input, error below it, helper text last. Field names are unchanged
// from the previous version of this form so anything downstream keeps working.
const field =
  "mt-2 w-full border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-fg focus:outline-none";
const label = "text-[0.85rem] font-semibold text-fg";

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
      setError(
        err instanceof Error && err.message
          ? err.message
          : `Could not send the enquiry. Please call us on ${school.phones[0]}.`
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start py-8" role="status">
        <span className="flex h-12 w-12 items-center justify-center bg-accent text-accent-fg">
          <Check className="h-6 w-6" strokeWidth={2.4} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-fg">
          Enquiry sent
        </h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted">
          The school office will call you on +91 {phone} within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="parent" className={label}>
          Parent&rsquo;s name
        </label>
        <input
          id="parent"
          name="parent"
          required
          autoComplete="name"
          className={field}
          placeholder="e.g. Sunita Sharma"
        />
      </div>

      <div>
        <label htmlFor="phone" className={label}>
          Mobile number
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-[calc(50%+4px)] -translate-y-1/2 text-muted">
            +91
          </span>
          <input
            id="phone"
            name="phone"
            required
            inputMode="numeric"
            maxLength={10}
            autoComplete="tel-national"
            aria-invalid={status === "error" || undefined}
            aria-describedby={status === "error" ? "enquiry-error" : undefined}
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className={`${field} pl-[3.6rem]`}
            placeholder="98XXXXXXXX"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="child" className={label}>
            Child&rsquo;s name
          </label>
          <input id="child" name="child" className={field} placeholder="Optional" />
        </div>
        <div>
          <label htmlFor="grade" className={label}>
            Class
          </label>
          <select id="grade" name="grade" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a class
            </option>
            {classOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" && (
        <p id="enquiry-error" role="alert" className="flex gap-2.5 text-[0.9rem] font-medium text-danger">
          <AlertCircle className="mt-px h-4 w-4 shrink-0" strokeWidth={2} />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary w-full disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            Request a call back
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </>
        )}
      </button>

      <p className="text-[0.82rem] leading-relaxed text-muted">
        We will only use your number to talk about admission.
      </p>
    </form>
  );
}
