"use client"

import { motion } from "framer-motion"
import { MessageCircle, ClipboardCheck, Hammer, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    description: "Contact us via phone or WhatsApp to discuss your project requirements. We listen carefully to understand your needs, budget, and timeline."
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assessment & Proposal",
    description: "Our team conducts a thorough assessment and prepares a detailed proposal outlining scope, costs, and deliverables for your review and approval."
  },
  {
    number: "03",
    icon: Hammer,
    title: "Project Execution",
    description: "Once approved, we mobilize our resources and execute the project with precision, keeping you informed at every stage of progress."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Delivery & Support",
    description: "We deliver on our promises and provide ongoing support to ensure your complete satisfaction. Our relationship doesn't end at project completion."
  }
]

export function ServiceProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <ClipboardCheck className="w-4 h-4" />
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Simple <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From initial contact to project completion, we&apos;ve streamlined our process to make working with us 
            as easy and transparent as possible.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}

              <div className="glass rounded-xl p-6 h-full relative">
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>

                <div className="pt-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to get started? Let&apos;s discuss your project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/2348081572773" target="_blank" rel="noopener noreferrer">
                Contact via WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Link href="/contact">
                Visit Contact Page
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
