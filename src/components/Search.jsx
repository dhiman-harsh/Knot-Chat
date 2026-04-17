import { useContext, useRef, useState } from "react"
import { db } from '../firebase.js'
import { collection, getDocs, query, where } from "firebase/firestore"
import { ThemeContext } from "../context/ThemeSwitcher"


const Search = () => {
    const { theme } = useContext(ThemeContext)

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
            })
        }
        catch (error) {
            console.log(error)
            setErr(true)
        }
    }

    const handleSelectUserForChat = () => {
        // check if the group exists or not, if not just create a new one
        
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <input type="text" className="bg-transparent text-black flex-1" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
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