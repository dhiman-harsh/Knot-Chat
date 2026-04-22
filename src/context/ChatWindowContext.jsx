import { createContext, useState } from "react";

export const ChatWindowContext = createContext();

export const ChatWindowContextProvider = ({ children }) => {
    const [isChatWindowOpen, setIsSidebarOpen] = useState(false)
    const toggleChatWindow = () => {
        setIsSidebarOpen(!isChatWindowOpen)
    }

    return (
        <ChatWindowContext.Provider value={{ isChatWindowOpen, toggleChatWindow }}>
            {children}
        </ChatWindowContext.Provider>
    )
}