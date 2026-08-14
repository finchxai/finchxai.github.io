import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { SectionId } from "./Navbar";

interface DesktopNavigationProps {
  onNavigate: (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => void;
  shouldReduceMotion: boolean;
}

const navItems: Array<{ label: string; id: SectionId }> = [
  { label: "Solutions", id: "solutions" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
];

export default function DesktopNavigation({
  onNavigate,
  shouldReduceMotion,
}: DesktopNavigationProps) {
  return (
    <>
      <div
        className="
          ml-auto
          hidden
          items-center
          justify-end
          gap-5
          lg:flex
        "
      >
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={{ y: 0 }}
            >
              <a
                href={`#${item.id}`}
                onClick={(event) => onNavigate(event, item.id)}
                className="
                  group relative inline-flex items-center justify-center
                  rounded-none border-none bg-transparent px-3 py-2
                  text-[15px] font-semibold tracking-[0.02em]
                  text-[#2B3138] transition-[color] duration-300
                  hover:text-[#111111] focus-visible:outline-none
                "
                style={{ color: "#2B3138", opacity: 1, filter: "none" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 h-[2px] w-0 bg-[#2B3138] transition-[width] duration-300 group-hover:w-full"
                />
                <span
                  className="relative z-[20] text-[#2B3138]"
                  style={{ color: "#2B3138", opacity: 1, filter: "none" }}
                >
                  {item.label}
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        <div aria-hidden="true" className="mx-1 h-7 w-px bg-gradient-to-b from-transparent via-[#73858e]/30 to-transparent" />

        <motion.a
          href="#contact"
          onClick={(event) => onNavigate(event, "contact")}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={{ y: 0 }}
          className="group relative inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#252b30] bg-[#252b30] px-5 text-[13px] font-semibold text-white shadow-[0_16px_36px_rgba(37,43,48,0.24)] transition-all duration-300 hover:border-[#101619] hover:bg-[#101619] hover:shadow-[0_22px_48px_rgba(37,43,48,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82cbd3] focus-visible:ring-offset-4 focus-visible:ring-offset-white xl:px-6 xl:text-[14px]"
          style={{ color: "#ffffff" }}
        >
          <CalendarDays aria-hidden="true" className="relative z-10 h-4 w-4 text-white" />
          <span className="relative z-10 text-white" style={{ color: "#ffffff" }}>
            Book a Strategy Call
          </span>
          <ArrowUpRight aria-hidden="true" className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </div>

      <a
        href="#contact"
        onClick={(event) => onNavigate(event, "contact")}
        className="ml-auto hidden min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#252b30] px-5 text-[13px] font-semibold text-white shadow-[0_14px_32px_rgba(37,43,48,0.22)] sm:inline-flex lg:hidden"
      >
        <CalendarDays aria-hidden="true" className="h-4 w-4" />
        Book a Strategy Call
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </>
  );
}
