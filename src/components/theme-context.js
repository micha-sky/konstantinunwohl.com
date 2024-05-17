// ThemeContext.js
import React from "react"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark")

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const changeTheme = () => setTheme(mediaQuery.matches ? "dark" : "light")

    // Set the initial theme
    changeTheme()

    if (mediaQuery.addEventListener) {
      // Use addEventListener if it's available (modern browsers)
      mediaQuery.addEventListener("change", changeTheme)
    } else {
      // Fallback to addListener for older browsers
      mediaQuery.addListener(changeTheme)
    }

    // Clean up event listener on unmount
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", changeTheme)
      } else {
        mediaQuery.removeListener(changeTheme)
      }
    }
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
