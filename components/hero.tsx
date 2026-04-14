"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Clock, Award, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    badge: "Excellence in Every Detail",
    title: "Premium Facility Management",
    subtitle: "Comprehensive Solutions",
    description: "Delivering world-class facility management services that ensure your properties operate at peak efficiency. Trust Abuja's leading facility management company.",
    image: "/images/facility-building-exterior.jpg",
  },
  {
    id: 2,
    badge: "Built to Last",
    title: "Superior Concrete Blocks",
    subtitle: "Block Industry Excellence",
    description: "Manufacturing premium 6-inch and 9-inch vibrated concrete blocks that form the foundation of Abuja's finest buildings. Quality materials for lasting structures.",
    image: "/images/blocks-manufacturing.jpg",
  },
  {
    id: 3,
    badge: "Invest with Confidence",
    title: "Premium Real Estate",
    subtitle: "Strategic Investments",
    description: "Unlock exceptional real estate opportunities in Abuja's most sought-after locations. Expert advisory for investors, developers, and property owners.",
    image: "/images/hero-luxury-estate.jpg",
  },
]

const stats = [
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "#1", label: "In Facility Mgmt" },
]

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  
  useEffect(() => {
    const numericPart = value.replace(/[^0-9]/g, "")
    const prefix = value.replace(/[0-9]/g, "")
    
    if (!numericPart) {
      setDisplayValue(value)
      return
    }

    const target = parseInt(numericPart)
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(prefix + Math.floor(current) + suffix)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, suffix])

  return <span>{displayValue}</span>
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>
      </AnimatePresence>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {slide.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight text-balance">
                  <span className="text-foreground">{slide.title.split(" ").slice(0, -1).join(" ")} </span>
                  <span className="text-gradient-gold">{slide.title.split(" ").slice(-1)}</span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group px-8"
              >
                <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>

            {/* Slide Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-8"
            >
              <div className="flex gap-2">
                <button
                  onClick={() => { prevSlide(); setIsAutoPlaying(false) }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { nextSlide(); setIsAutoPlaying(false) }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false) }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide ? "w-12 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold">R</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Royalburg Construction</p>
                  <p className="text-muted-foreground text-sm">Abuja&apos;s Premium Choice</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-primary" />
                      <span className="text-2xl font-bold text-foreground">
                        <AnimatedCounter value={stat.value} />
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Trusted by leading developers and property owners across Abuja
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
