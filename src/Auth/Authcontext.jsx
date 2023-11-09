import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../../public/firebase/Firebase.config";
import axios from "axios";

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
            const useremail = currentuser?.email || user?.email
            const logginguser = { email: useremail }
            setuser(currentuser)
            setisloading(false)
            if (currentuser) {
                axios.post('https://assignment-11-sever-ruby.vercel.app/jwt', logginguser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })

            }
            else {
                axios.post('https://assignment-11-sever-ruby.vercel.app/logout', logginguser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }
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