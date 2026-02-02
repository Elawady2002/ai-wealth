"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { ContextualDocs } from "@/components/ui/contextual-docs";
import {
    Globe,
    Zap,
    ExternalLink,
    Copy,
    Check,
    Loader2,
    Sparkles,
    Search,
    MessageSquare,
    Database
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";

// Bridge interface for real data
interface Bridge {
    id: string;
    title: string;
    affiliate_url: string;
    created_at: string;
    status: string;
}

interface ScrapedUrl {
    url: string;
    comment?: string;
    isGenerating?: boolean;
    copied?: boolean;
}

interface BridgeResults {
    [bridgeId: string]: {
        isLoading: boolean;
        urls: ScrapedUrl[];
        query?: string;
    };
}

export default function TrafficHubPage() {
    const { user } = useAuth();
    const [bridges, setBridges] = useState<Bridge[]>([]);
    const [loading, setLoading] = useState(true);
    const [bridgeResults, setBridgeResults] = useState<BridgeResults>({});

    useEffect(() => {
        const fetchBridges = async () => {
            if (!user) return;

            try {
                const { data, error } = await supabase
                    .from('bridges')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setBridges(data || []);
            } catch (error) {
                console.error('Error fetching bridges:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBridges();
    }, [user]);

    const handleInstantTraffic = async (bridge: Bridge) => {
        // Set loading state
        setBridgeResults(prev => ({
            ...prev,
            [bridge.id]: { isLoading: true, urls: [] }
        }));

        try {
            // Derive keywords from title for now (e.g. "Bridge - Crypto" -> "Crypto")
            const keywords = bridge.title.replace('Bridge - ', '').split(' ')[0] || "wealth";

            const response = await fetch('/api/scrape-urls', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    keywords: keywords,
                    altKeywords: "passive income"
                })
            });

            const data = await response.json();

            if (data.success) {
                setBridgeResults(prev => ({
                    ...prev,
                    [bridge.id]: {
                        isLoading: false,
                        urls: data.urls.map((url: string) => ({ url })),
                        query: data.query
                    }
                }));
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error fetching URLs:', error);
            setBridgeResults(prev => ({
                ...prev,
                [bridge.id]: { isLoading: false, urls: [] }
            }));
        }
    };

    const handleGenerateComment = async (bridgeId: string, urlIndex: number, bridge: Bridge) => {
        const results = bridgeResults[bridgeId];
        if (!results) return;

        // Set generating state
        const updatedUrls = [...results.urls];
        updatedUrls[urlIndex] = { ...updatedUrls[urlIndex], isGenerating: true };
        setBridgeResults(prev => ({
            ...prev,
            [bridgeId]: { ...prev[bridgeId], urls: updatedUrls }
        }));

        try {
            const response = await fetch('/api/generate-comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    targetUrl: results.urls[urlIndex].url,
                    bridgeUrl: bridge.affiliate_url,
                    niche: bridge.title
                })
            });

            const data = await response.json();

            if (data.success) {
                const finalUrls = [...bridgeResults[bridgeId].urls];
                finalUrls[urlIndex] = {
                    ...finalUrls[urlIndex],
                    comment: data.comment,
                    isGenerating: false
                };
                setBridgeResults(prev => ({
                    ...prev,
                    [bridgeId]: { ...prev[bridgeId], urls: finalUrls }
                }));
            }
        } catch (error) {
            console.error('Error generating comment:', error);
            const finalUrls = [...bridgeResults[bridgeId].urls];
            finalUrls[urlIndex] = { ...finalUrls[urlIndex], isGenerating: false };
            setBridgeResults(prev => ({
                ...prev,
                [bridgeId]: { ...prev[bridgeId], urls: finalUrls }
            }));
        }
    };

    const handleCopyComment = (bridgeId: string, urlIndex: number) => {
        const comment = bridgeResults[bridgeId]?.urls[urlIndex]?.comment;
        if (comment) {
            navigator.clipboard.writeText(comment);

            const updatedUrls = [...bridgeResults[bridgeId].urls];
            updatedUrls[urlIndex] = { ...updatedUrls[urlIndex], copied: true };
            setBridgeResults(prev => ({
                ...prev,
                [bridgeId]: { ...prev[bridgeId], urls: updatedUrls }
            }));

            setTimeout(() => {
                const resetUrls = [...bridgeResults[bridgeId].urls];
                resetUrls[urlIndex] = { ...resetUrls[urlIndex], copied: false };
                setBridgeResults(prev => ({
                    ...prev,
                    [bridgeId]: { ...prev[bridgeId], urls: resetUrls }
                }));
            }, 2000);
        }
    };

    return (
        <div className="space-y-8 pb-20">
            <ContextualDocs title="Traffic Hub - Automated Outreach" variant="info">
                <p>Use this page to drive traffic to your bridges through smart comment marketing:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li><strong>Click &quot;Instant Traffic&quot;</strong> to find blogs in your niche that accept comments</li>
                    <li><strong>Generate AI comments</strong> that naturally include your bridge link</li>
                    <li><strong>Copy and paste</strong> the comment to the target blog</li>
                </ol>
            </ContextualDocs>

            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Traffic Hub</h1>
                    <p className="text-gray-400 text-sm">Automated traffic generation through smart outreach</p>
                </div>
            </div>

            {/* Bridges Table */}
            <GlassPanel className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="text-left p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Bridge Name</th>
                                <th className="text-left p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date Created</th>
                                <th className="text-left p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="text-right p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500">
                                        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                                        Loading your bridges...
                                    </td>
                                </tr>
                            ) : bridges.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500">
                                        No bridges found. Create one to start driving traffic.
                                    </td>
                                </tr>
                            ) : bridges.map((bridge) => (
                                <tr
                                    key={bridge.id}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4">
                                        <div className="font-medium text-white">{bridge.title}</div>
                                        <div className="text-xs text-gray-500 font-mono truncate max-w-[200px]">{bridge.affiliate_url}</div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-400">{new Date(bridge.created_at).toLocaleDateString()}</td>
                                    <td className="p-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/30">
                                            <Sparkles className="w-3 h-3" /> AI Optimized
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <NeonButton
                                            variant="primary"
                                            glow
                                            className="text-xs px-4 py-2"
                                            onClick={() => handleInstantTraffic(bridge)}
                                            disabled={bridgeResults[bridge.id]?.isLoading}
                                        >
                                            {bridgeResults[bridge.id]?.isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <Loader2 className="w-3 h-3 animate-spin" /> Searching...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    <Zap className="w-3 h-3" /> Instant Traffic
                                                </span>
                                            )}
                                        </NeonButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassPanel>

            {/* Scraped URLs Results */}
            <AnimatePresence>
                {bridges.map(bridge => {
                    const results = bridgeResults[bridge.id];
                    if (!results || results.urls.length === 0) return null;

                    return (
                        <motion.div
                            key={bridge.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <GlassPanel className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white flex items-center gap-2">
                                            <Search className="w-4 h-4 text-primary" />
                                            Results for: {bridge.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-mono mt-1">
                                            Query: {results.query}
                                        </p>
                                    </div>
                                    <span className="text-xs text-gray-400">{results.urls.length} URLs found</span>
                                </div>

                                <div className="space-y-3">
                                    {results.urls.map((item, urlIndex) => (
                                        <div
                                            key={urlIndex}
                                            className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-3"
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-primary hover:underline truncate flex items-center gap-2 flex-1"
                                                >
                                                    <ExternalLink className="w-3 h-3 shrink-0" />
                                                    <span className="truncate">{item.url}</span>
                                                </a>
                                                <NeonButton
                                                    variant="ghost"
                                                    className="text-xs px-3 py-1.5 shrink-0"
                                                    onClick={() => handleGenerateComment(bridge.id, urlIndex, bridge)}
                                                    disabled={item.isGenerating}
                                                >
                                                    {item.isGenerating ? (
                                                        <span className="flex items-center gap-1.5">
                                                            <Loader2 className="w-3 h-3 animate-spin" /> Generating...
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-1.5">
                                                            <MessageSquare className="w-3 h-3" /> Generate Comment
                                                        </span>
                                                    )}
                                                </NeonButton>
                                            </div>

                                            {item.comment && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="space-y-2"
                                                >
                                                    <textarea
                                                        readOnly
                                                        value={item.comment}
                                                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 resize-none focus:outline-none focus:border-primary/50"
                                                        rows={3}
                                                    />
                                                    <button
                                                        onClick={() => handleCopyComment(bridge.id, urlIndex)}
                                                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-primary transition-colors"
                                                    >
                                                        {item.copied ? (
                                                            <>
                                                                <Check className="w-3 h-3 text-green-400" />
                                                                <span className="text-green-400">Copied!</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="w-3 h-3" />
                                                                <span>Copy to clipboard</span>
                                                            </>
                                                        )}
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </GlassPanel>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
