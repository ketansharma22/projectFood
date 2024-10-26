import React, { useContext, useState } from "react"
import { searchLocation } from "../helpers/apiComm"


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

    const value={
        user,
        isLoggedIn,
        searchRes
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

