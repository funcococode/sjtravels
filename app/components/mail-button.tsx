import {motion} from 'motion/react'
import { useMemo } from 'react';
import { TbChevronRight } from 'react-icons/tb';
import { email } from '~/utils/constants';

export default function MailButton({ subject, body, children }: { subject: string; body?: string; children: React.ReactNode }) {
  const href = useMemo(() => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    return `mailto:${email}?${params.toString()}`;
  }, [subject, body]);

  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {children}
      <TbChevronRight className="h-4 w-4" />
    </motion.a>
  );
}
