"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Royalburg Construction offer?",
    answer: "Royalburg Construction offers three core services: Facility Management (comprehensive property operations including maintenance, security, and cleaning), Block Industry (premium 6-inch and 9-inch vibrated concrete blocks), and Real Estate services (investment advisory, property sales, leasing, and portfolio management).",
  },
  {
    question: "Do you provide services across all of Abuja?",
    answer: "Yes, we provide our services throughout Abuja and its surrounding areas. Our facility management, block delivery, and real estate services cover Central Business District, Maitama, Wuse, Gwarinpa, Asokoro, Jabi, and other major districts in the FCT.",
  },
  {
    question: "How can I contact Royalburg Construction?",
    answer: "You can reach us through multiple channels: WhatsApp at 08081572773 for quick responses, call us directly at 08081572773, or email us at info@royalburgconstruction.com. We respond to all inquiries within 24 hours.",
  },
  {
    question: "What makes your concrete blocks different from others?",
    answer: "Our concrete blocks are manufactured using advanced vibration technology ensuring superior compressive strength and durability. We produce both 6-inch and 9-inch blocks that meet and exceed Nigerian building standards, making them ideal for premium construction projects in Abuja.",
  },
  {
    question: "What is your approach to premium service delivery?",
    answer: "Our premium delivery approach is built on four pillars: Quality (using the best materials and methods), Transparency (clear communication and honest pricing), Responsiveness (24/7 availability), and Partnership (treating every client as a valued long-term partner). We believe in exceeding expectations, not just meeting them.",
  },
  {
    question: "Do you offer facility management for commercial properties?",
    answer: "Absolutely. Our facility management services are designed for commercial properties including office buildings, retail spaces, industrial facilities, and mixed-use developments. We handle everything from day-to-day maintenance to security management and vendor coordination.",
  },
  {
    question: "Can you help with real estate investment in Abuja?",
    answer: "Yes, our real estate advisory services are specifically tailored for investors looking for opportunities in Abuja's property market. We provide market analysis, property valuation, land acquisition assistance, development consultancy, and portfolio management services.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
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
            <HelpCircle className="w-4 h-4" />
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Find answers to common questions about our services, coverage, and approach.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
