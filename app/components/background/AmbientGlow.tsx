"use client";

import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <>
      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-40, 25, -40],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-12%]
          top-[-12%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-emerald-400/10
          blur-[180px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [20, -30, 20],
          y: [20, -20, 20],
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[10%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-300/10
          blur-[170px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-20%]
          left-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-emerald-300/10
          blur-[220px]
        "
      />
    </>
  );
}
