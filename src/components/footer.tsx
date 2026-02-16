import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-12 w-full max-w-md">
      <Separator className="mb-4 opacity-40" />

      <Card className="bg-background/50 backdrop-blur">
        <CardContent className="py-4 text-center text-sm text-muted-foreground">
          Vite • React • TailwindCSS • shadcn
        </CardContent>
      </Card>
    </footer>
  )
}
