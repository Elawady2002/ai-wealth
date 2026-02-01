"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import {
    Cpu,
    Zap,
    TrendingUp,
    Target,
    BarChart3,
    Brain,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Lock
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
    {
        icon: Brain,
        title: "Smart Optimization",
        description: "AI analyzes your traffic patterns and automatically adjusts your bridges for maximum conversion.",
        status: "active"
    },
    {
        icon: Target,
        title: "Audience Targeting",
        description: "Precision targeting based on user behavior, demographics, and engagement metrics.",
        status: "active"
    },
    {
        icon: BarChart3,
        title: "A/B Testing",
        description: "Run intelligent split tests to find the highest converting variations.",
        status: "coming-soon"
    },
    {
        icon: Sparkles,
        title: "Content Generation",
        description: "AI-powered headlines and copy that speak directly to your audience's desires.",
        status: "coming-soon"
    },
];

const stats = [
    { label: "Avg. Conversion Boost", value: "+34%", icon: TrendingUp },
    { label: "AI Optimizations", value: "1,247", icon: Zap },
    { label: "Active Tests", value: "12", icon: Target },
];

export default function ConversionPage() {
    return (
        <div className="min-h-screen font-(family-name:--font-display)">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tighter">
                        Conversion AI
                    </h1>
                </div>
                <p className="text-gray-400 max-w-2xl">
                    Harness the power of artificial intelligence to optimize your traffic conversion rates and maximize revenue.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <GlassPanel intensity="low" className="p-5 border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                <stat.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="text-3xl font-bold text-white">{stat.value}</div>
                        </GlassPanel>
                    </motion.div>
                ))}
            </div>

            {/* Features Grid */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">AI Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                            <GlassPanel
                                intensity="medium"
                                className={`p-6 border-white/5 ${feature.status === 'coming-soon' ? 'opacity-60' : ''}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feature.status === 'active'
                                        ? 'bg-primary/10'
                                        : 'bg-gray-500/10'
                                        }`}>
                                        <feature.icon className={`w-6 h-6 ${feature.status === 'active'
                                            ? 'text-primary'
                                            : 'text-gray-500'
                                            }`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-white">{feature.title}</h3>
                                            {feature.status === 'active' ? (
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 uppercase">Active</span>
                                            ) : (
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 uppercase flex items-center gap-1">
                                                    <Lock className="w-3 h-3" /> Coming Soon
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Active Optimizations */}
            <GlassPanel intensity="medium" className="p-6 border-primary/20 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">Active Optimizations</h2>
                        <p className="text-sm text-gray-400">AI is currently optimizing these bridges</p>
                    </div>
                    <NeonButton variant="ghost">
                        View All
                    </NeonButton>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Bridge Alpha", optimization: "Headline testing", improvement: "+12%" },
                        { name: "Bridge Beta", optimization: "CTA placement", improvement: "+8%" },
                        { name: "Bridge Gamma", optimization: "Load time", improvement: "+23%" },
                    ].map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-white/5"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <div>
                                    <div className="font-medium text-white">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.optimization}</div>
                                </div>
                            </div>
                            <div className="text-green-400 font-bold">{item.improvement}</div>
                        </motion.div>
                    ))}
                </div>
            </GlassPanel>

            {/* CTA */}
            <GlassPanel intensity="low" className="p-6 bg-linear-to-r from-primary/10 to-purple-500/10 border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Unlock Advanced AI Features</h3>
                        <p className="text-sm text-gray-400">Get access to A/B testing, content generation, and more.</p>
                    </div>
                    <Link href="/upgrade">
                        <NeonButton variant="primary" glow>
                            Upgrade Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </NeonButton>
                    </Link>
                </div>
            </GlassPanel>
        </div>
    );
}
