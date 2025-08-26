
import { motion } from "motion/react";
import { TbMail, TbRoute } from "react-icons/tb";
import MailButton from "./mail-button";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <TbRoute className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">SJ Travels</span>
        </motion.div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#destinations" className="hover:text-white">Destinations</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <MailButton subject="Plan my trip with SJ Travels">
          <TbMail className="h-4 w-4" /> Contact
        </MailButton>
      </div>
    </div>
  );
}