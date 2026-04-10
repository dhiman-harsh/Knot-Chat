import SidebarMenu from '../components/SidebarMenu.jsx'
import UserProfile from '../components/UserProfile.jsx'
import SidebarHeader from '../components/SidebarHeader.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSwitcher.jsx'

const Sidebar = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`w-60 flex flex-col ${theme == "light" ? 'bg-slate-100 text-slate-600' : 'bg-slate-900 text-slate-300'}`}>
            <SidebarHeader />
            <SidebarMenu />
            <UserProfile />
        </div>
    )
}

export default Sidebar