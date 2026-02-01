"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { Zap, Check, ArrowLeft, ShieldCheck, Clock, Gift, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
    {
        title: "استراتيجية الربح في 24 ساعة",
        description: "خطوة بخطوة لتحقيق أول دولار في يوم واحد",
    },
    {
        title: "قائمة أعلى 20 منتج عمولة",
        description: "منتجات مختارة بعناية بأعلى نسب تحويل",
    },
    {
        title: "قوالب إعلانات مجربة",
        description: "إعلانات حققت ملايين الدولارات",
    },
    {
        title: "دعم VIP لمدة 30 يوم",
        description: "رد مباشر على كل أسئلتك",
    },
    {
        title: "جلسة استشارة 1-on-1",
        description: "45 دقيقة مع خبير أفلييت",
    },
    {
        title: "تحديثات أسبوعية",
        description: "أحدث الاستراتيجيات والفرص",
    },
];

const testimonials = [
    {
        name: "أحمد محمود",
        result: "حققت $500 في أول أسبوع",
        avatar: "AM",
    },
    {
        name: "سارة علي",
        result: "من صفر لـ $2000 شهرياً",
        avatar: "SA",
    },
    {
        name: "محمد خالد",
        result: "تركت وظيفتي بعد 3 شهور",
        avatar: "MK",
    },
];

export default function InstantIncomePage() {
    return (
        <div className="min-h-screen font-(family-name:--font-display)">
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm">
                            <Zap className="w-4 h-4" />
                            <span>نتائج سريعة مضمونة</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                            Instant Income
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            مش هتستنى شهور عشان تشوف نتائج. الباقة دي مصممة عشان تبدأ تحقق
                            أرباح في أقل من 24 ساعة من الشراء.
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-bold text-white">$197</span>
                            <span className="text-xl text-gray-500 line-through">$497</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                                وفر 60%
                            </span>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full md:w-auto px-8 py-4 bg-linear-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(234,179,8,0.4)] hover:shadow-[0_15px_50px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105">
                            ابدأ تحقق أرباح الآن
                        </button>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                <span>ضمان استرداد 30 يوم</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-yellow-400" />
                                <span>نتائج في 24 ساعة</span>
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
                                        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-yellow-400" />
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

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        نتائج حقيقية من أعضاء الباقة
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, i) => (
                            <GlassPanel key={i} intensity="low" className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center font-bold text-black text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="font-medium text-white">
                                        {testimonial.name}
                                    </div>
                                </div>
                                <p className="text-green-400 font-medium">
                                    {testimonial.result}
                                </p>
                            </GlassPanel>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
