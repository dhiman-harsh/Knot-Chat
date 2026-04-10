import ChatListHeader from '../components/ChatListHeader.jsx'
import Chats from '../components/Chats.jsx'

const ChatList = () => {
    return (
        <div className="w-80 border flex flex-col">
            <ChatListHeader />
            <Chats />
        </div>
    )
}

export default ChatList