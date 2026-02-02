"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { CheckCircle, Globe, Signal, RefreshCw, BarChart3, Zap, ArrowRight, User, TrendingUp, Play, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";

interface BridgePreviewProps {
    url: string;
}

export function BridgePreview({ url }: BridgePreviewProps) {
    const [broadcasted, setBroadcasted] = useState(false);
    const [saving, setSaving] = useState(false);
    const router = useRouter();
    const { user } = useAuth();

    const bridgeId = `BRG-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const getDomain = (urlString: string) => {
        try {
            const domain = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`).hostname;
            return domain.replace('www.', '');
        } catch {
            return urlString.slice(0, 30);
        }
    };

    const handleBroadcast = async () => {
        setBroadcasted(true);
        setSaving(true);

        try {
            const { error } = await supabase.from('bridges').insert({
                user_id: user?.id,
                title: `Bridge - ${getDomain(url)}`,
                affiliate_url: url,
                status: 'indexing',
                traffic: '0',
                earnings: '$0.00',
                created_at: new Date().toISOString(),
            });

            if (error) console.error('Error saving bridge:', error);

            setTimeout(() => {
                router.push('/bridges');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
            setSaving(false);
            setBroadcasted(false);
        }
    };

    return (
        <div className="min-h-screen pb-20 w-full">
            {/* Success Banner */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center py-6"
            >
                <div className="inline-flex items-center gap-3 text-emerald-400 bg-emerald-500/10 px-6 py-2 rounded-full border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-bold uppercase text-sm tracking-wide">Ready for Broadcast</span>
                    <span className="text-gray-500 font-mono text-xs border-l border-white/10 pl-3">#{bridgeId}</span>
                </div>
            </motion.div>

            {/* PREVIEW CONTAINER */}
            <div className="mb-12 w-full px-4 md:px-8">
                {/* Browser Frame */}
                <div className="bg-[#0f1115] rounded-t-2xl border border-white/10 border-b-0 shadow-2xl w-full">
                    <div className="flex items-center px-6 py-4 gap-4">
                        <div className="flex gap-2.5">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors" />
                            <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors" />
                        </div>
                        <div className="flex-1 bg-[#1c1e24] rounded-lg h-10 flex items-center px-5 text-gray-400 font-mono text-sm border border-white/5 transition-colors hover:bg-[#23252b] hover:border-white/10 group">
                            <Globe className="w-4 h-4 mr-3 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                            <span className="truncate max-w-[calc(100%-20px)] group-hover:text-gray-300 transition-colors">{url || "https://wealth-bridge.com/your-offer"}</span>
                        </div>
                    </div>
                </div>

                {/* Website Content - Modern VSL Style */}
                <div className="bg-white rounded-b-2xl border border-white/10 border-t-0 overflow-hidden shadow-2xl relative w-full">
                    <div className="w-full">
                        {/* Hero Section */}
                        <div className="bg-linear-to-b from-slate-50 to-white py-16 px-4 text-center">
                            <div className="max-w-5xl mx-auto space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-xs uppercase tracking-widest">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                    </span>
                                    Restricted Access
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                    The <span className="bg-clip-text text-transparent bg-linear-to-r from-red-600 to-orange-600">"Silent Architecture"</span> That<br className="hidden md:block" />
                                    Generates Wealth While You Sleep
                                </h1>

                                <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                                    Watch the private briefing below to discover the automated system banking $1,200+ daily for ordinary people.
                                </p>
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className="bg-white pb-20 px-4">
                            <div className="max-w-5xl mx-auto">
                                <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 group cursor-pointer border-4 border-white ring-1 ring-slate-900/10">
                                    {/* Video Placeholder Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-lg">
                                            <Play className="w-10 h-10 text-white fill-white ml-2" />
                                        </div>
                                        <p className="text-white/60 font-medium uppercase tracking-widest text-sm">Click to Initialize Stream</p>
                                    </div>

                                    {/* Video Controls Mockup */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
                                        <div className="h-full w-1/3 bg-red-600 relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t border-slate-100 pt-8">
                                    <div className="flex items-center justify-center gap-3 text-slate-500">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                        <span className="font-semibold text-sm">256-Bit Secure</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-slate-500">
                                        <User className="w-5 h-5 text-blue-500" />
                                        <span className="font-semibold text-sm">Member Only Access</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-slate-500">
                                        <Clock className="w-5 h-5 text-purple-500" />
                                        <span className="font-semibold text-sm">Limited Time Offer</span>
                                    </div>
                                </div>

                                {/* CTA Area */}
                                <div className="mt-12 text-center">
                                    <button className="bg-linear-to-r from-red-600 to-orange-600 text-white font-black py-6 px-16 rounded-xl text-xl md:text-2xl uppercase tracking-wide shadow-xl shadow-red-600/20 hover:scale-105 hover:shadow-red-600/40 transition-all duration-300">
                                        Get Instant Access
                                    </button>
                                    <p className="mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest">No Credit Card Required For Demo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTROLS - REFINED DESIGN */}
            <div className="w-full px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

                    {/* Status Card 1 */}
                    <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-[160px] relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-lg shadow-black/50">
                        <div className="flex justify-between items-start">
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-emerald-400/70 transition-colors">Index Status</p>
                            <Globe className="w-5 h-5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="relative z-10 space-y-3">
                            <h3 className="text-3xl font-bold text-white tracking-tight leading-none group-hover:scale-[1.02] transition-transform origin-left">Google / Bing</h3>
                            <div className="flex items-center gap-2.5">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                                <p className="text-[11px] text-yellow-500/90 font-bold tracking-widest uppercase">Pending Sync...</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-emerald-600 to-emerald-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Status Card 2 */}
                    <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-[160px] relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-lg shadow-black/50">
                        <div className="flex justify-between items-start">
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-blue-400/70 transition-colors">Signal Strength</p>
                            <Signal className="w-5 h-5 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="relative z-10 space-y-3">
                            <h3 className="text-5xl font-black text-white tracking-tighter leading-none group-hover:scale-[1.02] transition-transform origin-left">12%</h3>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                                <p className="text-[11px] text-blue-400/90 font-bold tracking-widest uppercase">+2% this week</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-blue-600 to-blue-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Status Card 3 */}
                    <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-[160px] relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 shadow-lg shadow-black/50">
                        <div className="flex justify-between items-start">
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-purple-400/70 transition-colors">Est. Conversion</p>
                            <BarChart3 className="w-5 h-5 text-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="relative z-10 space-y-3">
                            <h3 className="text-5xl font-black text-white tracking-tighter leading-none group-hover:scale-[1.02] transition-transform origin-left">4.2%</h3>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-0.5 rounded-sm bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase border border-purple-500/30">High</div>
                                <p className="text-[11px] text-purple-400/90 font-bold tracking-widest uppercase">Potential</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-purple-600 to-purple-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Broadcast Button */}
                    <button
                        onClick={handleBroadcast}
                        disabled={broadcasted}
                        className="bg-[#0b0c10] hover:bg-[#0f1115] border border-primary/20 hover:border-primary/50 rounded-2xl p-6 flex flex-col justify-between h-[160px] relative overflow-hidden group transition-all duration-300 text-left w-full shadow-lg shadow-black/50 hover:shadow-primary/20 cursor-pointer"
                    >
                        <div className="flex justify-between items-start w-full">
                            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Action Required</p>
                            <Zap className="w-5 h-5 text-primary animate-[pulse_2s_infinite]" />
                        </div>

                        <div className="relative z-10 mt-auto">
                            {broadcasted ? (
                                <div className="flex items-center gap-3">
                                    <RefreshCw className="w-6 h-6 animate-spin text-white" />
                                    <h3 className="text-3xl font-black text-white uppercase tracking-wider">
                                        {saving ? 'Processing' : 'Done'}
                                    </h3>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between w-full group-hover:translate-x-1 transition-transform duration-300">
                                    <h3 className="text-3xl font-black text-white uppercase tracking-wider group-hover:text-primary transition-colors">Broadcast</h3>
                                    <ArrowRight className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                            )}
                            <p className="text-[10px] text-gray-500 font-mono tracking-[0.15em] mt-3 uppercase group-hover:text-primary/70 transition-colors">Initiate Traffic Flow</p>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-linear-to-r from-primary to-primary/50 shadow-[0_-2px_10px_rgba(var(--primary),0.5)]" />
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </button>

                </div>
            </div>
        </div>
    );
}
