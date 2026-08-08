"use client";

import { motion } from "framer-motion";

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Circle */}
      <motion.div
        className="absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full border border-white/5"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Circle */}
      <motion.div
        className="absolute right-[12%] top-[12%] h-[220px] w-[220px] rounded-full border border-emerald-400/10"
        animate={{
          y: [15, -15, 15],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Circle */}
      <motion.div
        className="absolute bottom-[8%] right-[18%] h-[300px] w-[300px] rounded-full border border-cyan-400/10"
        animate={{
          y: [-10, 20, -10],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
