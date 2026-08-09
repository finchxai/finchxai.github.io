"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import JourneyEnergy from "./JourneyEnergy";

const ease = [0.22, 1, 0.36, 1] as const;

export default function JourneyCanvas() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
      className="relative mt-16 overflow-visible rounded-[2.25rem] border border-white/70 bg-white/32 shadow-[0_38px_96px_rgba(34,66,84,0.14)]"
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative aspect-[3/2] min-h-[360px] overflow-visible rounded-[2.25rem] transform-gpu will-change-transform"
      >
        <Image
          fill
          src="/assets/strategy-consulting.png"
          alt="FINCHX business journey from discovery to measurable results"
          sizes="100vw"
          className="rounded-[2.25rem] object-contain object-center"
          style={{
            filter: "brightness(1.035) contrast(1.08) saturate(1.02)",
          }}
        />

        <JourneyEnergy />
      </motion.div>
    </motion.div>
  );
}
