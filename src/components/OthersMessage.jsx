import { useContext } from "react"
import { ThemeContext } from "../context/ThemeSwitcher"

const OthersMessage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="flex justify-start">
            <div className={`px-2 py-1 rounded-xl flex flex-col max-w-6/10 ${theme == "light" ? 'bg-slate-50' : 'bg-slate-950'}`}>
                <div className="text-sm font-medium">Lorem, ipsum.</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quo!</div>
                <div className="flex justify-end text-xs">
                    <span className={`${theme == "light" ? 'text-slate-600' : 'text-slate-300'}`}>09:03 PM</span>
                </div>
            </div>
        </div>
    )
}

export default OthersMessage