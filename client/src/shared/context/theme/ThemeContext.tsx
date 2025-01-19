import { ReactNode, createContext, useEffect, useState } from "react"
import { ThemeContextProps, Theme } from "../model/types"

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({children}: { children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    return savedTheme || "light"
  })
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
export { useTheme } from "../hooks/useTheme"

