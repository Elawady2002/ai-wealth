"use client";

import { cn } from "@/lib/utils";
import { Zap, LayoutDashboard, Globe, Layers, Cpu, Crown, Settings } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Command Center", href: "/", icon: LayoutDashboard },
    { name: "Sync Wizard", href: "/sync", icon: Zap, highlight: true },
    { name: "My Bridges", href: "/bridges", icon: Layers },
    { name: "Traffic Hub", href: "/traffic", icon: Globe },
    { name: "Conversion AI", href: "/conversion", icon: Cpu },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-72 border-r border-white/10 bg-black/20 backdrop-blur-md h-screen sticky top-0 z-50">
            <GlassPanel intensity="high" className="h-full border-r border-white/5 bg-black/60 flex flex-col relative z-20">
                <div className="p-6 pb-2 border-b border-white/5">
                    <h1 className="text-2xl font-bold font-(family-name:--font-display) tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
                        AI WEALTH <span className="text-primary text-xs ml-1 align-top relative top-1">OS</span>
                    </h1>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <div className="px-4 text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 mt-2">Core Modules</div>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href} className="block group">
                                <div className={cn("flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300", isActive ? "bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]" : "hover:bg-white/5")}>
                                    <item.icon className={cn("w-5 h-5 shrink-0 transition-colors duration-300", isActive ? "text-primary shadow-[0_0_10px_var(--primary)]" : "text-gray-500 group-hover:text-white")} />
                                    <span className={cn("font-medium text-sm tracking-wide font-(family-name:--font-display)", isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200")}>
                                        {item.name}
                                    </span>
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary shadow-[0_0_10px_var(--primary)] rounded-r-full" />
                                    )}
                                </div>
                            </Link>
                        );
                    })}

                    <div className="px-4 text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 mt-10">System</div>
                    <Link
                        href="/upgrade"
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10"
                    >
                        <Crown className="w-5 h-5" />
                        <span className="font-medium tracking-wide text-sm">Upgrade Access</span>
                    </Link>
                    <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/5"
                    >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium tracking-wide text-sm">Calibration</span>
                    </Link>
                </nav>

                <div className="p-4 mt-auto">
                    {/* User Profile Section */}
                    <div className="p-4 border-t border-white/5 bg-black/20 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center font-bold text-black shadow-[0_0_15px_var(--primary-glow)]">
                                JD
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white">John Doe</div>
                                <div className="text-xs text-gray-500">System Architect</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] text-gray-600 font-mono text-center mt-4">AI WEALTH OS v1.0.4</div>
                </div>
            </GlassPanel>
        </aside>
    );
}
