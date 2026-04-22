import ChatListHeader from '../components/ChatListHeader.jsx'
import Chats from '../components/Chats.jsx'
import Search from '../components/Search.jsx'

const ChatList = () => {
    return (
        <div className="h-full w-full md:w-80 flex flex-col">
            <ChatListHeader />
            <Search />
            <Chats/>
        </div>
    )
}

export default ChatList