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
        if (username != '') {
            const q = query(
                collection(db, "users"),
                where("displayName", "==", username)
            )

            try {
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    setUser(doc.data())
                })
            }
            catch (error) {
                console.log(error)
                setErr(true)
            }
        }
    }

    const handleSelectUserForChat = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        try {
            const res = await getDoc(doc(db, "chats", combinedId))
            if (!res.exists()) {
                // check if the group exists or not, if not just create a new one
                await setDoc(doc(db, "chats", combinedId), { messages: [] })

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
        <div className="flex flex-col px-2 gap-2">
            <div className={`flex justify-between rounded-sm ${theme == "light" ? 'bg-slate-100' : 'bg-slate-900'}`}>
                <input type="text" className={`flex-1 border-none outline-none py-1 px-4 rounded-full ${theme == "light" ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-slate-50'}`} onChange={(e) => { setUsername(e.target.value) }} value={username} />
                <button onClick={handleSearch} className={`py-1 rounded-sm m-1 px-4 bg-black text-white active:scale-95 cursor-pointer ${theme == "light" ? 'bg-sky-200' : 'bg-sky-800'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${theme == "light" ? '#0F172A' : '#F8FAFC'}`}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </button>
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