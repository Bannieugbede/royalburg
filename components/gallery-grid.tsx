"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, X, ChevronLeft, ChevronRight, Building2, Layers3, Home, Hammer } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Photos", icon: Camera },
  { id: "construction", label: "Construction", icon: Hammer },
  { id: "blocks", label: "Block Industry", icon: Layers3 },
  { id: "facility", label: "Facilities", icon: Building2 },
  { id: "real-estate", label: "Real Estate", icon: Home },
]

const galleryImages = [
  {
    id: 1,
    src: "/images/hero-abuja-skyline.jpg",
    alt: "Abuja skyline at golden hour",
    category: "real-estate",
    title: "Abuja Central Business District"
  },
  {
    id: 2,
    src: "/images/hero-construction-site.jpg",
    alt: "Active construction site in Abuja",
    category: "construction",
    title: "Construction Site Progress"
  },
  {
    id: 3,
    src: "/images/hero-luxury-estate.jpg",
    alt: "Luxury residential estate",
    category: "real-estate",
    title: "Maitama Luxury Estate"
  },
  {
    id: 4,
    src: "/images/blocks-manufacturing.jpg",
    alt: "Block manufacturing facility",
    category: "blocks",
    title: "Block Production Facility"
  },
  {
    id: 5,
    src: "/images/blocks-6inch-stack.jpg",
    alt: "6-inch concrete blocks",
    category: "blocks",
    title: "6-Inch Vibrated Blocks"
  },
  {
    id: 6,
    src: "/images/blocks-9inch-stack.jpg",
    alt: "9-inch concrete blocks",
    category: "blocks",
    title: "9-Inch Vibrated Blocks"
  },
  {
    id: 7,
    src: "/images/blocks-production-line.jpg",
    alt: "Block production line",
    category: "blocks",
    title: "Production Line Operations"
  },
  {
    id: 8,
    src: "/images/facility-management.jpg",
    alt: "Facility management team",
    category: "facility",
    title: "Facility Management Team"
  },
  {
    id: 9,
    src: "/images/facility-building-exterior.jpg",
    alt: "Commercial building exterior",
    category: "facility",
    title: "Commercial Building Maintenance"
  },
  {
    id: 10,
    src: "/images/real-estate-property.jpg",
    alt: "Property showcase",
    category: "real-estate",
    title: "Premium Property Listing"
  },
  {
    id: 11,
    src: "/images/real-estate-commercial.jpg",
    alt: "Commercial property",
    category: "real-estate",
    title: "Commercial Development"
  },
  {
    id: 12,
    src: "/images/team-meeting.jpg",
    alt: "Team meeting",
    category: "facility",
    title: "Professional Team Coordination"
  },
  {
    id: 13,
    src: "/images/team-engineers.jpg",
    alt: "Engineers at work",
    category: "construction",
    title: "Engineering Excellence"
  },
  {
    id: 14,
    src: "/images/project-completed-1.jpg",
    alt: "Completed residential project",
    category: "real-estate",
    title: "Completed Residential Project"
  },
  {
    id: 15,
    src: "/images/project-completed-2.jpg",
    alt: "Completed commercial project",
    category: "construction",
    title: "Completed Commercial Building"
  },
  {
    id: 16,
    src: "/images/project-ongoing.jpg",
    alt: "Ongoing construction project",
    category: "construction",
    title: "Ongoing Development"
  },
  {
    id: 17,
    src: "/images/gallery-construction-1.jpg",
    alt: "Construction workers laying blocks",
    category: "construction",
    title: "Block Laying in Progress"
  },
  {
    id: 18,
    src: "/images/gallery-blocks-loading.jpg",
    alt: "Loading blocks for delivery",
    category: "blocks",
    title: "Block Delivery Operations"
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const currentImageIndex = lightboxImage !== null 
    ? filteredImages.findIndex(img => img.id === lightboxImage)
    : -1

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setLightboxImage(filteredImages[currentImageIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[currentImageIndex + 1].id)
    }
  }

  const currentImage = galleryImages.find(img => img.id === lightboxImage)

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
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Work in <span className="text-gradient-gold">Pictures</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through photos showcasing our construction projects, block manufacturing, and property services.
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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`relative cursor-pointer group ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setLightboxImage(image.id)}
              >
                <div className={`relative overflow-hidden rounded-xl ${
                  index % 5 === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-foreground font-semibold">{image.title}</p>
                      <p className="text-muted-foreground text-sm">
                        {categories.find(c => c.id === image.category)?.label}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {currentImageIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentImageIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext() }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <p className="text-foreground font-semibold text-lg">{currentImage.title}</p>
                <p className="text-muted-foreground">
                  {categories.find(c => c.id === currentImage.category)?.label}
                </p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm text-muted-foreground">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
