"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroBackground from "../background/HeroBackground";
import HeroContent from "../hero/HeroContent";

const scrollSpring = {
  stiffness: 90,
  damping: 28,
  mass: 0.8,
};

export default function Hero() {
  const heroReference = useRef<HTMLElement>(null);

  const shouldReduceMotion = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: heroReference,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  /*
   * Background travels down as the page scrolls.
   * Different layers inside HeroBackground still keep
   * their existing mouse-parallax movement.
   */
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, 240]);

  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  const backgroundOpacity = useTransform(
    smoothProgress,
    [0, 0.72, 1],
    [1, 0.72, 0.2],
  );

  /*
   * Content gently separates from the background,
   * then fades as the next section enters.
   */
  const contentY = useTransform(smoothProgress, [0, 1], [0, -92]);

  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.58, 0.9, 1],
    [1, 0.92, 0.25, 0],
  );

  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.975]);

  const contentBlur = useTransform(
    smoothProgress,
    [0, 0.75, 1],
    ["blur(0px)", "blur(0px)", "blur(4px)"],
  );

  return (
    <motion.section
      ref={heroReference}
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        isolate
        flex
        min-h-[calc(100svh-100px)]
        w-full
        items-start
        overflow-hidden
      "
    >
      {/* Scroll-linked hero background */}
      <motion.div
        aria-hidden="true"
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: backgroundY,
                scale: backgroundScale,
                opacity: backgroundOpacity,
              }
        }
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          origin-center
          overflow-hidden
          will-change-transform
        "
      >
        <HeroBackground />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: contentY,
                opacity: contentOpacity,
                scale: contentScale,
                filter: contentBlur,
              }
        }
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          pb-20
          pt-16
          will-change-transform
          sm:px-8
          sm:pb-24
          sm:pt-20
          lg:px-14
          lg:pb-28
          lg:pt-20
          xl:px-20
        "
      >
        <HeroContent />
      </motion.div>

      {/*
       * This protects the hero CTA label if an inherited
       * text rule from the page or global CSS overrides it.
       */}
      <style>
        {`
          #home a[href="#contact"],
          #home a[href="#contact"] *,
          #home a[href="#contact"] svg {
            color: #ffffff !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
        `}
      </style>
    </motion.section>
  );
}
