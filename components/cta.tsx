"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gold Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-3xl">R</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-6">
            <span className="text-foreground">Ready to Build </span>
            <span className="text-gradient-gold">Something Exceptional?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with Abuja&apos;s premium construction and facility management company. 
            Let&apos;s discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8 h-14 text-base"
            >
              <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 h-14 text-base"
            >
              <Link href="tel:08081572773">
                <Phone className="mr-2 w-5 h-5" />
                Call 08081572773
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-primary/20"
          >
            <p className="text-muted-foreground text-sm mb-4">Trusted by leading organizations across Abuja</p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/60 text-sm">
              <span>Property Developers</span>
              <span className="hidden sm:inline">|</span>
              <span>Commercial Enterprises</span>
              <span className="hidden sm:inline">|</span>
              <span>Real Estate Investors</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
