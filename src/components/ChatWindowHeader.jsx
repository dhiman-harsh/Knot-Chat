const ChatWindowHeader = () => {
    return (
        <div className="border p-4 flex justify-between">
            {/* left section */}
            <div className="flex gap-4 items-center">
                <span>Icon</span>
                <div className="flex-1! flex flex-col">
                    <div className="font-semibold">Odama Studio</div>
                    <div>Mas Happy is typing...</div>
                </div>
            </div>
            {/* right section */}
            <div className="flex gap-2 items-center">
                <span>Video Call</span>
                <span>Voice Call</span>
                <span>Menu</span>
            </div>
        </div>
    )
}

export default ChatWindowHeader