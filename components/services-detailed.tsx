"use client"

import { motion } from "framer-motion"
import { Building2, Layers3, Home, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: "facility-management",
    icon: Building2,
    title: "Facility Management",
    tagline: "Comprehensive Property Care",
    description: "Professional facility management services that keep your properties running smoothly and efficiently. We handle everything so you can focus on your core business.",
    image: "/images/facility-management.jpg",
    features: [
      "Building Maintenance & Repairs",
      "Security Management & Surveillance",
      "Cleaning & Janitorial Services",
      "HVAC & Electrical Systems",
      "Landscaping & Grounds Maintenance",
      "24/7 Emergency Response",
      "Tenant Relations Management",
      "Vendor Coordination",
      "Energy Management Solutions",
      "Compliance & Safety Audits"
    ],
    benefits: [
      "Reduced operational costs",
      "Extended asset lifespan",
      "Enhanced property value",
      "Improved tenant satisfaction"
    ]
  },
  {
    id: "block-industry",
    icon: Layers3,
    title: "Block Industry",
    tagline: "Premium Building Materials",
    description: "Manufacturing high-quality 6-inch and 9-inch vibrated concrete blocks that form the foundation of Abuja's finest structures. Our blocks are made to last.",
    image: "/images/blocks-manufacturing.jpg",
    features: [
      "6-Inch Vibrated Concrete Blocks",
      "9-Inch Vibrated Concrete Blocks",
      "Hollow & Solid Block Options",
      "Quality-Controlled Production",
      "Bulk Orders & Wholesale",
      "Timely Delivery Service",
      "Construction Site Delivery",
      "Technical Specifications Available",
      "Custom Order Quantities",
      "Competitive Wholesale Pricing"
    ],
    benefits: [
      "Superior compressive strength",
      "Consistent dimensions",
      "Cost-effective solutions",
      "Reliable supply chain"
    ],
    products: [
      {
        name: "6-Inch Blocks",
        image: "/images/blocks-6inch-stack.jpg",
        specs: "Standard hollow block ideal for interior walls and partitions"
      },
      {
        name: "9-Inch Blocks",
        image: "/images/blocks-9inch-stack.jpg",
        specs: "Heavy-duty block for exterior walls and load-bearing structures"
      }
    ]
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Services",
    tagline: "Strategic Property Solutions",
    description: "Expert real estate advisory services helping clients navigate Abuja's dynamic property market. From investment opportunities to property management, we've got you covered.",
    image: "/images/real-estate-property.jpg",
    features: [
      "Property Sales & Acquisitions",
      "Investment Advisory",
      "Property Valuation",
      "Market Analysis & Research",
      "Land Acquisition Support",
      "Title Verification",
      "Property Development Consulting",
      "Lease Negotiations",
      "Portfolio Management",
      "Due Diligence Services"
    ],
    benefits: [
      "Expert market knowledge",
      "Vetted opportunities",
      "Risk mitigation",
      "Maximum ROI potential"
    ]
  }
]

export function ServicesDetailed() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Three Core Pillars
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Excellence in Every <span className="text-gradient-gold">Service</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our integrated approach combines facility management, quality block manufacturing, and real estate expertise 
            to provide comprehensive solutions for all your property needs.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-32"
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <p className="text-primary text-sm font-medium">{service.tagline}</p>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="glass rounded-xl p-6">
                    <h4 className="text-foreground font-semibold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>

                  {/* Products Showcase (for Block Industry) */}
                  {service.products && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {service.products.map((product) => (
                        <motion.div
                          key={product.name}
                          whileHover={{ y: -5 }}
                          className="glass rounded-xl overflow-hidden"
                        >
                          <div className="relative aspect-video">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h5 className="text-foreground font-semibold mb-1">{product.name}</h5>
                            <p className="text-xs text-muted-foreground">{product.specs}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`absolute -bottom-6 glass-gold rounded-xl p-4 hidden lg:block ${
                      index % 2 === 0 ? "-right-6" : "-left-6"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">Premium Quality</p>
                        <p className="text-xs text-muted-foreground">Trusted by 50+ clients</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
