import React from "react";
import "../styling/Login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = () => {
  const auth=useAuth()
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      toast.loading("Loggin in", { id: "login" });
      const res=await auth.loginAuth(data.email,data.password)
      if(res.status!=403 && res.status!=401){
        toast.success(`${res}`,{id:"login"})
        navigate('/dashboard')
      }
      else if(res.status==403) toast.error("incorrect password",{id:"login"})
      else if(res.status==401) toast.error("user does not exixts",{id:"login"})
    }catch(error){
      console.log(error)
      toast.error("an error occured",{id:"login"})

    }
      
      
      
    

    setData({ email: "", password: "" });
  
  };
  return (
    <div id="login">
      <form id="form" onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "40px", fontFamily: "monospace" }}>Login</h1>

        <div id="boxes">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div id="boxes">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
