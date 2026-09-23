# D.A.V. Group of Schools, Jaipur: landing page

Next.js 15 (App Router) + Tailwind CSS 3 + TypeScript.

The layout takes its cues from dais.edu.in: a full-bleed rotating hero, the school's
own voice quoted early, campuses as cards, a tabbed academics panel, and a lot of
white space. The palette and crest are D.A.V.'s own.

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
    role: "Senior Secondary, Commerce",
    subjects: "Accountancy, Business Organisation",
    photo: "/people/example-sharma.jpg",   // optional; falls back to an icon
    alt: "Portrait of Mrs. Example Sharma", // required whenever there is a photo
  },
];
```

Put the portraits in `public/people/`. Portrait-shaped crops work best — the cards
use a 4:5 frame. Please get the staff's consent before publishing names and faces.

## Where to edit

- **All text, phone numbers, timings, subjects, awards, hero slides:** `lib/data.ts`
- **Colours:** `app/globals.css`. Every colour is a channel triplet on `:root`, with a
  dark set under `prefers-color-scheme: dark`. `tailwind.config.ts` only maps those
  variables to class names, so a palette change is a two-line edit in the CSS.
- **Fonts:** `app/layout.tsx`
- **Enquiry form backend:** `app/api/enquiry/route.ts`. It validates and logs today.
  Connect it to email (Resend/Nodemailer), a Google Sheet, or the school ERP.

## The four rules this page keeps

Worth knowing before you add a section, because breaking one of them is what makes a
page start to look assembled rather than designed.

1. **Square.** Nothing has rounded corners. The radius scale in `tailwind.config.ts`
   is set to zero, so a stray `rounded-xl` is a no-op rather than an inconsistency.
2. **One accent.** Marigold, and only marigold. It is too pale to carry text on white,
   so on light surfaces it appears as a fill (buttons, the one marigold panel) and
   navy does the work of a link colour. On navy, marigold is the text colour.
3. **Dark mode is not an inversion.** The navy bands stay lighter than the page
   background in dark mode, exactly as they sit darker than white in light mode, so
   the hierarchy is the same in both. Check any new section in both.
4. **Motion degrades to nothing.** The scroll reveal's hidden state lives behind
   `html[data-anim]`, which the boot script in `app/layout.tsx` sets only when
   JavaScript runs and the reader has not asked for reduced motion. Never write a
   hidden-by-default style that does not sit behind that attribute, or the page can
   ship blank. Wrap new content in `<Reveal>` and it inherits this for free.

## Before going live — confirm with the school

- Admission session shown in the top bar and form (`school.session`, currently 2027-28)
- **The Class VIII figure.** The hero and the stats band both claim 62 Grade A scorers
  in the 2025-26 board result. That is read off the school's own result banner in
  `public/life/achievers-group.jpg`, not off a published page.
- **The class-to-campus mapping** in `campuses[].covers`. The three school names and
  addresses are the school's; which classes sit in which building is inferred from the
  timings and the founders' notes.
- Principal's name, if they want it on the page
- A WhatsApp number, if they want a WhatsApp button next to the call button
- **The second phone number.** `lib/data.ts` carries `0141-2410299`, but the school's
  own 2025 posters print `0141-2410269`. One of the two is wrong.
- **The three free programmes** in `extras` (IIT-JEE/NEET foundation, French, vocational
  courses). They come off 2025-26 posters, so check they are still running.
- The Instagram handle in `school.instagram`, read off a poster and not verified.

## Photos

The photographs are the school's own, lifted from its Justdial/jdomni store page,
trimmed of their white letterboxing and re-encoded. They are served from `public/`:

| Folder | Used by | Notes |
| --- | --- | --- |
| `public/brand/` | `Logo.tsx` | The school crest. The source file is only 95x81, so never draw it larger than 40px. It sits on a white plate so it reads in either colour mode. |
| `public/awards/` | `Story.tsx` | One photo per award in `awards`, each showing that award being received. |
| `public/campus/` | `Hero.tsx`, `Schools.tsx`, `Campus.tsx`, `Gallery.tsx` | Play area, play zone, climbing wall, pre-primary activity table. |
| `public/life/` | `Hero.tsx`, `Vision.tsx`, `Schools.tsx`, `Gallery.tsx` | Annual Function, felicitations, the board-result group photo, a school function. |
| `public/people/` | `Vision.tsx`, `/teachers` | Portraits. The Director's is cropped from award coverage, so it is soft. Replace it with a proper photograph when one exists. |

To swap or add one, drop the file in and point `lib/data.ts` at it: `heroSlides[]`,
`campuses[].photo`, `awards[].photo`, `facilities[].photo` or `gallery[]`. Every entry
needs an `alt`. A facility with a `photo` renders as a full-bleed photo tile instead of
an icon tile, and the bento is laid out for exactly seven tiles, so if you add an
eighth also add a span for it in `spans` in `Campus.tsx`.

Still missing, and worth photographing: the computer labs, the science lab, a smart
class, the libraries, sports at Chaugan Stadium, and the buildings themselves. Those
six tiles are still icons, and a couple of real photographs among them would do more
for the section than anything else on this list.
