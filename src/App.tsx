import { ThemeToggle } from "@/components/theme-toggle"
import { AlertButton } from "@/components/alert-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


import { SiReact, SiTailwindcss, SiGit, SiCypress, SiPostman, SiBruno, SiVscodium } from "react-icons/si" // si Icons
import { FaTools } from "react-icons/fa" // fa icons


import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
        {/* <div className="w-48 h-48 rounded-full bg-zinc-700 mx-auto mb-4 mt-12" />  */}

        {/* Card do Nome */}
        <Card className="text-center border-zinc-700 w-full mt-12">
          <CardHeader>
            <CardTitle className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
              Ewerton
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Especialista em Tecnologia com formação em Análise e Desenvolvimento de Sistemas e Pós-graduado em Gestão da TI. Atualmente foco minha atuação em Quality Assurance (QA), unindo a experiência sólida em suporte técnico e resolução de problemas complexos (N1 e N2) com o domínio de ferramentas modernas de teste e automação.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card de tech stack */}
        <Card className="text-center border-zinc-700 w-full">
          <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>Ferramentas que uso no dia a dia</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2 mx-auto">

            <Badge variant="outline" className="flex items-center gap-1">
              <SiVscodium size={14} /> VS Codium
            </Badge>

            <Badge className="flex items-center gap-1">
              <SiReact size={14} /> React
            </Badge>

            <Badge className="flex items-center gap-1">
              <SiTailwindcss size={14} /> TailwindCSS
            </Badge>

            <Badge className="flex items-center gap-1">
              <SiGit size={14} /> Git
            </Badge>

            <Badge variant="secondary" className="flex items-center gap-1">
              <SiCypress size={14} /> Cypress
            </Badge>

            <Badge variant="secondary" className="flex items-center gap-1">
              <SiPostman size={14} /> Postman
            </Badge>

            <Badge variant="secondary" className="flex items-center gap-1">
              <SiBruno size={14} /> Bruno
            </Badge>
          </CardContent>
        </Card>

        {/* Card em Construcao */}
        <Card className="text-center border-zinc-700 w-full">
          <CardHeader>
            <CardTitle>
            </CardTitle>
            <CardDescription className="text-zinc-400">
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <FaTools size={96} className="text-yellow-500 mb-4 animate-[spin_10s_linear_infinite]" />
                <h2 className="text-lg font-semibold">Página em construção</h2>
                <p className="text-sm text-muted-foreground">
                  Estou preparando algo legal aqui !! 🚀
                </p>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card dos botões */}
        <Card className="w-full">
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
