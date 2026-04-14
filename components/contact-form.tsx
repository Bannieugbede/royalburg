"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Building2, Layers3, Home, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const serviceOptions = [
  { id: "facility", label: "Facility Management", icon: Building2 },
  { id: "blocks", label: "Block Industry", icon: Layers3 },
  { id: "real-estate", label: "Real Estate", icon: Home },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - in production, this would send to an API
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-8 lg:p-12 h-full flex flex-col items-center justify-center text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          Thank you for contacting Royalburg Construction. Our team will get back to you within 24 hours.
        </p>
        <p className="text-sm text-muted-foreground">
          For immediate assistance, call us at{" "}
          <a href="tel:08081572773" className="text-primary hover:underline">
            08081572773
          </a>
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8 lg:p-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
          Send Us a Message
        </h2>
        <p className="text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name <span className="text-primary">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address <span className="text-primary">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="bg-background/50 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08012345678"
            required
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>

        {/* Service Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Service Interest <span className="text-primary">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {serviceOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, service: option.id }))}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  formData.service === option.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background/50 text-muted-foreground hover:border-primary/50"
                }`}
              >
                <option.icon className="w-6 h-6" />
                <span className="text-xs font-medium text-center">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Your Message <span className="text-primary">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            rows={5}
            required
            className="bg-background/50 border-border focus:border-primary resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting || !formData.service}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to be contacted by Royalburg Construction regarding your inquiry.
        </p>
      </form>
    </motion.div>
  )
}
