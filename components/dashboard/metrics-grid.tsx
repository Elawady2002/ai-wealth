"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { TrendingUp, Activity, Users, DollarSign } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Hook for animated counter
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = start + (end - start) * easeOutQuart;

            setCount(currentValue);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration, start]);

    return { count, ref };
}

// Format number based on type
function formatValue(value: number, type: string): string {
    if (type === "currency") {
        return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (type === "percentage") {
        return `${Math.round(value)}%`;
    }
    if (type === "number") {
        return Math.round(value).toString();
    }
    if (type === "traffic") {
        if (value >= 1000) {
            return `${(value / 1000).toFixed(1)}k`;
        }
        return Math.round(value).toString();
    }
    return value.toString();
}

const metrics = [
    {
        label: "Estimated Daily Flow",
        numericValue: 1240.50,
        displayValue: "$1,240.50",
        valueType: "currency",
        trend: "+12.5%",
        icon: DollarSign,
        color: "text-secondary",
        shadow: "shadow-secondary/20",
        graph: "from-secondary/50 to-transparent",
    },
    {
        label: "Est. Active Bridges",
        numericValue: 8,
        displayValue: "8",
        valueType: "number",
        trend: "+2 this week",
        icon: Activity,
        color: "text-primary",
        shadow: "shadow-primary/20",
        graph: "from-primary/50 to-transparent",
    },
    {
        label: "Traffic Pulse",
        numericValue: 14200,
        displayValue: "14.2k",
        valueType: "traffic",
        trend: "+8.1%",
        icon: Users,
        color: "text-accent",
        shadow: "shadow-accent/20",
        graph: "from-accent/50 to-transparent",
    },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
    const { count, ref } = useCountUp(metric.numericValue, 2000 + index * 200);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <GlassPanel
                intensity="low"
                className="p-5 flex flex-col justify-between group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,255,170,0.15)]"
            >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-(family-name:--font-display)">
                        {metric.label}
                    </h3>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    </motion.div>
                </div>

                <div ref={ref}>
                    <div className="text-3xl font-extrabold text-white mb-2 font-sans tabular-nums tracking-tight">
                        {formatValue(count, metric.valueType)}
                    </div>
                    <motion.div
                        className="text-xs text-gray-500 font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                        <span className="text-green-400">{metric.trend}</span> vs last sync
                    </motion.div>
                </div>

                {/* Animated graph line */}
                <motion.div
                    className={`h-1 w-full rounded-full bg-linear-to-r ${metric.graph} mt-4`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.5 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                />
            </GlassPanel>
        </motion.div>
    );
}

export function MetricsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {metrics.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
        </div>
    );
}
