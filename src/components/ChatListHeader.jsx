const ChatListHeader = () => {
    return (
        <div className="flex justify-between p-4">
            <div className="text-2xl">Messages</div>
            <div className="flex gap-4 items-center">
                <span>Compose</span>
                <span>Search</span>
            </div>
        </div>
    )
}

export default ChatListHeader