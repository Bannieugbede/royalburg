"use client"

import { motion } from "framer-motion"
import { Crown, Target, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const strengths = [
  {
    icon: Crown,
    title: "Premium Look",
    description: "Sophisticated design and attention to detail that positions your projects among the elite. Every element crafted to reflect excellence.",
  },
  {
    icon: Target,
    title: "Better Conversion",
    description: "Strategic positioning and quality delivery that turns prospects into long-term partners. Results that speak for themselves.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    description: "Modern, accessible service delivery that meets you where you are. 24/7 support and seamless communication.",
  },
]

export function BrandStrength() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium">
                <Crown className="w-4 h-4" />
                Why Royalburg
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                <span className="text-foreground">Built Different. </span>
                <span className="text-gradient-gold">Delivered Better.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Royalburg Construction stands apart through an unwavering commitment to quality, transparency, and premium service delivery. We don&apos;t just meet expectations—we redefine them.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Premium Quality Standards</h3>
                  <p className="text-muted-foreground">Every project, every block, every service reflects our commitment to excellence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Investor-Ready Solutions</h3>
                  <p className="text-muted-foreground">Strategic advisory and premium execution that maximizes your returns.</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                Partner With Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 transition-all duration-500 hover:bg-secondary/50 hover:border-primary/20">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                      <strength.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {strength.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
