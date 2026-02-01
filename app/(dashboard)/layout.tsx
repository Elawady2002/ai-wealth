"use client";

import { ParticleBackground } from "@/components/ui/particle-background";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { useAuth } from "@/contexts/auth-context";
import { Loader2 } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { loading, user } = useAuth();

    // Show loading state while checking auth
    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <ParticleBackground />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <p className="text-gray-400 text-sm">Loading...</p>
                </div>
            </div>
        );
    }

    // If not logged in, the AuthContext will redirect to login
    if (!user) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <ParticleBackground />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <p className="text-gray-400 text-sm">Redirecting...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">
            <ParticleBackground />

            <div className="flex min-h-screen relative z-10">
                <Sidebar />

                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    <TopBar />

                    {/* Main Content Area - Scrollable */}
                    <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
                        <div className="max-w-7xl mx-auto w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
