const ChatWindowInputMessage = () => {
    return (
        <div className="border mx-4 rounded-full flex items-center justify-between overflow-hidden p-1">
            <textarea placeholder="Type a message" rows="1" className="flex-1! border-none outline-none py-1 px-4 rounded-full resize-none no-scrollbar"></textarea>
            <button className="border py-1 rounded-full px-4 bg-black text-white active:scale-95 cursor-pointer">Send</button>
        </div>
    )
}

export default ChatWindowInputMessage