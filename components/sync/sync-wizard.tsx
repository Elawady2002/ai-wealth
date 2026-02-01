"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { GlassInput } from "@/components/ui/glass-input";
import { NeonButton } from "@/components/ui/neon-button";
import { NeuralScan } from "./neural-scan";
import { BridgePreview } from "./bridge-preview";
import { Zap } from "lucide-react";

export function SyncWizard() {
    const [status, setStatus] = useState<"idle" | "scanning" | "complete">("idle");
    const [url, setUrl] = useState("");

    const handleSync = () => {
        if (!url) return;
        setStatus("scanning");
    };

    if (status === "scanning") {
        return <NeuralScan onComplete={() => setStatus("complete")} />;
    }

    if (status === "complete") {
        return <BridgePreview url={url} />;
    }

    return (
        <GlassPanel intensity="medium" className="max-w-4xl w-full p-8 md:p-12 border-primary/20 bg-black/40">
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
    );
}
