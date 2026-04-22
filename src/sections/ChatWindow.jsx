import ChatWindowHeader from "../components/ChatWindowHeader.jsx"
import ChatWindowMessages from "../components/ChatWindowMessages.jsx"
import ChatWindowInputMessage from "../components/ChatWindowInputMessage.jsx"
import { useContext, useRef } from "react"
import { ChatContext } from "../context/ChatContext.jsx"
import { ThemeContext } from "../context/ThemeSwitcher"
import { ChatWindowContext } from "../context/ChatWindowContext.jsx"

const ChatWindow = () => {
    const { userInfo } = useContext(ChatContext)
    const { theme } = useContext(ThemeContext)
    const ref = useRef()
    const { isChatWindowOpen } = useContext(ChatWindowContext)
    return (
        <div className={`${isChatWindowOpen ? 'flex' : 'hidden'} absolute top-0 right-0 h-full w-full md:relative md:flex-1! md:flex flex-col justify-between ${theme == "light" ? 'bg-slate-50' : 'bg-slate-950'}`}>
            {
                userInfo ? <div className={`w-full h-full! flex flex-col justify-between`}>
                    <ChatWindowHeader />
                    <ChatWindowMessages ref={ref} />
                    <ChatWindowInputMessage />
                </div> : <div className={`hidden md:flex h-full w-full justify-center items-center ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
                    <span className={`${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>Select a chat to start conversation.</span>
                </div>
            }
        </div>
    )
}

export default ChatWindow