import { useContext, useRef, useState } from "react"
import { db } from '../firebase.js'
import { collection, getDoc, getDocs, doc, query, serverTimestamp, where, setDoc, updateDoc } from "firebase/firestore"
import { ThemeContext } from "../context/ThemeSwitcher"
import { AuthContext } from "../context/AuthContextProvider.jsx"


const Search = () => {
    const { theme } = useContext(ThemeContext)
    const { currentUser } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        )

        try {
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
                console.log(doc.data())
                console.log(user)
            })
        }
        catch (error) {
            console.log(error)
            setErr(true)
        }
    }

    const handleSelectUserForChat = async () => {
        console.log(user)
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        console.log(combinedId)
        try {
            const res = await getDoc(doc(db, "chats", combinedId))
            if (!res.exists()) {
                // check if the group exists or not, if not just create a new one
                await setDoc(doc(db, "chats", combinedId), { messages: [] })

                // create user chats
                // userChats:{
                //     janesId:{
                //         combinedId:{
                //             userInfo:{
                //                 dn, img, id
                //             }
                //             lastMessage:"",
                //             date:
                //         }
                //     }
                // }

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                    },
                    [combinedId + ".date"]: serverTimestamp()
                })
            }
        }
        catch (error) {
            console.log(error)
        }

        setUser(null)
        setUsername('')
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <input type="text" className="bg-transparent text-black flex-1" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {err && <span>User Not Found!</span>}
                {user && <div className={`flex gap-4 items-center p-1 rounded-lg cursor-pointer ${theme == "light" ? 'hover:bg-slate-100' : 'hover:bg-slate-900'}`} onClick={handleSelectUserForChat}>
                    <span className="size-9 border rounded-lg"></span>
                    <div className="flex-1! flex flex-col">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">{user.displayName}</span>
                        </div>
                        <div className={`text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>{user.email}</div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Search