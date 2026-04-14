"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Adamu Musa",
    role: "Property Investor",
    company: "Musa Holdings Ltd",
    content: "Royalburg Construction has been instrumental in managing our commercial properties across Abuja. Their attention to detail and 24/7 responsiveness has significantly improved tenant satisfaction and property value.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chidinma Okafor",
    role: "Facility Supervisor",
    company: "Sterling Bank PLC",
    content: "Working with Royalburg for our facility management needs has been exceptional. Their professional team handles everything from maintenance to security with utmost precision. Truly a premium service provider.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emmanuel Abubakar",
    role: "Project Developer",
    company: "Prime Developers Nigeria",
    content: "The quality of concrete blocks from Royalburg is unmatched. Their 6-inch and 9-inch vibrated blocks have become our standard for all premium construction projects. Consistent quality, timely delivery.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Hassan",
    role: "Real Estate Director",
    company: "Hassan Properties",
    content: "Royalburg's real estate advisory services helped us identify prime investment opportunities in Abuja. Their market insights and professional guidance have been invaluable for our portfolio growth.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
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
            <Quote className="w-4 h-4" />
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="text-gradient-gold">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hear from our valued clients about their experience partnering with Royalburg Construction.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
