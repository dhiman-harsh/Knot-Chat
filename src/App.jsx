import { useContext } from "react"
import { ThemeContext } from "./context/ThemeSwitcher"
import Sidebar from './sections/Sidebar.jsx'
import ChatList from './sections/ChatList.jsx'
import ChatWindow from './sections/ChatWindow.jsx'

const App = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`h-dvh flex ${theme == "light" ? 'bg-slate-50 text-slate-900' : 'bg-slate-950 text-slate-50'}`}>
            <Sidebar />
            <ChatList />
            <ChatWindow />
        </div>
    )
}

export default App