import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


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

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md ">
              <input className="input name" placeholder="Nome" />
              <input className="input email" placeholder="Email" />
              <input className="input pwd" placeholder="Senha" />

              <Button variant="outline" className="bg-green-600 text-white px-4 py-2 rounded">
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>

        <Link to="/" className="block mt-6 text-blue-600 underline">
          ← Voltar
        </Link>
      </div>
    </div>
  )
}
