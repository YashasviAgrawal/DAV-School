import { Mail, MapPin, Phone } from "lucide-react";
import { campuses, school } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="h2">Come and see us in Brahampuri.</h2>
          <p className="lead">Walk through the classrooms, meet the teachers and ask us anything. Call the office to fix a time that suits you.</p>

          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-muted" />
              <span className="text-lg text-text/80">{school.address}</span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-muted" />
              <span className="text-lg">
                {school.phones.map((p, i) => (
                  <span key={p}>
                    <a href={`tel:${p.replace(/-/g, "")}`} className="font-semibold text-ink hover:text-muted">{p}</a>
                    {i < school.phones.length - 1 && <span className="text-text/40"> / </span>}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-muted" />
              <a href={`mailto:${school.email}`} className="text-lg font-semibold text-ink hover:text-muted">{school.email}</a>
            </li>
          </ul>

          <h3 className="mt-12 font-semibold text-ink">Our three schools</h3>
          <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {campuses.map((c) => (
              <li key={c.name} className="flex flex-col py-4 sm:flex-row sm:justify-between sm:gap-6">
                <span className="font-medium text-ink">{c.name}</span>
                <span className="text-text/65">{c.address}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-[380px] overflow-hidden rounded-3xl ring-1 ring-ink/10">
          <iframe
            title="Map to D.A.V. Sr. Secondary School, Brahampuri, Jaipur"
            src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
            className="h-full min-h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
