import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from "../firebase/firebase.init";
import toast from "react-hot-toast";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //Register User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login With Google
    const handleLogInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //Login with email and password
    const handleLogInEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //LogOut
    const handleLogOut = () => {
        toast.success('You have Successfully LogOut!');
        setLoading(true)
        return signOut(auth);
    }

    //update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    //all observation field
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser?.email) {
                setUser(currentUser)
                /* const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser?.email }, { withCredentials: true }); */
            }
            else {
                setUser(currentUser)
               /*  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true }) */
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        handleLogInWithGoogle,
        handleLogInEmail,
        handleLogOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;