import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { SiElectron, SiJavascript, SiCypress, SiBruno } from "react-icons/si";

// Electron Wrapper SPOFREE
export function Project1() {
    return (
        <Card className="overflow-hidden text-center w-full h-full flex flex-col">
            <CardHeader className="text-xl tracking-wide text-[var(--roxo-titulo)] flex-1">
                Wrapper Electron
                <CardTitle>
                    <div data-cy="screenshot" className="w-full aspect-[16/8]">
                        <img
                            src="/projetos/electronWrapper.png"
                            alt="Preview do projeto"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="mt-4 max-w-prose mx-auto px-3 break-words">
                    Desenvolvi este projeto para executar um web player de música no meu computador
                    como se fosse um aplicativo nativo do Windows.
                    Com isso, aprendi a empacotar uma aplicação web como app desktop utilizando Electron,
                    integrar recursos do sistema (controles e ícone na tray) e implementar persistência de configurações.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pb-2">
                {/* Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">
                        <SiElectron size={14} />Electron</Badge>
                    <Badge variant="outline">
                        <SiJavascript size={14} />Javascript</Badge>
                </div>

                {/* Botões */}
                <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline" data-cy="goToGithub">
                        <a href="https://github.com/eweerfr/spofree-electron" target="_blank">
                            GitHub
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>

    )
}

// QA Playground
export function Project2() {
    return (
        <Card className="overflow-hidden text-center w-full h-full flex flex-col">
            <CardHeader className="text-xl tracking-wide text-[var(--roxo-titulo)] flex-1">
                Testes QA Playground
                <CardTitle>
                    <div data-cy="screenshot2" className="w-full aspect-[16/8]">
                        <img
                            src="/projetos/cypress.png"
                            alt="Preview do projeto"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="mt-4 max-w-prose mx-auto px-3 break-words">
                    Desenvolvi estes testes automatizados utilizando um ambiente próprio para simulação (QA Playground),
                    com foco em validar fluxos reais de usuário.
                    A automação foi implementada com Cypress e o projeto ainda está em evolução, já contemplando cenários de cadastro e login.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pb-2">
                {/* Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">
                        <SiCypress size={14} />Cypress</Badge>
                </div>

                {/* Botões */}
                <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline" data-cy="goToGithub">
                        <a href="https://github.com/eweerfr/Testes-Cypress-QAPlayground" target="_blank">
                            GitHub
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

// Ninja do Cypress
export function Project3() {
    return (
        <Card className="overflow-hidden text-center w-full h-full flex flex-col">
            <CardHeader className="text-xl tracking-wide text-[var(--roxo-titulo)] flex-1">
                Testes WebDojo
                <CardTitle>
                    <div data-cy="screenshot3" className="w-full aspect-[16/8]">
                        <img
                            src="/projetos/webdojo.png"
                            alt="Preview do projeto"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="mt-4 max-w-prose mx-auto px-3 break-words">
                    Projeto desenvolvido durante o curso Ninja do Cypress, com foco na automação de testes da aplicação WebDojo.
                    <br /><br />
                    Foram implementados testes automatizados E2E da interface web com Cypress e
                    validações de requisições à API, incluindo cenários de autenticação, também foi utilizado o Bruno para
                    testes manuais na API.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pb-2">

                <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline">
                        <SiCypress size={14} />Cypress</Badge>
                    <Badge variant="outline">
                        <SiBruno size={14} />Bruno</Badge>
                </div>

                <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline" data-cy="goToGithub">
                        <a href="https://github.com/eweerfr/webdojo" target="_blank">
                            GitHub
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}