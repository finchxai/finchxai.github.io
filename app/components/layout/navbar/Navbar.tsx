"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import DesktopNavigation from "./DesktopNavigation";
import DrawerOverlay from "./DrawerOverlay";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

export type SectionId = "hero" | "solutions" | "work" | "featured-work" | "process" | "about" | "blog" | "contact";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const drawerTrigger = useRef<HTMLButtonElement>(null);
  const drawerPanel = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setPortalTarget(document.body);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = drawerTrigger.current;
    const focusableElements = drawerPanel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');

    document.body.style.overflow = "hidden";
    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }
      if (event.key !== "Tab" || !focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [closeDrawer, isDrawerOpen]);

  const scrollToSection = useCallback((sectionId: SectionId, updateAddress = true) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      if (updateAddress) window.history.replaceState(null, "", `#${sectionId}`);
      closeDrawer();
      return;
    }
    section.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    if (updateAddress) window.history.replaceState(null, "", `#${sectionId}`);
    closeDrawer();
  }, [closeDrawer, shouldReduceMotion]);

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const initialSection = window.location.hash.replace("#", "") as SectionId;
    if (!initialSection) return;
    const timer = window.setTimeout(() => scrollToSection(initialSection, false), 250);
    return () => window.clearTimeout(timer);
  }, [scrollToSection]);

  return (
    <motion.header className="absolute inset-x-0 top-2 z-50 flex justify-center px-4 transition-[top] duration-500 sm:px-6 sm:top-3 lg:top-4">
      <nav aria-label="Primary navigation" className="relative w-full max-w-[1600px] overflow-visible transition-all duration-500">
        <div className="relative z-10 flex items-center justify-start gap-7 px-4 transition-[min-height] duration-500 sm:px-6 lg:pr-7 lg:pl-2 xl:pl-4 min-h-[120px] sm:min-h-[110px] lg:min-h-[150px]">
          <Hamburger
            triggerRef={drawerTrigger}
            isDrawerOpen={isDrawerOpen}
            onOpen={() => setIsDrawerOpen(true)}
          />
          <Logo onClick={closeDrawer} />
          <DesktopNavigation onNavigate={handleNavigation} shouldReduceMotion={shouldReduceMotion} />
        </div>
      </nav>

      {portalTarget &&
        createPortal(
          <DrawerOverlay isOpen={isDrawerOpen} onClose={closeDrawer} onNavigate={handleNavigation} panelRef={drawerPanel} shouldReduceMotion={shouldReduceMotion} />,
          portalTarget,
        )}
    </motion.header>
  );
}
