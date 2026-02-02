"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassInput } from "@/components/ui/glass-input";
import { NeonButton } from "@/components/ui/neon-button";
import { NeuralScan } from "./neural-scan";
import { BridgePreview } from "./bridge-preview";
import { Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";

export function SyncWizard() {
    const { user } = useAuth();
    const [status, setStatus] = useState<"idle" | "scanning" | "complete">("idle");
    const [url, setUrl] = useState("");
    const [scrapedData, setScrapedData] = useState<{ title: string; description: string; image: string | null } | null>(null);

    const handleSync = async () => {
        if (!url) return;
        setStatus("scanning");

        // Start fetching data in parallel with the animation
        try {
            const response = await fetch('/api/analyze-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const result = await response.json();
            if (result.success && result.data) {
                setScrapedData(result.data);
            }
        } catch (error) {
            console.error("Failed to analyze URL", error);
        }
    };

    const handleScanComplete = async () => {
        if (!user || !url) {
            setStatus("complete");
            return;
        }

        try {
            // Use scraped title if available, otherwise generate one
            let title = scrapedData?.title || "Wealth Bridge";
            if (!scrapedData?.title) {
                try {
                    const hostname = new URL(url).hostname;
                    const domain = hostname.replace('www.', '').split('.')[0];
                    title = `Bridge - ${domain.charAt(0).toUpperCase() + domain.slice(1)}`;
                } catch (e) {
                    // Keep default title
                }
            }

            // Save to Supabase
            const { error } = await supabase.from('bridges').insert({
                user_id: user.id,
                title: title,
                affiliate_url: url,
                status: 'active'
            });

            if (error) throw error;

        } catch (error) {
            console.error("Error saving bridge:", error);
        } finally {
            setStatus("complete");
        }
    };

    return (
        <AnimatePresence mode="wait">
            {status === "scanning" && (
                <motion.div
                    key="scanning"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <NeuralScan onComplete={handleScanComplete} />
                </motion.div>
            )}

            {status === "complete" && (
                <motion.div
                    key="complete"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full" // Allows full width expansion
                >
                    <BridgePreview url={url} data={scrapedData} />
                </motion.div>
            )}

            {status === "idle" && (
                <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full max-w-2xl mx-auto" // Constrained width for input form
                >
                    <GlassPanel intensity="medium" className="p-8 md:p-12 border-primary/20 bg-black/40">
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <GlassInput
                                    placeholder="Paste Affiliate URL here..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="h-20 pl-14 text-xl md:text-2xl tracking-wide bg-white/5 border-white/10 focus-visible:ring-primary focus-visible:border-primary/50"
                                />
                            </div>

                            <NeonButton
                                variant="primary"
                                glow
                                className="h-16 text-lg md:text-xl w-full"
                                onClick={handleSync}
                                disabled={!url}
                            >
                                INITIATE SYNC
                            </NeonButton>

                            <div className="text-center text-xs text-gray-500 font-mono mt-2">
                                SECURE LINK PROTOCOL // 256-BIT ENCRYPTION ACTIVE
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
