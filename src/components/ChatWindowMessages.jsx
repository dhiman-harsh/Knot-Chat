import { useContext, useEffect } from "react"
import MyMessage from "./MyMessage.jsx"
import OthersMessage from "./OthersMessage.jsx"
import { ThemeContext } from "../context/ThemeSwitcher.jsx"
import { ChatContext } from "../context/ChatContext.jsx"
import { AuthContext } from "../context/AuthContextProvider.jsx"
import { v4 as uuidv4 } from 'uuid'

const ChatWindowMessages = ({ ref }) => {
    const { currentUser } = useContext(AuthContext)
    const { messages } = useContext(ChatContext)
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }, [ref, messages])
    return (
        <div className={`flex-1! flex flex-col gap-2 px-4 pt-4 pb-2 overflow-y-auto no-scrollbar ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
            {
                messages.map((message) => {
                    if(message.senderId == currentUser.uid) {
                        return (
                            <MyMessage message={message} key={uuidv4()} />
                        )
                    } else {
                        return (
                            <OthersMessage message={message} key={uuidv4()} />
                        )
                    }
                })
            }
            <div ref={ref} className="h-0"></div>
        </div>
    )
}

export default ChatWindowMessages