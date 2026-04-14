import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"

const MyMessage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="flex justify-end">
            <div className={`px-2 py-1 rounded-xl flex flex-col max-w-6/10 ${theme == "light" ? 'bg-sky-200 text-black' : 'bg-sky-800 text-white'}`}>
                <div className="font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quo!</div>
                <div className={`flex gap-2 items-center justify-end text-xs ${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>
                    <span>09:03 PM</span>
                    <span>Unseen</span>
                </div>
            </div>
        </div>
    )
}

export default MyMessage