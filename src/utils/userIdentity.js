export const getDisplayName = (user) => {
    return user?.displayName ?? (user?.email?.split("@")[0] || "Anonymous")
}

export const getSafeEmail = (user) => {
    return user?.email ?? ""
}
