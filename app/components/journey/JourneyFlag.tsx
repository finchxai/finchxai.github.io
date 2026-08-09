"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journeyCanvas } from "./journeyData";

export default function JourneyFlag() {
  const reduceMotion = Boolean(useReducedMotion());

  if (reduceMotion) return null;

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute z-20 h-[12%] w-[10%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[48%] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_74%)]"
      style={{ left: `${journeyCanvas.flag.x}%`, top: `${journeyCanvas.flag.y}%` }}
    >
      <motion.span
        className="absolute inset-x-0 h-[34%] bg-[linear-gradient(180deg,transparent,rgba(255,224,166,.58),transparent)] mix-blend-screen will-change-transform"
        initial={{ y: "-120%", opacity: 0 }}
        animate={{ y: ["-120%", "310%"], opacity: [0, 0.62, 0] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          repeatDelay: 4.1,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}
