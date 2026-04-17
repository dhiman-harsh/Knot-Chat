import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"
import { signOut } from "firebase/auth"
import { auth } from '../firebase.js'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContextProvider.jsx'

const UserProfile = () => {
    const { currentUser } = useContext(AuthContext)
    const displayName = currentUser.displayName
    // const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out successfully!")
                // navigate("/login");
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    }
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`p-2 m-2 rounded-lg cursor-pointer flex gap-4 items-center ${theme == "light" ? 'hover:bg-sky-200' : 'hover:bg-sky-800'}`}>
            <span className={`size-9 border rounded-lg`}></span>
            <div className={`flex flex-col`}>
                <span className={`font-semibold ${theme == "light" ? 'text-slate-900' : 'text-slate-50'}`}>{displayName}</span>
                <button className={`text-xs w-fit`} onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
    )
}

export default UserProfile