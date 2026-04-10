import { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeSwitcher = ({ children }) => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        if(theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeSwitcher