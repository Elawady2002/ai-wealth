"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import { ContextualDocs } from "@/components/ui/contextual-docs";
import { ArrowLeft, TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import Link from "next/link";
import { TrafficChart } from "./traffic-chart";

interface AnalyticsContentProps {
    bridgeId: string;
}

export function AnalyticsContent({ bridgeId }: AnalyticsContentProps) {
    return (
        <div className="space-y-8 pb-20">
            <ContextualDocs title="Understanding Your Analytics" variant="info">
                <p>This page shows estimated performance data for your synced asset. Key metrics include:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Visitors:</strong> Estimated number of people viewing your page</li>
                    <li><strong>Conversion Rate:</strong> Percentage of visitors taking action</li>
                    <li><strong>Earnings:</strong> Your estimated commissions from this asset</li>
                </ul>
            </ContextualDocs>

            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/bridges">
                    <NeonButton variant="ghost" className="p-2 h-10 w-10">
                        <ArrowLeft className="w-5 h-5" />
                    </NeonButton>
                </Link>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Bridge Analytics</h1>
                    <p className="text-gray-400 text-sm">Asset ID: #{bridgeId}</p>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <GlassPanel className="p-5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 uppercase">Est. Visitors</div>
                            <div className="text-2xl font-bold text-white">2,847</div>
                        </div>
                    </div>
                </GlassPanel>
                <GlassPanel className="p-5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 uppercase">Conversion Rate</div>
                            <div className="text-2xl font-bold text-white">4.2%</div>
                        </div>
                    </div>
                </GlassPanel>
                <GlassPanel className="p-5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-500/10 rounded-xl">
                            <BarChart3 className="w-6 h-6 text-yellow-500" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 uppercase">Avg. Time on Page</div>
                            <div className="text-2xl font-bold text-white">2:34</div>
                        </div>
                    </div>
                </GlassPanel>
                <GlassPanel className="p-5">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl">
                            <DollarSign className="w-6 h-6 text-purple-500" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 uppercase">Est. Earnings</div>
                            <div className="text-2xl font-bold text-green-400">$482.50</div>
                        </div>
                    </div>
                </GlassPanel>
            </div>



            {/* Chart Section */}
            <GlassPanel className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-white">Traffic Overview</h3>
                        <p className="text-xs text-gray-400">Visitor trend over the last 7 days</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">Last 7 Days</div>
                        <div className="bg-transparent px-3 py-1 rounded-full text-xs text-gray-600 cursor-pointer hover:text-gray-400 transition-colors">Last 30 Days</div>
                    </div>
                </div>

                <TrafficChart />
            </GlassPanel>

            {/* Back Button */}
            <Link href="/bridges">
                <NeonButton variant="ghost" className="w-full md:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Bridges
                </NeonButton>
            </Link>
        </div>
    );
}
