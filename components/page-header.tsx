"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHeader({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = "/images/hero-abuja-skyline.jpg",
  breadcrumbs = []
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pb-16 pt-40">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.nav>
        )}

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
            <span className="text-foreground">{title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="text-gradient-gold">{title.split(" ").slice(-1)}</span>
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
