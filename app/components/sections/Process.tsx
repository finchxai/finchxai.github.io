"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Blocks,
  Compass,
  DraftingCompass,
  Rocket,
  Scaling,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

interface ProcessStage {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  position: string;
}

const stages: readonly ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify the business, customer, constraints, and commercial opportunity.",
    icon: Compass,
    position: "lg:left-[1%] lg:top-[44%]",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Turn insight into a focused growth system with measurable priorities.",
    icon: Sparkles,
    position: "lg:left-[17.8%] lg:top-[18%]",
  },
  {
    number: "03",
    title: "Design",
    description: "Shape the customer experience, operating model, and conversion architecture.",
    icon: DraftingCompass,
    position: "lg:left-[34.6%] lg:top-[43%]",
  },
  {
    number: "04",
    title: "Build",
    description: "Engineer the connected technology, automation, and intelligence layer.",
    icon: Blocks,
    position: "lg:left-[51.4%] lg:top-[60%]",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy with precision, validate real signals, and create early momentum.",
    icon: Rocket,
    position: "lg:left-[68.2%] lg:top-[39%]",
  },
  {
    number: "06",
    title: "Scale",
    description: "Compound what works through continuous optimization and operational leverage.",
    icon: Scaling,
    position: "lg:left-[85%] lg:top-[15%]",
  },
] as const;

export default function Process() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative isolate overflow-hidden bg-[#f8f8f5] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.24] [background-image:linear-gradient(rgba(105,122,129,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(105,122,129,.1)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-[28%] h-[32rem] rounded-[50%] bg-white/45 blur-[100px]"
      />

      <Container className="relative z-10 max-w-[1500px]">
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          className="max-w-[980px]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b7858]">
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-6 text-[clamp(3.2rem,7vw,7.1rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#202b30]"
          >
            How We Build Growth
          </h2>
        </motion.header>

        <div className="relative mt-20 lg:mt-28 lg:h-[760px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 1500 760"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block"
          >
            <defs>
              <filter id="process-path-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="9" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="process-path" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#e5d4b4" stopOpacity="0.45" />
                <stop offset="0.5" stopColor="#c9aa73" stopOpacity="0.72" />
                <stop offset="1" stopColor="#f2e5ca" stopOpacity="0.48" />
              </linearGradient>
            </defs>

            <path
              d="M 118 424 C 205 424 230 222 378 222 S 520 416 630 416 S 760 548 882 548 S 1010 387 1134 387 S 1270 199 1390 199"
              fill="none"
              stroke="rgba(255,255,255,.82)"
              strokeWidth="28"
              strokeLinecap="round"
              filter="url(#process-path-glow)"
            />
            <path
              d="M 118 424 C 205 424 230 222 378 222 S 520 416 630 416 S 760 548 882 548 S 1010 387 1134 387 S 1270 199 1390 199"
              fill="none"
              stroke="url(#process-path)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {!reduceMotion && (
              <motion.path
                d="M 118 424 C 205 424 230 222 378 222 S 520 416 630 416 S 760 548 882 548 S 1010 387 1134 387 S 1270 199 1390 199"
                fill="none"
                stroke="#fff8e9"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#process-path-glow)"
                strokeDasharray="4 185"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -1134 }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "linear" }}
              />
            )}
          </svg>

          <div
            aria-hidden="true"
            className="absolute bottom-6 left-8 top-6 w-7 rounded-full border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,.8),rgba(218,190,139,.38),rgba(255,255,255,.78))] shadow-[0_0_34px_rgba(204,174,117,.16),inset_0_1px_0_white] lg:hidden"
          />

          <div className="relative grid gap-7 pl-14 lg:block lg:h-full lg:pl-0">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={stage.number}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : index * 0.1, ease }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          boxShadow: "0 34px 80px rgba(57,72,79,.14), 0 0 30px rgba(210,181,126,.12)",
                          borderColor: "rgba(235,216,181,.92)",
                        }
                  }
                  className={`${stage.position} group relative min-h-[190px] overflow-hidden rounded-[1.65rem] border border-white/82 bg-[linear-gradient(145deg,rgba(255,255,255,.78),rgba(247,245,239,.52))] p-6 shadow-[0_22px_58px_rgba(57,72,79,.09),inset_0_1px_0_white,inset_0_-1px_0_rgba(206,179,129,.13)] backdrop-blur-[30px] transform-gpu transition-[border-color,box-shadow] duration-300 lg:absolute lg:w-[14%] lg:min-h-[180px] lg:p-5`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(218,190,138,.8),white,transparent)] opacity-65 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-[#a0875b]">
                      {stage.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-white/90 bg-white/52 text-[#8a7550] shadow-[inset_0_1px_0_white,0_8px_20px_rgba(75,85,87,.06)]">
                      <Icon aria-hidden="true" size={18} strokeWidth={1.45} />
                    </span>
                  </div>
                  <h3 className="mt-6 text-[clamp(1.6rem,2.2vw,2.3rem)] font-semibold leading-none tracking-[-0.045em] text-[#29353a]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.65] text-[#66757b] lg:text-[11px] xl:text-[12px]">
                    {stage.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
