import { ThemeToggle } from "@/components/theme-toggle"
import { AlertButton } from "@/components/alert-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
              Frontend • React • shadcn<br/>
              Transformando ☕ em código.
            </CardDescription>
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
      </div>
    </div>
  )
}
