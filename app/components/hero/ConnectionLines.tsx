"use client";

import { motion } from "framer-motion";

export default function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1000 800"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M500 80 L220 210"
        stroke="rgba(23,200,155,.25)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.path
        d="M500 80 L780 210"
        stroke="rgba(23,200,155,.25)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.7 }}
      />

      <motion.path
        d="M220 210 L280 560"
        stroke="rgba(23,200,155,.18)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.path
        d="M780 210 L720 560"
        stroke="rgba(23,200,155,.18)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.path
        d="M280 560 L500 700"
        stroke="rgba(23,200,155,.25)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.3 }}
      />

      <motion.path
        d="M720 560 L500 700"
        stroke="rgba(23,200,155,.25)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5 }}
      />
    </svg>
  );
}
