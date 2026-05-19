import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { LocationsSection } from "@/components/locations-section"
import { AboutSection } from "@/components/about-section"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <LocationsSection />
      <AboutSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
