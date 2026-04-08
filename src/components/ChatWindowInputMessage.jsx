const ChatWindowInputMessage = () => {
    return (
        <div className="border mx-4 rounded-full flex items-center justify-between overflow-hidden p-1">
            <input type="text" placeholder="Type a message" className="border flex-1! border-none outline-none px-4" />
            <button className="border py-1 rounded-full px-4">Send</button>
        </div>
    )
}

export default ChatWindowInputMessage