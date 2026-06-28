"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow lg:p-8",
        hover && "hover:border-primary/20 hover:shadow-xl",
        glass && "glass-card",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
