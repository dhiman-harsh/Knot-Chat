import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSwitcher.jsx'

const ChatCard = ({ displayName, lastMessage="Hello Harsh!" }) => {
    const { theme } = useContext(ThemeContext)
    return (
        // <ChatCard key={chat[0]} displayName={chat[1].userInfo.displayName} lastMessage={chat[1].userInfo.lastMessage?.text}/>
        <div className={`flex gap-4 items-center p-1 rounded-lg cursor-pointer ${theme == "light" ? 'hover:bg-slate-100' : 'hover:bg-slate-900'}`}>
            <span className="size-9 border rounded-lg"></span>
            <div className="flex-1! flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{displayName}</span>
                    <span className={`text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>08:08 PM</span>
                </div>
                <div className={`text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{lastMessage}</div>
            </div>
        </div>
    )
}

export default ChatCard