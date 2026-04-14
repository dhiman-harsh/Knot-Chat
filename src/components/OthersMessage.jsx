import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"

const OthersMessage = ({ message }) => {
    const { theme } = useContext(ThemeContext)
    const senderName = message.senderName || message.senderEmail || "Unknown"
    const messageTime = message?.createdAtMs
        ? new Date(message.createdAtMs).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : ""

    return (
        <div className="flex justify-start">
            <div className={`px-2 py-1 rounded-xl flex flex-col max-w-6/10 ${theme == "light" ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className="text-sm font-medium">{senderName}</div>
                <div className="break-words">{message.text}</div>
                <div className="flex justify-end text-xs">
                    <span className={`${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{messageTime}</span>
                </div>
            </div>
        </div>
    )
}

export default OthersMessage
