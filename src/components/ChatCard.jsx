import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSwitcher.jsx'
import { AuthContext } from '../context/AuthContextProvider.jsx'

const ChatCard = ({ displayName, lastMessage, loadChats, userInfo, timestamp }) => {
    const { theme } = useContext(ThemeContext)
    const { currentUser } = useContext(AuthContext)

    function formatMyDate(dateString) {
        const target = new Date(dateString);
        const now = new Date();

        // Clear time for date-only comparison
        const targetDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        if (targetDate.getTime() === today.getTime()) {
            return target.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (targetDate.getTime() === yesterday.getTime()) {
            return "Yesterday";
        } else {
            const dd = String(target.getDate()).padStart(2, '0');
            const mm = String(target.getMonth() + 1).padStart(2, '0');
            const yy = String(target.getFullYear()).slice(-2);
            return `${dd}/${mm}/${yy}`;
        }
    }

    const timeDateStamp = formatMyDate(timestamp?.toDate().toLocaleString())


    return (
        // <ChatCard key={chat[0]} displayName={chat[1].userInfo.displayName} lastMessage={chat[1].userInfo.lastMessage?.text}/>
        <div className={`flex gap-4 items-center p-1 rounded-lg cursor-pointer ${theme == "light" ? 'hover:bg-slate-100' : 'hover:bg-slate-900'}`} onClick={() => { loadChats(userInfo) }}>
            <span className="size-9 border rounded-lg"></span>
            <div className="flex-1! flex flex-col">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{displayName}</span>
                    <span className={`text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{timeDateStamp}</span>
                </div>
                <div className={`text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{lastMessage}</div>
            </div>
        </div>
    )
}

export default ChatCard