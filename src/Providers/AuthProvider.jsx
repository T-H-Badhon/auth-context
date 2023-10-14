
import { createContext, useState,useEffect } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth,onAuthStateChanged,signOut, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext(null);

const auth= getAuth(app)

const AuthProvider = ( {children}) => {

    const provider= new GoogleAuthProvider();

    const createNew=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInGoogle=()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        return signOut(auth);
    }

    
    const [user,setUser]=useState();
    const [loading, setLoading]=useState(true)

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }

    }, [])

    const authInfo={
        user,
        loading,
        createNew,
        logIn,
        logInGoogle,
        logOut

    }



    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;