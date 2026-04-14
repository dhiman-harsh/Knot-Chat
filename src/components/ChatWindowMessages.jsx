import { useContext, useEffect } from "react"
import MyMessage from "./MyMessage.jsx"
import OthersMessage from "./OthersMessage.jsx"
import { ThemeContext } from "../context/ThemeSwitcher.jsx"

const ChatWindowMessages = ({ bottomRef, messages, currentUser }) => {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, bottomRef])

    return (
        <div className={`flex-1! flex flex-col gap-2 px-4 pt-4 pb-2 overflow-y-auto no-scrollbar ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
            {messages.map((message) =>
                message.uid === currentUser?.uid ? (
                    <MyMessage key={message.id} message={message} />
                ) : (
                    <OthersMessage key={message.id} message={message} />
                )
            )}
            <div ref={bottomRef} className="h-0"></div>
        </div>
    )
}

export default ChatWindowMessages
