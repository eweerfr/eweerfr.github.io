import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { FaCode, FaCoffee, FaHeart } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="mt-12 mb-12 w-full max-w-3xl">
      <Separator className="mb-4 opacity-40" />

      <Card className="bg-background/50 backdrop-blur">
        <CardContent className="py-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <FaCode className="opacity-80" />
          <span>por Ewerton com muito</span>
          <FaCoffee className="opacity-80" />
          <span>e</span>
          <FaHeart className="text-red-500" />
          <span>2026</span>
        </CardContent>
      </Card>

    </footer>
  )
}
