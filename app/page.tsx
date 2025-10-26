import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VideoReelSection } from "@/components/video-reel-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ProjectsSection } from "@/components/projects-section"
import { StatisticsSection } from "@/components/statistics-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <VideoReelSection />
      <StatisticsSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ServicesSection />
      <AboutSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
