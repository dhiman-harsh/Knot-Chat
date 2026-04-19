import ChatWindowHeader from "../components/ChatWindowHeader.jsx"
import ChatWindowMessages from "../components/ChatWindowMessages.jsx"
import ChatWindowInputMessage from "../components/ChatWindowInputMessage.jsx"
import { useContext, useRef } from "react"
import { ChatContext } from "../context/ChatContext.jsx"
import { ThemeContext } from "../context/ThemeSwitcher"

const ChatWindow = () => {
    const { userInfo } = useContext(ChatContext)
    const { theme } = useContext(ThemeContext)
    const ref = useRef()
    return (
        <div className="flex-1! flex flex-col justify-between">
            {
                userInfo ? <div className={`w-full h-full! flex flex-col justify-between`}>
                    <ChatWindowHeader />
                    <ChatWindowMessages ref={ref} />
                    <ChatWindowInputMessage />
                </div> : <div className={`h-full w-full flex justify-center items-center`}>
                    <span className={`${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>Select a chat to start conversation.</span>
                </div>
            }
        </div>
    )
}

export default ChatWindow