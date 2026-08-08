"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, type PointerEvent as ReactPointerEvent } from "react";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const pointerSpring = {
  stiffness: 90,
  damping: 24,
  mass: 0.7,
};

interface LocalizedHoverTextProps {
  text: string;
  baseClassName: string;
  hoverClassName: string;
  className?: string;
  spotlightSize?: number;
}

function LocalizedHoverText({
  text,
  baseClassName,
  hoverClassName,
  className = "",
  spotlightSize = 105,
}: LocalizedHoverTextProps) {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const handlePointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setCursor((current) => ({
      ...current,
      active: false,
    }));
  };

  const spotlightMask = `radial-gradient(
    ${spotlightSize}px circle at ${cursor.x}px ${cursor.y}px,
    black 0%,
    black 42%,
    rgba(0, 0, 0, 0.72) 56%,
    transparent 76%
  )`;

  return (
    <span
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`
        relative
        block
        w-fit
        max-w-full
        cursor-default
        ${className}
      `}
    >
      <span className={baseClassName}>{text}</span>

      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-200
          ${hoverClassName}
          ${cursor.active ? "opacity-100" : "opacity-0"}
        `}
        style={{
          WebkitMaskImage: spotlightMask,
          maskImage: spotlightMask,
        }}
      >
        {text}
      </span>
    </span>
  );
}

export default function HeroContent() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, pointerSpring);

  const smoothY = useSpring(pointerY, pointerSpring);

  const headingX = useTransform(smoothX, [-1, 1], [-7, 7]);

  const headingY = useTransform(smoothY, [-1, 1], [-5, 5]);

  const descriptionX = useTransform(smoothX, [-1, 1], [-3, 3]);

  const descriptionY = useTransform(smoothY, [-1, 1], [-2, 2]);

  const reveal = (delay: number, distance = 24) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.85,
      delay: shouldReduceMotion ? 0 : delay,
      ease: cinematicEase,
    },
  });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const normalizedX = (event.clientX - bounds.left) / bounds.width;

    const normalizedY = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(normalizedX * 2 - 1);
    pointerY.set(normalizedY * 2 - 1);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="
        relative
        z-20
        w-full
        max-w-[940px]
        pt-16
        pb-10
        [perspective:1400px]
        sm:pt-24
        sm:pb-16
        lg:pt-28
        lg:pb-20
        xl:pt-32
      "
    >
      {/* Heading */}
      <motion.div {...reveal(0.12, 32)}>
        <motion.h1
          id="hero-heading"
          style={{
            x: shouldReduceMotion ? 0 : headingX,
            y: shouldReduceMotion ? 0 : headingY,
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
          <LocalizedHoverText
            text="Build"
            baseClassName="text-[#263137]"
            hoverClassName="text-[#247f91]"
            spotlightSize={110}
          />

          <LocalizedHoverText
            text="Extraordinary"
            baseClassName="
              bg-[linear-gradient(100deg,#304b55_0%,#5f8e99_46%,#9b876f_100%)]
              bg-clip-text
              text-transparent
            "
            hoverClassName="
              bg-[linear-gradient(100deg,#087e92_0%,#50c9cf_48%,#d5965a_100%)]
              bg-clip-text
              text-transparent
            "
            spotlightSize={125}
          />

          <LocalizedHoverText
            text="Growth"
            baseClassName="text-[#283136]"
            hoverClassName="text-[#9a6438]"
            spotlightSize={110}
          />
        </motion.h1>
      </motion.div>

      {/* Description */}
      <motion.div {...reveal(0.26, 20)}>
        <motion.p
          style={{
            x: shouldReduceMotion ? 0 : descriptionX,
            y: shouldReduceMotion ? 0 : descriptionY,
          }}
          className="
            mt-8
            max-w-[640px]
            text-pretty
            text-[0.98rem]
            font-normal
            leading-[1.75]
            tracking-[-0.012em]
            text-[#3f4c53]
            will-change-transform
            sm:mt-10
            sm:text-[clamp(1rem,1.35vw,1.18rem)]
          "
        >
          FINCHX AI helps ambitious businesses grow through premium digital
          experiences, intelligent automation, AI solutions, and connected
          marketing systems designed around real business objectives.
        </motion.p>
      </motion.div>

      {/* Primary CTA */}
      <motion.div {...reveal(0.4, 20)} className="mt-9 sm:mt-10">
        <motion.a
          href="#contact"
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -3,
                  scale: 1.02,
                }
          }
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            relative
            inline-flex
            min-h-14
            w-full
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full
            border
            border-[#232b30]
            bg-[#232b30]
            px-7
            text-[14px]
            font-semibold
            text-white
            shadow-[0_18px_44px_rgba(35,43,48,0.22)]
            transition-shadow
            duration-300
            hover:shadow-[0_24px_55px_rgba(35,43,48,0.30)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#82cbd3]
            focus-visible:ring-offset-4
            focus-visible:ring-offset-[#f4f7f9]
            sm:w-auto
            sm:text-[15px]
          "
        >
          <span
            aria-hidden="true"
            className="
              absolute
              inset-x-5
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />

          <span className="relative z-10">Start Your Project</span>

          <ArrowRight
            aria-hidden="true"
            className="
              relative
              z-10
              h-[18px]
              w-[18px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.a>
      </motion.div>

      {/* Soft hero ending */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: shouldReduceMotion ? 0 : 0.62,
          duration: shouldReduceMotion ? 0 : 0.9,
          ease: cinematicEase,
        }}
        aria-hidden="true"
        className="
          mt-14
          origin-left
          sm:mt-16
        "
      >
        <div
          className="
            h-px
            w-full
            max-w-[360px]
            bg-gradient-to-r
            from-[#7db9c3]/50
            via-[#d4b28d]/28
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}
