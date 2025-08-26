
import { motion } from "motion/react";
import { TbBuildingSkyscraper, TbChevronRight, TbMap2, TbPlaneDeparture, TbWorld } from "react-icons/tb";
import { cardVariants, features, sectionVariants, steps } from "~/utils/constants";
export default function Services() {
  return (
    <section id="services" className="relative border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">Everything you need to travel well</h2>
          <p className="mt-3 text-white/70">One trusted place for flights, stays, visas, transfers, and experiences—curated just for you.</p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: TbPlaneDeparture, title: "Flights", desc: "Competitive fares & smart connections." },
            { icon: TbBuildingSkyscraper, title: "Stays", desc: "Handpicked hotels, villas, & homestays." },
            { icon: TbMap2, title: "Itineraries", desc: "Personalised day‑by‑day plans." },
            { icon: TbWorld, title: "Visas & More", desc: "Guidance for international trips." },
          ].map((f, i) => (
            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="text-base font-medium">{f.title}</div>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
              <div className="mt-4 flex items-center gap-2 text-xs text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <TbChevronRight className="h-4 w-4" /> Learn more
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature row */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">{f.title}</div>
                <p className="mt-1 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}