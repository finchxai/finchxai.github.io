"use client";

import {
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Container from "../ui/Container";

interface Project {
  label: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  services: string[];
  steps: string[];
  layout: string;
  featured?: boolean;
  accent: string;
  glow: string;
  shadow: string;
}

const projects: Project[] = [
  {
    label: "Concept Engagement",
    title: "Atlas Commerce",
    description:
      "A premium digital platform structured to communicate value clearly and move visitors from discovery to enquiry.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=88",
    icon: Globe2,
    services: ["Digital Strategy", "Premium Website", "Conversion Journey"],
    steps: ["Discover", "Compare", "Enquire"],
    layout: "lg:col-span-7",
    featured: true,
    accent: "rgba(96, 189, 202, 0.92)",
    glow: "rgba(80, 176, 192, 0.26)",
    shadow: "rgba(23, 63, 72, 0.44)",
  },
  {
    label: "Concept Engagement",
    title: "Northline Operations",
    description:
      "An interconnected workflow designed to organize leads, assignments, communication, and operational follow-up.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=88",
    icon: Workflow,
    services: ["Workflow Design", "Automation", "Connected Operations"],
    steps: ["Capture", "Assign", "Execute", "Follow-up"],
    layout: "lg:col-span-5",
    accent: "rgba(208, 164, 112, 0.92)",
    glow: "rgba(186, 133, 76, 0.24)",
    shadow: "rgba(72, 53, 33, 0.40)",
  },
  {
    label: "Concept Engagement",
    title: "Signal Growth System",
    description:
      "A connected acquisition system bringing positioning, content, campaign execution, and performance insight into one commercial direction.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=88",
    icon: TrendingUp,
    services: [
      "Growth Strategy",
      "Content System",
      "Campaign Execution",
      "Performance Insight",
    ],
    steps: ["Position", "Create", "Activate", "Learn"],
    layout: "lg:col-span-12",
    accent: "rgba(103, 184, 195, 0.94)",
    glow: "rgba(77, 164, 178, 0.25)",
    shadow: "rgba(24, 58, 65, 0.44)",
  },
];

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const pointerSpring = {
  stiffness: 115,
  damping: 24,
  mass: 0.72,
};

const borderMaskStyle: CSSProperties = {
  padding: "1.5px",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const shouldReduceMotion = Boolean(useReducedMotion());

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, pointerSpring);

  const smoothY = useSpring(pointerY, pointerSpring);

  const tiltAmount = project.featured ? 2.2 : 3.5;

  const rotateY = useTransform(smoothX, [-1, 1], [-tiltAmount, tiltAmount]);

  const rotateX = useTransform(
    smoothY,
    [-1, 1],
    [tiltAmount * 0.72, -tiltAmount * 0.72],
  );

  const imageX = useTransform(smoothX, [-1, 1], [-10, 10]);

  const imageY = useTransform(smoothY, [-1, 1], [-7, 7]);

  const contentX = useTransform(smoothX, [-1, 1], [-3, 3]);

  const contentY = useTransform(smoothY, [-1, 1], [-2, 2]);

  const glowX = useTransform(smoothX, [-1, 1], ["15%", "85%"]);

  const glowY = useTransform(smoothY, [-1, 1], ["15%", "85%"]);

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

  const Icon = project.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 34,
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
        duration: shouldReduceMotion ? 0 : 0.85,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: cinematicEase,
      }}
      className={`
        relative
        [perspective:1600px]
        ${project.layout}
      `}
    >
      {/* Elevated floor shadow */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHovered ? 0.72 : 0.38,
          scaleX: isHovered ? 1.06 : 0.92,
          y: isHovered ? 17 : 10,
        }}
        transition={{
          duration: 0.5,
          ease: cinematicEase,
        }}
        className="
          pointer-events-none
          absolute
          inset-x-[7%]
          bottom-[-16px]
          h-16
          rounded-[50%]
          blur-[28px]
        "
        style={{
          background: project.shadow,
        }}
      />

      <motion.article
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                y: -8,
                scale: 1.006,
              }
        }
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformPerspective: 1600,
          transformStyle: "preserve-3d",
        }}
        className={`
          group
          relative
          isolate
          overflow-hidden
          rounded-[1.75rem]
          border
          border-white/18
          bg-[#172328]
          shadow-[0_38px_90px_rgba(20,36,42,0.34),0_12px_30px_rgba(17,32,38,0.20),inset_0_1px_0_rgba(255,255,255,0.14)]
          will-change-transform
          ${project.featured ? "min-h-[410px]" : "min-h-[410px]"}
          ${project.layout.includes("lg:col-span-12") ? "lg:min-h-[350px]" : ""}
        `}
      >
        {/* Full-bleed real image */}
        <motion.div
          aria-hidden="true"
          style={{
            x: shouldReduceMotion ? 0 : imageX,
            y: shouldReduceMotion ? 0 : imageY,
            scale: 1.06,
            backgroundImage: `url("${project.image}")`,
            transform: "translateZ(12px)",
          }}
          className="
            absolute
            -inset-4
            bg-cover
            bg-center
            transition-[filter]
            duration-700
            group-hover:brightness-[1.03]
          "
        />

        {/* Professional cinematic grading */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(105deg,rgba(12,24,29,0.96)_0%,rgba(17,32,38,0.84)_38%,rgba(17,31,36,0.34)_70%,rgba(12,23,27,0.56)_100%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,rgba(5,13,16,0.72)_100%)]
          "
        />

        {/* Mouse spotlight */}
        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            z-[2]
            h-[26rem]
            w-[26rem]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-0
            blur-[55px]
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            left: shouldReduceMotion ? "50%" : glowX,
            top: shouldReduceMotion ? "50%" : glowY,
            background: `radial-gradient(circle, ${project.glow}, transparent 70%)`,
          }}
        />

        {/* Travelling edge */}
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
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 0.25,
                  },
                }
              : {
                  duration: 0.3,
                }
          }
          className="
            pointer-events-none
            absolute
            -inset-px
            z-30
            rounded-[1.75rem]
          "
          style={{
            ...borderMaskStyle,
            background: `conic-gradient(
              from 0deg,
              transparent 0deg 296deg,
              ${project.accent} 320deg,
              rgba(255,255,255,0.92) 334deg,
              transparent 354deg
            )`,
          }}
        />

        {/* Architectural line detail */}
        <svg
          aria-hidden="true"
          viewBox="0 0 900 480"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            inset-0
            z-[3]
            h-full
            w-full
            opacity-40
          "
          fill="none"
        >
          <path
            d="M-70 390C120 235 275 430 442 280C595 142 720 105 970 145"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
          />

          <path
            d="M-70 433C146 288 298 460 470 328C640 198 762 171 970 199"
            stroke={project.accent}
            strokeOpacity="0.42"
            strokeWidth="1.5"
          />
        </svg>

        {/* Main content */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : contentX,
            y: shouldReduceMotion ? 0 : contentY,
            transform: "translateZ(48px)",
          }}
          className="
            relative
            z-10
            flex
            min-h-[inherit]
            flex-col
            justify-between
            p-6
            sm:p-8
            lg:p-9
          "
        >
          {/* Top row */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-5
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/18
                bg-[#111d22]/54
                px-3.5
                py-2
                shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                backdrop-blur-2xl
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                "
                style={{
                  background: project.accent,
                  boxShadow: `0 0 12px ${project.accent}`,
                }}
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/76
                "
              >
                {project.label}
              </span>
            </div>

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/18
                bg-[#111d22]/52
                text-white
                shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)]
                backdrop-blur-2xl
              "
            >
              <Icon
                aria-hidden="true"
                className="h-[19px] w-[19px]"
                strokeWidth={1.6}
              />
            </div>
          </div>

          {/* Business-system flow */}
          <div
            className={`
              my-8
              flex
              w-fit
              max-w-full
              items-center
              overflow-x-auto
              rounded-2xl
              border
              border-white/16
              bg-[#101b20]/60
              px-3
              py-3
              shadow-[0_20px_48px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)]
              backdrop-blur-2xl
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            `}
          >
            {project.steps.map((step, stepIndex) => (
              <div
                key={step}
                className="
                    flex
                    shrink-0
                    items-center
                  "
              >
                <span
                  className="
                      rounded-full
                      border
                      border-white/12
                      bg-white/[0.06]
                      px-3
                      py-1.5
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-white/76
                    "
                >
                  {step}
                </span>

                {stepIndex < project.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                        mx-2
                        h-px
                        w-5
                        bg-gradient-to-r
                        from-white/18
                        to-white/55
                      "
                  />
                )}
              </div>
            ))}
          </div>

          {/* Bottom information */}
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div className="max-w-[680px]">
              <h3
                className={`
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white
                  ${
                    project.featured
                      ? "text-[clamp(2.1rem,4vw,4rem)]"
                      : "text-[clamp(1.9rem,3.1vw,3rem)]"
                  }
                `}
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[620px]
                  text-[15px]
                  leading-[1.7]
                  text-white/72
                  sm:text-[16px]
                "
              >
                {project.description}
              </p>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="
                        rounded-full
                        border
                        border-white/14
                        bg-white/[0.07]
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/68
                        backdrop-blur-xl
                      "
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              aria-label={`Discuss a project like ${project.title}`}
              className="
                group/link
                inline-flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/22
                bg-white/92
                text-[#17262c]
                shadow-[0_18px_38px_rgba(0,0,0,0.24)]
                transition-transform
                duration-300
                hover:scale-105
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#17262c]
              "
            >
              <ArrowUpRight
                aria-hidden="true"
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-0.5
                  group-hover/link:-translate-y-0.5
                "
                strokeWidth={1.8}
              />
            </a>
          </div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

export default function Work() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="
        relative
        isolate
        scroll-mt-28
        overflow-hidden
        bg-[#eaf1f3]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Section canvas */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#edf3f5_0%,#dde8eb_48%,#edf0ec_100%)]
        "
      />

      {/* Deep architectural atmosphere */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 35, 0],
                y: [0, -22, 0],
                scale: [1, 1.08, 1],
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
          top-20
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-[#75bcc7]/20
          blur-[130px]
        "
      />

      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -32, 0],
                y: [0, 25, 0],
                scale: [1.04, 0.96, 1.04],
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
          -right-52
          bottom-16
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-[#c9aa84]/18
          blur-[135px]
        "
      />

      {/* Perspective floor */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-[28rem]
          left-1/2
          h-[58rem]
          w-[125%]
          opacity-[0.22]
        "
        style={{
          transform: "translateX(-50%) perspective(1100px) rotateX(66deg)",
          backgroundImage: `
            linear-gradient(
              rgba(58, 88, 99, 0.10) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(58, 88, 99, 0.10) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "76px 76px",
          maskImage: "linear-gradient(to top, black 12%, transparent 79%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 12%, transparent 79%)",
        }}
      />

      <Container>
        <div className="relative z-10">
          {/* Section introduction */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 26,
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
              gap-8
              lg:grid-cols-[1fr_0.82fr]
              lg:items-end
              lg:gap-16
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
                  border-white/80
                  bg-white/58
                  px-4
                  py-2.5
                  shadow-[0_12px_30px_rgba(54,79,89,0.09),inset_0_1px_0_rgba(255,255,255,0.96)]
                  backdrop-blur-xl
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#4ea9b8]
                    shadow-[0_0_12px_rgba(78,169,184,0.55)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.27em]
                    text-[#41545c]
                  "
                >
                  Selected Work
                </span>
              </div>

              <h2
                id="work-heading"
                className="
                  mt-6
                  max-w-[780px]
                  text-balance
                  text-[clamp(2.55rem,4.6vw,4.9rem)]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.055em]
                  text-[#1f2a2f]
                "
              >
                Business growth,{" "}
                <span
                  className="
                    bg-[linear-gradient(100deg,#355d68,#66aebb_50%,#987653)]
                    bg-clip-text
                    text-transparent
                  "
                >
                  made visible.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p
                className="
                  max-w-[560px]
                  text-[17px]
                  font-medium
                  leading-[1.72]
                  text-[#304047]
                  sm:text-[18px]
                "
              >
                A view of how strategy, digital experience, automation, and
                growth execution can become one connected business system.
              </p>

              <p
                className="
                  mt-4
                  max-w-[540px]
                  text-[14px]
                  leading-6
                  text-[#56666d]
                  sm:text-[15px]
                "
              >
                These are concept engagements created to demonstrate our
                approach. They will be replaced by verified client work as the
                FINCHX AI portfolio develops.
              </p>
            </div>
          </motion.div>

          {/* Projects grid */}
          <div
            className="
              mt-12
              grid
              gap-6
              lg:mt-14
              lg:grid-cols-12
              lg:gap-7
            "
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
