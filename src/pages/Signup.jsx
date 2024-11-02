import React, { useState } from "react";
import toast from "react-hot-toast";
import "../styling/Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const auth=useAuth()
  const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit =async (e) => {
    e.preventDefault();
   
      toast.loading("Signing up", { id: "signup" });
      const res=await auth.signUpAuth(data.name,data.email,data.password)
      // navigate('/dashboard')
      if(res.status== 409 ) toast.error("user already exists",{id:"signup"});
      if(res.status== 200 ) toast.success("Signed up ", { id: "signup" });
      else toast.error("an error occured",{id:"signup"})
    setData({ name: "", email: "", password: "" });
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div id="signup">
      <form id="form" onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>Signup</h1>
        <div id="boxes">
          <label>Name</label>
          <input
            required
            type="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div id="boxes">
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div id="boxes">
          <label>Password</label>
          <input
            required
            type="password"
            min={6}
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
