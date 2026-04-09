const UserProfile = () => {
    return (
        <div className="p-4 border flex gap-2 items-center">
            <span>icon</span>
            <div className="flex flex-col">
                <span className="font-semibold">User Name</span>
                <span className="text-xs">Logout</span>
            </div>
        </div>
    )
}

export default UserProfile