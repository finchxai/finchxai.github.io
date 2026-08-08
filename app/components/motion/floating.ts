export const floatingSlow = {
  y: [-10, 12, -10],
  rotate: [-1.5, 1.5, -1.5],
};

export const floatingMedium = {
  y: [-18, 15, -18],
  rotate: [-3, 3, -3],
};

export const floatingFast = {
  y: [-8, 10, -8],
  x: [-4, 4, -4],
};

export const slowTransition = {
  duration: 18,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export const mediumTransition = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export const fastTransition = {
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut" as const,
};
