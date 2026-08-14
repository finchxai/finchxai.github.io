import type { MouseEvent, RefObject } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, X } from "lucide-react";
import DrawerLink from "./DrawerLink";
import type { SectionId } from "./Navbar";

interface NavigationDrawerProps {
  onClose: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => void;
  panelRef: RefObject<HTMLDivElement | null>;
  shouldReduceMotion: boolean;
}

const drawerItems: Array<{ label: string; id: SectionId }> = [
  { label: "Home", id: "hero" },
  { label: "Solutions", id: "solutions" },
  { label: "Website Engineering", id: "solutions" },
  { label: "AI Automation", id: "solutions" },
  { label: "AI Marketing", id: "solutions" },
  { label: "Content & UGC", id: "solutions" },
  { label: "Case Studies", id: "featured-work" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export default function NavigationDrawer({ onClose, onNavigate, panelRef, shouldReduceMotion }: NavigationDrawerProps) {
  return (
    <motion.div
      ref={panelRef}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeInOut" }}
      className="flex h-full w-[min(92vw,460px)] flex-col overflow-y-auto rounded-r-[2rem] border-r border-white/70 bg-[linear-gradient(145deg,rgba(250,252,252,0.88),rgba(233,242,243,0.78))] px-7 py-7 shadow-[28px_0_90px_rgba(31,48,54,0.22),inset_-1px_0_0_rgba(255,255,255,0.86)] backdrop-blur-[32px] sm:px-10 sm:py-9"
    >
      <div className="flex items-center justify-between border-b border-[#73858e]/18 pb-6">
        <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#53636a]">Navigation</span>
        <button type="button" aria-label="Close navigation drawer" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#263137] transition-colors duration-200 hover:text-[#3FC8D5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FC8D5]/45">
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Drawer navigation" className="flex flex-1 flex-col py-7">
        <div className="flex flex-col">
          {drawerItems.map((item, index) => (
            <DrawerLink key={`${item.label}-${index}`} label={item.label} sectionId={item.id} onNavigate={onNavigate} />
          ))}
        </div>
        <a href="#contact" onClick={(event) => onNavigate(event, "contact")} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#252b30] px-5 text-[14px] font-semibold text-white shadow-[0_16px_36px_rgba(37,43,48,0.22)] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(37,43,48,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82cbd3]" style={{ color: "#ffffff" }}>
          <CalendarDays aria-hidden="true" className="h-4 w-4 text-white" />
          Book Strategy Call
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-white" />
        </a>
      </nav>

      <div className="border-t border-[#73858e]/18 pt-5">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#73858e]">Social</p>
        <a href="https://www.linkedin.com/company/finchx-ai" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-[#263137] transition-colors duration-200 hover:text-[#3FC8D5] focus-visible:outline-none focus-visible:text-[#3FC8D5]">LinkedIn</a>
      </div>
    </motion.div>
  );
}
