# D.A.V. Group of Schools, Jaipur — landing page

Next.js 15 (App Router) + Tailwind CSS 3 + TypeScript.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Deploys to Vercel as-is (no env vars needed).

## Pages

- `/` — the landing page (`app/page.tsx`)
- `/teachers` — the teachers page (`app/teachers/page.tsx`)

Nav links live in `nav` in `lib/data.ts` and are written as `/#campus` rather than
`#campus`, so they work from `/teachers` too. On the home page the browser treats
those as a same-document jump, so nothing reloads — keep the leading `/` when adding one.

## Adding the teaching staff

`/teachers` is live and lists the leadership. **The faculty roster is still empty.**
Fill in `teachers` in `lib/data.ts` and the "Meet the teaching staff" grid appears
by itself; leave it empty and that section stays hidden.

```ts
export const teachers: Teacher[] = [
  {
    name: "Mrs. Example Sharma",
    role: "Senior Secondary — Commerce",
    subjects: "Accountancy, Business Organisation",
    photo: "/people/example-sharma.jpg",   // optional; falls back to an icon
    alt: "Portrait of Mrs. Example Sharma", // required whenever there is a photo
  },
];
```

Put the portraits in `public/people/`. Portrait-shaped crops work best — the cards
use a 4:5 frame. Please get the staff's consent before publishing names and faces.

## Where to edit

- **All text, phone numbers, timings, subjects, awards:** `lib/data.ts`
- **Colours and fonts:** `tailwind.config.ts` and `app/layout.tsx`
- **Enquiry form backend:** `app/api/enquiry/route.ts` — it validates and logs today.
  Connect it to email (Resend/Nodemailer), a Google Sheet, or the school ERP.

## Before going live — confirm with the school

- Admission session shown in the top bar and form (`school.session`, currently 2027–28)
- The 4.5★ Justdial rating (shown in the hero stats)
- Principal's name, if they want it on the page
- A WhatsApp number, if they want a WhatsApp button next to the call button
- **The second phone number.** `lib/data.ts` carries `0141-2410299`, but the school's
  own 2025 posters print `0141-2410269`. One of the two is wrong.
- **The three free programmes** in `extras` (IIT-JEE/NEET foundation, French, vocational
  courses). They come off 2025–26 posters — check they are still running.
- The Instagram handle in `school.instagram`, read off a poster and not verified.

## Photos

The photographs are the school's own, lifted from its Justdial/jdomni store page,
trimmed of their white letterboxing and re-encoded. They are served from `public/`:

| Folder | Used by | Notes |
| --- | --- | --- |
| `public/brand/` | `Logo.tsx` | The school crest. The source file is only 95×81, so never draw it larger than 40px. |
| `public/awards/` | `AwardsBand.tsx` | One photo per award in `awards` — each shows that award being received. |
| `public/campus/` | `Campus.tsx`, gallery | Play area, play zone, climbing wall, pre-primary activity table. |
| `public/life/` | `Gallery.tsx` | Annual Function, felicitations, a school function. |
| `public/people/` | `/teachers` | Portraits. The Director's is cropped from award coverage, so it is soft — replace it with a proper photograph when one exists. |

To swap or add one, drop the file in and point `lib/data.ts` at it —
`awards[].photo`, `facilities[].photo` or `gallery[]`. Every entry needs an `alt`.
A facility with a `photo` is rendered as a full-bleed photo tile instead of an icon tile.

Still missing, and worth photographing: the computer labs, the science lab, a smart
class, the libraries, and sports at Chaugan Stadium. Those five tiles are still icons.
