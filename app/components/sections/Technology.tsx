"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const technologies = [
  { name: "OpenAI", logo: "/assets/logos/technology/openai.svg", position: "lg:left-[5%] lg:top-[18%] lg:w-[20%]" },
  { name: "Anthropic", logo: "/assets/logos/technology/anthropic.svg", position: "lg:left-[31%] lg:top-[3%] lg:w-[22%]" },
  { name: "Google", logo: "/assets/logos/technology/google.svg", position: "lg:left-[62%] lg:top-[14%] lg:w-[16%]" },
  { name: "Vercel", logo: "/assets/logos/technology/vercel.svg", position: "lg:left-[79%] lg:top-[34%] lg:w-[17%]" },
  { name: "Next.js", logo: "/assets/logos/technology/nextjs.svg", position: "lg:left-[12%] lg:top-[56%] lg:w-[17%]" },
  { name: "React", logo: "/assets/logos/technology/react.svg", position: "lg:left-[36%] lg:top-[42%] lg:w-[15%]" },
  { name: "TypeScript", logo: "/assets/logos/technology/typescript.svg", position: "lg:left-[57%] lg:top-[58%] lg:w-[21%]" },
  { name: "Supabase", logo: "/assets/logos/technology/supabase.svg", position: "lg:left-[28%] lg:top-[76%] lg:w-[19%]" },
  { name: "Cloudflare", logo: "/assets/logos/technology/cloudflare.svg", position: "lg:left-[4%] lg:top-[84%] lg:w-[20%]" },
  { name: "Framer Motion", logo: "/assets/logos/technology/framer-motion.svg", position: "lg:left-[71%] lg:top-[82%] lg:w-[25%]" },
] as const;

export default function Technology() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <section id="technology" className="relative overflow-hidden bg-[#f7f7f4] py-32 sm:py-44 lg:py-52" aria-labelledby="technology-heading">
      <Container className="max-w-[1500px]">
        <motion.header initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .75, ease }} className="max-w-[1000px]">
          <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#927d59]">Technology</p>
          <h2 id="technology-heading" className="mt-6 text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[.91] tracking-[-.065em] text-[#202b30]">Powered By<br />The World&apos;s Best AI</h2>
        </motion.header>
        <div className="relative mt-24 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-32 lg:block lg:h-[620px]">
          {technologies.map(({ name, logo, position }, index) => (
            <motion.div
              key={name}
              role="img"
              aria-label={name}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : index * .06, ease }}
              whileHover={reduceMotion ? undefined : { rotate: index % 2 ? 2 : -2, y: -4, scale: 1.025 }}
              className={`${position} group flex min-h-24 items-center justify-center rounded-[1.45rem] border border-white/86 bg-[linear-gradient(145deg,rgba(255,255,255,.8),rgba(245,243,237,.5))] px-6 shadow-[0_20px_48px_rgba(55,70,77,.08),inset_0_1px_0_white] backdrop-blur-[28px] transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#ead7b4] hover:bg-white/86 hover:shadow-[0_30px_70px_rgba(55,70,77,.13),inset_0_1px_0_white] lg:absolute lg:min-h-[112px]`}
            >
              <Image
                src={logo}
                alt=""
                width={72}
                height={72}
                className="h-12 w-12 object-contain opacity-[.82] transition-[opacity,transform] duration-300 group-hover:scale-[1.04] group-hover:opacity-100 sm:h-14 sm:w-14"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
