import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSwitcher.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx'

const SidebarHeader = () => {
    const { theme } = useContext(ThemeContext)
    const { toggleSidebar } = useContext(SidebarContext)
    return (
        <div className="p-4 flex gap-4 items-center font-bold justify-between">
            {/* <span className="border">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
            </span> */}
            <div className={`text-xl md:text-2xl ${theme == "light" ? 'text-slate-900' : 'text-slate-50'}`}>Knot - Chat App</div>
            <div className="md:hidden" onClick={()=>{toggleSidebar()}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={`${theme == "light" ? '#475569' : '#CBD5E1'}`}><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    )
}

export default SidebarHeader