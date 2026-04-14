import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { MissionVisionValues } from "@/components/mission-vision-values"
import { TeamSection } from "@/components/team-section"
import { CompanyHistory } from "@/components/company-history"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "About Us | Royalburg Construction - Abuja's Premier Construction Company",
  description: "Learn about Royalburg Construction's mission, vision, and values. We are Abuja's leading facility management, block manufacturing, and real estate company committed to excellence.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="About Our Company"
        subtitle="Who We Are"
        description="Royalburg Construction is Abuja's premier construction and facility management company, dedicated to building excellence and delivering trust across Nigeria."
        backgroundImage="/images/about-company.jpg"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <MissionVisionValues />
      <CompanyHistory />
      <TeamSection />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
