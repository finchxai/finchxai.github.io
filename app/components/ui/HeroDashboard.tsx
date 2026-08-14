"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Activity,
  Bot,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="relative w-[720px]"
    >
      <div className="rounded-[36px] border border-white/16 bg-white/[0.10] p-8 shadow-[0_40px_120px_rgba(0,0,0,.45)] backdrop-blur-3xl backdrop-brightness-75">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
              AI OPERATING SYSTEM
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              FINCHX Intelligence
            </h2>
          </div>

          <div className="rounded-2xl bg-emerald-400/20 p-4">
            <Bot className="h-7 w-7 text-emerald-300" />
          </div>
        </div>

        {/* KPI */}

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/65">Monthly Leads</p>
            <h3 className="mt-3 text-5xl font-bold text-white">1,247</h3>
            <p className="mt-2 text-emerald-300">+38%</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/65">Automation</p>
            <h3 className="mt-3 text-5xl font-bold text-white">98%</h3>
            <p className="mt-2 text-emerald-300">Running</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/65">Revenue</p>
            <h3 className="mt-3 text-5xl font-bold text-white">$184K</h3>
            <p className="mt-2 text-emerald-300">+24%</p>
          </div>
        </div>

        {/* Analytics */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/65">AI Performance Score</p>

              <h2 className="mt-2 text-6xl font-bold text-white">94</h2>
            </div>

            <TrendingUp className="h-16 w-16 text-emerald-300" />
          </div>

          <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 2 }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300"
            />
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <Globe className="mb-4 h-7 w-7 text-cyan-300" />

            <h4 className="font-semibold text-white">Website</h4>

            <p className="mt-2 text-sm text-white/65">Optimized</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <ShieldCheck className="mb-4 h-7 w-7 text-emerald-300" />

            <h4 className="font-semibold text-white">Security</h4>

            <p className="mt-2 text-sm text-white/65">Protected</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <Sparkles className="mb-4 h-7 w-7 text-cyan-300" />

            <h4 className="font-semibold text-white">AI Engine</h4>

            <p className="mt-2 text-sm text-white/65">Online</p>
          </div>
        </div>
      </div>

      {/* Floating Badge */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -right-8 top-24 rounded-full border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Activity className="text-emerald-300" />

          <span className="font-semibold text-white">AI Live</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
