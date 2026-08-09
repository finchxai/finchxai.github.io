"use client";

import { motion, useReducedMotion } from "framer-motion";
import { journeyCanvas } from "./journeyData";

const movingPulse = {
  duration: journeyCanvas.duration,
  repeat: Infinity,
  repeatDelay: journeyCanvas.pauseDuration,
  ease: "linear" as const,
};

export default function JourneyEnergy() {
  const reduceMotion = Boolean(useReducedMotion());

  if (reduceMotion) return null;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${journeyCanvas.width} ${journeyCanvas.height}`}
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
      fill="none"
    >
      <defs>
        <filter id="journey-pulse-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="0.62" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={journeyCanvas.path}
        pathLength={1}
        stroke="rgba(235,211,169,.2)"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeDasharray="0.075 0.925"
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 0 }}
        transition={movingPulse}
        style={{ filter: "blur(.65px)" }}
      />
      <motion.path
        d={journeyCanvas.path}
        pathLength={1}
        stroke="rgba(244,228,198,.58)"
        strokeWidth="0.68"
        strokeLinecap="round"
        strokeDasharray="0.036 0.964"
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 0 }}
        transition={movingPulse}
        filter="url(#journey-pulse-glow)"
      />
      <motion.path
        d={journeyCanvas.path}
        pathLength={1}
        stroke="rgba(255,252,245,.94)"
        strokeWidth="0.38"
        strokeLinecap="round"
        strokeDasharray="0.011 0.989"
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 0 }}
        transition={movingPulse}
        filter="url(#journey-pulse-glow)"
      />
    </svg>
  );
}
