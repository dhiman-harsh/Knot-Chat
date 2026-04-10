import SidebarMenu from '../components/SidebarMenu.jsx'
import UserProfile from '../components/UserProfile.jsx'
import SidebarHeader from '../components/SidebarHeader.jsx'

const Sidebar = () => {
    return (
        <div className="w-60 border flex flex-col">
            <SidebarHeader />
            <SidebarMenu />
            <UserProfile />
        </div>
    )
}

export default Sidebar