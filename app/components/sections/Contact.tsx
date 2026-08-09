"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Link as LinkIcon, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;
const fieldClass = "peer min-h-14 w-full rounded-[1.05rem] border border-white/86 bg-white/46 px-4 text-[14px] text-[#33444b] shadow-[inset_0_1px_0_white,0_10px_25px_rgba(61,75,81,.05)] outline-none backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 placeholder:text-[#89959a] focus:border-[#dcc49a] focus:bg-white/64 focus:shadow-[inset_0_1px_0_white,0_14px_32px_rgba(75,67,51,.08),0_0_0_3px_rgba(218,193,148,.1)]";

interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

const contactDetails: readonly ContactDetail[] = [
  { label: "Email", value: "hello@finchx.ai", href: "mailto:hello@finchx.ai", icon: Mail },
  { label: "Phone", value: "Available after booking", icon: Phone },
  { label: "Location", value: "Los Angeles · Worldwide", icon: MapPin },
  { label: "LinkedIn", value: "FINCHX AI", icon: LinkIcon },
  { label: "Calendar", value: "Schedule a strategy call", href: "mailto:hello@finchx.ai?subject=Strategy%20Call", icon: CalendarDays },
] as const;

export default function Contact() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-[#f7f7f4] py-32 sm:py-44 lg:py-56">
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[28%] h-[34rem] w-[34rem] rounded-full bg-white/58 blur-[110px]" />
      <Container className="relative z-10 max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-24">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : .75, ease }}>
            <h2 id="contact-heading" className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#202b30]">Let&apos;s Talk.</h2>
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-1">
              {contactDetails.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <div className="group flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[.95rem] border border-white/88 bg-white/48 text-[#8c7650] shadow-[inset_0_1px_0_white,0_8px_20px_rgba(62,75,80,.06)] transition-colors duration-300 group-hover:bg-[#ead9b9]/45"><Icon aria-hidden="true" size={18} strokeWidth={1.45} /></span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-[#93805e]">{label}</p>
                      <p className="mt-1 text-[14px] font-medium text-[#4f6067]">{value}</p>
                    </div>
                  </div>
                );
                return href ? <a key={label} href={href} className="w-fit">{content}</a> : <div key={label}>{content}</div>;
              })}
            </div>
          </motion.div>

          <motion.form action="mailto:hello@finchx.ai" method="post" encType="text/plain" initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduceMotion ? 0 : .8, delay: reduceMotion ? 0 : .1, ease }} className="rounded-[2rem] border border-white/84 bg-[linear-gradient(145deg,rgba(255,255,255,.76),rgba(246,244,237,.5))] p-6 shadow-[0_32px_90px_rgba(50,65,72,.11),inset_0_1px_0_white] backdrop-blur-[34px] sm:p-9 lg:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Name<input required name="name" autoComplete="name" placeholder="Your name" className={fieldClass} /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Company<input name="company" autoComplete="organization" placeholder="Company name" className={fieldClass} /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={fieldClass} /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" className={fieldClass} /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Project<select required name="project" defaultValue="" className={fieldClass}><option value="" disabled>Select a project</option><option>AI Website</option><option>AI Automation</option><option>Marketing System</option><option>Business Intelligence</option><option>Connected Growth Ecosystem</option></select></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Budget<select required name="budget" defaultValue="" className={fieldClass}><option value="" disabled>Select a range</option><option>$10k–$25k</option><option>$25k–$50k</option><option>$50k–$100k</option><option>$100k+</option></select></label>
            </div>
            <label className="mt-5 grid gap-2 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7f8b90]">Message<textarea required name="message" rows={6} placeholder="Tell us about your goals, current challenges, and what measurable growth looks like." className={`${fieldClass} resize-none py-4`} /></label>
            <motion.button type="submit" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }} whileTap={reduceMotion ? undefined : { scale: .99 }} transition={{ duration: .3, ease }} className="mt-7 min-h-16 w-full rounded-full border border-[#dec89f]/75 bg-[linear-gradient(145deg,rgba(255,255,255,.82),rgba(232,214,180,.62))] px-7 text-[14px] font-semibold text-[#4d4435] shadow-[0_18px_42px_rgba(82,67,42,.11),inset_0_1px_0_white] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-400 hover:border-[#d1b276] hover:bg-[#e8d4ae]/78 hover:shadow-[0_24px_58px_rgba(82,67,42,.16),inset_0_1px_0_white]">Schedule Strategy Call</motion.button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
