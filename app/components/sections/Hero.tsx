"use client";

import { useMotionValue, useReducedMotion } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";
import Navbar from "../layout/Navbar";
import HeroBackground from "../background/HeroBackground";
import HeroContent from "../hero/HeroContent";
import HeroSculpture from "../hero/HeroSculpture";

export default function Hero() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative h-screen min-h-[860px] overflow-hidden lg:min-h-[960px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <HeroBackground pointerX={pointerX} pointerY={pointerY} />
      </div>

      {/* Navbar belongs ONLY to Hero */}
      <Navbar />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-[1700px]
          items-center
          justify-between

          px-10
          xl:px-20

          pt-36
          lg:pt-44

          pb-48
        "
      >
        {/* Left */}
        <div
          className="
            w-full
            max-w-[700px]

            -translate-y-[72px]
            lg:-translate-y-[64px]
            xl:-translate-y-[56px]

            will-change-transform
          "
        >
          <HeroContent pointerX={pointerX} pointerY={pointerY} />
        </div>

        {/* Right */}
        <div className="flex w-[48%] items-center justify-end">
          <HeroSculpture pointerX={pointerX} pointerY={pointerY} />
        </div>
      </div>

      {/* Soft transition into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F7F8FA]" />
    </section>
  );
}
