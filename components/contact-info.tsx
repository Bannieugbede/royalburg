"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "08081572773",
    link: "tel:08081572773",
    description: "Call us directly for immediate assistance"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+234 808 157 2773",
    link: "https://wa.me/2348081572773",
    description: "Message us on WhatsApp anytime"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@royalburgconstruction.com",
    link: "mailto:info@royalburgconstruction.com",
    description: "Send us a detailed inquiry"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abuja, Nigeria",
    link: "#",
    description: "Federal Capital Territory"
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed (Emergency only)" },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
          <Phone className="w-4 h-4" />
          Contact Information
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Let&apos;s Build Together
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need facility management services, quality blocks for your construction project, 
          or real estate advisory, we&apos;re here to help. Reach out through any of the channels below.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.link}
            target={method.link.startsWith("http") ? "_blank" : undefined}
            rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl p-4 flex items-start gap-4 hover:border-primary/30 transition-all group block"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <method.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{method.title}</p>
              <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                {method.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-foreground font-semibold">Business Hours</h3>
        </div>
        <div className="space-y-3">
          {businessHours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{schedule.day}</span>
              <span className="text-foreground font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            24/7 Emergency Support Available
          </div>
        </div>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-gold rounded-xl p-6"
      >
        <h3 className="text-foreground font-semibold mb-2">Prefer WhatsApp?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          For the fastest response, message us directly on WhatsApp. We typically respond within minutes.
        </p>
        <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
          <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.div>

      {/* Map Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative rounded-xl overflow-hidden aspect-[4/3]"
      >
        <Image
          src="/images/hero-abuja-skyline.jpg"
          alt="Abuja, Nigeria"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold">Abuja, Federal Capital Territory</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Serving clients across Abuja and Nigeria
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
