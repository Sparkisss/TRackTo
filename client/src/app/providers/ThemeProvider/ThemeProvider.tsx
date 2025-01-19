import React from "react"
import { ThemeProvider as SharedThemeProvider } from "@/shared/context/theme/ThemeContext"

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  return <SharedThemeProvider>{children}</SharedThemeProvider>
}