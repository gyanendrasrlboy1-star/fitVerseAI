import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glow?: "green" | "blue" | "teal" | "none";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  glow = "none",
  hoverEffect = false,
  ...props
}) => {
  const glowClasses = {
    green: "hover:shadow-glow-primary",
    blue: "hover:shadow-glow-secondary",
    teal: "hover:shadow-glow-accent",
    none: "",
  };

  return (
    <motion.div
      whileHover={
        hoverEffect ? { y: -3, transition: { duration: 0.2 } } : undefined
      }
      className={`glass-card rounded-2xl p-5 shadow-sm transition-all duration-300 relative overflow-hidden ${glowClasses[glow]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
