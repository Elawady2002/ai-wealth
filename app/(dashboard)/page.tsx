"use client";

import {
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { motion } from "framer-motion";
import { FounderTransmission } from "@/components/dashboard/founder-transmission";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { SystemStatus } from "@/components/dashboard/system-status";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { ContextualDocs } from "@/components/ui/contextual-docs";

export default function Home() {
  const { user } = useAuth();
  const userNameHandle = user?.email?.split('@')[0] || "Trader";
  const userName = user?.user_metadata?.full_name ||
    userNameHandle.charAt(0).toUpperCase() + userNameHandle.slice(1);

  return (
    <div className="min-h-screen font-(family-name:--font-display)">
      <h1 className="sr-only">AI Wealth OS</h1>

      <div className="space-y-10 pb-20">
        {/* Premium Welcome Banner */}
        <section className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 p-8 md:p-12 rounded-4xl border border-white/10 bg-linear-to-br from-primary/10 via-transparent to-cyan-500/5 backdrop-blur-3xl shadow-2xl shadow-primary/5"
          >
            {/* Animated background glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary/30 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-lg shadow-primary/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  System Pulse: Operational
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none font-(family-name:--font-display)">
                  Welcome back,<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-cyan-400 to-primary/80 drop-shadow-sm">
                    {userName}
                  </span>
                </h2>

                <p className="text-gray-400 max-w-xl text-lg md:text-xl font-medium leading-relaxed">
                  Your Command Center is live. Monitoring your <span className="text-white border-b border-primary/30">digital assets</span> and scaling your distribution in real-time.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Secure
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <Zap className="w-4 h-4 text-yellow-400" /> Optimized
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <TrendingUp className="w-4 h-4 text-primary" /> Scaling
                  </div>
                </div>
              </div>

              {/* Right side status card */}
              <div className="flex flex-col gap-4">
                <div className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl shadow-xl min-w-[200px] group hover:border-primary/30 transition-all duration-500">
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 opacity-60">Control Panel</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-400 font-medium">Network</span>
                      <span className="text-sm text-primary font-bold">Encrypted</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-400 font-medium">Bridges</span>
                      <span className="text-sm text-white font-bold">Synchronized</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-linear-to-r from-primary to-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <FounderTransmission />

        <MetricsGrid />
        <DashboardCards />
        <SystemStatus />
      </div>
    </div>
  );
}

