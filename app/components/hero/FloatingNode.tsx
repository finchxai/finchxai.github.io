"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingNodeProps {
  title: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingNode({
  title,
  icon,
  className = "",
  delay = 0,
}: FloatingNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-5 py-4 shadow-[0_25px_60px_rgba(0,0,0,.25)] transition-all duration-500 hover:scale-105 hover:border-emerald-400/40 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
          {icon}
        </div>

        <span className="font-medium text-white">{title}</span>
      </div>
    </motion.div>
  );
}
