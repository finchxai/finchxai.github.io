export const JourneyAssets = {
  discoveryCard: "/assets/journey/cards/discovery-card.webp",
  strategyCard: "/assets/journey/cards/strategy-card.webp",
  planningCard: "/assets/journey/cards/planning-card.webp",
  executionCard: "/assets/journey/cards/execution-card.webp",
  optimizationCard: "/assets/journey/cards/optimization-card.webp",
  resultsCard: "/assets/journey/cards/results-card.webp",

  discoveryPin: "/assets/journey/pins/discovery-pin.webp",
  strategyPin: "/assets/journey/pins/strategy-pin.webp",
  planningPin: "/assets/journey/pins/planning-pin.webp",
  executionPin: "/assets/journey/pins/execution-pin.webp",
  optimizationPin: "/assets/journey/pins/optimization-pin.webp",
  resultsPin: "/assets/journey/pins/results-pin.webp",

  flag: "/assets/journey/effects/flag.webp",
  energyHead: "/assets/journey/effects/energy-head.webp",
  energyTail: "/assets/journey/effects/energy-tail.webp",
  spark: "/assets/journey/effects/spark.webp",
  flare: "/assets/journey/effects/flare.webp",
  halo: "/assets/journey/effects/halo.webp",

  journeyPath: "/assets/journey/paths/journey-path.svg",
  energyMask: "/assets/journey/paths/energy-mask.svg",
  energyGlow: "/assets/journey/paths/energy-glow.svg",

  journeyPlatform: "/assets/journey/background/journey-platform.webp",
  journeyBase: "/assets/journey/background/journey-base.webp",
  ambientShadow: "/assets/journey/background/ambient-shadow.webp",
  ambientLight: "/assets/journey/background/ambient-light.webp",

  particleSmall: "/assets/journey/particles/particle-small.webp",
  particleMedium: "/assets/journey/particles/particle-medium.webp",
  particleLarge: "/assets/journey/particles/particle-large.webp",
  dust: "/assets/journey/particles/dust.webp",
} as const;

export type JourneyAssetKey = keyof typeof JourneyAssets;
export type JourneyAssetPath = (typeof JourneyAssets)[JourneyAssetKey];
