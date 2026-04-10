const ChatCard = () => {
    return (
        <div className="flex gap-4 items-center p-1 rounded-lg cursor-pointer hover:bg-slate-100">
            <span className="size-9 border rounded-lg"></span>
            <div className="flex-1! flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Odama Studio</span>
                    <span className="text-xs">08:08 PM</span>
                </div>
                <div className="text-sm">Thanks! Tokyo</div>
            </div>
        </div>
    )
}

export default ChatCard