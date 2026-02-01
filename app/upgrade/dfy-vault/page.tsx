"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Rocket, Check, ArrowLeft, ShieldCheck, Zap, Gift } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
    {
        title: "50+ صفحة هبوط احترافية",
        description: "صفحات جاهزة للتحويل مصممة بأحدث معايير الـ UX",
    },
    {
        title: "قوالب إيميلات مربحة",
        description: "سلسلة إيميلات كاملة تقدر تبدأ تستخدمها فوراً",
    },
    {
        title: "سكريبتات بيع متقدمة",
        description: "نصوص مجربة ومضمونة لزيادة المبيعات",
    },
    {
        title: "تصميمات سوشيال ميديا",
        description: "أكتر من 100 تصميم جاهز للنشر",
    },
    {
        title: "فيديوهات ترويجية",
        description: "فيديوهات قصيرة جاهزة للاستخدام",
    },
    {
        title: "دعم فني متواصل",
        description: "فريق دعم جاهز لمساعدتك في أي وقت",
    },
];

const bonuses = [
    "كورس مجاني: أساسيات الأفلييت ماركتينج",
    "جروب VIP حصري للأعضاء",
    "تحديثات مجانية مدى الحياة",
];

export default function DFYVaultPage() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-display)]">
            <div className="space-y-8 pb-20">
                {/* Back Button */}
                <Link
                    href="/upgrade"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>رجوع للباقات</span>
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                            <Rocket className="w-4 h-4" />
                            <span>الباقة الأكثر شعبية</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                            DFY Vault
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            مكتبة كاملة من الأصول الرقمية الجاهزة للاستخدام. كل اللي محتاجه عشان
                            تبدأ تحقق أرباح من الأفلييت ماركتينج - جاهز ومستنيك.
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-bold text-white">$97</span>
                            <span className="text-xl text-gray-500 line-through">$297</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                وفر 67%
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105">
                            احصل على DFY Vault الآن
                        </button>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>ضمان استرداد 30 يوم</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                <span>وصول فوري</span>
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
                                إيه اللي هتاخده؟
                            </h3>

                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-green-400" />
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

                {/* Bonuses Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <GlassPanel intensity="low" className="p-6 border-yellow-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Gift className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white">
                                بونص حصري لفترة محدودة
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {bonuses.map((bonus, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10"
                                >
                                    <Check className="w-5 h-5 text-yellow-400 shrink-0" />
                                    <span className="text-white text-sm">{bonus}</span>
                                </div>
                            ))}
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>
        </div>
    );
}
