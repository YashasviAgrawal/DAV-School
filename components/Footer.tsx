import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, school } from "@/lib/data";
import { BrandGlyph, brands } from "./BrandIcons";

// WhatsApp only appears once a mobile number is put in `school.whatsapp`. Both of the
// school's published numbers are landlines, so there is nothing to link to yet.
const social = [
  school.whatsapp && {
    brand: brands.whatsapp,
    href: `https://wa.me/${school.whatsapp}`,
    label: "Message the school on WhatsApp",
  },
  { brand: brands.facebook, href: school.facebook, label: "D.A.V. Group of Schools on Facebook" },
  { brand: brands.instagram, href: school.instagram, label: "D.A.V. Group of Schools on Instagram" },
  { brand: brands.youtube, href: school.youtube, label: "D.A.V. Group of Schools on YouTube" },
].filter(Boolean) as { brand: (typeof brands)[string]; href: string; label: string }[];

function Detail({ icon: Icon, children }: { icon: typeof Phone; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Small white disc with the glyph knocked out in ink, as in the reference. The
          badge is there to mark the line, not to compete with it. */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink">
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      {/* text-left so a wrapping address stacks cleanly beside its badge instead of
          centring its second line away from the first. The row itself stays centred. */}
      <span className="text-left font-serif text-[1.15rem] font-semibold leading-snug text-white sm:text-[1.3rem]">
        {children}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    // A centred lockup: crest, school name, social tiles, then Get In Touch. The sweep
    // fades out of the page and deepens toward the bottom of the screen.
    <footer className="footer-sweep text-white/70">
      <div className="container-x flex flex-col items-center pb-10 pt-20 text-center lg:pt-24">
        {/* The footer is the one place the crest is a centrepiece rather than a mark, so
            it is drawn at 64px. The source file is only 95px wide, so that is about as
            large as it can go before it softens. A higher-resolution crest would let
            this grow. */}
        <span className="flex h-[5.25rem] w-[5.25rem] items-center justify-center rounded-2xl bg-white">
          <Image src="/brand/crest.png" alt="" width={95} height={81} className="h-16 w-auto" />
        </span>

        <p className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {school.name}, {school.place}
        </p>

        <ul className="mt-7 flex items-center justify-center gap-3.5">
          {social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ backgroundColor: s.brand.hex }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white transition hover:brightness-110 active:translate-y-px"
              >
                <BrandGlyph brand={s.brand} className="h-[1.35rem] w-[1.35rem]" />
              </a>
            </li>
          ))}
        </ul>

        {/* Serif, regular weight, only lightly letter-spaced. The reference's heading
            is elegant rather than loud, and heavy sans with wide tracking read as the
            opposite of that. */}
        <h2 className="mt-12 font-serif text-[2.4rem] font-normal leading-none tracking-[0.04em] text-white sm:text-[3rem]">
          Get In Touch
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4 sm:gap-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-14">
            <Detail icon={Phone}>
              {school.phones.map((p, i) => (
                <span key={p}>
                  <a
                    href={`tel:${p.replace(/-/g, "")}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {p}
                  </a>
                  {i < school.phones.length - 1 && <span className="text-white/60"> / </span>}
                </span>
              ))}
            </Detail>

            <Detail icon={Mail}>
              <a href={`mailto:${school.email}`} className="underline-offset-4 hover:underline">
                {school.email}
              </a>
            </Detail>
          </div>

          <Detail icon={MapPin}>{school.address}</Detail>
        </div>
      </div>

      <div className="border-t border-white/10">
        {/* The extra space below clears the floating call button on phones. */}
        <div className="container-x flex flex-col items-center gap-6 pb-24 pt-8 lg:pb-8">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} {school.name}, Jaipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
