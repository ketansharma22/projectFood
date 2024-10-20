import React from "react";
import "../styling/Login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      toast.loading("Loggin in", { id: "login" });
      navigate('/dashboard')
      toast.success("Logged in", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Error loggin in", { id: "login" });
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
