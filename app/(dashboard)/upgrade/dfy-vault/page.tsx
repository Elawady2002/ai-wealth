"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import {
    Vault,
    Crown,
    Play,
    Sparkles,
    ArrowLeft,
    DollarSign,
    Smartphone,
    MessageCircle,
    TrendingUp,
    User,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Mock data for the 50 Proven Money-Making Articles
const vaultArticles = [
    {
        id: 1,
        category: "Weight Loss",
        potential: "$347/day",
        title: "How I Lost 47 Pounds in 90 Days Without Starving Myself",
        author: "Sarah M.",
        bestFor: ["Weight loss supplements", "meal plans", "fitness programs"]
    },
    {
        id: 2,
        category: "Make Money Online",
        potential: "$412/day",
        title: "I Made $3,847 Last Month Working From My Couch (Here's How)",
        author: "Mike T.",
        bestFor: ["Make money online courses", "affiliate marketing training", "business opportunities"]
    },
    {
        id: 3,
        category: "Business Software",
        potential: "$289/day",
        title: "This $47 Software Replaced My $2,000/Month Marketing Team",
        author: "Jennifer L.",
        bestFor: ["Marketing automation tools", "digital marketing platforms"]
    },
    {
        id: 4,
        category: "Dating",
        potential: "$198/day",
        title: "My Dating Life Was Dead Until I Tried This App (Now I Have 3 Dates This Week)",
        author: "David R.",
        bestFor: ["Dating apps", "compatibility matching tools"]
    },
    {
        id: 5,
        category: "Cryptocurrency",
        potential: "$523/day",
        title: "I Turned $500 Into $8,300 in 60 Days With This Crypto Strategy",
        author: "Alex K.",
        bestFor: ["Cryptocurrency trading courses", "investment strategies"]
    },
    {
        id: 6,
        category: "Fitness",
        potential: "$275/day",
        title: "This Home Workout Program Gave Me Abs in 8 Weeks (No Gym Required)",
        author: "Rachel P.",
        bestFor: ["Home workout programs", "fitness apps"]
    }
];

export default function DFYVaultPage() {
    return (
        <div className="min-h-screen pb-20 space-y-8">
            {/* Navigation */}
            <Link href="/" className="inline-flex items-center gap-2 text-[#00FFFF] hover:underline text-sm font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>

            {/* 2. Hero Welcome Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
            >
                <GlassPanel className="p-12 text-center space-y-6 bg-linear-to-b from-white/3 to-transparent border-white/10 rounded-[2.5rem]">
                    <div className="inline-flex p-5 bg-[#00BFFF] rounded-full shadow-[0_0_30px_rgba(0,191,255,0.4)]">
                        <Crown className="w-10 h-10 text-white fill-white" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Welcome to Your DFY Vault!
                        </h1>
                        <p className="text-[#00BFFF] text-lg md:text-xl font-bold uppercase tracking-wider">
                            50 Proven Articles Ready to Copy & Earn
                        </p>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        These articles have generated over $500,000 in commissions for our members.
                        Just copy any article, add your affiliate link where indicated, and start earning today.
                    </p>
                </GlassPanel>
            </motion.div>

            {/* 3. Training Section (Video Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* How to Use Your DFY Vault */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassPanel className="p-4 flex flex-col md:flex-row gap-6 bg-black/40 border-white/5 rounded-3xl overflow-hidden group">
                        <div className="relative w-full md:w-1/2 aspect-video bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="w-16 h-16 bg-[#00BFFF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pr-4">
                            <div className="flex items-center gap-2 text-[#00BFFF] text-[10px] font-bold uppercase tracking-[0.2em]">
                                <Sparkles className="w-3 h-3" /> Quick Start
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-snug">
                                How to Use Your DFY Vault
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Watch this quick tutorial to learn how to copy these proven articles and start making money today. It only takes 3 minutes!
                            </p>
                        </div>
                    </GlassPanel>
                </motion.div>

                {/* Training Grid - Column 2 */}
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GlassPanel className="p-4 flex gap-6 bg-[#4A3219]/30 border-[#A1713B]/30 rounded-2xl group hover:bg-[#4A3219]/40 transition-all">
                            <div className="relative w-32 h-20 bg-black/40 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/5">
                                <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                                    How To Turn A Measly $5 Into $50, $100, And Even $500 Every Single Day...
                                </h4>
                                <p className="text-[10px] text-gray-400 line-clamp-2 uppercase font-bold tracking-widest mt-1">
                                    ▶ Watch Exclusive Training #1
                                </p>
                            </div>
                        </GlassPanel>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <GlassPanel className="p-4 flex gap-6 bg-[#3D1A1A]/30 border-[#A13B3B]/30 rounded-2xl group hover:bg-[#3D1A1A]/40 transition-all">
                            <div className="relative w-32 h-20 bg-black/40 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/5">
                                <Play className="w-6 h-6 text-red-500 fill-red-500" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                                    How To Hijack Top Publications Traffic In Less Than 9 Minutes, And Turn Them Into $500 Paydays
                                </h4>
                                <p className="text-[10px] text-gray-400 line-clamp-2 uppercase font-bold tracking-widest mt-1">
                                    ▶ Watch Exclusive Training #2
                                </p>
                            </div>
                        </GlassPanel>
                    </motion.div>
                </div>
            </div>

            {/* 4. Articles Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#00BFFF]/10 rounded-xl border border-[#00BFFF]/20">
                        <TrendingUp className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-white">50 Proven Money-Making Articles</h2>
                        <p className="text-gray-500 text-sm font-bold">Click "Use This Article" and we'll create a page for you automatically</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {vaultArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <GlassPanel className="p-6 space-y-6 bg-black/40 border-white/5 rounded-4xl hover:border-primary/30 transition-all group shadow-xl">
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                        {article.category}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-primary">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span className="text-xs font-black tracking-tight">{article.potential}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight min-h-[56px]">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold">
                                        <User className="w-3.5 h-3.5" />
                                        By {article.author}
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-2">
                                    <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest">
                                        <Sparkles className="w-3 h-3" /> Best for:
                                    </div>
                                    <p className="text-gray-400 text-[11px] font-medium leading-relaxed">
                                        {article.bestFor.join(", ")}
                                    </p>
                                </div>

                                <button className="w-full bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-black font-black py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,191,255,0.25)] flex items-center justify-center gap-2 group/btn active:scale-95 text-sm uppercase tracking-wider">
                                    Use This Article
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="pt-10 text-center">
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em]">
                        More Articles Being Added Weekly
                    </p>
                </div>
            </div>
        </div>
    );
}
