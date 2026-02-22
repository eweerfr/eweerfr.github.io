import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="outline" onClick={toggleTheme} data-cy="themeToggle" className="w-full">
      {theme === "dark" ? "☀️ Alterar para modo claro" : "🌙 Alterar para modo escuro"}
    </Button>
  )
}
