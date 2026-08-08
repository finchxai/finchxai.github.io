import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-white/5 px-6 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,.12)]">
      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
        {children}
      </span>
    </div>
  );
}
