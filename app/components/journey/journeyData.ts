import type { JourneyCanvasConfig, JourneyStep } from "./types";

export const DEBUG = false;

export const journeyCanvas: JourneyCanvasConfig = {
  width: 100,
  height: 100,
  duration: 7,
  pauseDuration: 0,
  path:
    "M21.03 80.66 C25.39 79.1 28.97 73.44 33.98 68.55 C38.41 63.96 40.43 57.81 45.83 54.59 C51.17 51.37 56.97 50.78 62.5 50.88 C66.28 50.88 68.68 47.46 71.55 45.12 C73.57 41.11 74.74 32.71 76.56 27.15",
  flag: { x: 79.4, y: 10.8 },
};

export const journeyData: readonly JourneyStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Understand the business, its market, and the opportunity.",
    x: 21.03,
    y: 80.66,
    icon: "discover",
    color: "#8ecce8",
    floatDelay: 0.2,
    energyDelay: 0,
  },
  {
    id: "strategy",
    title: "Strategy",
    description: "Turn the strongest opportunities into a focused roadmap.",
    x: 33.98,
    y: 68.55,
    icon: "target",
    color: "#8bc8e5",
    floatDelay: 1.1,
    energyDelay: 1,
  },
  {
    id: "plan",
    title: "Plan",
    description: "Shape a clear experience around how customers decide.",
    x: 45.83,
    y: 54.59,
    icon: "plan",
    color: "#82bfdf",
    floatDelay: 0.55,
    energyDelay: 1.95,
  },
  {
    id: "execution",
    title: "Execution",
    description: "Build the connected systems that put the plan to work.",
    x: 62.5,
    y: 50.88,
    icon: "execute",
    color: "#78b9db",
    floatDelay: 1.6,
    energyDelay: 3.05,
  },
  {
    id: "optimize",
    title: "Optimize",
    description: "Release, measure, and improve every part of the engine.",
    x: 71.55,
    y: 45.12,
    icon: "optimize",
    color: "#72b4d7",
    floatDelay: 0.85,
    energyDelay: 3.9,
  },
  {
    id: "results",
    title: "Results",
    description: "Turn connected execution into measurable business results.",
    x: 76.56,
    y: 27.15,
    icon: "results",
    color: "#6baed3",
    floatDelay: 1.35,
    energyDelay: 5.1,
  },
];
