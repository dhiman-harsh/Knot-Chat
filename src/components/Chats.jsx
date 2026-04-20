import { useContext, useEffect, useState } from 'react'
import ChatCard from './ChatCard.jsx'
import { onSnapshot, doc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContextProvider.jsx'
import { db } from '../firebase.js'
import { ChatContext } from '../context/ChatContext.jsx'

const Chats = () => {
    const { loadChats } = useContext(ChatContext)
    const { currentUser } = useContext(AuthContext)
    const [chats, setChats] = useState([])

    useEffect(() => {
        let unsub = null
        if (currentUser.uid) {
            unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            })
        }

        return () => {
            if (unsub) {
                unsub()
            }
        }
    }, [currentUser.uid])
    return (
        <div className="flex-1! flex flex-col gap-1 px-2 py-2 overflow-y-auto no-scrollbar">
            {Object.entries(chats)?.map((chat) => (
                <ChatCard key={chat[0]} displayName={chat[1].userInfo.displayName} lastMessage={chat[1].lastMessage?.text} loadChats={loadChats} userInfo={chat[1].userInfo} timestamp={chat[1].date} />
            ))}
        </div>
    )
}

export default Chats