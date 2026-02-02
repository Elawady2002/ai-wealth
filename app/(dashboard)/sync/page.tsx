import { SyncWizard } from "@/components/sync/sync-wizard";
import { ContextualDocs } from "@/components/ui/contextual-docs";

export default function SyncPage() {
    return (
        <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center font-(family-name:--font-display) py-12">
            {/* Header Section - Always centered and constrained for readability */}
            <div className="w-full max-w-4xl mx-auto px-4 mb-2">
                <div className="text-center space-y-4 mb-2">
                    <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tighter">
                        SYNC WIZARD
                    </h1>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Initiate <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Wealth Sync</span>. Paste any affiliate URL below. The system will deconstruct, optimize, and deploy it as a sovereign digital asset.
                    </p>
                </div>

                <div className="mb-4 max-w-xl mx-auto">
                    <ContextualDocs title="How to Sync Your Link" variant="help">
                        <ol className="list-decimal list-inside space-y-1 mt-1">
                            <li><strong>Step 1:</strong> Paste any affiliate URL in the box below</li>
                            <li><strong>Step 2:</strong> Click &quot;Initiate Sync&quot; to begin the process</li>
                            <li><strong>Step 3:</strong> Wait for the system to scan and deploy your asset</li>
                            <li><strong>Step 4:</strong> Broadcast your signal to start traffic flow</li>
                        </ol>
                    </ContextualDocs>
                </div>
            </div>

            {/* Wizard Container - Flexible Width */}
            <div className="w-full px-4 flex justify-center">
                <SyncWizard />
            </div>
        </div>
    );
}
