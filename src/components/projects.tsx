import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { SiElectron, SiJavascript } from "react-icons/si";

export function ProjectCard() {
    return (
        <div>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center w-full">
                <CardHeader className="text-2xl tracking-wide text-[var(--roxo-titulo)]">
                    Wrapper Electron
                    <CardTitle>
                        <AspectRatio ratio={16 / 8} data-cy="screenshot">
                            <img
                                src="/projetos/electronWrapper.png"
                                alt="Preview do projeto"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </AspectRatio>
                    </CardTitle>
                    <CardDescription className="mb-2 mt-4">
                        Desenvolvi este projeto para executar um web player de música no meu computador
                        como se fosse um aplicativo nativo do Windows.
                        <br/><br/>
                        Com isso, aprendi a empacotar uma aplicação web como app desktop utilizando Electron,
                        integrar recursos do sistema (controles de mídia e ícone na system tray)
                        e implementar persistência de configurações.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4 mx-auto">
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                            <SiElectron size={14} />Electron</Badge>
                        <Badge variant="outline">
                            <SiJavascript size={14} />Javascript</Badge>
                    </div>

                    {/* Botões */}
                    <div className="flex gap-2 mx-auto">
                        <Button asChild variant="outline" data-cy="goToGithub">
                            <a href="https://github.com/eweerfr/spofree-electron" target="_blank">
                                GitHub
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}