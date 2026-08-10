"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = (shouldReduceMotion: boolean, delay = 0) => ({
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 28,
    scale: shouldReduceMotion ? 1 : 0.99,
  },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.22 },
  transition: {
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease,
  },
});

export default function BusinessGrowthJourney() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <div className="relative isolate overflow-hidden bg-[#edf3f5]">
      <section
        id="ecosystem"
        aria-labelledby="ecosystem-heading"
        className="relative py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-[1440px]">
            <motion.div
              {...reveal(shouldReduceMotion)}
              className="mx-auto max-w-[870px] text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#526a75]">
                Connected Growth Ecosystem
              </p>
              <h2
                id="ecosystem-heading"
                className="mt-5 text-balance text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#1f2a2f]"
              >
                One operating system.{" "}
                <span className="bg-[linear-gradient(100deg,#365b66,#5fa8b5_52%,#8d7352)] bg-clip-text text-transparent">
                  Every growth lever connected.
                </span>
              </h2>
              <p className="mx-auto mt-7 max-w-[690px] text-balance text-[17px] leading-[1.7] text-[#46565d] sm:text-[18px]">
                FINCHX connects strategy, experience, automation, acquisition,
                and intelligence into one business operating system—not a
                collection of disconnected services.
              </p>
            </motion.div>

            <motion.div
              {...reveal(shouldReduceMotion, 0.1)}
              className="relative mt-12 min-h-[540px] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/35 shadow-[0_42px_110px_rgba(38,73,92,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[28px] lg:min-h-[600px]"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -8, 0], rotate: [0, 0.35, 0] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 right-0 w-full lg:w-[72%]"
              >
                <Image
                  fill
                  src="/assets/strategy-consulting.png"
                  alt="Connected FINCHX business growth ecosystem"
                  sizes="(max-width: 1023px) 100vw, 72vw"
                  className="object-cover object-center"
                />
              </motion.div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(237,243,245,0.98)_0%,rgba(237,243,245,0.84)_25%,rgba(237,243,245,0.12)_58%,transparent_100%)]" />

              <div className="relative z-20 flex min-h-[540px] max-w-[410px] flex-col justify-end p-7 sm:p-10 lg:min-h-[600px] lg:justify-center lg:p-14">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5f7c88]">
                  System architecture
                </p>
                <p className="mt-4 text-[clamp(1.7rem,2.6vw,2.8rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#213138]">
                  Every module strengthens the next.
                </p>
                <p className="mt-5 text-[15px] leading-[1.7] text-[#475a62] sm:text-[16px]">
                  One connected foundation gives teams clearer signals, faster
                  execution, and fewer operational gaps.
                </p>
              </div>

              <svg
                aria-hidden="true"
                viewBox="0 0 900 520"
                className="pointer-events-none absolute inset-y-[10%] right-[2%] z-10 hidden h-[80%] w-[68%] lg:block"
                fill="none"
              >
                <motion.path
                  d="M70 330C205 330 190 150 340 150S490 360 620 292S705 115 830 115"
                  stroke="rgba(66,164,180,0.74)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="10 18"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { strokeDashoffset: [0, -56] }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    filter:
                      "drop-shadow(0 0 7px rgba(66,164,180,0.62))",
                  }}
                />
              </svg>

              {[
                [58, 28],
                [72, 42],
                [82, 25],
                [64, 66],
              ].map(([left, top], index) => (
                <motion.span
                  key={left + "-" + top}
                  aria-hidden="true"
                  className="absolute z-10 hidden h-3 w-3 rounded-full bg-[#62b4c1] shadow-[0_0_22px_rgba(71,176,192,0.86)] lg:block"
                  style={{ left: left + "%", top: top + "%" }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.35, 0.8],
                        }
                  }
                  transition={{
                    duration: 2.4,
                    delay: index * 0.42,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.span
                aria-hidden="true"
                className="absolute right-[29%] top-[48%] z-10 hidden h-5 w-5 rounded-full border border-white bg-[#d9b886] shadow-[0_0_0_12px_rgba(217,184,134,0.12),0_0_42px_rgba(217,184,134,0.72)] lg:block"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { scale: [0.9, 1.15, 0.9] }
                }
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="pipeline-heading"
        className="relative bg-[#e6eef1] py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="mx-auto max-w-[1440px]">
            <motion.div
              {...reveal(shouldReduceMotion)}
              className="max-w-[800px]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#58727e]">
                Growth Pipeline
              </p>
              <h2
                id="pipeline-heading"
                className="mt-5 text-balance text-[clamp(2.6rem,4.7vw,5rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#1f2a2f]"
              >
                Momentum you can see,{" "}
                <span className="text-[#528d99]">
                  from signal to revenue.
                </span>
              </h2>
            </motion.div>

            <motion.div
              {...reveal(shouldReduceMotion, 0.1)}
              className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/42 shadow-[0_36px_90px_rgba(30,59,77,0.13)]"
            >
              <div className="relative h-[400px] sm:h-[500px] lg:h-[560px]">
                <Image
                  fill
                  src="/assets/growth-marketing.png"
                  alt="FINCHX growth pipeline from traffic to revenue"
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

            </motion.div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="intelligence-heading"
        className="relative py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <motion.div {...reveal(shouldReduceMotion)}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#526a75]">
                Business Intelligence
              </p>
              <h2
                id="intelligence-heading"
                className="mt-5 text-balance text-[clamp(2.6rem,4.4vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.052em] text-[#1f2a2f]"
              >
                Decisions move faster when the{" "}
                <span className="text-[#568f9a]">
                  whole system can think.
                </span>
              </h2>
              <p className="mt-7 max-w-[560px] text-[17px] leading-[1.72] text-[#46565d]">
                FINCHX turns operational signals into a clear view of what is
                happening, why it matters, and what should happen next.
              </p>
            </motion.div>

            <motion.div
              {...reveal(shouldReduceMotion, 0.1)}
              className="relative min-h-[500px] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/38 shadow-[0_36px_92px_rgba(37,70,88,0.14)] sm:min-h-[560px]"
            >
              <Image
                fill
                src="/assets/business-intelligence.png"
                alt="AI-powered business intelligence system"
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-center"
              />

              {[
                [
                  "Live signal",
                  "Demand +18%",
                  "left-5 top-5 sm:left-8 sm:top-8",
                ],
                [
                  "Next action",
                  "Scale campaign",
                  "right-5 top-[42%] sm:right-8",
                ],
                [
                  "Forecast",
                  "Revenue on track",
                  "bottom-5 left-[12%] sm:bottom-8",
                ],
              ].map(([label, value, position], index) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.65,
                    delay: shouldReduceMotion ? 0 : 0.2 + index * 0.14,
                    ease,
                  }}
                  className={
                    "absolute " +
                    position +
                    " rounded-[1.25rem] border border-white/70 bg-white/65 px-4 py-3 shadow-[0_20px_48px_rgba(30,58,76,0.14)] backdrop-blur-[24px]"
                  }
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6e8792]">
                    {label}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold text-[#26383f] sm:text-[15px]">
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="process-heading"
        className="relative bg-[#e8f0f2] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
          <div>
            <div className="mx-auto max-w-[830px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#526a75]">
                The Journey
              </p>
              <h2
                id="process-heading"
                className="mt-5 text-balance text-[clamp(2.6rem,4.8vw,5.1rem)] font-semibold leading-[0.96] tracking-[-0.052em] text-[#1f2a2f]"
              >
                From first signal to{" "}
                <span className="text-[#568f9a]">
                  predictable growth.
                </span>
              </h2>
              <p className="mx-auto mt-7 max-w-[650px] text-balance text-[17px] leading-[1.72] text-[#46565d]">
                Watch each decision become a connected system, then a growth
                engine built to compound.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-[760px] flex-col items-center text-center">
              <p className="text-[17px] leading-[1.72] text-[#46565d]">
                Every milestone strengthens the next, creating one accountable
                path from insight to sustainable growth.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-white/75 bg-white/68 px-6 text-[13px] font-semibold text-[#29434d] shadow-[0_16px_38px_rgba(44,76,94,.12)] backdrop-blur-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69aabd] focus-visible:ring-offset-2"
              >
                Build your growth journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
