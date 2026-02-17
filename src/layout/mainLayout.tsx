import { Outlet } from "react-router-dom"
// import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      
      {/* Toggle global */}
      {/* <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div> */}

      {/* Conteúdo das páginas */}
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
