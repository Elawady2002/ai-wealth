"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { X, Play, Activity } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FounderTransmission() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                className="w-full relative z-20"
            >
                <GlassPanel intensity="low" className="relative border-primary/20 p-0 overflow-hidden group min-h-[160px]">
                    {/* Background Layer with Scanlines and Grid */}
                    <div className="absolute inset-0 bg-black z-0">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,6px_100%] z-10 pointer-events-none opacity-20" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[30px_30px] opacity-10" />
                    </div>

                    <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                        {/* Video Play Trigger (Simulated) */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 cursor-pointer bg-black/40 backdrop-blur-md group-hover:scale-105">
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/20 ml-1 group-hover:fill-primary transition-all duration-500" />
                            <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20" />
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-2">
                            <div className="text-xs uppercase tracking-[0.2em] text-primary/80 flex items-center justify-center md:justify-start gap-2 font-mono">
                                <Activity className="w-3 h-3 animate-pulse" />
                                Incoming Transmission
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-white font-(family-name:--font-display) tracking-wide">
                                &quot;You don&apos;t build income anymore... <span className="text-primary italic">you sync it.</span>&quot;
                            </h2>
                            <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                                System Architect briefing: Understanding how the Wealth OS V1.0 structure replaces manual labor with automated synchronization.
                            </p>
                        </div>

                    </div>

                    <div className="absolute top-4 right-4 z-20">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="p-2 text-white/20 hover:text-white transition-colors rounded-full hover:bg-white/5 bg-black/20 backdrop-blur-sm"
                            aria-label="Dismiss Transmission"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </GlassPanel>
            </motion.div>
        </AnimatePresence >
    );
}
