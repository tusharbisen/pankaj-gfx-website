"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({ 
  href, 
  onClick, 
  children, 
  variant = "primary",
  className = "",
  type = "button"
}: AnimatedButtonProps) {
  
  const baseClasses = "relative px-8 py-3 rounded-full font-medium inline-flex items-center justify-center overflow-hidden transition-all";
  
  const variants = {
    primary: "bg-brand-gradient text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]",
    secondary: "bg-surface text-white border border-gray-700 hover:border-gray-500",
    outline: "bg-transparent text-white border-2 border-primary hover:bg-primary/10"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div 
          className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"
          initial={false}
        />
      )}
    </>
  );

  const combinedClassName = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      type={type}
      onClick={onClick} 
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
