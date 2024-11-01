import React, { useContext, useState } from "react"
import { loginApi, searchLocation, signUpApi } from "../helpers/apiComm"


const AuthContext=React.createContext()
export function useAuth(){
   return useContext(AuthContext)
}

export function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const[isLoggedIn,setIsLoggedIn]=useState(false)

    const searchRes=async(location)=>{
        
        const res=await searchLocation(location)
        return res
    }

    const loginAuth=async(email,password)=>{
        const res=await loginApi(email,password)
        const data=res.data
        return data
    }
    const signUpAuth=async(name,email,password)=>{
        const res=await signUpApi(name,email,password)
        const data=res.data
        return data
    }

    const value={
        user,
        isLoggedIn,
        searchRes,
        loginAuth,
        signUpAuth
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

