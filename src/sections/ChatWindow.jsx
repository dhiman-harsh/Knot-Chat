import ChatWindowHeader from "../components/ChatWindowHeader.jsx"
import ChatWindowMessages from "../components/ChatWindowMessages.jsx"
import ChatWindowInputMessage from "../components/ChatWindowInputMessage.jsx"
import { useRef } from "react"

const ChatWindow = () => {
    const ref = useRef()
    return (
        <div className="flex-1! border flex flex-col justify-between overflow-y-hidden">
            <ChatWindowHeader />
            <ChatWindowMessages ref={ref} />
            <ChatWindowInputMessage />
        </div>
    )
}

export default ChatWindow