import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"

const UserProfile = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`p-2 m-2 rounded-lg cursor-pointer flex gap-4 items-center ${theme == "light" ? 'hover:bg-sky-200' : 'hover:bg-sky-800'}`}>
            <span className={`size-9 border rounded-lg`}></span>
            <div className={`flex flex-col`}>
                <span className={`font-semibold ${theme == "light" ? 'text-slate-900' : 'text-slate-50'}`}>User Name</span>
                <span className={`text-xs`}>Logout</span>
            </div>
        </div>
    )
}

export default UserProfile