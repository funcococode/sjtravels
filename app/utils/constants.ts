import { TbCalendarTime, TbChecklist, TbClock, TbCurrencyRupee, TbMap2, TbPlaneDeparture, TbShieldCheck, TbWorld } from "react-icons/tb";

export const email = "support@sjtravels.in";

export const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

export const tabs = [
  { key: "india", label: "India" },
  { key: "world", label: "International" },
] as const;

export type TabKey = (typeof tabs)[number]["key"];

export const INDIAN_DESTINATIONS = [
  { title: "Kashmir", tag: "Mountains", emoji: "🏔️" },
  { title: "Ladakh", tag: "Adventure", emoji: "🛣️" },
  { title: "Goa", tag: "Beaches", emoji: "🏖️" },
  { title: "Kerala", tag: "Backwaters", emoji: "🛶" },
  { title: "Rajasthan", tag: "Heritage", emoji: "🏰" },
  { title: "Andaman", tag: "Islands", emoji: "🌊" },
];

export const WORLD_DESTINATIONS = [
  { title: "Bali", tag: "Tropical", emoji: "🌴" },
  { title: "Maldives", tag: "Luxury", emoji: "🏝️" },
  { title: "Dubai", tag: "City Break", emoji: "🌆" },
  { title: "Switzerland", tag: "Alps", emoji: "🚞" },
  { title: "Thailand", tag: "Culture & Food", emoji: "🍜" },
  { title: "Turkey", tag: "History", emoji: "🕌" },
];

export const steps = [
  {
    icon: TbMap2,
    title: "Tell us your dream",
    desc: "Dates, budget, vibe—beach, mountains, or city lights.",
  },
  {
    icon: TbChecklist,
    title: "Get a tailored plan",
    desc: "Curated itinerary with stays, transfers, and must‑do experiences.",
  },
  {
    icon: TbPlaneDeparture,
    title: "Book in one go",
    desc: "Flights, hotels, activities—secured at transparent prices.",
  },
  {
    icon: TbShieldCheck,
    title: "Travel with support",
    desc: "We’re one message away, before and during your trip.",
  },
];

export const features = [
  {
    icon: TbClock,
    title: "Quick Turnarounds",
    desc: "Free draft itinerary in under 24 hours for most trips.",
  },
  {
    icon: TbCurrencyRupee,
    title: "Clear Pricing",
    desc: "No hidden fees. Pay for only what you pick.",
  },
  {
    icon: TbCalendarTime,
    title: "Flexible Plans",
    desc: "Reschedule assistance & alternatives when needed.",
  },
  {
    icon: TbWorld,
    title: "India & Beyond",
    desc: "From Himalayan escapes to world‑wide getaways.",
  },
];