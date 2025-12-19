import  HeroSection  from "@/components/section/hero-section"
import  AboutSection  from "@/components/section/about-section"
import  ProjectsSection  from "@/components/section/project-section"
import  CertificatesSection  from "@/components/section/certificates-section"
import  Footer  from "@/components/section/footer"
import  Navbar  from "@/components/navbar"
import  ExperienceSection  from "@/components/section/experience-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      
      <Footer />
    </main>
  )
}
