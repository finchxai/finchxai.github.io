"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Clapperboard,
  Megaphone,
  MonitorCog,
  Shapes,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

interface Capability {
  title: string;
  description: string;
  features: readonly [string, string, string];
  icon: LucideIcon;
  placement: string;
  primary?: boolean;
}

const capabilities: readonly Capability[] = [
  {
    title: "AI Websites",
    description:
      "Intelligent digital experiences engineered to convert, learn, and grow with your business.",
    features: ["Adaptive UX", "Conversion architecture", "Intelligent content"],
    icon: MonitorCog,
    placement: "lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1",
    primary: true,
  },
  {
    title: "AI Marketing",
    description:
      "Connected acquisition systems that turn clear signals into sustained customer demand.",
    features: ["Paid acquisition", "Lifecycle campaigns", "Performance intelligence"],
    icon: Megaphone,
    placement: "lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-10",
  },
  {
    title: "AI Automation",
    description:
      "Purpose-built workflows that remove repetition and create dependable operational leverage.",
    features: ["Workflow design", "CRM integration", "AI operations"],
    icon: Workflow,
    placement: "lg:col-span-5 lg:col-start-7 lg:row-start-2",
  },
  {
    title: "UGC Creative",
    description:
      "Platform-native creative systems designed to earn attention and strengthen conversion.",
    features: ["Creative concepts", "Content production", "Channel distribution"],
    icon: Clapperboard,
    placement: "lg:col-span-4 lg:col-start-2 lg:row-start-3 lg:mt-12",
  },
  {
    title: "Brand Systems",
    description:
      "A coherent visual and verbal foundation that keeps every customer touchpoint unmistakably yours.",
    features: ["Visual identity", "Brand messaging", "Usage systems"],
    icon: Shapes,
    placement: "lg:col-span-4 lg:col-start-6 lg:row-start-3",
  },
  {
    title: "Growth Consulting",
    description:
      "Focused strategic direction that connects priorities, execution, and measurable commercial progress.",
    features: ["Growth roadmap", "Operating model", "Measurement plan"],
    icon: ChartNoAxesCombined,
    placement: "lg:col-span-4 lg:col-start-9 lg:row-start-4 lg:-mt-8",
  },
] as const;

export default function Capabilities() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative isolate overflow-hidden bg-[#f4f6f5] py-28 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-7rem] top-[18%] h-72 w-72 rounded-full border border-white/70 bg-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_32px_90px_rgba(58,78,88,.05)] backdrop-blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[9%] right-[-5rem] h-80 w-80 rounded-full border border-white/65 bg-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,.86),0_28px_80px_rgba(58,78,88,.05)] backdrop-blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[43%] h-px bg-[linear-gradient(90deg,transparent,rgba(126,145,153,.12)_22%,rgba(126,145,153,.12)_78%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[27%] left-[17%] h-[28rem] w-px bg-[linear-gradient(180deg,transparent,rgba(126,145,153,.1),transparent)]"
      />

      <Container className="relative z-10 max-w-[1500px]">
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
          className="max-w-[850px]"
        >
          <h2
            id="capabilities-heading"
            className="text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#202b30]"
          >
            Capabilities
          </h2>
          <p className="mt-7 max-w-[650px] text-balance text-[18px] leading-[1.7] text-[#53636a] sm:text-[20px]">
            Everything your business needs to grow under one partner.
          </p>
        </motion.header>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-28 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.68,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.02,
                        rotate: index % 2 === 0 ? 0.35 : -0.35,
                        boxShadow: "0 38px 90px rgba(45,68,80,.16)",
                        borderColor: "rgba(255,255,255,.94)",
                      }
                }
                className={`${capability.placement} group relative overflow-hidden rounded-[1.7rem] border border-white/78 bg-[linear-gradient(145deg,rgba(255,255,255,.7),rgba(249,248,244,.4))] p-6 shadow-[0_22px_58px_rgba(45,68,80,.09),inset_0_1px_0_rgba(255,255,255,.98),inset_0_-1px_0_rgba(213,187,139,.14)] backdrop-blur-[32px] transform-gpu sm:p-7 ${
                  capability.primary ? "lg:min-h-[620px] lg:p-10" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(229,207,166,.7),rgba(255,255,255,.96),transparent)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/28 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
                />

                <div
                  className={`relative flex flex-col ${
                    capability.primary
                      ? "min-h-[400px] sm:min-h-[450px] lg:min-h-[540px]"
                      : "min-h-[350px] sm:min-h-[370px]"
                  }`}
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.05rem] border border-white/92 bg-[linear-gradient(145deg,rgba(255,255,255,.84),rgba(243,240,232,.48))] text-[#627983] shadow-[0_12px_28px_rgba(62,84,95,.09),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(216,192,150,.18)]">
                    <Icon aria-hidden="true" size={25} strokeWidth={1.45} />
                  </span>

                  <h3
                    className={`mt-7 font-semibold leading-[1.01] tracking-[-0.05em] text-[#263238] ${
                      capability.primary
                        ? "text-[clamp(2.25rem,4vw,4.25rem)] lg:max-w-[560px]"
                        : "text-[clamp(1.5rem,2vw,2rem)]"
                    }`}
                  >
                    {capability.title}
                  </h3>
                  <p
                    className={`mt-3 leading-[1.65] text-[#596970] ${
                      capability.primary
                        ? "max-w-[570px] text-[16px] sm:text-[18px]"
                        : "text-[14px] sm:text-[15px]"
                    }`}
                  >
                    {capability.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2.5 border-t border-white/72 pt-5">
                    {capability.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-2 rounded-full border border-white/82 bg-white/46 px-3 py-2 text-[11px] font-medium tracking-[0.015em] text-[#5c6d74] shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_7px_18px_rgba(66,85,94,.05)] backdrop-blur-xl sm:text-[12px]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full border border-[#d5bf96]/75 bg-[#e8d6b4]/75 shadow-[0_0_8px_rgba(207,176,119,.2)]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex w-fit items-center gap-3 pt-7 text-[13px] font-semibold tracking-[0.04em] text-[#405861]"
                  >
                    Learn More
                    <ArrowUpRight
                      aria-hidden="true"
                      size={17}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
