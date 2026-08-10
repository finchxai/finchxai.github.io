"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const pillars = [
  ["01", "Strategy First", "Every engagement begins with the commercial objective, not a predetermined deliverable.", "We clarify the highest-leverage problem before deciding what should be designed, automated, or built."],
  ["02", "Business Growth Focused", "Beautiful execution matters only when it moves the business forward.", "Every system is connected to clear outcomes, useful signals, and measurable progress."],
  ["03", "AI Driven", "AI becomes operational leverage—not a decorative feature.", "We apply intelligence where it improves decisions, customer experience, speed, and consistency."],
  ["04", "Long-Term Partnership", "Systems improve when the people behind them stay close to the business.", "We remain accountable beyond launch, refining the engine as priorities and opportunities evolve."],
] as const;

export default function WhyFinchx() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <section id="about" className="bg-[#FCFCFA] py-20 sm:py-24 lg:py-28" aria-labelledby="why-finchx-heading">
      <Container className="max-w-[1500px]">
        <motion.h2 id="why-finchx-heading" initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.75, ease }} className="max-w-[1080px] text-[clamp(3.1rem,7vw,7.2rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#202b30]">
          Why Businesses Choose FINCHX
        </motion.h2>
        <div className="mt-24 grid gap-7 lg:mt-36 lg:grid-cols-12 lg:gap-9">
          {pillars.map(([number, title, summary, detail], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: reduceMotion ? 0 : .7, delay: reduceMotion ? 0 : index * .09, ease }} whileHover={reduceMotion ? undefined : { y: -7 }} className={`group overflow-hidden rounded-[1.8rem] border border-white/85 bg-[linear-gradient(145deg,rgba(255,255,255,.82),rgba(247,245,239,.48))] p-7 shadow-[0_24px_64px_rgba(51,67,75,.08),inset_0_1px_0_white] backdrop-blur-[30px] transition-[border-color,box-shadow] duration-500 hover:border-[#ead8b7] hover:shadow-[0_38px_90px_rgba(51,67,75,.13),inset_0_1px_0_white] sm:p-9 ${index === 0 ? "lg:col-span-7 lg:min-h-[440px]" : index === 1 ? "lg:col-span-5 lg:mt-20" : index === 2 ? "lg:col-span-4 lg:ml-12" : "lg:col-span-7 lg:mt-12"}`}>
              <p className="text-[11px] font-semibold tracking-[.18em] text-[#a0875b]">{number}</p>
              <h3 className="mt-10 max-w-[650px] text-[clamp(2.1rem,4vw,4.7rem)] font-semibold leading-[.98] tracking-[-.055em] text-[#29353a]">{title}</h3>
              <p className="mt-6 max-w-[570px] text-[15px] leading-[1.7] text-[#66747a] sm:text-[17px]">{summary}</p>
              <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:mt-6 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:mt-6 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                <p tabIndex={0} className="overflow-hidden border-t border-[#b3bec2]/20 pt-5 text-[13px] leading-[1.7] text-[#758187] outline-none">{detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
