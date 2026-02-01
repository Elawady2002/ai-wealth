"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { ExternalLink, Zap, LineChart, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface BridgeCardProps {
    title: string;
    url: string;
    status: "indexing" | "live" | "optimizing" | "paused";
    traffic: string;
    signalStrength: number;
    earnings: string;
}

export function BridgeCard({ title, url, status, traffic, signalStrength, earnings }: BridgeCardProps) {
    const getStatusColor = (s: string) => {
        switch (s) {
            case "live": return "text-green-500 bg-green-500/10 border-green-500/20";
            case "indexing": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
            case "optimizing": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
            default: return "text-gray-500 bg-gray-500/10 border-gray-500/20";
        }
    };

    return (
        <GlassPanel intensity="low" className="p-0 border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
            {/* Card Header */}
            <div className="p-5 border-b border-white/5 bg-white/2">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 mr-4">
                        <h3 className="font-bold text-lg text-white truncate font-(family-name:--font-display) tracking-wide group-hover:text-primary transition-colors">{title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <Globe className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-500 truncate max-w-[150px] font-mono">{url}</span>
                        </div>
                    </div>
                    <div className={cn("px-2.5 py-1 rounded text-[10px] font-bold uppercase border", getStatusColor(status))}>
                        <span className="flex items-center gap-1.5">
                            <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", status === 'live' ? 'bg-green-500' : status === 'indexing' ? 'bg-yellow-500' : 'bg-blue-500')} />
                            {status}
                        </span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="p-5 grid grid-cols-3 gap-3">
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase mb-1">Traffic</div>
                    <div className="text-sm font-bold text-white font-sans tabular-nums">{traffic}</div>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase mb-1 flex items-center gap-1">
                        Signal
                    </div>
                    <div className={cn("text-sm font-bold flex items-center gap-1 font-sans tabular-nums", signalStrength > 80 ? "text-primary" : "text-yellow-500")}>
                        {signalStrength}% <Zap className="w-3 h-3 fill-current" />
                    </div>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase mb-1">Earned</div>
                    <div className="text-sm font-bold text-green-400 font-sans tabular-nums">{earnings}</div>
                </div>
            </div>

            {/* Actions */}
            <div className="p-5 pt-0 flex gap-3">
                <NeonButton variant="ghost" className="flex-1 py-0 h-10 text-xs tracking-wider border-white/10 hover:bg-white/5">
                    <LineChart className="w-3 h-3 mr-2" /> Analytics
                </NeonButton>
                <NeonButton variant="primary" glow={false} className="flex-1 py-0 h-10 text-xs tracking-wider bg-white/5 border-white/10 hover:bg-primary/20 hover:text-primary hover:border-primary/50 text-gray-300">
                    Optimize
                </NeonButton>
                <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>


            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:via-primary/50 transition-all duration-500" />
        </GlassPanel>
    );
}
