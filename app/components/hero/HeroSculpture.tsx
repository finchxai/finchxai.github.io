"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

const sculptureSpring = {
  stiffness: 72,
  damping: 24,
  mass: 0.8,
};

const cinematicEase = [0.22, 1, 0.36, 1] as const;

interface HeroSculptureProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

export default function HeroSculpture({
  pointerX,
  pointerY,
}: HeroSculptureProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const smoothX = useSpring(pointerX, sculptureSpring);
  const smoothY = useSpring(pointerY, sculptureSpring);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const translateX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const translateY = useTransform(smoothY, [-1, 1], [-14, 14]);

  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-[640px] [perspective:1400px]"
    >
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : translateX,
          y: shouldReduceMotion ? 0 : translateY,
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-[8%] will-change-transform"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  scale: [1, 1.004, 1],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="absolute inset-0 -rotate-[2.5deg] will-change-transform"
        >
          <div className="absolute inset-0 rounded-[48%_52%_43%_57%/42%_46%_54%_58%] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(205,230,235,0.38)_44%,rgba(255,255,255,0.24)_68%,rgba(223,235,236,0.42))] shadow-[0_48px_110px_rgba(66,91,101,0.18),inset_0_2px_1px_rgba(255,255,255,0.96),inset_0_-28px_64px_rgba(103,177,185,0.14)] backdrop-blur-[34px]" />

          <div className="absolute inset-[13%] translate-z-[32px] rounded-[58%_42%_52%_48%/46%_58%_42%_54%] border border-white/72 bg-[linear-gradient(125deg,rgba(255,255,255,0.58),rgba(126,204,210,0.18)_48%,rgba(255,255,255,0.12))] shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_24px_60px_rgba(65,95,104,0.1)] backdrop-blur-[24px]" />

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { x: [-28, 34, -28], opacity: [0.32, 0.62, 0.32] }
            }
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: cinematicEase,
            }}
            className="absolute left-[22%] top-[17%] h-[9%] w-[56%] -rotate-6 rounded-full bg-white/62 blur-[12px]"
          />

          <div className="absolute bottom-[14%] left-[19%] h-[18%] w-[64%] -rotate-3 rounded-[50%] bg-[linear-gradient(180deg,rgba(49,74,82,0.22),rgba(114,185,192,0.12),rgba(255,255,255,0.16))] shadow-[inset_0_3px_10px_rgba(47,72,80,0.16)] blur-[1px]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
