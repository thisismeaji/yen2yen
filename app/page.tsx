import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01"
import AboutUs from "@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01"
import Features from "@/components/shadcn-studio/blocks/features-section-01/features-section-01"
import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01"
import Team from "@/components/shadcn-studio/blocks/team-section-01/team-section-01"
import CTA from "@/components/shadcn-studio/blocks/cta-section-01/cta-section-01"
import Navigation from "../components/navigation/navigation"
import Footer from "@/components/shadcn-studio/blocks/footer-component-01/footer-component-01"

export default function Home() {
  return (
    <>
    <Navigation/>
    <main className="flex flex-col">
      <HeroSection />
      <AboutUs />
      <Features />
      <Team/>
      <TestimonialsComponent />
      <CTA/>
    </main>
    <Footer/>
    </>
  )
}
