import React, { useContext, useEffect, useState } from "react"
import { checkAuthStatus, loginApi, logoutApi, searchLocation, signUpApi } from "../helpers/apiComm"
import { replace, useNavigate } from "react-router-dom"


const AuthContext=React.createContext()
export function useAuth(){
   return useContext(AuthContext)
}

export function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const[isLoggedIn,setIsLoggedIn]=useState(false)

    useEffect(()=>{
        async function checkStatus() {
            const data= await checkAuthStatus()
            console.log(data)

            if (data){
                setUser({email:data.email,name:data.name})
                setIsLoggedIn(true)
            }
        }
        checkStatus()
    },[])

    const searchRes=async(location)=>{
        
        const res=await searchLocation(location)
        return res
    }

    const loginAuth=async(email,password)=>{
        const res=await loginApi(email,password)
        if(res){
            console.log(res)
            setUser({email:res.email,name:res.name})
            setIsLoggedIn(true)
        }
        return res
    }
    const signUpAuth=async(name,email,password)=>{
        const res=await signUpApi(name,email,password)
        if(res){
            setUser({email:res.email,name:res.name})
            setIsLoggedIn(true)
        }
        return res  
    }
    const logoutAuth=async()=>{
        await logoutApi()
        setIsLoggedIn(false)
        setUser(null)
    }

    const value={
        user,
        isLoggedIn,
        searchRes,
        loginAuth,
        signUpAuth,
        logoutAuth
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

