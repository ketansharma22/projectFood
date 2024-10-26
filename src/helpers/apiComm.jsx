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