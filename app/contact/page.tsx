import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Contact Us | Royalburg Construction - Get in Touch",
  description: "Contact Royalburg Construction for facility management, block supply, and real estate services in Abuja. Call 08081572773 or send us a message.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Us"
        description="Ready to start your project? Have questions about our services? We're here to help. Reach out to us today."
        backgroundImage="/images/contact-office.jpg"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
