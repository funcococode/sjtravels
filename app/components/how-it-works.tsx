
import { motion } from "motion/react";
import { cardVariants, sectionVariants, steps } from "~/utils/constants";
export default function HowItWorks() {
  return (
    <section id="how" className="relative border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">How it works</h2>
          <p className="mt-3 text-white/70">Simple steps to get from idea to itinerary to incredible memories.</p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-medium">{s.title}</div>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}