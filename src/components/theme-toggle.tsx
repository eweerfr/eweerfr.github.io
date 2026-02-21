import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="outline" onClick={toggleTheme} data-cy="themeToggle">
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  )
}
