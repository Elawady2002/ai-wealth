"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { CheckCircle, Globe, Signal, ExternalLink, RefreshCw, BarChart3, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface BridgePreviewProps {
    url: string;
}

export function BridgePreview({ url }: BridgePreviewProps) {
    const [broadcasted, setBroadcasted] = useState(false);

    return (
        <div className="w-full max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            {/* Success Header */}
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 text-green-400 bg-green-400/10 px-6 py-2 rounded-full border border-green-400/20"
                >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-wide uppercase">Bridge Deployed Successfully</span>
                </motion.div>
                <h1 className="text-3xl md:text-5xl font-bold font-(family-name:--font-display)">
                    Asset Configuration <span className="text-gray-600">#8X29</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Preview Area */}
                <GlassPanel intensity="low" className="col-span-2 min-h-[600px] p-0 overflow-hidden bg-white/95 relative group border-0 shadow-2xl">
                    {/* Fake Browser Bar */}
                    <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 mx-4 bg-white rounded-md h-7 text-xs flex items-center px-3 text-gray-500 shadow-sm border border-gray-200 font-mono overflow-hidden text-ellipsis whitespace-nowrap">
                            {url || "wealth-bridge-secure.com/assets/offer-123"}
                        </div>
                    </div>

                    {/* Content Preview (Mock) */}
                    <div className="p-8 md:p-12 h-full text-black overflow-y-auto">
                        <div className="max-w-xl mx-auto space-y-8 mt-4">
                            <div className="space-y-6 text-center">
                                <div className="text-xs font-bold text-red-600 uppercase tracking-[0.2em] border-b-2 border-red-600 inline-block pb-1">Confidential Report</div>
                                <h1 className="text-4xl md:text-5xl font-black leading-[0.9] text-gray-900 tracking-tight">
                                    The <span className="text-red-700 border-b-4 border-red-700/20">&quot;Silent&quot;</span> Wealth Loophole That Banks Hide
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed font-serif">
                                    Discover the automated system that is generating passive income for thousands of ordinary people without technical skills or capital.
                                </p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800 italic">
                                &quot;I used this exact method to quit my job in 42 days.&quot; - <span className="font-bold not-italic">Sarah J.</span>
                            </div>

                            <button className="w-full bg-red-600 text-white font-bold py-5 rounded-lg shadow-xl uppercase tracking-widest text-lg hover:bg-red-700 transition-transform hover:scale-[1.02] active:scale-[0.98] animate-pulse">
                                Watch The Video Now
                            </button>
                            {/* Trust Badges */}
                            <div className="flex justify-center gap-6 opacity-40 grayscale pt-8 border-t border-gray-200">
                                <div className="h-8 w-16 bg-gray-400 rounded" />
                                <div className="h-8 w-16 bg-gray-400 rounded" />
                                <div className="h-8 w-16 bg-gray-400 rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Overlay: "Live Preview" */}
                    <div className="absolute top-14 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider border border-white/20 shadow-xl">
                        Live Simulator
                    </div>
                </GlassPanel>

                {/* Control Panel */}
                <div className="space-y-6">
                    {/* Status Card */}
                    <GlassPanel className="p-6 space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Real-Time Telemetry
                        </h3>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 border border-yellow-500/20">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase font-mono">Index Status</div>
                                        <div className="text-sm font-bold text-white">Google / Bing</div>
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-yellow-500 animate-pulse bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">PENDING</div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 border border-purple-500/20">
                                        <Signal className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase font-mono">Signal Strength</div>
                                        <div className="text-sm font-bold text-white">Low Frequency</div>
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">12%</div>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 border border-blue-500/20">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase font-mono">Conversion Est.</div>
                                        <div className="text-sm font-bold text-white">4.2% - 6.8%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassPanel>

                    {/* Actions */}
                    <GlassPanel className="p-6 space-y-6 border-primary/30 bg-primary/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2 shadow-primary drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                                Critical Action Required
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                Asset is deployed but invisible to the global algorithm. Broadcast signal now to initiate rapid indexing and traffic flow sequence.
                            </p>
                            <NeonButton
                                variant="primary"
                                glow
                                className="w-full text-base py-4"
                                onClick={() => setBroadcasted(true)}
                                disabled={broadcasted}
                            >
                                {broadcasted ? (
                                    <span className="flex items-center gap-2 text-black font-bold">
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        BROADCASTING...
                                    </span>
                                ) : "BROADCAST SIGNAL"}
                            </NeonButton>
                        </div>
                    </GlassPanel>

                    <button className="w-full py-4 text-sm text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-2 group">
                        <ExternalLink className="w-4 h-4 group-hover:text-primary transition-colors" /> View Live Asset Page
                    </button>
                </div>
            </div>
        </div>
    );
}
