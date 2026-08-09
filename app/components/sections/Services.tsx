"use client";

import Image from "next/image";
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
    image: "/assets/website-engineering.png",
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
    image: "/assets/automation-system.png",
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
    image: "/assets/growth-marketing.png",
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
    image: "/assets/growth-marketing 1.png",
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
    image: "/assets/business-intelligence.png",
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
  const illustration = service.image.replace(/\.png$/, ".png");

  return (
    <motion.div
      style={{
        x: shouldReduceMotion ? 0 : x,
        y: shouldReduceMotion ? 0 : y,
        transform: "translateZ(40px)",
      }}
      className="absolute inset-0 isolate overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <Image
          fill
          src={illustration}
          alt=""
          draggable={false}
          sizes={
            "(max-width: 1023px) 100vw, 50vw"
          }
          className="object-cover object-center"
        />
      </div>

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

  const copyX = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);
  const copyY = useTransform(smoothY, [-1, 1], [-2, 2]);

  const visualX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const visualY = useTransform(smoothY, [-1, 1], [-5, 5]);

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

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 36,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              transition: {
                duration: 0.5,
                ease: cinematicEase,
              },
            }
      }
      className={`
        group
        relative
        [perspective:1500px]
      `}
    >
      {/* Lifted shadow plane */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[8%]
          bottom-[-8px]
          h-12
          rounded-[50%]
          blur-2xl
          opacity-40
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
          transformPerspective: 1500,
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          isolate
          overflow-hidden
          rounded-[1.875rem]
          will-change-transform
        "
      >
        {/* Full-scene card body */}
        <div
          className={`
            relative
            z-10
            overflow-hidden
            rounded-[1.875rem]
            border
            border-white/70
            bg-[#edf3f5]
            shadow-[0_40px_90px_rgba(120,150,180,0.15),inset_0_1px_0_rgba(255,255,255,0.92)]
            backdrop-blur-[30px]
            transition-shadow
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:shadow-[0_50px_100px_rgba(25,45,75,0.12),inset_0_1px_0_rgba(255,255,255,0.92)]
            ${index < 2 ? "h-[390px]" : "h-[355px]"}
          `}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            animate={{ scale: isHovered && !shouldReduceMotion ? 1.04 : 1 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className="absolute inset-0"
          >
            <VisualPanel
              service={service}
              shouldReduceMotion={shouldReduceMotion}
              x={visualX}
              y={visualY}
            />
          </motion.div>

          {/* Floating service information */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : copyX,
              y: shouldReduceMotion ? 0 : copyY,
              transform: "translateZ(36px)",
            }}
            className="
              absolute
              inset-x-[18px]
              bottom-[18px]
              z-20
              overflow-hidden
              rounded-[1.375rem]
              border
              border-white/[0.65]
              bg-white/[0.72]
              px-6
              py-[22px]
              shadow-[0_18px_40px_rgba(30,50,80,0.12),inset_0_1px_0_rgba(255,255,255,0.82)]
              backdrop-blur-[26px]
              transition-colors
              duration-500
              group-hover:bg-white/75
            "
          >
            <div className="flex items-center gap-3">
              <h3
                className="
                min-w-0
                flex-1
                text-[28px]
                font-bold
                leading-none
                tracking-[-0.04em]
                text-[#1F2937]
                sm:text-[34px]
                lg:text-[40px]
              "
              >
                {service.title}
              </h3>

              <a
                href="#contact"
                aria-label={`Discuss ${service.title}`}
                className="
                  group/link
                  flex
                  h-[46px]
                  w-[46px]
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
                  duration-[350ms]
                  hover:scale-[1.08]
                  hover:bg-[#267f8f]
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
                    duration-[350ms]
                    group-hover/link:rotate-45
                  "
                />
              </a>
            </div>

            <p
              className="
                mt-2
                line-clamp-2
                max-w-[460px]
                text-[15px]
                leading-[1.7]
                text-[#394a51]/[0.72]
              "
            >
              {service.description}
            </p>
          </motion.div>
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
              lg:items-center
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

          </motion.div>

          {/* Compact executive bento */}
          <div
            className="
              mt-12
              grid
              gap-5
              lg:grid-cols-2
              lg:gap-x-[42px]
              lg:gap-y-[42px]
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
