"use client";

import Gradient from "./Gradient";
import Lighting from "./Lighting";
import Noise from "./Noise";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Gradient />

      <Lighting />

      <Noise />
    </div>
  );
}
