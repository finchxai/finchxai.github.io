export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  icon: string;
  color: string;
  floatDelay: number;
  energyDelay: number;
}

export interface JourneyCanvasConfig {
  width: number;
  height: number;
  path: string;
  duration: number;
  pauseDuration: number;
  flag: {
    x: number;
    y: number;
  };
}

export interface JourneyCardAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface JourneyPinAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
}

export interface JourneyEffectAsset {
  src: string;
  width: number;
  height: number;
  opacity?: number;
}

export interface JourneyNodeAsset {
  id: string;
  card: JourneyCardAsset;
  pin: JourneyPinAsset;
  effects?: readonly JourneyEffectAsset[];
}
