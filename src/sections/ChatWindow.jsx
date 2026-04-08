import ChatWindowHeader from "../components/ChatWindowHeader.jsx"
import ChatWindowMessages from "../components/ChatWindowMessages.jsx"
import ChatWindowInputMessage from "../components/ChatWindowInputMessage.jsx"

const ChatWindow = () => {
    return (
        <div className="flex-1! border flex flex-col justify-between overflow-y-hidden">
            <ChatWindowHeader />
            <ChatWindowMessages />
            <ChatWindowInputMessage />
        </div>
    )
}

export default ChatWindow