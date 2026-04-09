const ChatCard = () => {
    return (
        <div className="flex gap-4 border items-center p-1 mx-4 rounded-lg">
            <span>Icon</span>
            <div className="flex-1! flex flex-col">
                <div className="flex justify-between">
                    <span className="font-semibold">Odama Studio</span>
                    <span className="text-xs">08:08 PM</span>
                </div>
                <div className="text-sm">Thanks! Tokyo</div>
            </div>
        </div>
    )
}

export default ChatCard