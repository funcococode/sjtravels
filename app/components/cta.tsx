
import { motion } from "motion/react";
import { sectionVariants } from "~/utils/constants";
import MailButton from "./mail-button";

export default function CTA() {
  return (
    <section className="relative border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/20 to-cyan-600/20 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">Get a free itinerary in 24 hours</h3>
              <p className="mt-2 max-w-xl text-sm text-white/80">Share a few trip details and we’ll reply with a personalised plan + transparent quote.</p>
            </div>
            <MailButton subject="Free itinerary request — SJ Travels" body={`Hi team,%0A%0AMy trip details:%0ADestination(s):%0ADates:%0ATravellers:%0ABudget:%0APreferences:%0A%0AThanks!`}>Plan my trip</MailButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}