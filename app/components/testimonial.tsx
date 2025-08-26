
import { motion } from "motion/react";
import { cardVariants, sectionVariants } from "~/utils/constants";
import SoftGlow from "./softglow";
export default function Testimonials() {
  const items = [
    {
      quote: "SJ Travels planned our Kashmir honeymoon end‑to‑end. Zero stress, great hotels, and a perfect balance of sightseeing & chill.",
      name: "Aarav & Naina",
    },
    {
      quote: "Got a custom Bali itinerary within a day. Bookings were smooth and the experiences were spot on.",
      name: "Rohit S.",
    },
    {
      quote: "Quick trip to Goa with friends—great villa, airport transfers, and water sports lined up. Super easy!",
      name: "Megha T.",
    },
  ];
  return (
    <section className="relative border-b border-white/10 bg-[linear-gradient(180deg,#05060a,#04050a)]">
      <SoftGlow />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">What travellers say</h2>
          <p className="mt-3 text-white/70">A few words from recent trips we’ve planned and booked.</p>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <blockquote className="text-sm leading-relaxed text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-white/60">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}