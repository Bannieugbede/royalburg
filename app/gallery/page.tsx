import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { VideoSection } from "@/components/video-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Gallery | Royalburg Construction - Photos & Videos of Our Work",
  description: "Browse photos and videos of Royalburg Construction's projects, block manufacturing, facility management, and real estate work in Abuja, Nigeria.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Our Photo Gallery"
        subtitle="Visual Showcase"
        description="Explore our work through photos and videos showcasing our construction projects, block manufacturing, and facility management services."
        backgroundImage="/images/hero-abuja-skyline.jpg"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryGrid />
      <VideoSection />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
