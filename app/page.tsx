import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TypesPreviewSection } from "@/components/types-preview-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TypesPreviewSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
