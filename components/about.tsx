"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, Users, ArrowRight, Target, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "Building lasting relationships through transparency and integrity in every interaction.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Delivering excellence that exceeds expectations in every project we undertake.",
  },
  {
    icon: Clock,
    title: "Responsiveness",
    description: "24/7 availability and swift action to address your needs promptly.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Collaborative approach that treats every client as a valued long-term partner.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src="/images/team-engineers.jpg"
                  alt="Royalburg Construction Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 glass rounded-xl p-6 max-w-[260px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold">R</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">Royalburg</p>
                    <p className="text-primary text-xs">Est. Abuja, Nigeria</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Premium construction and facility management services trusted by leading organizations.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium">
                About Royalburg
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                <span className="text-foreground">Building Abuja&apos;s </span>
                <span className="text-gradient-gold">Future</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Royalburg Construction is a premium Abuja-based company delivering excellence across facility management, concrete block production, and real estate services. We serve developers, property owners, investors, and businesses who demand nothing but the best.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, transparency, and premium service delivery has established us as a trusted partner for leading organizations across Nigeria&apos;s capital city.
              </p>
            </div>

            {/* Mission & Vision Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="text-foreground font-semibold text-sm">Our Mission</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  To deliver premium services built on integrity, innovation, and excellence.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <h4 className="text-foreground font-semibold text-sm">Our Vision</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  To become Nigeria&apos;s most trusted construction and facility management company.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
