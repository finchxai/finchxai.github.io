"use client";

import { motion } from "framer-motion";

import {
  floatingSlow,
  floatingMedium,
  slowTransition,
  mediumTransition,
} from "../motion/floating";

export default function ArchitecturalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Glass Orb */}
      <motion.div
        animate={floatingSlow}
        transition={slowTransition}
        className="
          absolute
          -top-56
          -right-52
          h-[700px]
          w-[700px]
          rounded-full
          bg-white/[0.06]
          backdrop-blur-[80px]
          border
          border-white/20
          shadow-[0_60px_150px_rgba(255,255,255,.08)]
        "
      />

      {/* Glass Capsule */}
      <motion.div
        animate={floatingMedium}
        transition={mediumTransition}
        className="
          absolute
          top-[18%]
          right-[12%]
          h-40
          w-[420px]
          rounded-full
          border
          border-white/25
          bg-white/[0.05]
          backdrop-blur-[40px]
          shadow-[0_25px_80px_rgba(255,255,255,.10)]
        "
      />

      {/* Ring */}
      <motion.div
        animate={{
          rotate: [0, 12, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-64
          top-32
          h-[760px]
          w-[760px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* Secondary Ring */}
      <motion.div
        animate={{
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          bottom-[-200px]
          h-[540px]
          w-[540px]
          rounded-full
          border
          border-emerald-300/15
        "
      />

      {/* Floating Emerald Orb */}
      <motion.div
        animate={{
          y: [-25, 20, -25],
          x: [-8, 8, -8],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[12%]
          bottom-20
          h-24
          w-24
          rounded-full
          bg-gradient-to-br
          from-emerald-300/50
          to-cyan-200/30
          blur-[1px]
        "
      />
    </div>
  );
}
