"use client"

import { motion } from "framer-motion"
import { Settings, Package, TrendingUp, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Settings,
    title: "Facility Operations",
    description: "End-to-end facility management solutions that keep your properties running smoothly. We handle maintenance, security, and operations so you can focus on growth.",
    highlight: "Operational Excellence",
  },
  {
    icon: Package,
    title: "Material Readiness",
    description: "Premium concrete blocks and construction materials ready when you need them. Our manufacturing ensures quality and timely delivery for your projects.",
    highlight: "Quality Assured",
  },
  {
    icon: TrendingUp,
    title: "Real Estate Advisory",
    description: "Strategic guidance for property investments, development opportunities, and portfolio management. Make informed decisions with expert market insights.",
    highlight: "Investment Ready",
  },
]

export function Solutions() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-6">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Capabilities That </span>
            <span className="text-gradient-gold">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our integrated approach combines facility expertise, material excellence, and real estate intelligence to deliver comprehensive solutions.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                href="https://wa.me/2348081572773"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-full glass rounded-2xl p-8 transition-all duration-500 hover:bg-card group-hover:border-primary/30 overflow-hidden">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <solution.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-3">
                      <span className="text-primary text-xs font-medium tracking-wider uppercase">
                        {solution.highlight}
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
