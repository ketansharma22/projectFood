import axios from "axios"
export const searchLocation=async(location)=>{
    try {
         const res=await axios.post('/users/search',{location})
    const data=res.data
    return data
    } catch (error) {
        console.log(error);
        throw new Error("Unable To search")
    }
   
}
export const loginApi=async(email,password)=>{
    // console.log(email,password)
    try {
        const res=await axios.post('/users/login',{email,password})
        const data=res.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const signUpApi=async(name,email,password)=>{
    // console.log(name,email,password)
    try {
        const res=await axios.post('/users/signup',{name,email,password})
        const data=res.data
        return data
    } catch (error) {
        console.log(error)
    }
}