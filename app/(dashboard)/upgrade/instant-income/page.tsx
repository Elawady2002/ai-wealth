"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import {
    MessageSquare,
    Facebook,
    Play,
    Sparkles,
    ArrowLeft,
    DollarSign,
    Smartphone,
    CheckCircle2,
    BookOpen,
    Target,
    Link2,
    Copy,
    Calculator,
    ChevronRight,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function InstantIncomePage() {
    const [selectedNiche, setSelectedNiche] = useState("All Niches");
    const [affiliateLink, setAffiliateLink] = useState("");
    const [showPosts, setShowPosts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const niches = [
        "All Niches",
        "Weight Loss",
        "Make Money Online",
        "Health & Fitness",
        "Beauty & Skincare",
        "Relationships",
        "Tech & Gadgets",
        "Pets",
        "Home & Garden"
    ];

    const handleShowPosts = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowPosts(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen pb-20 space-y-8">
            {/* Navigation */}
            <Link href="/" className="inline-flex items-center gap-2 text-[#00FFFF] hover:underline text-sm font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>

            {/* 2. Hero Section (Facebook Posts) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
            >
                <GlassPanel className="p-12 text-center space-y-6 bg-linear-to-b from-[#4F46E5]/20 to-transparent border-[#4F46E5]/20 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#4F46E5] to-transparent" />
                    <div className="inline-flex p-5 bg-[#7C3AED] rounded-full shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                        <Facebook className="w-10 h-10 text-white fill-white" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Instant Income: Facebook Posts
                        </h1>
                        <p className="text-[#A78BFA] text-lg md:text-xl font-bold uppercase tracking-wider">
                            200+ Ready-to-Post Messages for Facebook Groups
                        </p>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Copy these proven posts, paste them in Facebook groups, and start making
                        money TODAY. No tech skills needed!
                    </p>
                </GlassPanel>
            </motion.div>

            {/* 3. Tutorial Video Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <GlassPanel className="p-4 flex flex-col md:flex-row gap-8 bg-black/40 border-white/5 rounded-3xl overflow-hidden group">
                    <div className="relative w-full md:w-1/2 aspect-video bg-linear-to-br from-indigo-900/40 to-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#4F46E5]/10 group-hover:bg-[#4F46E5]/5 transition-colors" />
                        <div className="w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer z-10">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Watch Instant Income Tutorial
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pr-4">
                        <div className="flex items-center gap-2 text-[#7C3AED] text-[10px] font-bold uppercase tracking-[0.2em]">
                            <Sparkles className="w-3 h-3" /> Watch First
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-snug">
                            How to Use Instant Income
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Watch this quick tutorial to learn how to copy these Facebook posts and start making money instantly. Simple and easy!
                        </p>
                    </div>
                </GlassPanel>
            </motion.div>

            {/* 4. How to Use This (3 Simple Steps) */}
            <div className="space-y-6">
                <div className="flex items-center gap-2 text-white font-black text-xl">
                    <CheckCircle2 className="w-6 h-6 text-[#7C3AED]" />
                    How to Use This (3 Simple Steps)
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { step: 1, title: "Pick Your Niche", desc: "Choose the niche that matches your affiliate offer. We have posts for Weight Loss, Make Money Online, Health, Beauty, and more!" },
                        { step: 2, title: "Enter Your Link", desc: "Paste your affiliate link below. We'll automatically add it to all the posts for you. No manual work!" },
                        { step: 3, title: "Copy & Post", desc: "Click \"Copy\" on any post and paste it into Facebook groups. Post 3-5 times per day for best results!" }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <GlassPanel className="p-8 h-full space-y-4 bg-indigo-950/20 border-indigo-500/20 rounded-2xl">
                                <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center font-black text-white shadow-lg">
                                    {s.step}
                                </div>
                                <h4 className="text-lg font-bold text-white">{s.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                            </GlassPanel>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 5. How to Find & Post Guide */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <GlassPanel className="bg-linear-to-b from-indigo-950/40 to-black border-indigo-500/10 rounded-3xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 bg-indigo-500/5 flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-[#00BFFF]" />
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">How to Find & Post in Facebook Groups</h3>
                    </div>
                    <div className="p-8 space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-primary font-black flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                Step 1: Find Facebook Groups
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-400 ml-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Go to Facebook and click the search bar at the top. Type keywords like "weight loss support", "make money online", or "fitness motivation"
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Click "Groups" in the left sidebar to see only groups (not pages or people)
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Join 10-15 groups with 5,000+ members. Bigger groups = more people seeing your posts = more money!
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Wait for the group admin to approve you (usually takes 1-24 hours). Be patient - it's worth it!
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-primary font-black flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                Step 2: Read the Group Rules
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-400 ml-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Click "About" in the group to see the rules. Most groups allow personal stories but not direct selling
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#00BFFF] mt-2 shrink-0" />
                                    Our posts are written as personal success stories, so they're usually allowed. But always check first!
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl relative group">
                            <div className="absolute -top-3 -right-3 p-2 bg-primary rounded-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                                <DollarSign className="w-4 h-4 text-black font-bold" />
                            </div>
                            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                                <Calculator className="w-5 h-5 text-primary" />
                                How Much Can You Make?
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Each post can generate $40-$400 per day depending on the niche and how many groups you post in. Here's the math:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                                    <p className="text-gray-300">Post in 5 groups per day = 5 posts. If each post makes $50/day, that's <span className="text-primary font-black">$250/day total!</span></p>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                                    <p className="text-gray-300">Do this for 30 days = <span className="text-primary font-black">$7,500/month.</span> Just from copying and pasting!</p>
                                </div>
                                <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-[10px] uppercase font-bold tracking-widest text-center text-gray-500">
                                    The more groups you join and post in, the more money you make. It's that simple!
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassPanel>
            </motion.div>

            {/* 6. Action Section: Get Your Posts Now */}
            <div className="space-y-6">
                <GlassPanel className="p-8 space-y-10 bg-linear-to-br from-[#4F46E5]/10 to-transparent border-[#4F46E5]/20 rounded-[2.5rem]">
                    <h2 className="text-3xl font-black text-white">Get Your Posts Now</h2>

                    {/* Step 1: Choose Niche */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest">
                            <Target className="w-4 h-4 text-[#7C3AED]" />
                            Step 1: Choose Your Niche
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {niches.map((n) => (
                                <button
                                    key={n}
                                    onClick={() => setSelectedNiche(n)}
                                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${selectedNiche === n
                                        ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                                        : "bg-black/40 text-gray-400 border-white/10 hover:border-[#7C3AED]/50 hover:text-white"
                                        }`}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Affiliate Link Guide */}
                    <div className="space-y-4">
                        <GlassPanel className="p-6 bg-[#4F46E5]/10 border-[#4F46E5]/20 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <div className="flex items-center gap-2 text-sm font-bold text-[#A78BFA] uppercase tracking-widest mb-4">
                                <CheckCircle2 className="w-4 h-4" />
                                Where to Get Your Affiliate Link
                            </div>
                            <p className="text-xs text-gray-400 mb-6">
                                We recommend using <span className="text-white font-bold">DigiStore24</span> - a free affiliate marketplace where you can find thousands of products to promote and earn commissions.
                            </p>

                            <div className="space-y-4 mb-6">
                                <h5 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">How to Get Started (3 Easy Steps):</h5>
                                <div className="space-y-2">
                                    {[
                                        "Go to digistore24.com and create a FREE account (takes 2 minutes)",
                                        "Browse products in your chosen niche above and click \"Promote\" on any product",
                                        "Copy your unique affiliate link and paste it in the box below"
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-3 text-xs text-gray-300">
                                            <span className="text-[#A78BFA] font-black">{i + 1}.</span>
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-4 rounded-xl border border-[#4F46E5]/40 text-[#A78BFA] text-xs font-black uppercase tracking-widest hover:bg-[#4F46E5]/10 transition-all flex items-center justify-center gap-2 group/digi">
                                Create Free DigiStore24 Account
                                <ChevronRight className="w-4 h-4 transition-transform group-hover/digi:translate-x-1" />
                            </button>
                        </GlassPanel>
                    </div>

                    {/* Step 3: Link Input & Action */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest ml-1">
                                <Link2 className="w-4 h-4 text-[#7C3AED]" />
                                Step 2: Enter Your Affiliate Link
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={affiliateLink}
                                    onChange={(e) => setAffiliateLink(e.target.value)}
                                    placeholder="https://your-affiliate-link.com"
                                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#7C3AED]/50 transition-all font-mono text-sm"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <Sparkles className="w-5 h-5 text-[#7C3AED]/30" />
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-1">
                                We'll automatically add your link to all the posts below
                            </p>
                        </div>

                        <button
                            onClick={handleShowPosts}
                            disabled={!affiliateLink || isLoading}
                            className="w-full py-6 rounded-3xl bg-linear-to-r from-[#7C3AED] to-[#4F46E5] text-white font-black uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.4)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed group relative overflow-hidden"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-3">
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    Calibrating System...
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="flex items-center justify-center gap-3">
                                        <CheckCircle2 className="w-6 h-6" />
                                        Show Me My 50 Posts!
                                    </span>
                                </>
                            )}
                        </button>
                    </div>
                </GlassPanel>
            </div>

            {/* 7. Results Placeholder */}
            <AnimatePresence>
                {showPosts && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6 pt-10"
                    >
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-black text-white">Your Optimized Posts</h2>
                            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Generated specifically for the <span className="text-primary">{selectedNiche}</span> niche</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            {[1, 2, 3, 4].map((i) => (
                                <GlassPanel key={i} className="p-6 space-y-4 bg-black/60 border-indigo-500/20 rounded-2xl group border-l-4 border-l-[#7C3AED]">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Facebook Post #{i}</span>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed italic">
                                        "I was so skeptical at first, but after trying this for just 2 weeks, I'm already seeing results! If you're struggling with {selectedNiche.toLowerCase()}, you really need to check this out. Best part is it's actually sustainable. Here's where I found it: {affiliateLink}"
                                    </p>
                                    <div className="flex items-center gap-2 pt-2">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-3 h-3 text-[#7C3AED]" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-gray-500">Optimized with Social Proof</span>
                                    </div>
                                </GlassPanel>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
