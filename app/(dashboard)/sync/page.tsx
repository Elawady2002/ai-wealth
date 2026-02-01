import { SyncWizard } from "@/components/sync/sync-wizard";

export default function SyncPage() {
    return (
        <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center font-(family-name:--font-display)">
            <div className="text-center space-y-4 mb-8 max-w-2xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tighter">
                    SYNC WIZARD
                </h1>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                    Initiate <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Wealth Sync</span>. Paste any affiliate URL below. The system will deconstruct, optimize, and deploy it as a sovereign digital asset in under 60 seconds.
                </p>
            </div>
            <div className="w-full max-w-xl mx-auto px-4">
                <SyncWizard />
            </div>
        </div>
    );
}

