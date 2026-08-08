"use client";

import { useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Clapperboard,
  Globe2,
  Megaphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Container from "../ui/Container";

type ServiceTone = "steel" | "teal" | "graphite" | "sand";

interface Service {
  title: string;
  description: string;
  outcome: string;
  image: string;
  imagePosition: string;
  visualLabel: string;
  visualTitle: string;
  signals: string[];
  icon: LucideIcon;
  layout: string;
  featured?: boolean;
  tone: ServiceTone;
}

const services: Service[] = [
  {
    title: "Premium Websites",
    description:
      "Business-led digital experiences that clarify your value, strengthen trust, and guide visitors toward action.",
    outcome: "Position clearly. Convert confidently.",
    image: "/assets/illustrations/website-engineering.png",
    imagePosition: "center",
    visualLabel: "Digital experience",
    visualTitle: "Strategy → Interface → Conversion",
    signals: ["Positioning", "UX", "Conversion"],
    icon: Globe2,
    featured: true,
    layout: "md:col-span-2 lg:col-span-7",
    tone: "teal",
  },
  {
    title: "Intelligent Automation",
    description:
      "Connected workflows that reduce repetitive work, improve consistency, and keep operations moving.",
    outcome: "Less friction. Faster execution.",
    image: "/assets/illustrations/intelligent-automation.png",
    imagePosition: "center",
    visualLabel: "Connected workflow",
    visualTitle: "Input → Logic → Action",
    signals: ["Capture", "Route", "Execute"],
    icon: Workflow,
    layout: "lg:col-span-5",
    tone: "steel",
  },
  {
    title: "Growth Marketing",
    description:
      "Focused acquisition systems that connect message, audience, channel, and conversion around commercial goals.",
    outcome: "Reach the right demand. Convert intent.",
    image: "/assets/illustrations/growth-marketing.png",
    imagePosition: "center",
    visualLabel: "Acquisition system",
    visualTitle: "Attention → Intent → Revenue",
    signals: ["Reach", "Demand", "Conversion"],
    icon: Megaphone,
    layout: "lg:col-span-4",
    tone: "graphite",
  },
  {
    title: "Content & UGC Systems",
    description:
      "Credible, audience-aware content designed to communicate quickly, feel human, and support customer action.",
    outcome: "Create trust. Sustain attention.",
    image: "/assets/illustrations/content-ugc.png",
    imagePosition: "center",
    visualLabel: "Content engine",
    visualTitle: "Hook → Story → Action",
    signals: ["Creative", "UGC", "Distribution"],
    icon: Clapperboard,
    layout: "lg:col-span-4",
    tone: "sand",
  },
  {
    title: "Intelligent Business Solutions",
    description:
      "Purpose-built systems that combine strategy, automation, and AI around a genuine operational requirement.",
    outcome: "See clearly. Decide faster. Scale better.",
    image: "/assets/illustrations/business-intelligence.png",
    imagePosition: "center",
    visualLabel: "Growth operating system",
    visualTitle: "Insight → Decision → Execution",
    signals: ["Insight", "Decision", "Scale"],
    icon: BrainCircuit,
    layout: "lg:col-span-4",
    tone: "teal",
  },
];

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const pointerSpring = {
  stiffness: 120,
  damping: 24,
  mass: 0.72,
};

const toneStyles: Record<
  ServiceTone,
  {
    surface: string;
    glow: string;
    border: string;
    icon: string;
    shadow: string;
    accent: string;
  }
> = {
  steel: {
    surface:
      "linear-gradient(145deg, rgba(255,255,255,0.94), rgba(227,235,238,0.86) 58%, rgba(213,224,228,0.80))",
    glow: "radial-gradient(circle, rgba(113,154,168,0.30), rgba(181,205,213,0.10) 48%, transparent 74%)",
    border:
      "conic-gradient(from 0deg, transparent 0deg 294deg, rgba(92,143,158,0.08) 302deg, rgba(86,162,179,0.92) 321deg, rgba(255,255,255,0.96) 339deg, transparent 356deg)",
    icon: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(204,221,227,0.92))",
    shadow: "rgba(54, 86, 98, 0.30)",
    accent: "#4f8492",
  },
  teal: {
    surface:
      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(211,234,237,0.88) 56%, rgba(194,221,225,0.82))",
    glow: "radial-gradient(circle, rgba(67,169,184,0.32), rgba(160,211,219,0.11) 48%, transparent 74%)",
    border:
      "conic-gradient(from 0deg, transparent 0deg 294deg, rgba(43,150,166,0.08) 302deg, rgba(46,171,187,0.96) 321deg, rgba(255,255,255,0.96) 339deg, transparent 356deg)",
    icon: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(183,225,231,0.94))",
    shadow: "rgba(36, 112, 126, 0.32)",
    accent: "#267f8f",
  },
  graphite: {
    surface:
      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(225,230,232,0.88) 58%, rgba(205,214,218,0.82))",
    glow: "radial-gradient(circle, rgba(65,82,91,0.22), rgba(146,164,173,0.09) 48%, transparent 74%)",
    border:
      "conic-gradient(from 0deg, transparent 0deg 294deg, rgba(49,65,73,0.08) 302deg, rgba(61,92,103,0.94) 321deg, rgba(255,255,255,0.96) 339deg, transparent 356deg)",
    icon: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(211,220,224,0.94))",
    shadow: "rgba(33, 48, 56, 0.32)",
    accent: "#31434b",
  },
  sand: {
    surface:
      "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(235,230,220,0.90) 58%, rgba(225,216,202,0.84))",
    glow: "radial-gradient(circle, rgba(167,132,91,0.25), rgba(218,201,177,0.10) 48%, transparent 74%)",
    border:
      "conic-gradient(from 0deg, transparent 0deg 294deg, rgba(158,121,76,0.08) 302deg, rgba(180,134,78,0.94) 321deg, rgba(255,255,255,0.96) 339deg, transparent 356deg)",
    icon: "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(232,220,202,0.94))",
    shadow: "rgba(104, 79, 48, 0.28)",
    accent: "#8c6944",
  },
};

interface VisualPanelProps {
  service: Service;
  shouldReduceMotion: boolean;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

function VisualPanel({ service, shouldReduceMotion, x, y }: VisualPanelProps) {
  function VisualPanel({ service, shouldReduceMotion, x, y }: VisualPanelProps) {
  return (
    <motion.div
      style={{
        x: shouldReduceMotion ? 0 : x,
        y: shouldReduceMotion ? 0 : y,
        transform: "translateZ(40px)",
      }}
      className={`relative isolate overflow-visible ${
        service.featured
          ? "min-h-[240px] lg:h-full lg:min-h-0"
          : "h-[190px]"
      }`}
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.28, 0.18],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-12 -top-10 h-56 w-56 rounded-full blur-[70px]"
        style={{
          background: "radial-gradient(circle,#7dd3fc55,transparent 70%)",
        }}
      />

      {/* Floating illustration */}
      <motion.img
        src={service.image}
        alt=""
        draggable={false}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -6, 0],
                rotate: [0, -1.5, 0],
                scale: [1.03, 1.06, 1.03],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute
          object-contain
          pointer-events-none
          select-none
          drop-shadow-[0_40px_50px_rgba(0,0,0,.28)]
          ${
            service.featured
              ? "-right-10 -top-8 w-[118%] h-[118%]"
              : "-right-8 -top-6 w-[112%] h-[112%]"
          }
        `}
        style={{
          objectPosition: service.imagePosition,
        }}
      />

      {/* Bottom readability fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Light sweep */}
      <motion.div
        aria-hidden
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg,transparent 35%,rgba(255,255,255,.25) 50%,transparent 65%)",
        }}
      />
    </motion.div>
  );
}
      }}
      className={`
        relative
        isolate
        overflow-hidden
        rounded-[1.35rem]
        border
        border-white/60
        bg-[#172126]
        shadow-[0_24px_55px_rgba(22,35,42,0.24),inset_0_1px_0_rgba(255,255,255,0.26)]
        ${
          service.featured
            ? "min-h-[225px] lg:h-full lg:min-h-0"
            : "h-[165px] sm:h-[180px]"
        }
      `}
    >
      {/* Real-world image */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1.03, 1.07, 1.03],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundPosition: service.imagePosition,
        }}
      />

      {/* Executive image treatment */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-[linear-gradient(118deg,rgba(10,18,22,0.88)_0%,rgba(15,27,32,0.58)_43%,rgba(12,22,27,0.18)_72%,rgba(8,15,18,0.52)_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.18]
          mix-blend-screen
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
        }}
      />

      {/* Directional glass beam */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-130%", "230%"],
              }
        }
        transition={{
          duration: 5.8,
          repeat: Infinity,
          repeatDelay: 1.4,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-y-[-15%]
          w-[28%]
          rotate-[16deg]
          bg-white/15
          blur-2xl
        "
      />

      {/* Visual meaning */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <span
            className="
              rounded-full
              border
              border-white/25
              bg-black/28
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.19em]
              text-white/88
              backdrop-blur-xl
            "
          >
            {service.visualLabel}
          </span>

          <span
            aria-hidden="true"
            className="
              h-2.5
              w-2.5
              rounded-full
              border
              border-white/55
              bg-[#72d0da]
              shadow-[0_0_18px_rgba(114,208,218,0.88)]
            "
          />
        </div>

        <div>
          <p
            className="
              max-w-[520px]
              text-[clamp(1rem,1.55vw,1.35rem)]
              font-semibold
              leading-[1.12]
              tracking-[-0.025em]
              text-white
            "
          >
            {service.visualTitle}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {service.signals.map((signal) => (
              <span
                key={signal}
                className="
                  rounded-full
                  border
                  border-white/22
                  bg-white/10
                  px-2.5
                  py-1
                  text-[9px]
                  font-medium
                  tracking-[0.08em]
                  text-white/82
                  backdrop-blur-xl
                "
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom structural line */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-[8%]
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/65
          to-transparent
        "
      />
    </motion.div>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const palette = toneStyles[service.tone];

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, pointerSpring);
  const smoothY = useSpring(pointerY, pointerSpring);

  const tilt = service.featured ? 2.2 : 3.5;

  const rotateY = useTransform(smoothX, [-1, 1], [-tilt, tilt]);
  const rotateX = useTransform(smoothY, [-1, 1], [tilt * 0.72, -tilt * 0.72]);

  const copyX = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const copyY = useTransform(smoothY, [-1, 1], [-2, 2]);

  const visualX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const visualY = useTransform(smoothY, [-1, 1], [-5, 5]);

  const glowX = useTransform(smoothX, [-1, 1], ["14%", "86%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["12%", "88%"]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width;
    const normalizedY = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(normalizedX * 2 - 1);
    pointerY.set(normalizedY * 2 - 1);
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "touch") {
      setIsHovered(true);
    }
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 32,
        scale: shouldReduceMotion ? 1 : 0.985,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.78,
        delay: shouldReduceMotion ? 0 : index * 0.07,
        ease: cinematicEase,
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.008,
            }
      }
      className={`
        group
        relative
        [perspective:1500px]
        ${service.layout}
      `}
    >
      {/* Lifted shadow plane */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHovered ? 0.64 : 0.34,
          scaleX: isHovered ? 1.06 : 0.92,
          y: isHovered ? 14 : 9,
        }}
        transition={{
          duration: 0.5,
          ease: cinematicEase,
        }}
        className="
          pointer-events-none
          absolute
          inset-x-[8%]
          bottom-[-13px]
          h-12
          rounded-[50%]
          blur-2xl
        "
        style={{
          background: palette.shadow,
        }}
      />

      <motion.article
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformPerspective: 1500,
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          isolate
          overflow-hidden
          rounded-[1.65rem]
          p-px
          will-change-transform
        "
      >
        {/* Four-edge travelling light */}
        <motion.div
          aria-hidden="true"
          animate={
            isHovered && !shouldReduceMotion
              ? {
                  rotate: 360,
                  opacity: 1,
                }
              : {
                  rotate: 0,
                  opacity: 0,
                }
          }
          transition={
            isHovered && !shouldReduceMotion
              ? {
                  rotate: {
                    duration: 2.1,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 0.22,
                  },
                }
              : {
                  duration: 0.3,
                }
          }
          className="
            pointer-events-none
            absolute
            -inset-[70%]
            z-0
          "
          style={{
            background: palette.border,
          }}
        />

        {/* Card body */}
        <div
          className={`
            relative
            z-10
            overflow-hidden
            rounded-[calc(1.65rem-1px)]
            border
            border-white/78
            shadow-[0_30px_70px_rgba(26,46,55,0.16),0_8px_24px_rgba(34,58,68,0.09),inset_0_1px_0_rgba(255,255,255,0.98),inset_0_-1px_0_rgba(53,83,94,0.08)]
            backdrop-blur-[30px]
            ${service.featured ? "min-h-[350px]" : "min-h-[330px]"}
          `}
          style={{
            background: palette.surface,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Mouse-following depth glow */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0
              h-[22rem]
              w-[22rem]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              opacity-0
              blur-[38px]
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
            style={{
              left: shouldReduceMotion ? "50%" : glowX,
              top: shouldReduceMotion ? "50%" : glowY,
              background: palette.glow,
            }}
          />

          {/* Internal architectural texture */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-[0.12]
              [mask-image:linear-gradient(to_bottom,black,transparent_82%)]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(36,62,72,0.10) 1px, transparent 1px),
                linear-gradient(90deg, rgba(36,62,72,0.10) 1px, transparent 1px)
              `,
              backgroundSize: "58px 58px",
            }}
          />

          <div
            className={`
              relative
              z-10
              grid
              min-h-[inherit]
              gap-5
              p-5
              sm:p-6
              ${
                service.featured
                  ? "lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch lg:gap-6"
                  : "grid-rows-[auto_1fr]"
              }
            `}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Visual first on mobile, right side on featured desktop */}
            <div className={service.featured ? "lg:order-2" : ""}>
              <VisualPanel
                service={service}
                shouldReduceMotion={shouldReduceMotion}
                x={visualX}
                y={visualY}
              />
            </div>

            {/* Copy */}
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : copyX,
                y: shouldReduceMotion ? 0 : copyY,
                transform: "translateZ(36px)",
              }}
              className={`
                flex
                flex-col
                ${
                  service.featured
                    ? "justify-center lg:order-1"
                    : "justify-between"
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[0.95rem]
                      border
                      border-white/86
                      text-[#26383f]
                      shadow-[0_13px_30px_rgba(46,75,85,0.12),inset_0_1px_0_rgba(255,255,255,1)]
                      backdrop-blur-xl
                    "
                    style={{
                      background: palette.icon,
                    }}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.65}
                    />
                  </div>

                  <span
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#547581]/30
                      to-transparent
                    "
                  />
                </div>

                <h3
                  className={`
                    mt-4
                    max-w-[560px]
                    font-semibold
                    leading-[1.02]
                    tracking-[-0.045em]
                    text-[#1f2a2f]
                    ${
                      service.featured
                        ? "text-[clamp(1.85rem,2.8vw,3.05rem)]"
                        : "text-[clamp(1.55rem,2vw,2.1rem)]"
                    }
                  `}
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[560px]
                    text-[15px]
                    leading-[1.62]
                    text-[#394a51]
                    sm:text-[16px]
                  "
                >
                  {service.description}
                </p>
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <p
                  className="
                    max-w-[440px]
                    text-[13px]
                    font-semibold
                    leading-5
                    tracking-[-0.01em]
                    text-[#293b42]
                    sm:text-[14px]
                  "
                >
                  {service.outcome}
                </p>

                <a
                  href="#contact"
                  aria-label={`Discuss ${service.title}`}
                  className="
                    group/link
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#26343a]/12
                    bg-[#26343a]
                    text-white
                    shadow-[0_12px_26px_rgba(38,52,58,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#10181c]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#67b8c4]
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-transparent
                  "
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-0.5
                      group-hover/link:-translate-y-0.5
                    "
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom material edge */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              bottom-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/88
              to-transparent
            "
          />
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Services() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="solutions"
      aria-labelledby="services-heading"
      className="
        relative
        isolate
        scroll-mt-28
        overflow-hidden
        bg-[#edf3f5]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Executive section canvas */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#f3f7f8_0%,#e8f0f2_48%,#f3f1ed_100%)]
        "
      />

      {/* Perspective floor */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -12, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-[25rem]
          left-1/2
          h-[54rem]
          w-[125%]
          opacity-[0.25]
        "
        style={{
          transform: "translateX(-50%) perspective(1100px) rotateX(67deg)",
          backgroundImage: `
            linear-gradient(rgba(60,88,99,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60,88,99,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
          maskImage: "linear-gradient(to top, black 8%, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to top, black 8%, transparent 78%)",
        }}
      />

      {/* Controlled atmosphere */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 34, 0],
                y: [0, -22, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-56
          top-16
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-[#9fcfda]/34
          blur-[128px]
        "
      />

      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -28, 0],
                y: [0, 20, 0],
                scale: [1.04, 0.96, 1.04],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-8
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-[#d8c5a9]/28
          blur-[130px]
        "
      />

      {/* Architectural curves */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          opacity-55
        "
        fill="none"
      >
        <path
          d="M-120 650C176 426 348 734 634 506C901 293 1105 207 1560 284"
          stroke="rgba(72,109,123,0.17)"
          strokeWidth="1.5"
        />

        <path
          d="M-110 748C198 536 405 820 706 596C973 398 1194 312 1568 368"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="2"
        />

        <path
          d="M-100 840C250 678 475 908 806 704C1090 529 1288 486 1556 516"
          stroke="rgba(166,137,99,0.18)"
          strokeWidth="1.5"
        />
      </svg>

      <Container>
        <div className="relative z-10">
          {/* Compact section introduction */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: cinematicEase,
            }}
            className="
              grid
              gap-7
              lg:grid-cols-[0.94fr_1.06fr]
              lg:items-end
              lg:gap-14
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/90
                  bg-white/66
                  px-4
                  py-2.5
                  shadow-[0_12px_32px_rgba(53,81,92,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                  backdrop-blur-xl
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#4ca8b7]
                    shadow-[0_0_14px_rgba(76,168,183,0.52)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#46575e]
                  "
                >
                  FINCHX AI • Solutions
                </span>
              </div>

              <h2
                id="services-heading"
                className="
                  mt-5
                  max-w-[690px]
                  text-balance
                  text-[clamp(2.35rem,4vw,4.25rem)]
                  font-semibold
                  leading-[0.97]
                  tracking-[-0.052em]
                  text-[#1f2a2f]
                "
              >
                Business systems built for{" "}
                <span
                  className="
                    bg-[linear-gradient(100deg,#365b66,#5fa8b5_52%,#8d7352)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  measurable progress.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:pb-1">
              <p
                className="
                  max-w-[520px]
                  text-[17px]
                  font-medium
                  leading-[1.66]
                  text-[#2e3d44]
                  sm:text-[18px]
                "
              >
                Strategy, design, automation, and growth execution connected
                around one commercial objective.
              </p>

              <p
                className="
                  max-w-[500px]
                  text-[16px]
                  leading-[1.66]
                  text-[#46565d]
                  sm:text-[17px]
                "
              >
                Each visual shows the real business system behind the service,
                so the value is understood before the detail is read.
              </p>
            </div>
          </motion.div>

          {/* Compact executive bento */}
          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-2
              lg:mt-12
              lg:grid-cols-12
              lg:gap-6
              [perspective:1600px]
            "
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
