import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectStats } from "@/components/project-stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Our Projects | Royalburg Construction - Portfolio of Excellence in Abuja",
  description: "Explore Royalburg Construction's portfolio of completed and ongoing projects including facility management, block supply, and real estate development in Abuja, Nigeria.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Our Project Portfolio"
        subtitle="Our Work"
        description="Explore our track record of successful projects across facility management, block supply, and real estate development in Abuja."
        backgroundImage="/images/project-completed-1.jpg"
        breadcrumbs={[{ label: "Projects", href: "/projects" }]}
      />
      <ProjectStats />
      <ProjectsGrid />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
