"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const faqs = [
  ["What does FINCHX actually build?", "We build connected growth systems: websites, automation, marketing, content, intelligence, and the operating infrastructure that makes them work together."],
  ["How do you decide where to begin?", "Every engagement starts with the business objective. We identify the highest-leverage constraint, define measurable outcomes, and sequence the right systems around that priority."],
  ["Do you work with existing tools and teams?", "Yes. We can strengthen an existing stack, replace weak links, and work alongside internal teams or specialist partners without creating unnecessary disruption."],
  ["How is AI used in an engagement?", "AI is applied where it creates practical leverage—better decisions, faster execution, more relevant customer experiences, and more dependable operations. It is never added simply for novelty."],
  ["How long does a typical project take?", "Timing depends on complexity and scope. Focused systems can launch in weeks, while larger connected ecosystems are delivered in deliberate phases with useful outcomes at each stage."],
  ["What happens after launch?", "We measure real performance, improve what matters, and help the system evolve with the business. FINCHX is designed to be a long-term growth partner, not a one-time vendor."],
] as const;

export default function FAQ() {
  const reduceMotion = Boolean(useReducedMotion());
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden bg-[#f8f8f5] py-32 sm:py-44 lg:py-56">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[42%] h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-white/55 blur-[120px]" />
      <Container className="relative z-10 max-w-[1500px]">
        <motion.h2 id="faq-heading" initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .75, ease }} className="max-w-[1100px] text-[clamp(3.1rem,7vw,7.2rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#202b30]">
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-24 grid gap-5 lg:ml-auto lg:mt-36 lg:max-w-[1080px] lg:gap-6">
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <motion.article key={question} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : index * .06, ease }} animate={{ boxShadow: isOpen ? "0 30px 78px rgba(55,70,77,.12), 0 0 55px rgba(210,187,145,.08), inset 0 1px 0 rgba(255,255,255,1)" : "0 18px 48px rgba(55,70,77,.065), inset 0 1px 0 rgba(255,255,255,1)" }} className={`overflow-hidden rounded-[1.55rem] border bg-[linear-gradient(145deg,rgba(255,255,255,.78),rgba(247,245,239,.48))] backdrop-blur-[28px] transition-colors duration-500 ${isOpen ? "border-[#ead9ba]/80" : "border-white/80"}`}>
                <h3>
                  <button id={triggerId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-8 px-6 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#ceb887]/55 sm:px-9 sm:py-9">
                    <span className="text-[clamp(1.15rem,2.2vw,1.75rem)] font-semibold leading-[1.25] tracking-[-.035em] text-[#2b383e]">{question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "rgba(232,216,185,.48)" : "rgba(255,255,255,.52)" }} transition={{ duration: reduceMotion ? 0 : .35, ease }} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/88 text-[#7e6c4d] shadow-[inset_0_1px_0_white,0_8px_20px_rgba(65,77,81,.06)]">
                      <ChevronDown aria-hidden="true" size={18} strokeWidth={1.6} />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={panelId} role="region" aria-labelledby={triggerId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: reduceMotion ? 0 : .45, ease }, opacity: { duration: reduceMotion ? 0 : .3 } }}>
                      <p className="max-w-[850px] px-6 pb-8 text-[15px] leading-[1.8] text-[#65747a] sm:px-9 sm:pb-10 sm:text-[17px]">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
