import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SiReact, SiTailwindcss, SiGit, SiCypress, SiPostman, SiBruno, SiVscodium, SiJavascript } from "react-icons/si" // si Icons
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AlertButton } from "@/components/alert-button"

import { Project1, Project2, Project3 } from "@/components/projects"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Cards() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col justify-center gap-4 px-4 w-full max-w-3xl mx-auto">


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
                    <CardDescription className="text-zinc-400">Ferramentas que uso no dia a dia</CardDescription>
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
            <Card className="text-center w-full h-full" >
                <CardTitle className="text-2xl tracking-wide text-[var(--roxo-titulo)]">Projetos</CardTitle>
                <CardContent>
                    <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 5500, stopOnMouseEnter: true, stopOnInteraction: false})]}> 


                        <CarouselContent className="items-stretch">
                            <CarouselItem>
                                <Project1 />
                            </CarouselItem>
                            <CarouselItem>
                                <Project2 />
                            </CarouselItem>
                            <CarouselItem>
                                <Project3 />
                            </CarouselItem>
                        </CarouselContent>


                        <div className="flex justify-center gap-6 mt-6 mx-auto">
                            {/* <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" /> botoes de proximo e anterior*/}
                            <p className="text-zinc-400">Arraste para os lados!!</p>
                        </div>
                
                    </Carousel>
                </CardContent>
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