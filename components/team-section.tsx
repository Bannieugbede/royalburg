"use client"

import { motion } from "framer-motion"
import { Users, Award, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

const teamHighlights = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team comprises industry veterans with decades of combined experience in construction, facility management, and real estate."
  },
  {
    icon: GraduationCap,
    title: "Qualified Professionals",
    description: "Licensed engineers, certified facility managers, and accredited real estate consultants form the backbone of our operations."
  },
  {
    icon: Briefcase,
    title: "Dedicated Service",
    description: "Every team member is committed to delivering exceptional service and maintaining the highest standards of professionalism."
  },
  {
    icon: Award,
    title: "Continuous Training",
    description: "We invest in ongoing training and development to ensure our team stays updated with industry best practices and innovations."
  },
]

export function TeamSection() {
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
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            The Royalburg Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Powered by <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our success is built on the dedication, expertise, and passion of our talented team members.
          </p>
        </motion.div>

        {/* Team Image + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                A Team You Can Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Royalburg Construction, we believe that our people are our greatest asset. Our team brings together 
                diverse expertise spanning construction engineering, facility management, real estate consulting, and 
                customer service excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our skilled block factory workers to our experienced project managers, every team member shares a 
                common commitment to quality, integrity, and client satisfaction. We work as one cohesive unit to 
                deliver results that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {teamHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-semibold mb-1">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/team-engineers.jpg"
                  alt="Our engineers at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/blocks-manufacturing.jpg"
                  alt="Block production team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/facility-management.jpg"
                  alt="Facility management team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-gold rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We&apos;re always looking for talented individuals who share our passion for excellence. 
            If you&apos;re interested in being part of Royalburg Construction, we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:careers@royalburgconstruction.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Career Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  )
}
