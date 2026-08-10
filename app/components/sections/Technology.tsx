"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const technologies = [
  { name: "OpenAI", logo: "/assets/logos/technology/openai.svg", logoClass: "h-[52px] w-[52px]" },
  { name: "Google", logo: "/assets/logos/technology/google.svg", logoClass: "h-auto w-[60px]" },
  { name: "Anthropic", logo: "/assets/logos/technology/anthropic.svg", logoClass: "h-[50px] w-[50px]" },
  { name: "Next.js", logo: "/assets/logos/technology/nextjs.svg", logoClass: "h-[55px] w-[55px]" },
  { name: "React", logo: "/assets/logos/technology/react.svg", logoClass: "h-[58px] w-[58px]" },
  { name: "Vercel", logo: "/assets/logos/technology/vercel.svg", logoClass: "h-auto w-[60px]" },
  { name: "TypeScript", logo: "/assets/logos/technology/typescript.svg", logoClass: "h-[54px] w-[54px]" },
  { name: "Supabase", logo: "/assets/logos/technology/supabase.svg", logoClass: "h-[56px] w-[56px]" },
  { name: "Cloudflare", logo: "/assets/logos/technology/cloudflare.svg", logoClass: "h-auto w-[68px]" },
  { name: "Framer Motion", logo: "/assets/logos/technology/framer-motion.svg", logoClass: "h-[56px] w-[56px]" },
] as const;

export default function Technology() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <section id="technology" className="relative bg-[#f7f7f4] py-16 sm:py-20 lg:py-24" aria-labelledby="technology-heading">
      <Container className="max-w-[1320px]">
        <motion.header initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .75, ease }} className="mx-auto max-w-[900px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#927d59]">Technology</p>
          <h2 id="technology-heading" className="mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[.94] tracking-[-.06em] text-[#202b30]">Powered By<br />The World&apos;s Best AI</h2>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .2 }}
          transition={{ duration: reduceMotion ? 0 : .75, delay: reduceMotion ? 0 : .12, ease }}
          className="relative mx-auto mt-14 max-w-[1120px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.72),rgba(244,243,239,.48))] px-5 py-8 shadow-[0_32px_90px_rgba(48,60,66,.1),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-[32px] sm:px-10 sm:py-10 lg:mt-16 lg:px-14"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="grid grid-cols-2 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-10">
            {technologies.map(({ name, logo, logoClass }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : index * .06, ease }}
                whileHover={reduceMotion ? undefined : { y: -6, transition: { type: "spring", stiffness: 360, damping: 26, mass: .7 } }}
                className="group flex w-full max-w-[126px] flex-col items-center gap-3"
              >
                <div className="relative flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-[20px] border border-white/85 bg-[linear-gradient(145deg,rgba(255,255,255,.78),rgba(241,240,236,.5))] shadow-[0_12px_28px_rgba(51,62,68,.08),inset_0_1px_0_rgba(255,255,255,.98),inset_0_-1px_0_rgba(190,178,151,.12)] backdrop-blur-[22px] transition-[border-color,background-color,box-shadow] duration-300 group-hover:border-white group-hover:bg-white/90 group-hover:shadow-[0_18px_38px_rgba(51,62,68,.13),0_10px_28px_rgba(208,184,137,.12),inset_0_1px_0_white]">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-x-3 -bottom-5 h-10 rounded-full bg-[radial-gradient(ellipse,rgba(213,190,145,.24),transparent_68%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={96}
                    height={96}
                    className={`${logoClass} relative z-10 object-contain transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]`}
                  />
                </div>
                <span className="text-center text-[13px] font-medium tracking-[-.01em] text-[#364249]">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
