"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Crown, Zap, Rocket, Bot, ArrowRight, Check, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const upgrades = [
    {
        id: "dfy-vault",
        name: "DFY Vault",
        tagline: "Done-For-You Digital Assets",
        description: "Get a complete library of ready-to-use digital assets that convert.",
        icon: Rocket,
        price: "$97",
        originalPrice: "$297",
        discount: "67% OFF",
        color: "from-purple-500 to-pink-500",
        borderColor: "border-purple-500/30",
        glow: "rgba(168, 85, 247, 0.3)",
        features: [
            "50+ High-Converting Landing Pages",
            "Proven Email Sequences",
            "Advanced Sales Scripts",
            "Social Media Templates",
        ],
        popular: false,
    },
    {
        id: "instant-income",
        name: "Instant Income",
        tagline: "Fast-Track Your Earnings",
        description: "Start generating profits in less than 24 hours with proven strategies.",
        icon: Zap,
        price: "$197",
        originalPrice: "$497",
        discount: "60% OFF",
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-500/30",
        glow: "rgba(234, 179, 8, 0.3)",
        features: [
            "24-Hour Profit Blueprint",
            "Top 20 High-Commission Products",
            "Battle-Tested Ad Templates",
            "30-Day VIP Support Access",
        ],
        popular: true,
    },
    {
        id: "automated-profits",
        name: "Automated Profits",
        tagline: "Set It & Forget It",
        description: "Full automation system that works while you sleep.",
        icon: Bot,
        price: "$297",
        originalPrice: "$997",
        discount: "70% OFF",
        color: "from-cyan-500 to-blue-500",
        borderColor: "border-cyan-500/30",
        glow: "rgba(6, 182, 212, 0.3)",
        features: [
            "Complete Automation Bots",
            "AI Content Generator",
            "Auto-Scheduling System",
            "Advanced Analytics Dashboard",
        ],
        popular: false,
    },
];

export default function UpgradePage() {
    return (
        <div className="min-h-screen font-(family-name:--font-display)">
            <div className="space-y-8 pb-20">
                {/* Hero Section */}
                <div className="text-center space-y-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium"
                    >
                        <Crown className="w-4 h-4" />
                        <span>Unlock Premium Access</span>
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
                    >
                        Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-400">Power Level</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Each package is designed to accelerate your income with proven systems and automation tools.
                    </motion.p>
                </div>

                {/* Upgrade Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {upgrades.map((upgrade, index) => (
                        <motion.div
                            key={upgrade.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="relative"
                        >
                            {/* Popular Badge */}
                            {upgrade.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-linear-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-yellow-500/30">
                                        <Star className="w-3 h-3 fill-current" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <Link href={`/upgrade/${upgrade.id}`} className="block h-full">
                                <GlassPanel
                                    intensity="medium"
                                    className={`h-full p-8 hover:bg-white/5 transition-all duration-500 group cursor-pointer ${upgrade.borderColor} hover:border-white/30 ${upgrade.popular ? 'ring-2 ring-yellow-500/50' : ''}`}
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-linear-to-br ${upgrade.color} flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 group-hover:scale-110`}
                                        style={{ boxShadow: `0 15px 50px ${upgrade.glow}` }}
                                    >
                                        <upgrade.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title & Tagline */}
                                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                                        {upgrade.name}
                                    </h3>
                                    <p className="text-sm text-primary font-medium mb-3">{upgrade.tagline}</p>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                        {upgrade.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {upgrade.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-gray-300"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-green-400" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-extrabold text-white font-(family-name:--font-display)">
                                                    {upgrade.price}
                                                </span>
                                                <span className="text-sm text-gray-500 line-through">
                                                    {upgrade.originalPrice}
                                                </span>
                                            </div>
                                            <span className="text-xs text-green-400 font-medium">
                                                {upgrade.discount}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                                            <span className="text-sm font-medium">View Details</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </GlassPanel>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center pt-8"
                >
                    <p className="text-gray-500 text-sm">
                        🔒 Secure Payment • 30-Day Money-Back Guarantee • Instant Access
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
