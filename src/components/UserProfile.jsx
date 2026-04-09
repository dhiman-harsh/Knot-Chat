const UserProfile = () => {
    return (
        <div className="p-4 border flex gap-4 items-center">
            <span className="size-9 border rounded-lg"></span>
            <div className="flex flex-col">
                <span className="font-semibold">User Name</span>
                <span className="text-xs">Logout</span>
            </div>
        </div>
    )
}

export default UserProfile