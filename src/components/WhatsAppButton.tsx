"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/config/business";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-background group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
    </motion.a>
  );
}
