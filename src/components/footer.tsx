import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FaCode, FaCoffee } from "react-icons/fa"
import { SiReact, SiTailwindcss, SiVite, SiTypescript, SiShadcnui } from "react-icons/si"

export function Footer() {
  return (
    <footer className="mt-12 mb-12 w-full max-w-3xl mx-auto px-4">
      <Separator className="mb-4 opacity-30" />

      <Card className="bg-card/80">
        <CardContent className="py-6 text-sm text-muted-foreground flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <FaCode className="opacity-80" />
            <p>feito por Ewerton com muito</p>
            <FaCoffee className="opacity-80" />
            <p> — 2026 😝</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 opacity-50">
            <SiReact title="React" size={18} className="hover:opacity-100 transition-opacity" />
            <SiTailwindcss title="Tailwind CSS" size={18} className="hover:opacity-100 transition-opacity" />
            <SiVite title="Vite" size={18} className="hover:opacity-100 transition-opacity" />
            <SiTypescript title="TypeScript" size={18} className="hover:opacity-100 transition-opacity" />
            <SiShadcnui title="Shadcn/ui" size={18} className="hover:opacity-100 transition-opacity" />
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}
