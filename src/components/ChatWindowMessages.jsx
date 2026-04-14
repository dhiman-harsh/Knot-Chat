import { useContext, useEffect } from "react"
import MyMessage from "./MyMessage.jsx"
import OthersMessage from "./OthersMessage.jsx"
import { ThemeContext } from "../context/ThemeSwitcher.jsx"

const ChatWindowMessages = ({ ref }) => {
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }, [ref])
    return (
        <div className={`flex-1! flex flex-col gap-2 px-4 pt-4 pb-2 overflow-y-auto no-scrollbar ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
            <OthersMessage />
            <MyMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
            <div ref={ref} className="h-0"></div>
        </div>
    )
}

export default ChatWindowMessages