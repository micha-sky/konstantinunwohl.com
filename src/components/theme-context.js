// ThemeContext.js
import React from "react"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      setTheme(isDarkMode ? "dark" : "light")
    }
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
