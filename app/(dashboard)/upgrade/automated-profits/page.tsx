"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Bot, Check, ArrowLeft, ShieldCheck, Infinity, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
    {
        title: "Complete Automation Bots",
        description: "Bots that work 24/7 so you don't have to",
    },
    {
        title: "AI Content Generator",
        description: "Create content automatically with artificial intelligence",
    },
    {
        title: "Auto-Scheduling System",
        description: "Automatic posting across all platforms",
    },
    {
        title: "Advanced Analytics Dashboard",
        description: "Know exactly what's working and what isn't",
    },
    {
        title: "Automatic A/B Testing",
        description: "Continuous optimization for better results",
    },
    {
        title: "50+ Platform Integrations",
        description: "Connect all your accounts in one place",
    },
];

const automationStats = [
    { label: "Hours Saved Monthly", value: "200+" },
    { label: "Profit Increase", value: "340%" },
    { label: "Auto-Posts Per Day", value: "50+" },
];

export default function AutomatedProfitsPage() {
    return (
        <div className="min-h-screen font-(family-name:--font-display)">
            <div className="space-y-8 pb-20">
                {/* Back Button */}
                <Link
                    href="/upgrade"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Packages</span>
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
                            <Bot className="w-4 h-4" />
                            <span>Full Automation</span>
                            <Sparkles className="w-4 h-4" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
                            Automated Profits
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Let artificial intelligence work for you. This package transforms your
                            business into a profit machine that runs while you sleep.
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-extrabold text-white">$297</span>
                            <span className="text-xl text-gray-500 line-through">$997</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full font-medium">
                                Save 70%
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full md:w-auto px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(6,182,212,0.4)] hover:shadow-[0_15px_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105">
                            Activate Full Automation
                        </button>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>30-Day Money Back</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Infinity className="w-5 h-5 text-cyan-400" />
                                <span>Lifetime Access</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassPanel intensity="medium" className="p-6">
                            <h3 className="text-xl font-bold text-white mb-6">
                                What&apos;s Included?
                            </h3>

                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-cyan-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-white">
                                                {feature.title}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {feature.description}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </GlassPanel>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-cyan-400" />
                        Real Automation Numbers
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {automationStats.map((stat, i) => (
                            <GlassPanel
                                key={i}
                                intensity="low"
                                className="p-6 text-center border-cyan-500/20"
                            >
                                <div className="text-4xl font-extrabold text-cyan-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </GlassPanel>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
