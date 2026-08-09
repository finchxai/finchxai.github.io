"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const quotes = [
  ["FINCHX helped us stop treating growth as a collection of campaigns. We now have one system that gives the team clarity and compounds every month.", "Elena Morgan", "CEO, Northstar Advisory", "Professional Services"],
  ["The difference was commercial thinking. Every design and automation decision was tied to how the business actually acquires, serves, and retains customers.", "Marcus Chen", "Founder, Aperture Goods", "Consumer Technology"],
  ["They translated a complicated operation into something our leadership team can see, understand, and improve. The impact was immediate.", "Amara Lewis", "CEO, Meridian Systems", "Business Operations"],
] as const;

export default function Testimonials() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <section className="bg-[#FCFCFA] py-32 sm:py-44 lg:py-56" aria-labelledby="testimonials-heading">
      <Container className="max-w-[1500px]">
        <motion.h2 id="testimonials-heading" initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .75, ease }} className="text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[.92] tracking-[-.065em] text-[#202b30]">Trusted By Leaders</motion.h2>
        <div className="mt-24 grid gap-8 lg:mt-36 lg:grid-cols-12 lg:gap-10">
          {quotes.map(([quote, name, company, industry], index) => (
            <motion.figure key={name} initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduceMotion ? 0 : .72, delay: reduceMotion ? 0 : index * .1, ease }} whileHover={reduceMotion ? undefined : { y: -5 }} className={`group relative overflow-hidden rounded-[1.9rem] border border-white/84 bg-[linear-gradient(145deg,rgba(255,255,255,.8),rgba(247,245,239,.5))] p-8 shadow-[0_25px_68px_rgba(52,67,74,.08),inset_0_1px_0_white] backdrop-blur-[30px] transition-[border-color,box-shadow,background-color] duration-500 hover:border-[#ead8b8] hover:shadow-[0_38px_92px_rgba(52,67,74,.12),inset_0_1px_0_white] sm:p-10 ${index === 0 ? "lg:col-span-7 lg:min-h-[540px]" : index === 1 ? "lg:col-span-5 lg:mt-24" : "lg:col-span-8 lg:col-start-4 lg:mt-4"}`}>
              <span aria-hidden="true" className="absolute right-7 top-2 font-serif text-[9rem] leading-none text-[#d9c49f]/20 sm:text-[12rem]">“</span>
              <div className="relative flex h-full flex-col">
                <p aria-label="Five stars" className="text-[13px] tracking-[.22em] text-[#b99a61]">★★★★★</p>
                <blockquote className="mt-10 max-w-[850px] text-[clamp(1.55rem,3vw,3.25rem)] font-medium leading-[1.2] tracking-[-.04em] text-[#2c393f]">“{quote}”</blockquote>
                <figcaption className="mt-auto pt-14">
                  <p className="text-[14px] font-semibold text-[#35474e]">{name}</p>
                  <p className="mt-1 text-[12px] text-[#6b797f]">{company}</p>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.16em] text-[#9a835c]">{industry}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
