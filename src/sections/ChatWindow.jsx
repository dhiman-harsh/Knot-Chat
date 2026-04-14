import ChatWindowHeader from "../components/ChatWindowHeader.jsx"
import ChatWindowMessages from "../components/ChatWindowMessages.jsx"
import ChatWindowInputMessage from "../components/ChatWindowInputMessage.jsx"
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider.jsx"
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.js"
import { getDisplayName, getSafeEmail } from "../utils/userIdentity.js"

const ChatWindow = () => {
    const bottomRef = useRef()
    const { currentUser } = useContext(AuthContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const messagesQuery = query(
            collection(db, "publicMessages"),
            orderBy("createdAtMs", "asc")
        )
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
            const mappedMessages = snapshot.docs.map((docItem) => ({
                id: docItem.id,
                ...docItem.data(),
            }))
            setMessages(mappedMessages)
        })

        return () => unsubscribe()
    }, [])

    const handleSendMessage = async (text) => {
        if (!currentUser) return
        await addDoc(collection(db, "publicMessages"), {
            text,
            uid: currentUser.uid,
            senderEmail: getSafeEmail(currentUser),
            senderName: getDisplayName(currentUser),
            createdAt: serverTimestamp(),
            createdAtMs: Date.now(),
        })
    }

    return (
        <div className="flex-1! flex flex-col justify-between">
            <ChatWindowHeader />
            <ChatWindowMessages bottomRef={bottomRef} messages={messages} currentUser={currentUser} />
            <ChatWindowInputMessage onSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatWindow
