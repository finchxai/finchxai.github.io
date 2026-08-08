"use client";

import HeroDashboard from "../ui/HeroDashboard";
import FloatingNode from "./FloatingNode";

import {
  Globe,
  Workflow,
  Megaphone,
  ChartColumn,
  TrendingUp,
  Bot,
} from "lucide-react";

export default function GrowthEngine() {
  return (
    <div className="relative h-[720px] w-full">
      {/* Dashboard */}

      <div className="absolute left-1/2 top-1/2 w-[560px] -translate-x-1/2 -translate-y-1/2">
        <HeroDashboard />
      </div>

      {/* Top */}

      <FloatingNode
        title="Digital Strategy"
        icon={<TrendingUp size={18} />}
        className="left-1/2 top-0 -translate-x-1/2"
        delay={0}
      />

      {/* Left */}

      <FloatingNode
        title="Websites"
        icon={<Globe size={18} />}
        className="left-0 top-36"
        delay={0.2}
      />

      {/* Left Bottom */}

      <FloatingNode
        title="Automation"
        icon={<Workflow size={18} />}
        className="left-6 bottom-24"
        delay={0.4}
      />

      {/* Right */}

      <FloatingNode
        title="Marketing"
        icon={<Megaphone size={18} />}
        className="right-0 top-36"
        delay={0.6}
      />

      {/* Right Bottom */}

      <FloatingNode
        title="Analytics"
        icon={<ChartColumn size={18} />}
        className="right-6 bottom-24"
        delay={0.8}
      />

      {/* Bottom */}

      <FloatingNode
        title="AI Solutions"
        icon={<Bot size={18} />}
        className="bottom-0 left-1/2 -translate-x-1/2"
        delay={1}
      />
    </div>
  );
}
