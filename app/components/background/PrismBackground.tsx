"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type {
  CSSProperties,
  PointerEvent as ReactPointerEvent,
  ReactNode,
} from "react";

type PrismBackgroundTone = "dark" | "light";

interface PrismBackgroundProps {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  tone?: PrismBackgroundTone;
  interactive?: boolean;
  showGrid?: boolean;
  showNoise?: boolean;
}

const cn = (...classes: Array<string | undefined | null | false>): string =>
  classes.filter(Boolean).join(" ");

const springConfig = {
  stiffness: 70,
  damping: 24,
  mass: 0.8,
};

export default function PrismBackground({
  children,
  className,
  contentClassName,
  tone = "dark",
  interactive = true,
  showGrid = true,
  showNoise = true,
}: PrismBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const glowOneX = useTransform(smoothX, [0, 1], ["-12%", "12%"]);
  const glowOneY = useTransform(smoothY, [0, 1], ["-10%", "10%"]);

  const glowTwoX = useTransform(smoothX, [0, 1], ["8%", "-8%"]);
  const glowTwoY = useTransform(smoothY, [0, 1], ["6%", "-6%"]);

  const beamX = useTransform(smoothX, [0, 1], ["-4%", "4%"]);
  const beamRotation = useTransform(smoothX, [0, 1], [-7, 7]);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ): void => {
    if (!interactive || shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = Math.min(
      Math.max((event.clientX - bounds.left) / bounds.width, 0),
      1,
    );

    const y = Math.min(
      Math.max((event.clientY - bounds.top) / bounds.height, 0),
      1,
    );

    pointerX.set(x);
    pointerY.set(y);
  };

  const handlePointerLeave = (): void => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const gridStyle: CSSProperties = {
    backgroundImage: isDark
      ? `
        linear-gradient(
          rgba(255, 255, 255, 0.045) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.045) 1px,
          transparent 1px
        )
      `
      : `
        linear-gradient(
          rgba(15, 23, 42, 0.055) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(15, 23, 42, 0.055) 1px,
          transparent 1px
        )
      `,
    backgroundSize: "72px 72px",
    maskImage:
      "radial-gradient(circle at center, black 0%, black 42%, transparent 84%)",
    WebkitMaskImage:
      "radial-gradient(circle at center, black 0%, black 42%, transparent 84%)",
  };

  const noiseStyle: CSSProperties = {
    backgroundImage: isDark
      ? `
        radial-gradient(
          circle,
          rgba(255, 255, 255, 0.32) 0 0.45px,
          transparent 0.55px
        )
      `
      : `
        radial-gradient(
          circle,
          rgba(15, 23, 42, 0.24) 0 0.45px,
          transparent 0.55px
        )
      `,
    backgroundSize: "4px 4px",
  };

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        isDark ? "bg-[#050608] text-white" : "bg-[#f6f7f9] text-[#090b10]",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[linear-gradient(180deg,#050608_0%,#080a0f_52%,#050608_100%)]"
              : "bg-[linear-gradient(180deg,#fafafa_0%,#f1f3f6_52%,#f8f8f8_100%)]",
          )}
        />

        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[38rem]",
            isDark
              ? "bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.13),transparent_62%)]"
              : "bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.95),transparent_66%)]",
          )}
        />

        <motion.div
          className={cn(
            "absolute left-[8%] top-[4%] h-[34rem] w-[34rem] rounded-full blur-[110px]",
            isDark ? "bg-blue-500/15" : "bg-blue-400/20",
          )}
          style={{
            x: shouldReduceMotion ? 0 : glowOneX,
            y: shouldReduceMotion ? 0 : glowOneY,
          }}
        />

        <motion.div
          className={cn(
            "absolute right-[-8%] top-[18%] h-[32rem] w-[32rem] rounded-full blur-[120px]",
            isDark ? "bg-violet-500/15" : "bg-violet-400/20",
          )}
          style={{
            x: shouldReduceMotion ? 0 : glowTwoX,
            y: shouldReduceMotion ? 0 : glowTwoY,
          }}
        />

        <motion.div
          className={cn(
            "absolute left-1/2 top-[-18rem] h-[52rem] w-[13rem] -translate-x-1/2 rounded-full blur-[72px]",
            isDark ? "bg-white/[0.055]" : "bg-white/75",
          )}
          style={{
            x: shouldReduceMotion ? 0 : beamX,
            rotate: shouldReduceMotion ? -4 : beamRotation,
          }}
        />

        <div
          className={cn(
            "absolute inset-x-[8%] top-[8rem] h-px",
            isDark
              ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
              : "bg-gradient-to-r from-transparent via-slate-900/10 to-transparent",
          )}
        />

        <div
          className={cn(
            "absolute inset-x-[18%] top-[8rem] h-[26rem] rounded-[50%] blur-3xl",
            isDark ? "bg-white/[0.018]" : "bg-white/55",
          )}
        />

        {showGrid && (
          <div className="absolute inset-0 opacity-70" style={gridStyle} />
        )}

        <div
          className={cn(
            "absolute inset-0",
            isDark
              ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,6,8,0.14)_55%,rgba(5,6,8,0.88)_100%)]"
              : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(246,247,249,0.18)_58%,rgba(246,247,249,0.86)_100%)]",
          )}
        />

        {showNoise && (
          <div
            className={cn(
              "absolute inset-0",
              isDark
                ? "opacity-[0.045] mix-blend-soft-light"
                : "opacity-[0.035] mix-blend-multiply",
            )}
            style={noiseStyle}
          />
        )}

        <div
          className={cn(
            "absolute inset-0 ring-1 ring-inset",
            isDark ? "ring-white/[0.035]" : "ring-slate-900/[0.045]",
          )}
        />
      </div>

      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}
