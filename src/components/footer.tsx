import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FaCode, FaCoffee } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="mt-12 mb-12 w-full max-w-3xl mx-auto px-4">
      <Separator className="mb-4 opacity-40" />

      <Card className="bg-background/50 backdrop-blur">
        <CardContent className="py-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <FaCode className="opacity-80" />
          <p>Ewerton com muito</p>
          <FaCoffee className="opacity-80" />
          <p>@2026</p>
        </CardContent>
      </Card>

    </footer>
  )
}
