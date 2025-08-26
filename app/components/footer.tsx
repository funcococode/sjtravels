import { TbMail, TbRoute } from "react-icons/tb";
import { email } from "~/utils/constants";

export default function Footer() {
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
          <div className="text-sm text-white/70">
            <div className="flex items-center gap-2"><TbMail className="h-4 w-4" /><a className="hover:text-white" href={`mailto:${email}`}>{email}</a></div>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} SJ Travels. All rights reserved.</div>
      </div>
    </footer>
  );
}