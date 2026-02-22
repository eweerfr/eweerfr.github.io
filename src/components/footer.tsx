import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FaCode, FaCoffee } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="mt-12 mb-12 w-full max-w-3xl mx-auto px-4">
      <Separator className="mb-4 opacity-30" />

      <Card className="bg-background/50">
        <CardContent className="py-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <FaCode className="opacity-80" />
          <p>Website feito por Ewerton com altas</p>
          <FaCoffee className="opacity-80" />
          <p>de café — 2026 😝</p>
        </CardContent>
      </Card>
    </footer>
  )
}
