"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";

type SectionId = "solutions" | "work" | "process" | "about" | "contact";

interface NavigationItem {
  label: string;
  id: SectionId;
}

const navItems: NavigationItem[] = [
  {
    label: "Solutions",
    id: "solutions",
  },
  {
    label: "Work",
    id: "work",
  },
  {
    label: "Process",
    id: "process",
  },
  {
    label: "About",
    id: "about",
  },
];

const cinematicEase = [0.22, 1, 0.36, 1] as const;
const fadeOutEase = [0.4, 0, 0.2, 1] as const;

/*
 * Navbar will return when the user scrolls back into
 * approximately the final 22% of the hero section.
 */
const HERO_REENTRY_RATIO = 0.22;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const { scrollY } = useScroll();

  /*
   * Calculates the point where the navbar should hide.
   * It is based on the actual height of the hero section,
   * so it also works when the hero height changes.
   */
  useEffect(() => {
    setIsHeroActive(true);
  }, []);

  /*
   * Navbar does not appear merely because the user
   * scrolls upward. It returns only when the hero
   * section is reached again.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 28);

    if (isMobileMenuOpen) {
      setIsHeroActive(true);
      lastScrollY.current = latest;
      return;
    }

    if (latest <= 0) {
      setIsHeroActive(true);
      lastScrollY.current = latest;
      return;
    }

    const delta = latest - lastScrollY.current;
    const absDelta = Math.abs(delta);

    if (absDelta < 8) {
      return;
    }

    if (delta > 0 && latest > 60) {
      setIsHeroActive(false);
    } else if (delta < 0 && lastScrollY.current - latest >= 40) {
      setIsHeroActive(true);
    }

    lastScrollY.current = latest;
  });

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);

    if (window.scrollY <= 0) {
      setIsHeroActive(true);
    }
  }, []);

  const scrollToSection = useCallback(
    (sectionId: SectionId, updateAddress = true) => {
      const section = document.getElementById(sectionId);

      if (!section) {
        if (updateAddress) {
          window.history.replaceState(null, "", `#${sectionId}`);
        }

        closeMobileMenu();
        return;
      }

      const navbarOffset = window.innerWidth >= 1024 ? 122 : 102;
      const destination =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: Math.max(destination, 0),
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });

      if (updateAddress) {
        window.history.replaceState(null, "", `#${sectionId}`);
      }

      setIsMobileMenuOpen(false);
    },
    [closeMobileMenu, shouldReduceMotion],
  );

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  /*
   * Correctly position the page when it is opened
   * with a section hash already in the URL.
   */
  useEffect(() => {
    const initialSection = window.location.hash.replace("#", "") as SectionId;

    if (!initialSection) {
      return;
    }

    const timer = window.setTimeout(() => {
      scrollToSection(initialSection, false);
    }, 250);

    return () => {
      window.clearTimeout(timer);
    };
  }, [scrollToSection]);

  const navbarIsOpen = isHeroActive || isMobileMenuOpen;

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : -28,
      }}
      animate={{
        opacity: navbarIsOpen ? 1 : 0,
        y: navbarIsOpen ? 0 : "-120%",
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.35,
              ease: "easeInOut",
            }
      }
      style={{
        pointerEvents: navbarIsOpen ? "auto" : "none",
        willChange: "transform, opacity",
      }}
      className={`
        fixed
        inset-x-0
        z-50
        flex
        justify-center
        px-4
        transition-[top]
        duration-500
        sm:px-6
        ${isScrolled ? "top-2" : "top-2 sm:top-3 lg:top-4"}
      `}
    >
      <nav
        aria-label="Primary navigation"
        className="
          relative
          w-full
          max-w-[1600px]
          overflow-visible
          transition-all
          duration-500
        "
      >
        <div
          className={`
            relative
            z-10
            flex
            items-center
            justify-start
            gap-5
            px-4
            transition-[min-height]
            duration-500
            sm:px-6
            lg:px-7
            ${
              isScrolled
                ? "min-h-[78px] sm:min-h-[82px] lg:min-h-[86px]"
                : "min-h-[78px] sm:min-h-[82px] lg:min-h-[86px]"
            }
          `}
        >
          <Link
            href="/"
            aria-label="FINCHX AI home"
            onClick={closeMobileMenu}
            className="
relative
flex
items-center
justify-start
shrink-0
overflow-visible
self-center
h-[86px]
w-auto
"
          >
            <Image
              src="/assets/finchx-logo-transparent.png"
              alt="FINCHX AI"
              width={540}
              height={108}
              priority
              quality={100}
              className="
                h-full
                w-full
                object-contain
                object-left
                pointer-events-none
                select-none
              "
            />
          </Link>

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
                    onClick={(event) => handleNavigation(event, item.id)}
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      justify-center
                      rounded-none
                      border-none
                      bg-transparent
                      px-3
                      py-2
                      text-[15px]
                      font-semibold
                      tracking-[0.02em]
                      text-[#2B3138]
                      transition-[color]
                      duration-300
                      hover:text-[#111111]
                      focus-visible:outline-none
                    "
                    style={{
                      color: "#2B3138",
                      opacity: 1,
                      filter: "none",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-1
                        left-0
                        h-[2px]
                        w-0
                        bg-[#2B3138]
                        transition-[width]
                        duration-300
                        group-hover:w-full
                      "
                    />

                    <span
                      className="
                        relative
                        z-[20]
                        text-[#2B3138]
                      "
                      style={{
                        color: "#2B3138",
                        opacity: 1,
                        filter: "none",
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="
                mx-1
                h-7
                w-px
                bg-gradient-to-b
                from-transparent
                via-[#73858e]/30
                to-transparent
              "
            />

            <motion.a
              href="#contact"
              onClick={(event) => handleNavigation(event, "contact")}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={{ y: 0 }}
              className="
                group
                relative
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2.5
                overflow-hidden
                rounded-full
                border
                border-[#252b30]
                bg-[#252b30]
                px-5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_16px_36px_rgba(37,43,48,0.24)]
                transition-all
                duration-300
                hover:border-[#101619]
                hover:bg-[#101619]
                hover:shadow-[0_22px_48px_rgba(37,43,48,0.32)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#82cbd3]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-white
                xl:px-6
                xl:text-[14px]
              "
              style={{ color: "#ffffff" }}
            >
              <CalendarDays aria-hidden="true" className="relative z-10 h-4 w-4 text-white" />

              <span className="relative z-10 text-white" style={{ color: "#ffffff" }}>
                Book a Strategy Call
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </motion.a>
          </div>

          <a
            href="#contact"
            onClick={(event) => handleNavigation(event, "contact")}
            className="
              ml-auto
              hidden
              min-h-12
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#252b30]
              px-5
              text-[13px]
              font-semibold
              text-white
              shadow-[0_14px_32px_rgba(37,43,48,0.22)]
              sm:inline-flex
              lg:hidden
            "
          >
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            Book a Strategy Call
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => {
              setIsMobileMenuOpen((current) => !current);
              setIsHeroActive(true);
            }}
            className="
              ml-auto
              inline-flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#252b30]
              bg-[#252b30]
              text-white
              shadow-[0_12px_28px_rgba(37,43,48,0.22)]
              transition-all
              duration-300
              hover:bg-[#101619]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#8bcbd3]
              sm:hidden
            "
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.42,
                ease: cinematicEase,
              }}
              className="
                relative
                z-10
                overflow-hidden
                border-t
                border-white/90
                sm:hidden
              "
            >
              <div className="grid grid-cols-2 gap-2 px-4 pb-5 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(event) => handleNavigation(event, item.id)}
                    className="
                      flex
                      min-h-12
                      items-center
                      justify-center
                      rounded-none
                      bg-transparent
                      px-4
                      text-[13px]
                      font-semibold
                      text-white/90
                    "
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(event) => handleNavigation(event, "contact")}
                  className="
                    col-span-2
                    mt-2
                    flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#252b30]
                    px-5
                    text-[14px]
                    font-semibold
                    text-white
                  "
                >
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                  Book a Strategy Call
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
