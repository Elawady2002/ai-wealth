"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Server, Database, BrainCircuit, Globe } from "lucide-react";

const statuses = [
    { label: "Servers", value: "Online", color: "text-green-400", bg: "bg-green-500", icon: Server },
    { label: "Indexing API", value: "Active", color: "text-blue-400", bg: "bg-blue-500", icon: Globe },
    { label: "AI Neural Core", value: "Synchronized", color: "text-purple-400", bg: "bg-purple-500", icon: BrainCircuit },
    { label: "Encryption", value: "AES-256", color: "text-gray-300", bg: "bg-gray-400", icon: Database },
];

export function SystemStatus() {
    return (
        <GlassPanel intensity="low" className="p-6 border-white/5">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-mono flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Global System Status
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statuses.map((status) => (
                    <div key={status.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className="p-2.5 rounded-lg bg-white/5 shrink-0">
                            <status.icon className={`w-5 h-5 ${status.color}`} />
                        </div>
                        <div className="min-w-0">
                            <div className="text-[10px] uppercase text-gray-500 font-mono mb-0.5 truncate">{status.label}</div>
                            <div className={`text-sm font-bold ${status.color} font-(family-name:--font-display) tracking-tight`}>{status.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassPanel>
    );
}
