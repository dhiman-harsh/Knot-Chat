import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase.js'
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase.js";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDisplayName, getSafeEmail } from "../utils/userIdentity.js";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            try {
                if (user) {
                    await setDoc(
                        doc(db, "users", user.uid),
                        {
                            uid: user.uid,
                            email: getSafeEmail(user),
                            displayName: getDisplayName(user),
                            photoURL: user.photoURL ?? "",
                            lastSeenAt: serverTimestamp(),
                        },
                        { merge: true }
                    );
                }
            } catch (error) {
                console.error("Error syncing signed-in user:", error);
            }
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
