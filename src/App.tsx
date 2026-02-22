import { Cards } from "@/components/cards"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Cards />
        <Footer />
      </div>
    </div>
  )
}
