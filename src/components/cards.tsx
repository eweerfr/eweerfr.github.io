import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SiReact, SiTailwindcss, SiGit, SiCypress, SiPostman, SiBruno, SiVscodium, SiJavascript } from "react-icons/si" // si Icons
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AlertButton } from "@/components/alert-button"

import { ProjectCard } from "@/components/projects"


export function Cards() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4 px-4 w-full max-w-3xl mx-auto">


            {/* Card header - do Nome */}
            <Card className="text-center w-full mt-12" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    Ewerton
                    <CardTitle>
                    </CardTitle>
                    <CardDescription className="text-zinc-400">
                        Especialista em Tecnologia com formação em Análise e Desenvolvimento de Sistemas e Pós-graduado em Gestão da TI. Atualmente foco minha atuação em Quality Assurance (QA), unindo a experiência sólida em suporte técnico e resolução de problemas complexos (N1 e N2) com o domínio de ferramentas modernas de teste e automação.
                    </CardDescription>
                </CardHeader>
            </Card >

            {/* Card de tech stack */}
            <Card className="text-center w-full" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    Tech Stack
                    <CardTitle></CardTitle>
                    <CardDescription>Ferramentas que uso no dia a dia</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap justify-center gap-2">

                    <Badge variant="outline">
                        <SiVscodium size={14} /> VS Codium
                    </Badge>

                    <Badge variant="outline">
                        <SiJavascript size={14} /> Javascript
                    </Badge>

                    <Badge variant="outline">
                        <SiReact size={14} /> React
                    </Badge>

                    <Badge variant="outline">
                        <SiTailwindcss size={14} /> TailwindCSS
                    </Badge>

                    <Badge variant="outline">
                        <SiGit size={14} /> Git
                    </Badge>

                    <Badge variant="outline">
                        <SiCypress size={14} /> Cypress
                    </Badge>

                    <Badge variant="outline">
                        <SiPostman size={14} /> Postman
                    </Badge>

                    <Badge variant="outline">
                        <SiBruno size={14} /> Bruno
                    </Badge>
                </CardContent>
            </Card >

            {/* Card de Projetos */}
            <Card className="text-center w-full" >
                <CardHeader>
                    <CardTitle>
                    </CardTitle>
                    <CardDescription>
                        <ProjectCard />
                    </CardDescription>
                </CardHeader>
            </Card >

            {/* Card dos botões */}
            <Card className="text-center w-full" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    <CardTitle>Toggle Dark Mode</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <ThemeToggle />
                    <AlertButton />
                </CardContent>
            </Card >
        </div>
    )
} 