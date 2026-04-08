const ChatCard = () => {
    return (
        <div className="flex gap-4 w-full border items-center p-1">
            <span>Icon</span>
            <div className="flex-1! flex flex-col">
                <div className="flex justify-between">
                    <span className="font-semibold">Odama Studio</span>
                    <span>08:08 PM</span>
                </div>
                <div>Thanks! Tokyo</div>
            </div>
        </div>
    )
}

export default ChatCard