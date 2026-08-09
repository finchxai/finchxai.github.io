import { DEBUG, journeyCanvas } from "./journeyData";

export default function JourneyPath() {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${journeyCanvas.width} ${journeyCanvas.height}`}
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      fill="none"
    >
      <path
        data-journey-path
        d={journeyCanvas.path}
        stroke={DEBUG ? "rgba(22,126,183,.9)" : "transparent"}
        strokeWidth={DEBUG ? 0.34 : 0.01}
        strokeLinecap="round"
        strokeDasharray={DEBUG ? "0.8 0.8" : undefined}
      />
    </svg>
  );
}
