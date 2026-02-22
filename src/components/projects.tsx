import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { SiElectron, SiJavascript, SiCypress, SiBruno } from "react-icons/si";

export type ProjectData = {
    id: number;
    title: string;
    imageSrc: string;
    description: React.ReactNode;
    stack: { name: string; icon: React.ElementType }[];
    githubLink: string;
};

export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: "Wrapper Electron",
        imageSrc: "/projetos/electronWrapper.png",
        description: (
            <>
                Desenvolvi este projeto para executar um web player de música no meu computador
                como se fosse um aplicativo nativo do Windows.
                Com isso, aprendi a empacotar uma aplicação web como app desktop utilizando Electron,
                integrar recursos do sistema (controles e ícone na tray) e implementar persistência de configurações.
            </>
        ),
        stack: [
            { name: "Electron", icon: SiElectron },
            { name: "Javascript", icon: SiJavascript }
        ],
        githubLink: "https://github.com/eweerfr/spofree-electron"
    },
    {
        id: 2,
        title: "Testes QA Playground",
        imageSrc: "/projetos/cypress.png",
        description: (
            <>
                Desenvolvi estes testes automatizados utilizando um ambiente próprio para simulação (QA Playground),
                com foco em validar fluxos reais de usuário.
                A automação foi implementada com Cypress e o projeto ainda está em evolução, já contemplando cenários de cadastro e login.
            </>
        ),
        stack: [
            { name: "Cypress", icon: SiCypress }
        ],
        githubLink: "https://github.com/eweerfr/Testes-Cypress-QAPlayground"
    },
    {
        id: 3,
        title: "Testes WebDojo",
        imageSrc: "/projetos/webdojo.png",
        description: (
            <>
                Projeto desenvolvido durante o curso Ninja do Cypress, com foco na automação de testes da aplicação WebDojo.
                <br /><br />
                Foram implementados testes automatizados E2E da interface web com Cypress e
                validações de requisições à API, incluindo cenários de autenticação, também foi utilizado o Bruno para
                testes manuais na API.
            </>
        ),
        stack: [
            { name: "Cypress", icon: SiCypress },
            { name: "Bruno", icon: SiBruno }
        ],
        githubLink: "https://github.com/eweerfr/webdojo"
    }
];

/**
 * Preloads images to ensure they are available before the carousel animation.
 */
function usePreloadImages(imageSrcs: string[]) {
    React.useEffect(() => {
        imageSrcs.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [imageSrcs]);
}

export function ProjectCard({ project }: { project: ProjectData }) {
    usePreloadImages(projectsData.map(p => p.imageSrc));

    return (
        <Card className="overflow-hidden text-center w-full h-full flex flex-col">
            <CardHeader className="text-xl tracking-wide text-[var(--roxo-titulo)] flex-1">
                {project.title}
                <CardTitle>
                    <div data-cy={`screenshot${project.id === 1 ? '' : project.id}`} className="w-full aspect-[16/8]">
                        <img
                            src={project.imageSrc}
                            alt={`Preview do projeto ${project.title}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </CardTitle>
                <CardDescription className="mt-4 max-w-prose mx-auto px-3 break-words">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pb-2">
                {/* Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {project.stack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                            <Badge key={tech.name} variant="outline" className="gap-1 flex items-center">
                                <Icon size={14} /> {tech.name}
                            </Badge>
                        );
                    })}
                </div>

                {/* Botões */}
                <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline" data-cy="goToGithub">
                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}