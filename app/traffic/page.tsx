"use client";
import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { Globe, RefreshCw, Radio, BarChart } from "lucide-react";

export default function TrafficPage() {
    return (
        <div className="space-y-8 h-full flex flex-col pb-20">
            <div className="flex-1 min-h-[400px] relative">
                <GlassPanel className="h-full border-primary/20 bg-black/40 relative overflow-hidden flex items-center justify-center min-h-[400px]">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-size-[40px_40px]" />

                    {/* Animating Rings */}
                    <div className="w-96 h-96 rounded-full border border-primary/20 animate-[ping_3s_linear_infinite] absolute opacity-50" />
                    <div className="w-64 h-64 rounded-full border border-primary/30 animate-[pulse_4s_linear_infinite] absolute" />
                    <div className="w-[500px] h-[500px] rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite] absolute" />

                    <div className="text-center relative z-10">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/50 shadow-[0_0_40px_var(--primary)] backdrop-blur-md relative group">
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-20" />
                            <Globe className="w-12 h-12 text-primary animate-pulse" />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-(family-name:--font-display) tracking-widest text-glow-primary">GLOBAL TRAFFIC MATRIX</h2>
                        <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto font-mono tracking-wide">
                            Signal propagation active across 14 geographic zones.
                        </p>
                    </div>

                    {/* Floating Nodes */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_var(--color-green-500)] animate-bounce delay-75" />
                    <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_var(--color-yellow-500)] animate-pulse delay-150" />
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_var(--color-red-500)] animate-ping duration-1000 delay-300" />
                </GlassPanel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassPanel intensity="low" className="p-6 border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <Radio className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="font-bold text-gray-200">Broadcast Frequency</h3>
                    </div>
                    <div className="text-3xl font-bold text-primary font-(family-name:--font-display)">142.5 MHz</div>
                    <div className="text-xs text-gray-500 mt-2 font-mono tracking-wider">OPTIMAL RANGE</div>
                </GlassPanel>

                <GlassPanel intensity="low" className="p-6 border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg">
                            <RefreshCw className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="font-bold text-gray-200">Crawl Requests</h3>
                    </div>
                    <div className="text-3xl font-bold text-white font-(family-name:--font-display)">28,912</div>
                    <div className="text-xs text-green-400 mt-2 font-mono tracking-wider flex items-center gap-1">
                        <BarChart className="w-3 h-3" /> +12% LAST HOUR
                    </div>
                </GlassPanel>

                <GlassPanel intensity="low" className="p-6 flex flex-col justify-center border-white/5">
                    <NeonButton variant="primary" glow className="w-full h-full text-base">
                        BOOST SIGNAL STRENGTH
                    </NeonButton>
                </GlassPanel>
            </div>
        </div>
    );
}
