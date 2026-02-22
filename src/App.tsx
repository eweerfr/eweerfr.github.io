import { Cards } from "@/components/cards"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { ParticleProvider } from "@/context/particle-context"

export default function App() {
  return (
    <ParticleProvider>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <div className="relative z-10">
          <Cards />
          <Footer />
        </div>
      </div>
    </ParticleProvider>
  )
}
