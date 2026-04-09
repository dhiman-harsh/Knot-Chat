import ChatListHeader from '../components/ChatListHeader.jsx'
import Chats from '../components/Chats.jsx'

const ChatList = () => {
    return (
        <div className="w-75 border overflow-y-hidden">
            <ChatListHeader />
            <Chats />
        </div>
    )
}

export default ChatList