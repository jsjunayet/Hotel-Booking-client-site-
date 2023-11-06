import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../../public/firebase/Firebase.config";

export const Authcontrol = createContext()
const Authcontext = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isloading, setisloading] = useState(true)
    const signup = (email, password) => {
        setisloading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const login = (email, password) => {
        setisloading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logout = () => {
        setisloading(true)
        return signOut(Auth)
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(Auth, currentuser => {
            setuser(currentuser)
            setisloading(false)
        })
        return () => {
            subscribe()
        }
    }, [])
    const provider = new GoogleAuthProvider()
    const google = () => {
        return signInWithPopup(Auth, provider)
    }
    const values = {
        user,
        isloading,
        signup,
        login,
        logout,
        google
    }
    return (
        <Authcontrol.Provider value={values}>
            {children}
        </Authcontrol.Provider>
    );
};

export default Authcontext;