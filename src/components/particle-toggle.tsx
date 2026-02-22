import { Button } from "@/components/ui/button"
import { useParticles } from "@/hooks/use-particles"
import { Sparkles, Sparkle } from "lucide-react"

export function ParticleToggle() {
    const { particlesEnabled, toggleParticles } = useParticles()

    return (
        <Button variant="outline" onClick={toggleParticles} className="w-full">
            {particlesEnabled ? (
                <>
                    <Sparkle className="mr-2 h-4 w-4" />
                    Desativar animação
                </>
            ) : (
                <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Ativar animação
                </>
            )}
        </Button>
    )
}
