// All school content lives here so the office can update it without touching the layout.
// Source: davschool.com (homepage, About Us, Academics, Infrastructure).
// Items marked "CONFIRM" were not published on the website — check with the school before going live.

export const school = {
  name: "D.A.V. Group of Schools",
  shortName: "D.A.V.",
  place: "Brahampuri, Jaipur",
  motto: "A Quality Education",
  session: "2027–28", // CONFIRM: admission session to advertise
  phones: ["0141-2411253", "0141-2410299"],
  email: "davschool@gmail.com",
  address: "16, Agrasain Colony, Brahampuri Khurra, Jaipur, Rajasthan",
  mapQuery: "DAV Senior Secondary School Brahampuri Khurra Jaipur",
  facebook: "https://www.facebook.com/p/Davschool-Brahampuri-100064263213562/",
  // Handles printed on the school's own announcement posters.
  youtube: "https://www.youtube.com/@DAVBrahampuri", // verified live
  instagram: "https://www.instagram.com/davbrahampuri50/", // CONFIRM: handle read off a poster
  // Both numbers above are landlines, so neither can take WhatsApp. Put a mobile
  // number here in plain digits with the country code (e.g. "919829012345") and the
  // WhatsApp tile appears in the footer by itself. Leave it empty and it stays hidden.
  whatsapp: "",
  director: "CA Manoj Kumar Agarwal",
};

// Hrefs are rooted at "/" so they work from /teachers too. On the home page the
// browser treats "/#campus" as a same-document jump, so nothing reloads.
export const nav = [
  { label: "About", href: "/#story" },
  { label: "Academics", href: "/#academics" },
  { label: "Campus", href: "/#campus" },
  { label: "Photos", href: "/#life" },
  { label: "Teachers", href: "/teachers" },
  // The Admissions section was removed, so this now lands on the enquiry form, which
  // is the thing a parent looking for "Admissions" actually wants.
  { label: "Admissions", href: "/#enquire" },
  { label: "Contact", href: "/#contact" },
];

// The rotating hero. Photographs carry the section; each slide gets one short line
// and one supporting sentence, and nothing else. Keep them short: anything longer
// starts competing with the photograph instead of sitting on it.
export const heroSlides = [
  {
    src: "/life/achievers-group.jpg",
    alt: "Students garlanded and holding trophies with their teachers at the board result felicitation",
    headline: "Every Child Known by Name",
    text: "English-medium, co-educational schooling in Brahampuri, Jaipur, since 1972.",
    focus: "object-[center_42%]",
  },
  {
    src: "/campus/activity-table.jpg",
    alt: "Pre-primary children smiling around an activity table stacked with letter and number puzzles",
    headline: "Learning That Starts with Play",
    text: "A bag-free Play Group, guided by Montessori-trained teachers.",
    focus: "object-[center_45%]",
  },
  {
    src: "/campus/climbing-wall.jpg",
    alt: "Small children climbing a padded indoor climbing wall and rope ladder",
    headline: "Room to Climb, Room to Grow",
    text: "An indoor play gym, a climbing wall and a play pool for the little ones.",
    focus: "object-[center_40%]",
  },
  {
    src: "/campus/play-outdoor.jpg",
    alt: "Young children on slides, swings and ride-ons in the school's outdoor play area",
    headline: "Space to Just Be a Child",
    text: "Swings, slides, and games and sports at the historic Chaugan Stadium.",
    focus: "object-[center_55%]",
  },
];

export const heroFacts = [
  { value: "1972", label: "Teaching Jaipur's children since" },
  { value: "3", label: "Schools in Brahampuri Khurra" },
  { value: "PG–XII", label: "Play Group to Class XII" },
  { value: "4.5★", label: "Rated by parents on Justdial" },
];

// Each photo is the school's own, and shows the moment the award was received.
export const awards = [
  {
    title: "School with Educational Excellence (Regional)",
    by: "Inspire Education Awards 2024, Global School Leaders Consortium, Goa",
    photo: "/awards/inspire-2024.jpg",
    alt: "Staff of D.A.V. Group of Schools receiving the Educational Excellence award on stage",
  },
  {
    title: "Outstanding Educationist of the Year",
    by: "CA Manoj Kumar Agarwal, Director, Inspire Education Awards 2024",
    photo: "/awards/educationist-2024.jpg",
    alt: "Director CA Manoj Kumar Agarwal being honoured as Outstanding Educationist of the Year",
  },
  {
    title: "Best School award",
    by: "Presented by actress Madhuri Dixit",
    photo: "/awards/best-school.jpg",
    alt: "Actress Madhuri Dixit presenting the Best School in Jaipur award to the school's representatives",
  },
];

// Photographs from the school's own albums. Captions describe only what is visible
// in the frame — please correct them if the office can name the occasion exactly.
export const gallery = [
  { src: "/life/annual-function.jpg", caption: "On stage at the Annual Function", alt: "Young students in costume performing on stage at the school's Annual Function", pos: "object-[center_35%]" },
  { src: "/campus/activity-table.jpg", caption: "Play-way learning in the pre-primary wing", alt: "Pre-primary children working with letter and number puzzles around an activity table" },
  { src: "/life/board-topper.jpg", caption: "An “A” grade holder, Class VIII board result", alt: "A student garlanded and holding a trophy beside teachers at a felicitation ceremony" },
  { src: "/campus/climbing-wall.jpg", caption: "The indoor climbing wall and play gym", alt: "Small children climbing a padded indoor climbing wall and rope ladder" },
  { src: "/life/young-achievers.jpg", caption: "Achievers felicitated with their teachers", alt: "A large group of garlanded primary students holding trophies with their teachers" },
  { src: "/life/assembly.jpg", caption: "Parents and students at a school function", alt: "Parents and students seated in the school hall during a function" },
];

// ---------------------------------------------------------------------------
// Teachers page
// ---------------------------------------------------------------------------

// The people the school has already named in public. Everything here is sourced
// from the school's own site, posters or award coverage — nothing is invented.
export const leadership = [
  {
    name: "CA Manoj Kumar Agarwal",
    role: "Director",
    photo: "/people/director.jpg",
    alt: "Portrait of CA Manoj Kumar Agarwal, Director of D.A.V. Group of Schools",
    text: "Named Outstanding Educationist of the Year at the Inspire Education Awards 2024. He leads the three schools in Brahampuri Khurra.",
  },
  {
    name: "Mrs. Dayawanti Gupta",
    role: "Founder, D.A.V. Montessori School",
    text: "Opened the Montessori school in Brahampuri in 1972 with the idea the school still runs on: every child known by name.",
  },
  {
    name: "Mrs. Meenu Agarwal",
    role: "Founder, D.A.V. Sr. Secondary School",
    text: "Founded the senior secondary school in 1993, carrying the family's work from Play Group all the way to Class XII. Remembered with gratitude.",
  },
];

// What the school says about its teaching staff, drawn from its own material.
export const teachingApproach = [
  { title: "Montessori-trained in the early years", text: "Pre-primary and primary classes are guided by trained Montessori teachers, using play-way learning and specially designed aids." },
  { title: "Teachers who stay with your child", text: "Five stages under one management, so children grow up taught by people who already know them by name." },
  { title: "Time for the child who needs more", text: "Personal, in-depth support for slow learners, alongside guidance and counselling as students choose their path." },
  { title: "Qualified and experienced", text: "Three schools under experienced management and qualified teachers, with subject specialists through the senior secondary years." },
];

// The faculty roster. Add one entry per teacher and the grid on /teachers appears.
// Photos go in public/people/. Keep `alt` filled in for every entry.
// Shape: { name, role, subjects?, photo?, alt? }
export type Teacher = {
  name: string;
  role: string;
  subjects?: string;
  photo?: string;
  alt?: string;
};
export const teachers: Teacher[] = [];

// From the school's 2025–26 announcement posters.
// CONFIRM with the office that all three are still running before going live.
export const extras = [
  { title: "IIT-JEE / NEET foundation classes", text: "Free of cost, for Class VI to XII, taken during school hours." },
  { title: "French classes", text: "A fourth language for Class I to XII, taken during school hours." },
  { title: "Vocational courses", text: "Free of cost, in an extra hour after the morning shift." },
];

// `subjects` is no longer rendered anywhere; the academics panel shows the stage's
// photograph instead. It is kept because it is the school's own material and the
// office may want it back somewhere.
export type Stage = {
  key: string;
  name: string;
  classes: string;
  subjects: string[];
  approach: string[];
  photo: string;
  alt: string;
  focus: string;
};

export const stages: Stage[] = [
  {
    key: "pre-primary",
    name: "Pre-Primary",
    classes: "Play Group (2.5+ years), Nursery, KG and Prep (3+ years)",
    subjects: ["English", "Hindi", "Maths", "G.K.", "Drawing & Craft"],
    photo: "/campus/activity-table.jpg",
    alt: "Pre-primary children working with letter and number puzzles around an activity table",
    focus: "object-[center_50%]",
    approach: [
      "Play Group is completely bag-free",
      "Play-way learning with specially designed aids, guided by trained Montessori teachers",
      "Reading and recitation practised both orally and in writing",
      "Audio-visual aids and projectors in class",
    ],
  },
  {
    key: "primary",
    name: "Primary",
    classes: "Class 1 to 5",
    subjects: [
      "English", "Hindi", "Maths", "Social Studies", "General Science",
      "G.K.", "Computer", "Music", "Moral Education", "Drawing & Craft",
    ],
    photo: "/life/annual-function.jpg",
    alt: "Young students in costume performing on stage at the school's Annual Function",
    focus: "object-[center_30%]",
    approach: [
      "Informal “learning by doing” with Montessori-trained teachers",
      "Smart classes for Social Studies and Science",
      "Abacus, Vedic Maths, puzzles and games for brain development",
    ],
  },
  {
    key: "middle",
    name: "Middle",
    classes: "Class 6 to 8",
    subjects: [
      "English", "Hindi", "Sanskrit", "Maths", "History", "Civics",
      "Geography", "General Science", "G.K.", "Computer", "Drawing & Craft",
    ],
    photo: "/life/medallists.jpg",
    alt: "Middle-school students in school blazers holding their medals with a teacher",
    focus: "object-[center_40%]",
    approach: [
      "Sanskrit introduced as the third language",
      "Students design their own websites and get their own email IDs",
      "Smart classes and audio-visual teaching",
    ],
  },
  {
    key: "secondary",
    name: "Secondary",
    classes: "Class 9 and 10",
    subjects: ["English", "Hindi", "Sanskrit", "Maths", "Science", "History", "Geography", "Computer"],
    photo: "/life/excursion.jpg",
    alt: "Senior students in school blazers on an educational trip with their teachers",
    focus: "object-[center_45%]",
    approach: [
      "A planned syllabus so concepts are understood, not memorised",
      "Website design on advanced computers",
      "Individual care for students who need more time",
    ],
  },
  {
    key: "senior",
    name: "Senior Secondary",
    classes: "Class 11 and 12, Commerce and Science",
    subjects: [
      "Hindi", "English", "Accountancy", "Business Organisation", "Physics",
      "Chemistry", "Economics / Maths / Computer (I.P.) / Biology",
    ],
    photo: "/life/farewell.jpg",
    alt: "Senior students and staff at a farewell ceremony, the two honoured students wearing sashes",
    focus: "object-[center_40%]",
    approach: [
      "Well-equipped science lab and computer labs",
      "The school sets its own eligibility norms for Class XI",
      "Subject combinations are fixed, so choose carefully: they can’t be changed later",
    ],
  },
];

export const features = [
  { title: "Individual attention", text: "Every child is known by name. It has been the school’s speciality from the start." },
  { title: "Care for slow learners", text: "Personal, in-depth support for children who need a little more time." },
  { title: "Rooted in three languages", text: "English for the world, Hindi for our roots, Sanskrit for our heritage." },
  { title: "Brain development", text: "Abacus, Vedic Maths, puzzles and games woven into the week." },
  { title: "Leadership and values", text: "Polite behaviour, honesty and leadership built into daily school life." },
  { title: "Guidance and counselling", text: "Expert guidance and personal counselling as students choose their path." },
  { title: "Tours and trips", text: "Educational tours that take learning beyond the classroom walls." },
  { title: "Safe, child-friendly campus", text: "A healthy, secure environment with every teaching material provided." },
];

export const facilities = [
  { title: "Computer labs", text: "Two labs in the main building with 45 multimedia computers, power backup and high-speed internet, plus one in the branch." },
  { title: "Science lab", text: "A well-equipped lab for senior secondary Science students." },
  { title: "Smart classes", text: "Used for Social Studies and Science from primary level." },
  { title: "Libraries", text: "Open-shelf libraries on both campuses, restocked regularly." },
  { title: "Sports at Chaugan Stadium", text: "Games and sports held at the historic Chaugan Stadium." },
  {
    title: "Little ones’ play zone",
    text: "Swings, slides, merry-go-round, play pool, toy cars and a tunnel.",
    photo: "/campus/play-soft.jpg",
    alt: "Pre-primary children on a slide beside a ball pool in the indoor play zone",
  },
  { title: "Comfortable buildings", text: "Centrally air-cooled main building and a fully air-conditioned branch." },
];

export const care = [
  { title: "Accident insurance", text: "Every student is insured. Claims are made through the school within 48 hours." },
  { title: "Free medical check-ups", text: "Regular health check-ups for all students at no extra cost." },
  { title: "Two shifts for young learners", text: "Morning or afternoon classes for Play Group to Class 5, to suit your family’s day." },
];

export const timeline = [
  { year: "1972", text: "Mrs. Dayawanti Gupta opens D.A.V. Montessori School in Brahampuri." },
  { year: "1993", text: "The late Mrs. Meenu Agarwal founds D.A.V. Sr. Secondary School." },
  { year: "2024", text: "Named School with Educational Excellence (Regional) at the Inspire Education Awards." },
  { year: "Today", text: "Three schools, one family: Play Group to Class XII, Commerce and Science." },
];

export const campuses = [
  { name: "D.A.V. Montessori School", address: "14, Indrapuri Colony, Brahampuri Khurra" },
  { name: "D.A.V. Primary School (second shift)", address: "16, Agrasain Colony, Brahampuri Khurra" },
  { name: "D.A.V. Sr. Secondary School", address: "16, Agrasain Colony, Brahampuri Khurra" },
];

// No longer rendered: the Admissions section that showed these was removed. Kept
// because they are the school's own details and may be wanted elsewhere.
export const timings = [
  { who: "Class 6 to 12", time: "7:45 AM – 12:55 PM", where: "Main building" },
  { who: "Play Group to Class 5 (morning)", time: "7:45 AM – 12:30 PM", where: "Branch building" },
  { who: "Play Group to Class 5 (afternoon)", time: "1:00 PM – 5:30 PM", where: "Main building" },
];

// No longer rendered, for the same reason as `timings` above.
export const admissionSteps = [
  { title: "Send an enquiry", text: "Fill in the form or call the school office. We’ll call you back to answer your questions." },
  { title: "Visit and register", text: "See the campus, meet the teachers and collect the registration form." },
  { title: "Admission test", text: "A short test based on the previous class’s syllabus, for Nursery to Class XII." },
  { title: "Confirm the seat", text: "Once your child clears the test, complete the formalities and the seat is yours." },
];

export const classOptions = [
  "Play Group", "Nursery", "KG", "Prep",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11 – Commerce", "Class 11 – Science",
];
