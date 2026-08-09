"use client";

import { motion, useReducedMotion } from "framer-motion";
import JourneyParticles from "./JourneyParticles";
import { DEBUG, journeyCanvas } from "./journeyData";
import type { JourneyStep } from "./types";

interface JourneyNodeProps {
  step: JourneyStep;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export default function JourneyNode({
  step,
  active,
  onActivate,
  onDeactivate,
}: JourneyNodeProps) {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <motion.div
      data-journey-node={step.id}
      data-journey-icon={step.icon}
      className={`absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer transform-gpu ${
        active ? "z-50" : "z-20"
      }`}
      style={{ left: `${step.x}%`, top: `${step.y}%` }}
      onPointerEnter={onActivate}
      onPointerLeave={onDeactivate}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.62)_0%,rgba(157,213,239,.24)_42%,transparent_72%)] mix-blend-screen will-change-transform"
        initial={false}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1.08 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
        style={
          active
            ? {
                backdropFilter: "brightness(1.15)",
                boxShadow: `0 0 38px ${step.color}72`,
              }
            : undefined
        }
      />

      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[13px] rounded-full border"
          style={{
            borderColor: `${step.color}b8`,
            boxShadow: `0 0 34px ${step.color}a0`,
          }}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: [0, 1, 0], scale: [0.82, 1.1, 1.2] }}
          transition={{
            duration: 0.5,
            delay: step.energyDelay,
            repeat: Infinity,
            repeatDelay:
              journeyCanvas.duration + journeyCanvas.pauseDuration - 0.5,
            ease: "easeOut",
          }}
        />
      )}

      {!reduceMotion && <JourneyParticles step={step} />}

      {DEBUG && (
        <>
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#167eb7] bg-white" />
          <div className="pointer-events-none absolute left-1/2 top-full min-w-max -translate-x-1/2 rounded-md border border-[#167eb7]/50 bg-white/90 px-2 py-1 font-mono text-[9px] leading-tight text-[#145979] shadow-sm">
            <span className="block font-semibold">{step.title}</span>
            <span>
              {step.x.toFixed(2)}%, {step.y.toFixed(2)}%
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}
