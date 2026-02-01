"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { TrendingUp, Activity, Users, DollarSign } from "lucide-react";

const metrics = [
    {
        label: "Daily Flow",
        value: "$1,240.50",
        trend: "+12.5%",
        icon: DollarSign,
        color: "text-secondary",
        shadow: "shadow-secondary/20",
        graph: "from-secondary/50 to-transparent",
    },
    {
        label: "Active Bridges",
        value: "8",
        trend: "+2 this week",
        icon: Activity,
        color: "text-primary",
        shadow: "shadow-primary/20",
        graph: "from-primary/50 to-transparent",
    },
    {
        label: "Traffic Pulse",
        value: "14.2k",
        trend: "+8.1%",
        icon: Users,
        color: "text-accent",
        shadow: "shadow-accent/20",
        graph: "from-accent/50 to-transparent",
    },
    {
        label: "Signal Strength",
        value: "94%",
        trend: "Optimal",
        icon: TrendingUp,
        color: "text-green-400",
        shadow: "shadow-green-400/20",
        graph: "from-green-400/50 to-transparent",
    },
];

export function MetricsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric) => (
                <GlassPanel
                    key={metric.label}
                    intensity="low"
                    className="p-5 flex flex-col justify-between group hover:bg-white/5 transition-colors border-white/5"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-(family-name:--font-display)">
                            {metric.label}
                        </h3>
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    </div>

                    <div>
                        <div className="text-3xl font-extrabold text-white mb-2 font-sans tabular-nums tracking-tight">{metric.value}</div>
                        <div className="text-xs text-gray-500 font-mono">
                            <span className="text-green-400">{metric.trend}</span> vs last sync
                        </div>
                    </div>

                    {/* Tiny graph line */}
                    <div className={`h-1 w-full rounded-full bg-linear-to-r ${metric.graph} opacity-50 mt-4`} />
                </GlassPanel>
            ))}
        </div>
    );
}
