"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Crown, Zap, Rocket, Bot, ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const upgrades = [
    {
        id: "dfy-vault",
        name: "DFY Vault",
        tagline: "Done-For-You Digital Assets",
        description: "احصل على مكتبة كاملة من الأصول الرقمية الجاهزة للاستخدام",
        icon: Rocket,
        price: "$97",
        color: "from-purple-500 to-pink-500",
        glow: "rgba(168, 85, 247, 0.4)",
        features: [
            "50+ صفحة هبوط جاهزة",
            "قوالب إيميلات مربحة",
            "سكريبتات بيع متقدمة",
            "تصميمات سوشيال ميديا",
        ],
    },
    {
        id: "instant-income",
        name: "Instant Income",
        tagline: "Fast-Track Your Earnings",
        description: "ابدأ تحقق أرباح في أقل من 24 ساعة",
        icon: Zap,
        price: "$197",
        color: "from-yellow-500 to-orange-500",
        glow: "rgba(234, 179, 8, 0.4)",
        features: [
            "استراتيجية الربح السريع",
            "قائمة المنتجات الأعلى عمولة",
            "قوالب إعلانات مجربة",
            "دعم VIP لمدة 30 يوم",
        ],
    },
    {
        id: "automated-profits",
        name: "Automated Profits",
        tagline: "Set It & Forget It",
        description: "أتمتة كاملة لعملية الربح - اشتغل وأنت نايم",
        icon: Bot,
        price: "$297",
        color: "from-cyan-500 to-blue-500",
        glow: "rgba(6, 182, 212, 0.4)",
        features: [
            "بوتات أتمتة متكاملة",
            "AI Content Generator",
            "جدولة تلقائية للمحتوى",
            "تقارير وتحليلات متقدمة",
        ],
    },
];

export default function UpgradePage() {
    return (
        <div className="min-h-screen font-(family-name:--font-display)">
            <div className="space-y-8 pb-20">
                {/* Hero Section */}
                <div className="text-center space-y-4 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm"
                    >
                        <Crown className="w-4 h-4" />
                        <span>ترقية حسابك</span>
                        <Sparkles className="w-4 h-4" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                    >
                        اختار الباقة المناسبة ليك
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        كل باقة مصممة عشان تساعدك تحقق أرباح أكتر في وقت أقل
                    </motion.p>
                </div>

                {/* Upgrade Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {upgrades.map((upgrade, index) => (
                        <motion.div
                            key={upgrade.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Link href={`/upgrade/${upgrade.id}`}>
                                <GlassPanel
                                    intensity="medium"
                                    className="h-full p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer border-white/10 hover:border-white/20"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${upgrade.color} flex items-center justify-center mb-4 shadow-lg`}
                                        style={{ boxShadow: `0 10px 40px ${upgrade.glow}` }}
                                    >
                                        <upgrade.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title & Tagline */}
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {upgrade.name}
                                    </h3>
                                    <p className="text-sm text-primary mb-3">{upgrade.tagline}</p>
                                    <p className="text-gray-400 text-sm mb-6">
                                        {upgrade.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {upgrade.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <Check className="w-4 h-4 text-green-400 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                        <div className="text-3xl font-bold text-white">
                                            {upgrade.price}
                                        </div>
                                        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                                            <span className="text-sm">عرض التفاصيل</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </GlassPanel>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
