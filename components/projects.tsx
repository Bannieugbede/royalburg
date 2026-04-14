"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Premium Office Complex",
    category: "Facility Management",
    location: "Central Business District, Abuja",
    image: "/images/facility-building-exterior.jpg",
    badge: "Featured",
    size: "large",
  },
  {
    id: 2,
    title: "Block Supply Project",
    category: "Block Industry",
    location: "Gwarinpa, Abuja",
    image: "/images/blocks-manufacturing.jpg",
    badge: "Completed",
    size: "medium",
  },
  {
    id: 3,
    title: "Luxury Residential Estate",
    category: "Real Estate",
    location: "Maitama, Abuja",
    image: "/images/hero-luxury-estate.jpg",
    badge: "Premium",
    size: "medium",
  },
  {
    id: 4,
    title: "Commercial Plaza",
    category: "Facility Management",
    location: "Wuse 2, Abuja",
    image: "/images/real-estate-commercial.jpg",
    badge: "Active",
    size: "small",
  },
  {
    id: 5,
    title: "Industrial Block Production",
    category: "Block Industry",
    location: "Idu Industrial, Abuja",
    image: "/images/blocks-production-line.jpg",
    badge: "Ongoing",
    size: "small",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Project Showcase
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              <span className="text-foreground">The Royalburg </span>
              <span className="text-gradient-gold">Standard</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our portfolio of premium projects that showcase our commitment to excellence across facility management, block production, and real estate.
            </p>
          </div>
          
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <Link
                href="/projects"
                className="block relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-full min-h-[280px]"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 glass-gold rounded-full text-primary text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {project.badge}
                  </span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
