import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'


const AuthContext = createContext()
//create Context : allow us to access  data from all of app 
export function useAuth() {
    return useContext(AuthContext)
}
// useAuth : Allows us to use this context  from react , so we now have access to our auth context    


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //signup job : it will take an email and password
    function signup(email, password) {
        //كل ما انادي الفنكشن كرييت رح يعمل ست كرنت يوزر 
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        //كل ما انادي الفنكشن كرييت رح يعمل ست كرنت يوزر 
        return auth.signInWithEmailAndPassword(email, password)
    }
    //onAuthChanged: take the user and allow us to set the user
 
    function logout() {
        return auth.signOut()
    }
    function resetPassword(email){
         return auth.sendPasswordResetEmail(email)
    }
    function  updateEmail(email){

        return currentUser.updateEmail(email)
    }

    function updatePassword(password){
        return currentUser.updatePassword(password)
    }
    useEffect(() => {
        //ليش حطيناه changeهون ؟
        // عشان بدي يعمل اله رن بس لما نعمل ماونت للكمبوننت 
        //unsubscribe عشان استخدمها لما اخلص
        //unsubscribe : unsubscribe بترجع ميثود منستدعيها لما نعمل كول  
           //onAuthChanged: take the user and allow us to set the user
        const unsubscribe = auth.onAuthStateChanged(user => {

            setCurrentUser(user)
            setLoading(false)


        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login, 
        signup,
        logout,
        resetPassword, 
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
            {/*
           وغير هيك ما تعمل رندر children اذا ما بحمل ف اعمل رندر لل  */}
        </AuthContext.Provider>
    )
}
 