
import { motion } from "motion/react";
import SoftGlow from "./softglow";
import { cardVariants, INDIAN_DESTINATIONS, sectionVariants, tabs, WORLD_DESTINATIONS } from "~/utils/constants";
import { TbChevronRight } from "react-icons/tb";
import { useState } from "react";
export default function Destinations() {
  const [tab, setTab] = useState<TabKey>("india");
  const items = tab === "india" ? INDIAN_DESTINATIONS : WORLD_DESTINATIONS;

  return (
    <section id="destinations" className="relative border-b border-white/10 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(14,165,233,0.12),transparent_60%),radial-gradient(50%_50%_at_80%_70%,rgba(168,85,247,0.12),transparent_60%),linear-gradient(180deg,#06070c,#05060a)]">
      <SoftGlow />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Popular destinations</h2>
          <p className="mt-3 max-w-2xl text-white/70">Handpicked places that our travellers love—across India and around the world.</p>

          <div className="mt-6 rounded-full border border-white/10 bg-white/5 p-1">
            <div className="grid grid-cols-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative rounded-full px-5 py-2 text-sm transition ${
                    tab === t.key ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{t.label}</span>
                  {tab === t.key && (
                    <motion.span layoutId="dest-tabs" className="absolute inset-0 rounded-full bg-white/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <motion.div key={d.title} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/60">{d.tag}</div>
                  <div className="mt-0.5 text-lg font-medium">{d.title}</div>
                </div>
                <div className="text-3xl">{d.emoji}</div>
              </div>
              <p className="mt-3 text-sm text-white/70">Sample 5‑day plan, curated stays, and local experiences available.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <TbChevronRight className="h-4 w-4" /> Ask for this itinerary
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}