import { BridgeCard } from "@/components/bridges/bridge-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Plus } from "lucide-react";
import Link from "next/link";

const mockBridges = [
    {
        id: "1",
        title: "EcoSlate Roofing Offers",
        url: "ecoslate.com/ref/8821",
        status: "live" as const,
        traffic: "2.4k/day",
        signalStrength: 92,
        earnings: "$482.50"
    },
    {
        id: "2",
        title: "Crypto Wealth Masterclass",
        url: "cryptomastery.io/join",
        status: "indexing" as const,
        traffic: "142/day",
        signalStrength: 45,
        earnings: "$0.00"
    },
    {
        id: "3",
        title: "Keto 30-Day Challenge",
        url: "ketodiet.com/start",
        status: "live" as const,
        traffic: "8.1k/day",
        signalStrength: 88,
        earnings: "$1,205.00"
    },
    {
        id: "4",
        title: "VPN Secure Shield",
        url: "vpnshield.net/deal",
        status: "optimizing" as const,
        traffic: "850/day",
        signalStrength: 64,
        earnings: "$125.00"
    },
];

export default function BridgesPage() {
    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white font-(family-name:--font-display) tracking-tighter">
                        My Bridges
                    </h1>
                    <p className="text-gray-400">Manage and monitor your active income assets.</p>
                </div>
                <Link href="/sync">
                    <NeonButton variant="primary" glow className="px-6">
                        <Plus className="w-5 h-5 mr-2" /> New Asset
                    </NeonButton>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBridges.map((bridge) => (
                    <BridgeCard key={bridge.id} {...bridge} />
                ))}

                {/* Add New Card Placeholder */}
                <Link href="/sync" className="group block h-full min-h-[300px]">
                    <div className="h-full rounded-2xl border-2 border-dashed border-white/10 bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-[1.01]">
                        <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Plus className="w-8 h-8 text-gray-500 group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg text-gray-400 group-hover:text-white transition-colors font-(family-name:--font-display)">
                                Deploy New Bridge
                            </h3>
                            <p className="text-sm text-gray-600">Sync a new affiliate URL</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
