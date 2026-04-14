"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, Factory, Home, Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "facility",
    icon: Building,
    title: "Facility Management",
    shortDesc: "Comprehensive operational excellence",
    description: "Our premium facility management services ensure your properties operate at peak performance. From maintenance to security, we handle every aspect of building operations with precision and care.",
    image: "/images/facility-management.jpg",
    features: [
      "24/7 Building Maintenance & Support",
      "Professional Security Management",
      "Cleaning & Sanitation Services",
      "MEP Systems Management",
      "Vendor & Contract Management",
      "Emergency Response Protocols",
    ],
  },
  {
    id: "blocks",
    icon: Factory,
    title: "Block Industry",
    shortDesc: "Premium concrete block production",
    description: "We manufacture superior quality 6-inch and 9-inch vibrated concrete blocks that form the foundation of Abuja's finest buildings. Our blocks meet and exceed industry standards for durability and strength.",
    image: "/images/blocks-manufacturing.jpg",
    features: [
      "6-Inch Vibrated Concrete Blocks",
      "9-Inch Vibrated Concrete Blocks",
      "High Compressive Strength",
      "Precision Manufacturing",
      "Bulk Supply Capability",
      "Quality Certified Materials",
    ],
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    shortDesc: "Strategic investment opportunities",
    description: "Unlock exceptional real estate opportunities in Abuja's most sought-after locations. Our expert advisory services guide investors, developers, and property owners to make informed, profitable decisions.",
    image: "/images/real-estate-property.jpg",
    features: [
      "Property Investment Advisory",
      "Land Acquisition Services",
      "Development Consultancy",
      "Property Sales & Leasing",
      "Market Analysis & Valuation",
      "Portfolio Management",
    ],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Core Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Excellence Across </span>
            <span className="text-gradient-gold">Three Pillars</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From facility management to construction materials and real estate, we deliver premium solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeService.id === service.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass hover:bg-secondary text-foreground"
              }`}
            >
              <service.icon className="w-5 h-5" />
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <motion.img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <activeService.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">{activeService.title}</p>
                      <p className="text-muted-foreground text-sm">{activeService.shortDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  {activeService.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {activeService.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                    Request Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-secondary"
                >
                  <Link href="tel:08081572773">
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
