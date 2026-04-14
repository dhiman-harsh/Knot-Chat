import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"

const ChatWindowInputMessage = () => {
    const { theme} = useContext(ThemeContext)
    return (
        <div className={`mx-4 my-2 rounded-full flex items-center justify-between overflow-hidden p-1 ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
            <textarea placeholder="Type a message" rows="1" className={`flex-1! border-none outline-none py-1 px-4 rounded-full resize-none no-scrollbar ${theme == "light" ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-50'}`}></textarea>
            <button className={`py-1 rounded-full px-4 bg-black text-white active:scale-95 cursor-pointer ${theme == "light" ? 'bg-sky-200' : 'bg-sky-800'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${theme == "light" ? '#0F172A' : '#F8FAFC'}`}><path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z"/></svg>
            </button>
        </div>
    )
}

export default ChatWindowInputMessage