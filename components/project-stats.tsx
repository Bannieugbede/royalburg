"use client"

import { motion } from "framer-motion"
import { Building2, Layers3, Home, Users, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    icon: CheckCircle,
    value: "150+",
    label: "Projects Completed",
    description: "Successfully delivered across all service areas"
  },
  {
    icon: Building2,
    value: "35+",
    label: "Facilities Managed",
    description: "Commercial and residential properties"
  },
  {
    icon: Layers3,
    value: "500K+",
    label: "Blocks Supplied",
    description: "Quality blocks delivered to sites"
  },
  {
    icon: Home,
    value: "25+",
    label: "Real Estate Deals",
    description: "Property transactions facilitated"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Satisfied customers and growing"
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
    description: "Serving Abuja and beyond"
  },
]

export function ProjectStats() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-foreground font-medium mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
