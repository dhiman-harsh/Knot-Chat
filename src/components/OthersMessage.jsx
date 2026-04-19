import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"
import { ChatContext } from "../context/ChatContext"

const OthersMessage = ({message}) => {
    const {userInfo} = useContext(ChatContext)
    const { theme } = useContext(ThemeContext)
    return (
        <div className="flex justify-start">
            <div className={`px-2 py-1 rounded-xl flex flex-col max-w-6/10 ${theme == "light" ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className="text-sm font-medium">{userInfo.displayName}</div>
                <div>{message.text}</div>
                <div className="flex justify-end text-xs">
                    <span className={`${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{message.date.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).toLowerCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default OthersMessage