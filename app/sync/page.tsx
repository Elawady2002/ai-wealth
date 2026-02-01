import { SyncWizard } from "@/components/sync/sync-wizard";

export default function SyncPage() {
    return (
        <div className="space-y-8 pb-20 font-(--font-display)">
            <div className="text-center space-y-4 pt-10">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tighter">
                    SYNC WIZARD
                </h1>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                    Initiate <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Wealth Sync</span>. Paste any affiliate URL below. The system will deconstruct, optimize, and deploy it as a sovereign digital asset in under 60 seconds.
                </p>
            </div>
            <SyncWizard />
        </div>
    );
}
