"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Layers3, Home, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "facility", label: "Facility Management", icon: Building2 },
  { id: "blocks", label: "Block Supply", icon: Layers3 },
  { id: "real-estate", label: "Real Estate", icon: Home },
]

const projects = [
  {
    id: 1,
    title: "Maitama Corporate Tower",
    category: "facility",
    location: "Maitama, Abuja",
    year: "2023",
    image: "/images/facility-building-exterior.jpg",
    description: "Comprehensive facility management for a 12-story corporate office building, including security, maintenance, and cleaning services.",
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Asokoro Luxury Residences",
    category: "real-estate",
    location: "Asokoro, Abuja",
    year: "2023",
    image: "/images/project-completed-1.jpg",
    description: "Premium residential development featuring modern apartments with world-class amenities in one of Abuja's most prestigious neighborhoods.",
    status: "Completed"
  },
  {
    id: 3,
    title: "Wuse Commercial Complex",
    category: "blocks",
    location: "Wuse II, Abuja",
    year: "2022",
    image: "/images/project-completed-2.jpg",
    description: "Supplied over 50,000 6-inch and 9-inch vibrated blocks for this major commercial development in the heart of Wuse.",
    status: "Completed"
  },
  {
    id: 4,
    title: "Central Business District Office Park",
    category: "facility",
    location: "CBD, Abuja",
    year: "2023",
    image: "/images/real-estate-commercial.jpg",
    description: "Full-service facility management including landscaping, HVAC maintenance, and 24/7 security monitoring.",
    status: "Ongoing"
  },
  {
    id: 5,
    title: "Gwarimpa Estate Development",
    category: "blocks",
    location: "Gwarimpa, Abuja",
    year: "2022",
    image: "/images/gallery-construction-1.jpg",
    description: "Major block supply contract for residential estate construction, delivering quality blocks on schedule.",
    status: "Completed"
  },
  {
    id: 6,
    title: "Jabi Lake Apartments",
    category: "real-estate",
    location: "Jabi, Abuja",
    year: "2024",
    image: "/images/hero-luxury-estate.jpg",
    description: "Waterfront luxury apartments development with stunning views of Jabi Lake, featuring premium finishes.",
    status: "Ongoing"
  },
  {
    id: 7,
    title: "Life Camp Shopping Plaza",
    category: "facility",
    location: "Life Camp, Abuja",
    year: "2021",
    image: "/images/facility-management.jpg",
    description: "Comprehensive facility management for retail complex including tenant coordination and maintenance.",
    status: "Completed"
  },
  {
    id: 8,
    title: "Kubwa Housing Project",
    category: "blocks",
    location: "Kubwa, Abuja",
    year: "2023",
    image: "/images/blocks-production-line.jpg",
    description: "Large-scale block supply for affordable housing development, providing quality materials at competitive rates.",
    status: "Completed"
  },
  {
    id: 9,
    title: "Garki Investment Property",
    category: "real-estate",
    location: "Garki, Abuja",
    year: "2022",
    image: "/images/real-estate-property.jpg",
    description: "Property acquisition and development advisory for commercial investment in prime Garki location.",
    status: "Completed"
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our work across facility management, block manufacturing, and real estate services.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Ongoing" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                        : "bg-primary/20 text-primary border border-primary/30"
                    }`}>
                      {project.status}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-xs text-muted-foreground">
                      {categories.find(c => c.id === project.category)?.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More / Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working with us on your next project?
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
              Discuss Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
