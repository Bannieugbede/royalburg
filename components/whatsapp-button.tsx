"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="https://wa.me/2348081572773"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip */}
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute right-full mr-3 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
        >
          Chat with us
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
        </motion.span>
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        
        {/* Button */}
        <span className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </span>
      </Link>
    </motion.div>
  )
}
