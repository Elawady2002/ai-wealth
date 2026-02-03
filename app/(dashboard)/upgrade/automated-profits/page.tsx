"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import {
    TrendingUp,
    Zap,
    Play,
    Sparkles,
    ArrowLeft,
    CheckCircle2,
    Users,
    Clock,
    ExternalLink,
    Search,
    Lightbulb,
    Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function AutomatedIncomePage() {
    const [selectedNiche, setSelectedNiche] = useState("All");
    const [pageUrl, setPageUrl] = useState("");
    const [completedSources, setCompletedSources] = useState<number[]>([]);

    const niches = [
        "All",
        "Weight Loss",
        "Make Money Online",
        "Health & Fitness",
        "Tech & Gadgets",
        "Beauty & Skincare",
        "Relationships",
        "Pets",
        "Home & Garden"
    ];

    const trafficSources = [
        {
            id: 1,
            name: "MyFitnessPal Community",
            type: "Forum",
            difficulty: "Easy",
            traffic: "200-500 visitors/month",
            time: "10 minutes",
            niche: "Weight Loss",
            color: "text-emerald-400"
        },
        {
            id: 2,
            name: "SparkPeople Forums",
            type: "Forum",
            difficulty: "Easy",
            traffic: "150-400 visitors/month",
            time: "10 minutes",
            niche: "Health & Fitness",
            color: "text-emerald-400"
        },
        {
            id: 3,
            name: "3FatChicks Forum",
            type: "Forum",
            difficulty: "Easy",
            traffic: "100-300 visitors/month",
            time: "8 minutes",
            niche: "Weight Loss",
            color: "text-emerald-400"
        },
        {
            id: 4,
            name: "LoseIt! Reddit Community",
            type: "Social",
            difficulty: "Easy",
            traffic: "300-800 visitors/month",
            time: "5 minutes",
            niche: "Weight Loss",
            color: "text-blue-400"
        }
    ];

    const filteredSources = selectedNiche === "All"
        ? trafficSources
        : trafficSources.filter(s => s.niche === selectedNiche);

    const progress = (completedSources.length / 102) * 100;

    const toggleComplete = (id: number) => {
        if (completedSources.includes(id)) {
            setCompletedSources(completedSources.filter(sid => sid !== id));
        } else {
            setCompletedSources([...completedSources, id]);
        }
    };

    return (
        <div className="min-h-screen pb-20 space-y-8">
            {/* Navigation */}
            <Link href="/" className="inline-flex items-center gap-2 text-[#00FFFF] hover:underline text-sm font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>

            {/* 1. Hero Section (Traffic On Autopilot) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
            >
                <GlassPanel className="p-12 text-center space-y-6 bg-linear-to-b from-[#059669]/20 to-transparent border-[#059669]/20 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#059669] to-transparent" />
                    <div className="inline-flex p-5 bg-[#059669] rounded-full shadow-[0_0_30px_rgba(5,150,105,0.4)]">
                        <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Automated Income - Traffic On Autopilot
                        </h1>
                        <p className="text-[#10B981] text-lg md:text-xl font-bold uppercase tracking-wider">
                            100+ Free Traffic Sources - Submit Once, Get Traffic Forever
                        </p>
                    </div>
                    <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        Stop chasing traffic every day. Submit your link to these 100+ sites ONCE and
                        get ongoing traffic automatically. Our members have generated over 2.8 million
                        visitors using these sources.
                    </p>
                </GlassPanel>
            </motion.div>

            {/* 2. Tutorial Video Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <GlassPanel className="p-4 flex flex-col md:flex-row gap-8 bg-black/40 border-white/5 rounded-3xl overflow-hidden group">
                    <div className="relative w-full md:w-1/2 aspect-video bg-linear-to-br from-emerald-900/40 to-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#059669]/10 group-hover:bg-[#059669]/5 transition-colors" />
                        <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer z-10">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Watch Automated Income Tutorial
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pr-4">
                        <div className="flex items-center gap-2 text-[#059669] text-[10px] font-bold uppercase tracking-[0.2em]">
                            <Sparkles className="w-3 h-3" /> Watch First
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-snug">
                            How to Use Automated Income
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Watch this quick tutorial to learn how to submit your link to these 100+ traffic sources and get automated traffic forever!
                        </p>
                    </div>
                </GlassPanel>
            </motion.div>

            {/* 3. How This Works Section */}
            <div className="space-y-6">
                <GlassPanel className="p-8 space-y-8 bg-linear-to-b from-emerald-950/40 to-black border-emerald-500/10 rounded-3xl">
                    <div className="flex items-center gap-2 text-white font-black text-xl">
                        <Users className="w-6 h-6 text-[#10B981]" />
                        How This Works (Super Simple!)
                    </div>

                    <div className="p-6 bg-emerald-950/40 border border-emerald-500/20 rounded-2xl space-y-4">
                        <h4 className="text-white font-bold text-lg">The Secret To Automated Traffic:</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Most people waste hours every day posting on social media for traffic.
                        </p>
                        <p className="text-white/80 font-medium text-sm">
                            But what if you could submit your link ONCE and get traffic for months or even YEARS?
                        </p>
                        <p className="text-[#10B981] font-bold text-sm">
                            That's exactly what these traffic sources do. You submit once, and they send you visitors automatically - no daily work required!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: 1, title: "Pick Your Niche", desc: "Choose your niche below and get 100+ traffic sources specifically for your market." },
                            { step: 2, title: "Submit Your Link", desc: "Follow the simple step-by-step instructions to submit your link to each site. Takes 5-15 minutes per site." },
                            { step: 3, title: "Get Automatic Traffic", desc: "Once submitted, these sites send you traffic automatically. No daily work needed!" }
                        ].map((s, i) => (
                            <div key={i} className="p-8 space-y-4 bg-emerald-900/10 border border-emerald-500/10 rounded-2xl">
                                <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center font-black text-white">
                                    {s.step}
                                </div>
                                <h4 className="text-lg font-bold text-white">{s.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl flex gap-4">
                        <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <span className="text-yellow-500 text-xs font-black uppercase tracking-widest">Pro Tip:</span>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Set aside 2-3 hours and submit to as many sources as possible. The more you submit to, the more automatic traffic you get. Most members submit to 50+ sources in their first week!
                            </p>
                        </div>
                    </div>
                </GlassPanel>
            </div>

            {/* 4. Submission Interface */}
            <div className="space-y-6">
                <GlassPanel className="p-8 space-y-8 bg-linear-to-br from-gray-900/50 to-transparent border-white/5 rounded-[2.5rem]">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-white">Enter Your Page URL:</h2>
                        <div className="relative">
                            <input
                                type="text"
                                value={pageUrl}
                                onChange={(e) => setPageUrl(e.target.value)}
                                placeholder="https://your-page-url.com"
                                className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#059669]/50 transition-all font-mono text-sm"
                            />
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">
                            This is the page you want to promote. We'll automatically insert it in all the submission descriptions below.
                        </p>
                    </div>

                    {/* Niche Filters */}
                    <div className="flex flex-wrap gap-2">
                        {niches.map((n) => (
                            <button
                                key={n}
                                onClick={() => setSelectedNiche(n)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${selectedNiche === n
                                        ? "bg-[#059669] text-white border-[#059669] shadow-[0_0_15px_rgba(5,150,105,0.3)]"
                                        : "bg-black/40 text-gray-400 border-white/10 hover:border-[#059669]/50 hover:text-white"
                                    }`}
                            >
                                {n}
                            </button>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="p-6 bg-[#059669]/5 border border-[#059669]/10 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Your Progress:</h4>
                                <p className="text-xs text-gray-500 font-bold">{completedSources.length} of 102 sources completed</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-black text-[#10B981]">{Math.round(progress)}%</span>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Complete</p>
                            </div>
                        </div>
                        <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-linear-to-r from-[#059669] to-[#10B981]"
                            />
                        </div>
                    </div>

                    {/* Traffic Sources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredSources.map((source) => (
                            <GlassPanel key={source.id} className="p-6 space-y-4 bg-black/40 border-white/5 rounded-3xl group">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <span className={`px-2 py-0.5 rounded bg-emerald-500/10 ${source.color} text-[10px] font-bold uppercase`}>
                                            {source.type}
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">
                                            {source.difficulty}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => toggleComplete(source.id)}
                                        className={`transition-colors ${completedSources.includes(source.id) ? 'text-emerald-500' : 'text-gray-600 hover:text-gray-400'}`}
                                    >
                                        <CheckCircle2 className="w-5 h-5 fill-current bg-black rounded-full" />
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white">{source.name}</h3>
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Users className="w-3.5 h-3.5" />
                                            Traffic: {source.traffic}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Clock className="w-3.5 h-3.5" />
                                            Time: {source.time}
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    View Instructions
                                </button>
                            </GlassPanel>
                        ))}
                    </div>

                    {/* Footer Indicator */}
                    <div className="text-center pt-8">
                        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                            New Sources Added Every 24 Hours
                        </p>
                    </div>
                </GlassPanel>
            </div>
        </div>
    );
}
