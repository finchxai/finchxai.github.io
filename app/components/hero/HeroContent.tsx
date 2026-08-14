"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pointerSpring = {
  stiffness: 90,
  damping: 24,
  mass: 0.7,
};

interface HeroContentProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

export default function HeroContent({ pointerX, pointerY }: HeroContentProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const smoothX = useSpring(pointerX, pointerSpring);

  const smoothY = useSpring(pointerY, pointerSpring);

  const headingX = useTransform(smoothX, [-1, 1], [-12, 12]);

  const headingY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const descriptionX = useTransform(smoothX, [-1, 1], [-6, 6]);

  const descriptionY = useTransform(smoothY, [-1, 1], [-4, 4]);

  return (
    <div
      className="
        relative
        z-20
        w-full
        max-w-[940px]
        pt-0
        pb-0
        [perspective:1400px]
      "
    >
      <motion.div initial={false}>
        <motion.h1
          id="hero-heading"
          style={{
            x: headingX,
            y: headingY,
          }}
          className="
            relative
            max-w-[920px]
            text-[clamp(2.45rem,11.8vw,4.2rem)]
            font-semibold
            leading-[0.9]
            tracking-[-0.055em]
            will-change-transform
            sm:text-[clamp(4rem,7.3vw,7.4rem)]
            sm:leading-[0.88]
            sm:tracking-[-0.065em]
          "
        >
          <span className="block w-fit max-w-full text-[#263137]">Build</span>
          <span className="bg-[linear-gradient(100deg,#304b55_0%,#5f8e99_46%,#9b876f_100%)] bg-clip-text text-transparent">
            Extraordinary
          </span>
          <span className="block w-fit max-w-full text-[#283136]">Growth</span>
        </motion.h1>
      </motion.div>

      <motion.div initial={false}>
        <motion.p
          style={{
            x: shouldReduceMotion ? 0 : descriptionX,
            y: shouldReduceMotion ? 0 : descriptionY,
          }}
          className="mt-8 max-w-[640px] text-pretty text-[0.98rem] font-normal leading-[1.75] tracking-[-0.012em] text-[#3f4c53] will-change-transform sm:mt-10 sm:text-[clamp(1rem,1.35vw,1.18rem)]"
        >
          FINCHX AI helps ambitious businesses grow through premium digital
          experiences, intelligent automation, AI solutions, and connected
          marketing systems designed around real business objectives.
        </motion.p>
      </motion.div>

      <motion.div initial={false} className="mt-9 sm:mt-10">
        <motion.a
          href="#contact"
          whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ color: "#ffffff" }}
          className="group relative inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#232b30] bg-[#232b30] px-7 text-[14px] font-semibold text-white shadow-[0_18px_44px_rgba(35,43,48,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(35,43,48,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82cbd3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4f7f9] sm:w-auto sm:text-[15px]"
        >
          <span aria-hidden="true" className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1/3 -translate-x-[160%] -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
          <span className="relative z-10 text-white">Start Your Project</span>
          <ArrowRight aria-hidden="true" className="relative z-10 h-[18px] w-[18px] text-white transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </motion.div>

      <motion.div initial={false} aria-hidden="true" className="mt-14 origin-left sm:mt-16">
        <div className="h-px w-full max-w-[360px] bg-gradient-to-r from-[#7db9c3]/50 via-[#d4b28d]/28 to-transparent" />
      </motion.div>
    </div>
  );
}
