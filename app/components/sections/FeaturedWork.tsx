"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3, CircleCheck, Sparkles } from "lucide-react";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    industry: "Professional Services",
    client: "Northstar Advisory",
    challenge: "Fragmented lead capture and an unclear path from interest to consultation.",
    solution: "A conversion-led web platform connected to an intelligent qualification and follow-up system.",
    technologies: ["Next.js", "AI Qualification", "CRM Automation"],
    metrics: [
      { value: 240, prefix: "+", suffix: "%", decimals: 0, label: "Lead Growth" },
      { value: 6.1, prefix: "", suffix: "×", decimals: 1, label: "ROAS" },
      { value: 38, prefix: "", suffix: "%", decimals: 0, label: "Conversion Lift" },
    ],
    featured: true,
  },
  {
    industry: "Direct-to-Consumer",
    client: "Aperture Goods",
    challenge: "Acquisition spend was scaling faster than profitable customer growth.",
    solution: "A unified campaign, creative, and revenue intelligence system built around live demand signals.",
    technologies: ["Creative AI", "Lifecycle CRM", "Attribution"],
    metrics: [
      { value: 6, prefix: "", suffix: "×", decimals: 0, label: "ROAS" },
      { value: 71, prefix: "+", suffix: "%", decimals: 0, label: "Repeat Revenue" },
    ],
    featured: false,
  },
  {
    industry: "Business Operations",
    client: "Meridian Systems",
    challenge: "Manual handoffs obscured delivery status and slowed critical decisions.",
    solution: "An automated operating layer that connects intake, execution, reporting, and leadership insight.",
    technologies: ["Workflow AI", "Data Layer", "Executive BI"],
    metrics: [
      { value: 68, prefix: "", suffix: "%", decimals: 0, label: "Less Admin" },
      { value: 2.4, prefix: "", suffix: "×", decimals: 1, label: "Delivery Speed" },
    ],
    featured: false,
  },
] as const;

interface MetricValueProps {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  reduceMotion: boolean;
}

function MetricValue({ value, prefix, suffix, decimals, reduceMotion }: MetricValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.25,
      ease,
      onUpdate: setDisplayValue,
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <p
      ref={ref}
      className="text-[clamp(1.35rem,2.5vw,2.5rem)] font-semibold tracking-[-0.05em] text-[#29363c]"
    >
      {prefix}
      {(reduceMotion ? value : displayValue).toFixed(decimals)}
      {suffix}
    </p>
  );
}

function ProductPreview({ featured = false }: { featured?: boolean }) {
  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-[1.75rem] border border-white/85 bg-white/38 p-4 shadow-[0_26px_70px_rgba(50,67,76,.11),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-[28px] sm:p-5">
      <div className="flex items-center justify-between border-b border-[#b8c2c6]/20 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#d9c39d]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#738087]">
            Growth overview
          </span>
        </div>
        <span className="rounded-full border border-white/80 bg-white/55 px-2.5 py-1 text-[9px] font-medium text-[#718087]">
          Live
        </span>
      </div>

      <div className={`grid gap-3 pt-4 ${featured ? "sm:grid-cols-[1.35fr_.65fr]" : "grid-cols-1"}`}>
        <div className="rounded-[1.2rem] border border-white/82 bg-white/52 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.95)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-[#7a878d]">Qualified demand</span>
            <BarChart3 aria-hidden="true" size={15} strokeWidth={1.5} className="text-[#c3a875]" />
          </div>
          <p className="mt-3 text-[clamp(1.8rem,4vw,3.5rem)] font-semibold tracking-[-0.055em] text-[#27343a]">
            18,420
          </p>
          <div className="mt-5 flex h-24 items-end gap-2">
            {[28, 44, 36, 58, 51, 72, 64, 88, 79, 96].map((height, index) => (
              <motion.span
                key={`${height}-${index}`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.04, ease }}
                className="flex-1 origin-bottom rounded-t-full bg-[linear-gradient(180deg,#d8c092,#a9c8d3)] opacity-75"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
          {["Automated follow-up", "Revenue intelligence"].map((label, index) => (
            <div key={label} className="rounded-[1.1rem] border border-white/80 bg-white/48 p-3.5">
              <CircleCheck aria-hidden="true" size={16} strokeWidth={1.5} className="text-[#b89a63]" />
              <p className="mt-4 text-[11px] font-medium leading-4 text-[#5c6a70]">{label}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dbe2e4]/70">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.12, ease }}
                  className="h-full origin-left rounded-full bg-[linear-gradient(90deg,#d8bf91,#9fc3ce)]"
                  style={{ width: index === 0 ? "82%" : "68%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="relative isolate min-h-[170vh] overflow-hidden bg-[#FCFCFA] py-28 sm:py-36 lg:py-44"
    >
      <Container className="relative z-10 max-w-[1500px]">
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease }}
          className="max-w-[940px]"
        >
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8a7756]">
            <Sparkles aria-hidden="true" size={14} strokeWidth={1.5} />
            Featured Success
          </div>
          <h2
            id="featured-work-heading"
            className="mt-7 text-[clamp(3.25rem,7vw,7.2rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-[#202b30]"
          >
            Growth Stories
            <br />
            That Speak for Themselves.
          </h2>
          <p className="mt-8 max-w-[720px] text-balance text-[17px] leading-[1.75] text-[#59676d] sm:text-[20px]">
            Every solution is engineered to produce measurable business outcomes.
          </p>
        </motion.header>

        <div className="mt-24 grid grid-cols-1 gap-8 lg:mt-36 lg:grid-cols-12 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.client}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : index * 0.12, ease }}
              whileHover={reduceMotion ? undefined : { y: -10 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.76),rgba(247,246,241,.5))] p-5 shadow-[0_28px_80px_rgba(44,61,69,.09),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-[30px] transition-[border-color,box-shadow] duration-500 hover:border-[#ead7b5] hover:shadow-[0_45px_110px_rgba(44,61,69,.14),inset_0_1px_0_rgba(255,255,255,1)] sm:p-7 ${
                project.featured
                  ? "lg:col-span-12 lg:grid lg:min-h-[720px] lg:grid-cols-[.82fr_1.18fr] lg:gap-10 lg:p-10"
                  : index === 1
                    ? "lg:col-span-5 lg:min-h-[720px] lg:p-8"
                    : "lg:col-span-7 lg:min-h-[640px] lg:self-end lg:p-8"
              }`}
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(222,194,145,.86),white,transparent)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className={project.featured ? "flex h-full flex-col justify-between" : ""}>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a7756]">{project.industry}</p>
                  <h3 className={`mt-4 font-semibold leading-[1] tracking-[-0.05em] text-[#263238] ${project.featured ? "text-[clamp(2.4rem,4vw,4.6rem)]" : "text-[clamp(2rem,3vw,3.2rem)]"}`}>
                    {project.client}
                  </h3>
                  <dl className="mt-8 grid gap-5 border-t border-[#aab7bc]/20 pt-7">
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#849197]">Challenge</dt>
                      <dd className="mt-2 text-[14px] leading-[1.65] text-[#58676d]">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#849197]">Solution</dt>
                      <dd className="mt-2 text-[14px] leading-[1.65] text-[#58676d]">{project.solution}</dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#849197]">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/90 bg-white/55 px-3 py-2 text-[10px] font-medium text-[#67767c] shadow-[inset_0_1px_0_white]">
                      {technology}
                    </span>
                  ))}
                  </div>
                </div>
              </div>

              <div className={`${project.featured ? "mt-10 lg:mt-0" : "mt-9"}`}>
                <ProductPreview featured={project.featured} />
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#849197]">
                  Results
                </p>
                <div className={`mt-3 grid gap-3 ${project.metrics.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                  {project.metrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
                      transition={{ duration: 0.3, ease }}
                      className="rounded-[1.15rem] border border-white/86 bg-white/48 p-3.5 shadow-[inset_0_1px_0_white] sm:p-4"
                    >
                      <MetricValue
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                        reduceMotion={reduceMotion}
                      />
                      <p className="mt-1 text-[9px] font-medium uppercase leading-4 tracking-[0.12em] text-[#7b898f] sm:text-[10px]">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4d626a]">
                View transformation
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.6} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
