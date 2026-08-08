import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-400/40
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
