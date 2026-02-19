"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  gradient?: boolean;
}

export function GlassCard({ className, children, gradient = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {gradient && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl pointer-events-none" />
      )}
      {/* Content */}
      <div className="relative z-10 text-card-foreground">
        {children}
      </div>
    </motion.div>
  );
}
