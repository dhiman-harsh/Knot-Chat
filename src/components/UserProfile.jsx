const UserProfile = () => {
    return (
        <div className="p-2 m-2 rounded-lg cursor-pointer flex gap-4 items-center hover:bg-slate-100">
            <span className="size-9 border rounded-lg"></span>
            <div className="flex flex-col">
                <span className="font-semibold">User Name</span>
                <span className="text-xs">Logout</span>
            </div>
        </div>
    )
}

export default UserProfile