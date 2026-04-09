import Sidebar from './sections/Sidebar.jsx'
import ChatList from './sections/ChatList.jsx'
import ChatWindow from './sections/ChatWindow.jsx'

const App = () => {
    return (
        <div className="h-dvh flex">
            <Sidebar />
            <ChatList />
            <ChatWindow />
        </div>
    )
}

export default App