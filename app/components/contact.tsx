import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TbMail, TbPhone, TbCheck, TbChevronDown } from "react-icons/tb";

type Props = {
  email: string;                     
  phone: string;                     
  subject?: string;
  body?: string;
  label?: string;                    
  className?: string;
};

export default function ContactMenu({
  email,
  phone,
  subject = "Plan my trip with SJ Travels",
  body,
  label = "Contact",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);

  // Close on outside click / ESC
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (
        popRef.current &&
        !popRef.current.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const mailHref = (() => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    return `mailto:${email}?${params.toString()}`;
  })();

  async function copyPhone() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phone);
      } else {
        // Fallback
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
    } finally {
      // keep menu open briefly so user sees the animation
    }
  }

  return (
    <div className={`relative ${className}`}>
      <motion.button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <TbMail className="h-4 w-4" />
        {label}
        <TbChevronDown className="h-4 w-4 opacity-80" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={popRef}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="menu"
            className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-1 backdrop-blur-xl shadow-lg"
          >
            {/* Email */}
            <a
              href={mailHref}
              role="menuitem"
              className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <TbMail className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <div className="font-medium">Email</div>
                <div className="text-xs text-white/60">{email}</div>
              </div>
            </a>

            {/* Phone (copy) */}
            <button
              role="menuitem"
              onClick={copyPhone}
              className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/90 hover:bg-white/10"
            >
              <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15">
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
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-emerald-400"
                    >
                      <TbCheck className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
                {/* Soft pulse when copied */}
                {copied && (
                  <span className="pointer-events-none absolute -inset-1 rounded-lg ring-2 ring-emerald-400/40 animate-ping" />
                )}
              </span>
              <div className="flex-1">
                <div className="font-medium">
                  {copied ? "Copied!" : "Mobile"}
                </div>
                <div className="text-xs text-white/60">{phone}</div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
