import SidebarMenu from '../components/SidebarMenu.jsx'
import UserProfile from '../components/UserProfile.jsx'
import SidebarHeader from '../components/SidebarHeader.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeSwitcher.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx'

const Sidebar = () => {
    const { theme } = useContext(ThemeContext)
    const { isSidebarOpen } = useContext(SidebarContext)
    return (
        <div className={`${isSidebarOpen ? '' : '-translate-x-full'} transition-all duration-200 delay-0 ease-linear md:translate-none absolute left-0 h-full md:relative lg:w-60 flex flex-col ${theme == "light" ? 'bg-slate-100 text-slate-600' : 'bg-slate-900 text-slate-300'}`}>
            <SidebarHeader />
            <SidebarMenu />
            <UserProfile />
        </div>
    )
}

export default Sidebar