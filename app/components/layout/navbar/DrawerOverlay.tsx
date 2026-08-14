import type { MouseEvent, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavigationDrawer from "./NavigationDrawer";
import type { SectionId } from "./Navbar";

interface DrawerOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => void;
  panelRef: RefObject<HTMLDivElement | null>;
  shouldReduceMotion: boolean;
}

export default function DrawerOverlay({ isOpen, onClose, onNavigate, panelRef, shouldReduceMotion }: DrawerOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeInOut" }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] bg-[#172126]/38 backdrop-blur-md"
        >
          <NavigationDrawer onClose={onClose} onNavigate={onNavigate} panelRef={panelRef} shouldReduceMotion={shouldReduceMotion} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
