"use client";

import { motion } from "framer-motion";
import { journeyCanvas } from "./journeyData";
import type { JourneyStep } from "./types";

interface JourneyParticlesProps {
  step: JourneyStep;
}

const directions = [
  [-12, -10],
  [0, -15],
  [12, -9],
  [14, 3],
  [-13, 4],
] as const;

export default function JourneyParticles({ step }: JourneyParticlesProps) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-1/2">
      {directions.map(([x, y], index) => (
        <motion.span
          key={`${x}-${y}`}
          aria-hidden="true"
          className="absolute h-1 w-1 rounded-full bg-[#c9eeff] shadow-[0_0_8px_rgba(48,153,255,.9)]"
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.45 }}
          animate={{
            x,
            y,
            opacity: [0, 0.9, 0],
            scale: [0.45, 1, 0.7],
          }}
          transition={{
            duration: 0.5,
            delay: step.energyDelay + index * 0.018,
            repeat: Infinity,
            repeatDelay:
              journeyCanvas.duration + journeyCanvas.pauseDuration - 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </span>
  );
}
