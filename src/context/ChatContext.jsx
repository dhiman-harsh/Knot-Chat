import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContextProvider.jsx";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.js";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState()
    const [messages, setMessages] = useState([])
    const [chatId, setChatId] = useState('')

    const loadChats = (user) => {
        setUserInfo(user)
        setChatId(currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid)
        onSnapshot(doc(db, "chats", chatId), (doc) => {
            setMessages(doc.data().messages)
        })
    }

    useEffect(() => {
        if (userInfo) {
            loadChats(userInfo)
        }
    }, [currentUser?.uid])

    return (
        <ChatContext.Provider value={{ loadChats, messages, userInfo, chatId }}>
            {children}
        </ChatContext.Provider>
    )
}

export const userAuth = () => {
    return useContext(ChatContext);
}