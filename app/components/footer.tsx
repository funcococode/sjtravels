import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbMail, TbPhone, TbRoute, TbCheck } from "react-icons/tb";
import { email } from "~/utils/constants";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const phone = "9165501234"; 

  async function copyPhone() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phone);
      } else {
        
        const ta = document.createElement("textarea");
        ta.value = phone;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }

  return (
    <footer id="contact" className="border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <TbRoute className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">SJ Travels</div>
              <div className="text-xs text-white/60">Travel booking & tour planning</div>
            </div>
          </div>

          <div className="text-sm text-white/70 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <TbMail className="h-4 w-4" />
              <a className="hover:text-white" href={`mailto:${email}`}>{email}</a>
            </div>

            <button
              type="button"
              onClick={copyPhone}
              aria-label="Copy phone number"
              className="group relative flex items-center gap-2 hover:text-white transition"
            >
              <span className="relative grid h-5 w-5 place-items-center">
                <AnimatePresence mode="wait" initial={false}>
                  {!copied ? (
                    <motion.span
                      key="phone"
                      initial={{ opacity: 0, rotate: -10, y: 2 }}
                      animate={{ opacity: 1, rotate: 0, y: 0 }}
                      exit={{ opacity: 0, rotate: 10, y: -2 }}
                    >
                      <TbPhone className="h-4 w-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="check"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-emerald-400"
                    >
                      <TbCheck className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>

                {copied && (
                  <span className="pointer-events-none absolute -inset-1 rounded-md ring-2 ring-emerald-400/40 animate-ping" />
                )}
              </span>

              <span className="relative">
                <AnimatePresence mode="wait" initial={false}>
                  {!copied ? (
                    <motion.span
                      key="num"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -2 }}
                    >
                      {phone}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copied"
                      className="text-emerald-400"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -2 }}
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} SJ Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
