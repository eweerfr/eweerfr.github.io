import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SiReact, SiTailwindcss, SiGit, SiCypress, SiPostman, SiBruno, SiVscodium, SiJavascript, SiGithub } from "react-icons/si" // si Icons
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParticleToggle } from "@/components/particle-toggle"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

import { projectsData, ProjectCard } from "@/components/projects"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Cards() {
    return (
        <div className="min-h-screen text-foreground flex flex-col justify-center gap-4 px-4 w-full max-w-3xl mx-auto">


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

            {/* Card dos botões */}
            <Card className="text-center w-full" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    <CardTitle>Configurações de Visual</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <ThemeToggle />
                    <ParticleToggle />
                </CardContent>
            </Card >

            {/* Card de tech stack */}
            <Card className="text-center w-full" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    Tech Stack
                    <CardTitle></CardTitle>
                    <CardDescription className="text-zinc-400">Ferramentas que uso no dia a dia</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-wrap justify-center gap-2">
                    {[
                        { name: "VS Codium", icon: SiVscodium },
                        { name: "Javascript", icon: SiJavascript },
                        { name: "React", icon: SiReact },
                        { name: "TailwindCSS", icon: SiTailwindcss },
                        { name: "Git", icon: SiGit },
                        { name: "Cypress", icon: SiCypress },
                        { name: "Postman", icon: SiPostman },
                        { name: "Bruno", icon: SiBruno }
                    ].map((tech) => (
                        <Badge key={tech.name} variant="outline" className="gap-1 flex items-center">
                            <tech.icon size={14} /> {tech.name}
                        </Badge>
                    ))}
                </CardContent>
            </Card >

            {/* Card de Projetos */}
            <Card className="text-center w-full h-full" >
                <CardTitle className="text-2xl tracking-wide text-[var(--roxo-titulo)]">Projetos</CardTitle>
                <CardContent>
                    <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5500, stopOnMouseEnter: true, stopOnInteraction: false })]}>


                        <CarouselContent className="items-stretch">
                            {projectsData.map((project) => (
                                <CarouselItem key={project.id}>
                                    <ProjectCard project={project} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>


                        <div className="flex justify-center gap-6 mt-6 mx-auto">
                            {/* <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" /> botoes de proximo e anterior*/}
                            <p className="text-zinc-400">Arraste para os lados!!</p>
                        </div>

                    </Carousel>
                </CardContent>
            </Card >

            {/* Card de Contato */}
            <Card className="text-center w-full" >
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)] pb-4">
                    Contato
                </CardHeader>
                <CardContent className="flex flex-row justify-center gap-4 pb-8 px-6">
                    <Button asChild variant="outline" className="flex-col flex-1 h-40" aria-label="Enviar Email">
                        <a href="mailto:ewertonfr@proton.me">
                            <Mail className="size-16" />
                        </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-col flex-1 h-40" aria-label="Ver GitHub">
                        <a href="https://github.com/eweerfr" target="_blank" rel="noreferrer">
                            <SiGithub className="size-16" />
                        </a>
                    </Button>
                </CardContent>
            </Card>

        </div>
    )
} 