import { ThemeToggle } from "@/components/theme-toggle"
import { AlertButton } from "@/components/alert-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Link } from "react-router-dom"


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-80">


        {/* Card dos nomes */}
        <Card className="w-full text-center border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-wide text-[var(--roxo-titulo)]">
              Ewerton
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Deploy automático com GitHub Actions ☕<br /><br />

              Analista de TI com foco em QA e Frontend.
              Experiência com testes, automação e interfaces modernas.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card do QA */}
        <Card className="w-full">
          <CardHeader>
            <Button asChild variant="outline" className="text-[var(--roxo-titulo)]">
              <Link to="/qa">Ir para área de testes QA</Link>
            </Button>
          </CardHeader>
        </Card>

        {/* Card dos botões */}
        <Card className="w-80 relative">
          <CardHeader>
            <CardTitle>Toggle Dark Mode</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <ThemeToggle />
            <AlertButton />
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  )
}
