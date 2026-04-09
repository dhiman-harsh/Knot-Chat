import { useEffect } from "react"
import MyMessage from "./MyMessage.jsx"
import OthersMessage from "./OthersMessage.jsx"

const ChatWindowMessages = ({ ref }) => {
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }, [ref])
    return (
        <div className="flex-1! border flex flex-col gap-2 p-4 overflow-y-auto no-scrollbar">
            <OthersMessage />
            <MyMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
            <OthersMessage />
            <OthersMessage />
            <MyMessage />
            <div ref={ref} className="h-0"></div>
        </div>
    )
}

export default ChatWindowMessages