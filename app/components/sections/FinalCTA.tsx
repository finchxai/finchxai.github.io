"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-[#FCFCFA] py-20 sm:py-24 lg:py-28"
    >
      <Container className="relative z-10 max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
          className="mx-auto flex max-w-[1300px] flex-col items-center text-center"
        >
          <h2
            id="final-cta-heading"
            className="text-balance text-[clamp(3.6rem,9vw,9.2rem)] font-semibold leading-[0.88] tracking-[-0.072em] text-[#202b30]"
          >
            Ready To Build
            <br />
            Your Next Growth Engine?
          </h2>

          <p className="mt-10 max-w-[760px] text-balance text-[17px] leading-[1.75] text-[#627177] sm:mt-12 sm:text-[20px]">
            Let&apos;s discuss your business goals and build an AI system that drives measurable growth.
          </p>

          <div className="relative mt-14 sm:mt-16">
            <motion.span
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [0.28, 0.48, 0.28], scale: [0.92, 1.08, 0.92] }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ddc699]/25 blur-[48px]"
            />

            <motion.a
              href="mailto:hello@finchx.ai?subject=Strategy%20Call"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.35, ease }}
              className="group relative inline-flex min-h-16 items-center justify-center rounded-full border border-white/90 bg-[linear-gradient(145deg,rgba(255,255,255,.84),rgba(247,243,235,.62))] px-9 text-[14px] font-semibold tracking-[-0.01em] text-[#34454c] shadow-[0_22px_58px_rgba(54,69,76,.11),inset_0_1px_0_white,inset_0_-1px_0_rgba(205,177,125,.16)] backdrop-blur-[28px] transition-[border-color,background-color,box-shadow,color] duration-500 hover:border-[#dfc79c] hover:bg-[#ead8b6]/72 hover:text-[#5d4b2f] hover:shadow-[0_28px_70px_rgba(91,72,39,.14),inset_0_1px_0_rgba(255,255,255,.96)] sm:min-h-[72px] sm:px-12 sm:text-[16px]"
            >
              Book a Strategy Call
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
