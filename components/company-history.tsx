"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, TrendingUp, MapPin, Clock } from "lucide-react"
import Image from "next/image"

const milestones = [
  {
    year: "2009",
    title: "Foundation",
    description: "Royalburg Construction was founded in Abuja with a vision to deliver premium construction services.",
    icon: Building2
  },
  {
    year: "2012",
    title: "Block Industry Launch",
    description: "Established our block manufacturing facility, producing high-quality 6-inch and 9-inch vibrated blocks.",
    icon: Award
  },
  {
    year: "2015",
    title: "Facility Management Division",
    description: "Expanded into comprehensive facility management services for commercial and residential properties.",
    icon: Users
  },
  {
    year: "2018",
    title: "Real Estate Advisory",
    description: "Launched real estate consulting services to help clients navigate Abuja's property market.",
    icon: TrendingUp
  },
  {
    year: "2021",
    title: "Regional Expansion",
    description: "Extended our services across the Federal Capital Territory and neighboring states.",
    icon: MapPin
  },
  {
    year: "Present",
    title: "Industry Leader",
    description: "Recognized as one of Abuja's most trusted construction and facility management companies.",
    icon: Clock
  },
]

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Customer Support" },
]

export function CompanyHistory() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Building a Legacy of <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to becoming Abuja&apos;s trusted construction partner, our journey reflects 
            our commitment to quality and growth.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-engineers.jpg"
                alt="Royalburg Construction engineers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-foreground font-semibold text-lg">Our Expert Team</p>
                <p className="text-muted-foreground">
                  Skilled professionals dedicated to delivering excellence in every project.
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-gold rounded-xl p-6 hidden lg:block"
            >
              <p className="text-4xl font-bold text-primary">2009</p>
              <p className="text-sm text-muted-foreground">Year Founded</p>
            </motion.div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <milestone.icon className="w-6 h-6 text-primary" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-primary text-sm font-medium mb-1">{milestone.year}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
