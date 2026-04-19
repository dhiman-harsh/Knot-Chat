import { useContext, useEffect, useState } from 'react'
import ChatCard from './ChatCard.jsx'
import { onSnapshot, doc } from 'firebase/firestore'
import { AuthContext } from '../context/AuthContextProvider.jsx'
import { db } from '../firebase.js'

const Chats = () => {
    const { currentUser } = useContext(AuthContext)
    const [chats, setChats] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            setChats(doc.data())
        })

        return () => {
            unsub()
        }
    }, [currentUser.uid])

    console.log(chats)
    console.log(Object.entries(chats))
    return (
        <div className="flex-1! flex flex-col gap-1 px-2 py-4 overflow-y-auto no-scrollbar">
            {Object.entries(chats)?.map((chat) => (
                <ChatCard key={chat[0]} displayName={chat[1].userInfo.displayName} lastMessage={chat[1].userInfo.lastMessage?.text} />
            ))}
        </div>
    )
}

export default Chats