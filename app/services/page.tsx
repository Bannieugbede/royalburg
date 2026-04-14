import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { ServicesDetailed } from "@/components/services-detailed"
import { ServiceProcess } from "@/components/service-process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Our Services | Royalburg Construction - Facility Management, Block Industry & Real Estate",
  description: "Explore Royalburg Construction's comprehensive services: facility management, 6-inch and 9-inch vibrated concrete blocks, and real estate advisory in Abuja, Nigeria.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Our Professional Services"
        subtitle="What We Offer"
        description="Comprehensive construction, facility management, and real estate solutions tailored to meet your needs in Abuja and across Nigeria."
        backgroundImage="/images/hero-construction-site.jpg"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />
      <ServicesDetailed />
      <ServiceProcess />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
