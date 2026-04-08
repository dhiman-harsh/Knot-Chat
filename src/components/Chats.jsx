import ChatCard from './ChatCard.jsx'

const Chats = () => {
    return (
        <div className="flex flex-col gap-1 overflow-y-auto">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
        </div>
    )
}

export default Chats