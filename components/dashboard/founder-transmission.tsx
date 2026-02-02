"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { X, Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FounderTransmission() {
    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!isVisible) return null;

    // Placeholder video - replace with actual video URL
    const videoId = "dQw4w9WgXcQ"; // Placeholder YouTube video ID

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full relative z-20 mb-8"
            >
                <GlassPanel
                    intensity="low"
                    className="relative border-primary/20 p-0 overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 z-30 p-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/10 bg-black/40 backdrop-blur-sm"
                        aria-label="Close video"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Video Container - 16:9 Aspect Ratio */}
                    <div className="relative w-full aspect-video bg-black/80">
                        {!isPlaying ? (
                            /* Thumbnail Overlay */
                            <div
                                className="absolute inset-0 cursor-pointer group"
                                onClick={() => setIsPlaying(true)}
                            >
                                {/* Background Grid Effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-size-[30px_30px] opacity-40" />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Pulsing Ring */}
                                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />

                                        {/* Main Button */}
                                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-linear-to-br from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(0,242,255,0.4)] group-hover:shadow-[0_0_80px_rgba(0,242,255,0.6)] transition-all duration-500 group-hover:scale-110">
                                            <Play className="w-10 h-10 md:w-14 md:h-14 text-white fill-white ml-2" />
                                        </div>
                                    </div>
                                </div>

                                { /* Text Overlay Removed */}
                            </div>
                        ) : (
                            /* Embedded Video */
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="Founder Video"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>
                </GlassPanel>
            </motion.div>
        </AnimatePresence>
    );
}

