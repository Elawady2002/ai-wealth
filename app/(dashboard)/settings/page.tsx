"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { NeonButton } from "@/components/ui/neon-button";
import {
    Settings,
    Bell,
    Shield,
    Palette,
    Globe,
    Zap,
    Moon,
    Sun,
    Check,
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const settingsSections = [
    {
        title: "Notifications",
        icon: Bell,
        settings: [
            { name: "Email Alerts", description: "Receive email notifications for important events", enabled: true },
            { name: "Sync Notifications", description: "Get notified when bridges sync", enabled: true },
            { name: "Traffic Alerts", description: "Alert when traffic spikes or drops", enabled: false },
        ]
    },
    {
        title: "Security",
        icon: Shield,
        settings: [
            { name: "Two-Factor Auth", description: "Add an extra layer of security", enabled: false },
            { name: "Session Timeout", description: "Auto logout after 30 minutes", enabled: true },
            { name: "API Access", description: "Enable API access for integrations", enabled: false },
        ]
    },
    {
        title: "Performance",
        icon: Zap,
        settings: [
            { name: "Auto-Optimization", description: "Let AI optimize bridges automatically", enabled: true },
            { name: "Aggressive Caching", description: "Cache bridge data for faster loads", enabled: true },
            { name: "Background Sync", description: "Sync bridges in the background", enabled: true },
        ]
    },
];

export default function CalibrationPage() {
    const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

    const handleToggle = (sectionTitle: string, settingName: string, initialState: boolean) => {
        const key = `${sectionTitle}-${settingName}`;
        setToggleStates(prev => ({
            ...prev,
            [key]: prev[key] !== undefined ? !prev[key] : !initialState
        }));
    };

    const getToggleState = (sectionTitle: string, settingName: string, initialState: boolean) => {
        const key = `${sectionTitle}-${settingName}`;
        return toggleStates[key] !== undefined ? toggleStates[key] : initialState;
    };

    return (
        <div className="min-h-screen font-(family-name:--font-display)">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-gray-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tighter">
                        Calibration
                    </h1>
                </div>
                <p className="text-gray-400 max-w-2xl">
                    Fine-tune your AI Wealth OS settings for optimal performance and personalized experience.
                </p>
            </div>

            {/* Theme Toggle */}
            <GlassPanel intensity="medium" className="p-6 border-white/5 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                            <Palette className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Appearance</h3>
                            <p className="text-sm text-gray-400">Choose your preferred theme</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-black/40 rounded-xl p-1">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary">
                            <Moon className="w-4 h-4" />
                            <span className="text-sm font-medium">Dark</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:text-gray-300 transition-colors">
                            <Sun className="w-4 h-4" />
                            <span className="text-sm font-medium">Light</span>
                        </button>
                    </div>
                </div>
            </GlassPanel>

            {/* Settings Sections */}
            <div className="space-y-6">
                {settingsSections.map((section, sectionIndex) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                    >
                        <GlassPanel intensity="low" className="p-6 border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <section.icon className="w-5 h-5 text-gray-400" />
                                <h2 className="text-lg font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="space-y-4">
                                {section.settings.map((setting, index) => {
                                    const isEnabled = getToggleState(section.title, setting.name, setting.enabled);
                                    return (
                                        <div
                                            key={setting.name}
                                            className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-white/5"
                                        >
                                            <div>
                                                <div className="font-medium text-white">{setting.name}</div>
                                                <div className="text-sm text-gray-500">{setting.description}</div>
                                            </div>
                                            <button
                                                onClick={() => handleToggle(section.title, setting.name, setting.enabled)}
                                                className={`relative w-12 h-6 rounded-full transition-colors ${isEnabled ? 'bg-primary' : 'bg-gray-700'
                                                    }`}
                                            >
                                                <motion.div
                                                    className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md"
                                                    animate={{ left: isEnabled ? 'calc(100% - 20px)' : '4px' }}
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassPanel>
                    </motion.div>
                ))}
            </div>

            {/* Account Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6"
            >
                <GlassPanel intensity="low" className="p-6 border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <h2 className="text-lg font-bold text-white">Account</h2>
                    </div>

                    <div className="space-y-3">
                        {[
                            { label: "Change Email", value: "Update your email address" },
                            { label: "Change Password", value: "Update your password" },
                            { label: "Export Data", value: "Download all your data" },
                            { label: "Delete Account", value: "Permanently delete your account", danger: true },
                        ].map((item) => (
                            <button
                                key={item.label}
                                className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${item.danger
                                        ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10'
                                        : 'bg-black/30 border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-left">
                                    <div className={`font-medium ${item.danger ? 'text-red-400' : 'text-white'}`}>
                                        {item.label}
                                    </div>
                                    <div className="text-sm text-gray-500">{item.value}</div>
                                </div>
                                <ChevronRight className={`w-5 h-5 ${item.danger ? 'text-red-400' : 'text-gray-500'}`} />
                            </button>
                        ))}
                    </div>
                </GlassPanel>
            </motion.div>

            {/* Save Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 flex justify-end"
            >
                <NeonButton variant="primary" glow className="px-8">
                    <Check className="w-4 h-4 mr-2" />
                    Save Changes
                </NeonButton>
            </motion.div>
        </div>
    );
}
