import { motion, useScroll, useTransform } from "motion/react";
import { cardVariants, sectionVariants, steps } from "~/utils/constants";
import SoftGlow from "./softglow";
import { TbArrowDown, TbBeach, TbBuildingSkyscraper, TbMap2, TbPlaneDeparture, TbRoute, TbShieldCheck, TbStars, TbWorld } from "react-icons/tb";
import MailButton from "./mail-button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(80%_80%_at_75%_25%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(65%_70%_at_20%_80%,rgba(124,58,237,0.18),transparent_60%),linear-gradient(180deg,#05060a_20%,#04050a_60%,#03040a_100%)]">
      <SoftGlow />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
        <motion.div style={{ y }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <TbWorld className="h-4 w-4" /> India & International
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Plan. Book. <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Explore.</span>
          </h1>
          <p className="max-w-xl text-base text-white/70 md:text-lg">
            Bespoke itineraries and seamless bookings—from weekend escapes in India to bucket‑list adventures across the globe. Minimal hassle, maximum memories.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <MailButton subject="Trip plan request — SJ Travels" body={`Hi SJ Travels,%0A%0AI want help planning a trip.%0A%0ADestination(s):%0ADates:%0ABudget (approx):%0ATravellers:%0APreferences (beach/mountains/city/adventure):%0A%0ARegards,`}>Get a free itinerary</MailButton>
            <a href="#destinations" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
              Browse destinations <TbArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-xs text-white/60">
            <div className="flex items-center gap-2"><TbShieldCheck className="h-4 w-4" /> Verified partners</div>
            <div className="flex items-center gap-2"><TbStars className="h-4 w-4" /> Curated experiences</div>
          </div>
        </motion.div>

        {/* Decorative travel grid */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="grid grid-cols-3 gap-3">
            {[
              { Icon: TbBeach, label: "Beaches" },
              { Icon: TbBuildingSkyscraper, label: "City breaks" },
              { Icon: TbMap2, label: "Road trips" },
              { Icon: TbWorld, label: "Worldwide" },
              { Icon: TbPlaneDeparture, label: "Flights" },
              { Icon: TbRoute, label: "Itineraries" },
            ].map((x, i) => (
              <motion.div
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="group aspect-square rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:bg-white/10"
              >
                <x.Icon className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                <div className="pt-3 text-sm text-white/80">{x.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}