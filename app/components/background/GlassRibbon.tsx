"use client";

import { motion } from "framer-motion";

export default function GlassRibbon() {
  return (
    <motion.svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      animate={{
        opacity: [0.45, 0.65, 0.45],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <defs>
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,.02)" />
          <stop offset="40%" stopColor="rgba(255,255,255,.18)" />
          <stop offset="60%" stopColor="rgba(255,255,255,.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,.02)" />
        </linearGradient>

        <filter id="blur">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <motion.path
        d="M-100 620 C300 420 700 760 1700 470"
        stroke="url(#glassGradient)"
        strokeWidth="90"
        strokeLinecap="round"
        fill="none"
        filter="url(#blur)"
        animate={{
          d: [
            "M-100 620 C300 420 700 760 1700 470",
            "M-100 590 C350 470 760 690 1700 520",
            "M-100 620 C300 420 700 760 1700 470",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.path
        d="M-100 330 C350 180 850 480 1700 220"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="36"
        strokeLinecap="round"
        fill="none"
        animate={{
          d: [
            "M-100 330 C350 180 850 480 1700 220",
            "M-100 360 C420 140 880 520 1700 250",
            "M-100 330 C350 180 850 480 1700 220",
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
