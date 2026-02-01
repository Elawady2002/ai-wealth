"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    glow?: boolean;
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = "primary", glow = true, children, ...props }, ref) => {

        const getBaseStyles = () => {
            switch (variant) {
                case "primary":
                    return "bg-primary text-black border border-primary";
                case "secondary":
                    return "bg-secondary text-black border border-secondary";
                case "danger":
                    return "bg-red-500 text-white border border-red-500";
                case "ghost":
                    return "bg-transparent text-primary border border-primary/50 hover:bg-primary/10";
                default:
                    return "bg-white text-black";
            }
        };

        const getGlowStyles = () => {
            if (!glow || variant === "ghost") return "";
            switch (variant) {
                case "primary":
                    return "shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)]";
                case "secondary":
                    return "shadow-[0_0_20px_rgba(42,255,0,0.4)] hover:shadow-[0_0_30px_rgba(42,255,0,0.6)]";
                case "danger":
                    return "shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]";
                default:
                    return "";
            }
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300",
                    getBaseStyles(),
                    getGlowStyles(),
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">{children as React.ReactNode}</span>
                {/* Optional: Add internal shine logic here if needed */}
            </motion.button>
        );
    }
);

NeonButton.displayName = "NeonButton";
