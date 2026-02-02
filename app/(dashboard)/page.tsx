import { FounderTransmission } from "@/components/dashboard/founder-transmission";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { SystemStatus } from "@/components/dashboard/system-status";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { ContextualDocs } from "@/components/ui/contextual-docs";

export default function Home() {
  return (
    <div className="min-h-screen font-(family-name:--font-display)">
      <h1 className="sr-only">AI Wealth OS</h1>

      <div className="space-y-8 pb-20">
        <ContextualDocs title="Welcome to Your Command Center" variant="info">
          <p>This is your central hub for monitoring all your synced digital assets. Here you can:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Watch important updates from the founder</li>
            <li>Track your estimated daily flow and active bridges</li>
            <li>See system health and connection status</li>
          </ul>
        </ContextualDocs>

        <FounderTransmission />

        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-white font-(family-name:--font-display) tracking-tighter">
            Command Center
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Live overview of your synced digital assets and traffic flow.
          </p>
        </div>

        <MetricsGrid />
        <DashboardCards />
        <SystemStatus />
      </div>
    </div>
  );
}

