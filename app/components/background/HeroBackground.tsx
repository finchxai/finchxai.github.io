"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const cursorSpring = {
  stiffness: 85,
  damping: 22,
  mass: 0.65,
};

const cursorLightSpring = {
  stiffness: 170,
  damping: 28,
  mass: 0.38,
};

interface HeroBackgroundProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

export default function HeroBackground({
  pointerX,
  pointerY,
}: HeroBackgroundProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const smoothX = useSpring(pointerX, cursorSpring);
  const smoothY = useSpring(pointerY, cursorSpring);

  const backgroundX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const backgroundY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const ribbonOneX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const ribbonOneY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const ribbonTwoX = useTransform(smoothX, [-1, 1], [18, -18]);
  const ribbonTwoY = useTransform(smoothY, [-1, 1], [18, -18]);

  const ribbonThreeX = useTransform(smoothX, [-1, 1], [-26, 26]);
  const ribbonThreeY = useTransform(smoothY, [-1, 1], [-26, 26]);

  const cursorLightX = useSpring(pointerX, cursorLightSpring);
  const cursorLightY = useSpring(pointerY, cursorLightSpring);

  const sceneX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const sceneY = useTransform(smoothY, [-1, 1], [-8, 8]);

  const reverseX = useTransform(smoothX, [-1, 1], [6, -6]);

  const reverseY = useTransform(smoothY, [-1, 1], [4, -4]);

  const deepX = useTransform(smoothX, [-1, 1], [-16, 16]);
  const deepY = useTransform(smoothY, [-1, 1], [-12, 12]);

  const orbOneX = useTransform(smoothX, [-1, 1], [-18, 18]);

  const orbOneY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const orbTwoX = useTransform(smoothX, [-1, 1], [14, -14]);

  const orbTwoY = useTransform(smoothY, [-1, 1], [10, -10]);

  const rotateY = useTransform(smoothX, [-1, 1], [-4, 4]);

  const rotateX = useTransform(smoothY, [-1, 1], [3, -3]);

  const cursorGlowX = useTransform(cursorLightX, [-1, 1], ["8%", "92%"]);

  const cursorGlowY = useTransform(cursorLightY, [-1, 1], ["8%", "84%"]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: shouldReduceMotion ? 0 : backgroundX,
        y: shouldReduceMotion ? 0 : backgroundY,
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        isolate
        overflow-hidden
      "
    >
      {/* Main pearl canvas */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [1, 0.965, 1],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: cinematicEase,
        }}
        className="
          absolute
          inset-0
          bg-[linear-gradient(135deg,#f8fafb_0%,#edf4f7_38%,#f8f5f1_72%,#eef3f5_100%)]
        "
      />

      {/* Mouse-following light */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [1, 0.92, 1],
                scale: [1, 1.028, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: cinematicEase,
        }}
        className="
          absolute
          h-[38rem]
          w-[38rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.88)_0%,rgba(190,224,235,0.32)_40%,rgba(229,215,240,0.19)_64%,transparent_76%)]
          blur-[54px]
        "
        style={{
          left: shouldReduceMotion ? "50%" : cursorGlowX,
          top: shouldReduceMotion ? "42%" : cursorGlowY,
        }}
      />

      {/* Top illumination */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [1, 0.94, 1],
                scale: [1, 1.012, 1],
              }
        }
        transition={{
          duration: 31,
          repeat: Infinity,
          ease: cinematicEase,
        }}
        className="
          absolute
          inset-x-0
          top-0
          h-[48%]
          bg-[radial-gradient(circle_at_48%_-10%,rgba(255,255,255,1)_0%,rgba(255,255,255,0.76)_32%,transparent_72%)]
        "
      />

      {/* Architectural grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.46]"
        style={{
          x: shouldReduceMotion ? 0 : reverseX,
          y: shouldReduceMotion ? 0 : reverseY,
          backgroundImage: `
            linear-gradient(rgba(98,119,130,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(98,119,130,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
        }}
      />

      {/* Ice-blue ambience */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : reverseX,
          y: shouldReduceMotion ? 0 : reverseY,
        }}
        className="
          absolute
          -left-[17rem]
          top-[4rem]
          h-[48rem]
          w-[48rem]
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.34, 0.52, 0.34],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            h-full
            w-full
            rounded-full
            bg-[#b9dce8]/48
            blur-[132px]
          "
        />
      </motion.div>

      {/* Champagne ambience */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : sceneX,
          y: shouldReduceMotion ? 0 : sceneY,
        }}
        className="
          absolute
          -right-[15rem]
          top-[3rem]
          h-[42rem]
          w-[42rem]
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1.04, 0.93, 1.04],
                  opacity: [0.32, 0.5, 0.32],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            h-full
            w-full
            rounded-full
            bg-[#ead8c3]/46
            blur-[138px]
          "
        />
      </motion.div>

      {/* Main organic glass landscape */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : sceneX,
          y: shouldReduceMotion ? 0 : sceneY,
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          absolute
          -right-[9%]
          top-[9%]
          h-[74%]
          w-[70%]
          min-w-[780px]
          origin-center
          [perspective:1300px]
          will-change-transform
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -20, 0],
                  rotateZ: [-4.5, -3.1, -4.5],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            absolute
            inset-0
            rounded-[48%_52%_42%_58%/45%_48%_52%_55%]
            border
            border-white/86
            bg-[linear-gradient(145deg,rgba(255,255,255,0.76),rgba(207,226,234,0.5)_38%,rgba(230,216,236,0.3)_66%,rgba(233,214,193,0.38))]
            shadow-[0_52px_115px_rgba(73,95,106,0.20),inset_0_1px_0_rgba(255,255,255,0.99),inset_0_-36px_76px_rgba(142,177,188,0.14)]
            backdrop-blur-[36px]
          "
        />

        {/* Inner glass layer */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 26, 0],
                  y: [0, -16, 0],
                  rotate: [3, 4.5, 3],
                }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            absolute
            left-[9%]
            top-[18%]
            h-[58%]
            w-[82%]
            rounded-[55%_45%_62%_38%/48%_58%_42%_52%]
            border
            border-white/74
            bg-[linear-gradient(120deg,rgba(255,255,255,0.62),rgba(169,205,216,0.26)_46%,rgba(255,255,255,0.1))]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.96),0_28px_75px_rgba(62,82,94,0.14)]
            backdrop-blur-[28px]
          "
        />

        {/* Lower glass layer */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -24, 0],
                  y: [0, 17, 0],
                  rotate: [-4, -5.5, -4],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            absolute
            bottom-[10%]
            left-[7%]
            h-[35%]
            w-[88%]
            rounded-[44%_56%_38%_62%/56%_42%_58%_44%]
            border
            border-white/70
            bg-[linear-gradient(135deg,rgba(182,215,225,0.32),rgba(255,255,255,0.22),rgba(220,201,181,0.24))]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.94)]
            backdrop-blur-[24px]
          "
        />

        {/* Moving highlight */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [-35, 55, -35],
                  opacity: [0.38, 0.8, 0.38],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            absolute
            left-[18%]
            top-[14%]
            h-[8%]
            w-[58%]
            rotate-[-8deg]
            rounded-full
            bg-white/72
            blur-[11px]
          "
        />

        {/* Dark depth channel */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                  scaleX: [1, 1.035, 1],
                }
          }
          transition={{
            duration: 16.5,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            absolute
            bottom-[20%]
            left-[24%]
            h-[13%]
            w-[57%]
            rotate-[-5deg]
            rounded-[50%]
            bg-[linear-gradient(180deg,rgba(55,67,74,0.56),rgba(120,142,151,0.2),rgba(255,255,255,0.17))]
            shadow-[inset_0_3px_9px_rgba(30,42,48,0.3),0_18px_35px_rgba(67,84,92,0.18)]
            blur-[1px]
          "
        />
      </motion.div>

      {/* Main floating orb */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : orbOneX,
          y: shouldReduceMotion ? 0 : orbOneY,
        }}
        className="
          absolute
          right-[12%]
          top-[12%]
          h-24
          w-24
          opacity-90
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -28, 0],
                  rotate: [0, 18, 0],
                  scale: [1, 1.07, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            h-full
            w-full
            rounded-full
            border
            border-white/90
            bg-[radial-gradient(circle_at_32%_25%,rgba(255,255,255,0.99),rgba(185,220,232,0.68)_38%,rgba(218,202,229,0.44)_68%,rgba(210,182,150,0.38))]
            shadow-[0_28px_58px_rgba(67,91,103,0.22),inset_0_3px_7px_rgba(255,255,255,0.98)]
            backdrop-blur-xl
          "
        />
      </motion.div>

      {/* Secondary orb */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : orbTwoX,
          y: shouldReduceMotion ? 0 : orbTwoY,
        }}
        className="
          absolute
          right-[30%]
          top-[38%]
          h-12
          w-12
          opacity-90
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 22, 0],
                  scale: [1, 0.92, 1],
                }
          }
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            h-full
            w-full
            rounded-full
            border
            border-white/94
            bg-[radial-gradient(circle_at_30%_22%,white,rgba(176,215,226,0.76)_44%,rgba(210,187,229,0.44)_72%,rgba(235,214,190,0.35))]
            shadow-[0_18px_34px_rgba(65,89,101,0.20),inset_0_2px_4px_rgba(255,255,255,1)]
          "
        />
      </motion.div>

      {/* Champagne orb */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : deepX,
          y: shouldReduceMotion ? 0 : deepY,
        }}
        className="
          absolute
          bottom-[17%]
          right-[10%]
          h-[4.75rem]
          w-[4.75rem]
          opacity-90
        "
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -22, 0],
                  scale: [1, 1.09, 1],
                  rotate: [0, -12, 0],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: cinematicEase,
          }}
          className="
            h-full
            w-full
            rounded-full
            border
            border-white/86
            bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.98),rgba(237,214,186,0.74)_42%,rgba(186,211,220,0.44)_74%)]
            shadow-[0_25px_48px_rgba(95,83,69,0.19),inset_0_3px_6px_rgba(255,255,255,0.95)]
          "
        />
      </motion.div>

      {/* Curved architecture */}
      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          x: shouldReduceMotion ? 0 : reverseX,
          y: shouldReduceMotion ? 0 : reverseY,
        }}
      >
        <motion.path
          d="M-160 760C155 520 283 807 566 592C829 391 984 109 1600 214"
          stroke="rgba(112,138,149,0.19)"
          strokeWidth="1.5"
          style={{
            x: shouldReduceMotion ? 0 : ribbonOneX,
            y: shouldReduceMotion ? 0 : ribbonOneY,
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2,
            delay: 0.1,
            ease: cinematicEase,
          }}
        />

        <motion.path
          d="M-130 825C147 616 338 856 612 642C850 456 1076 224 1570 301"
          stroke="rgba(255,255,255,0.84)"
          strokeWidth="2"
          style={{
            x: shouldReduceMotion ? 0 : ribbonTwoX,
            y: shouldReduceMotion ? 0 : ribbonTwoY,
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.3,
            delay: 0.25,
            ease: cinematicEase,
          }}
        />

        <motion.path
          d="M-110 874C209 685 376 910 684 704C960 519 1154 382 1560 407"
          stroke="rgba(211,184,155,0.23)"
          strokeWidth="1.5"
          style={{
            x: shouldReduceMotion ? 0 : ribbonThreeX,
            y: shouldReduceMotion ? 0 : ribbonThreeY,
          }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 2.5,
            delay: 0.4,
            ease: cinematicEase,
          }}
        />
      </motion.svg>

      {/* Bottom atmosphere */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[32%]
          bg-gradient-to-t
          from-[#f3f6f7]
          via-[#f3f6f7]/52
          to-transparent
        "
      />

      {/* Soft vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_52%_45%,transparent_34%,rgba(118,138,148,0.04)_72%,rgba(73,87,94,0.09)_100%)]
        "
      />

      {/* Fine texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.028]
          mix-blend-multiply
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(39,52,58,0.55) 0 0.45px, transparent 0.55px)",
          backgroundSize: "4px 4px",
        }}
      />
    </motion.div>
  );
}
