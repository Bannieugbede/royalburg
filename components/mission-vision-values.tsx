"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Shield, Award, Lightbulb, Users, Handshake } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical standards that build lasting trust with our clients and partners."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every project, ensuring quality craftsmanship and superior service delivery."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace modern construction techniques and technologies to deliver efficient, sustainable, and cost-effective solutions."
  },
  {
    icon: Users,
    title: "Reliability",
    description: "We deliver on our promises, meeting deadlines and maintaining consistent quality that our clients can depend on."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build collaborative relationships with clients, treating every project as a shared journey toward mutual success."
  },
  {
    icon: Heart,
    title: "Community",
    description: "We are committed to contributing positively to the growth and development of Abuja and Nigeria as a whole."
  },
]

export function MissionVisionValues() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Mission & Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 lg:p-12 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-medium uppercase tracking-wider">Our Purpose</p>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Mission</h2>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                To deliver premium construction, facility management, and real estate services built on a foundation of 
                <span className="text-primary font-semibold"> integrity, innovation, and excellence</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing world-class services that exceed client expectations, contribute to 
                sustainable development in Abuja and across Nigeria, and create lasting value for all stakeholders. 
                Through our expertise in facility management, block manufacturing, and real estate, we aim to be the 
                trusted partner of choice for individuals, businesses, and developers seeking quality and reliability.
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Guiding every project we undertake</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 lg:p-12 h-full border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-sm font-medium uppercase tracking-wider">Our Aspiration</p>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Vision</h2>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                To become the <span className="text-primary font-semibold">most trusted and respected</span> construction 
                and facility management company in Nigeria.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision Royalburg Construction as the industry leader, recognized for our unwavering commitment to 
                quality, our innovative approach to construction and property services, and our positive impact on 
                communities. We aspire to set the benchmark for excellence in facility management, block manufacturing, 
                and real estate development, making Royalburg the first choice for all construction and property needs 
                in Abuja and beyond.
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Inspiring our growth and direction</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our Core <span className="text-gradient-gold">Values</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These principles guide everything we do, from how we treat our clients to how we approach every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="aspect-[21/9] relative">
            <Image
              src="/images/team-meeting.jpg"
              alt="Royalburg Construction team meeting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-lg">
                  <p className="text-primary font-medium mb-2">Our Commitment</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    Building Tomorrow&apos;s Nigeria, Today
                  </h3>
                  <p className="text-muted-foreground">
                    Every block we manufacture, every facility we manage, and every property we develop contributes to 
                    the growth of Abuja and our beloved nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
