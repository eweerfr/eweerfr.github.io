import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { Footer } from "@/components/footer"


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  console.log("form enviado sem reload")

  // limpa os campos
  e.currentTarget.reset()
}



export default function Qa() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-80">
        <Card className="w-80 relative ">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-wide text-[var(--roxo-titulo)] w-full text-center border-zinc-700">
              QA Playground
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md flex flex-col">
              <Input placeholder="Nome" />
              <Input placeholder="Email" />
              <Input placeholder="Senha" />

              <div className="flex justify-end">
                <Button variant="outline" className="px-4 py-2 rounded ">
                  Enviar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>


        <Card className="w-full text-center">
          <CardHeader>
            <Button asChild variant="outline" className="text-[var(--roxo-titulo)]">
              <Link to="/">Voltar</Link>
            </Button>
          </CardHeader>
        </Card>
      </div>
    </div>


  )
}
