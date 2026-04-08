import MyMessage from "./MyMessage.jsx"
import OthersMessage from "./OthersMessage.jsx"

const ChatWindowMessages = () => {
    return (
        <div className="flex-1! border flex flex-col gap-2 p-4 overflow-y-auto">
            <OthersMessage />
            <MyMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
        </div>
    )
}

export default ChatWindowMessages