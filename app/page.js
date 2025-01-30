import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Stats } from "./components/stats"
import { Services } from "./components/services"
import { Process } from "./components/process"
import { Testimonials } from "./components/testimonials"
import { FAQ } from "./components/faq"
// import { CTA } from "@/components/cta"
import { Footer } from "./components/footer"
import { CTA } from "./components/cta"
import { DashboardPreview } from "./components/dashboardView"
import { MusicFeatures } from "./components/features"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DashboardPreview />
        <Stats />
        <Services />
        <MusicFeatures />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

