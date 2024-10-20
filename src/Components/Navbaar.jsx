import React from "react";
import '../styling/Navbaar.css'
import { Link } from "react-router-dom";
const Navbaar = () => {
  return (
    <div id="navbaar">
        {/* <img src={} /> */}
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to='/about'>About</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to='/contact'>Contact</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to='/menu'>Menu</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontWeight:"900",fontFamily:"cursive"}} to='/login'>Login</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontWeight:"900",fontFamily:"cursive"}} to='/signup'>Signup</Link>
    </div>
)
};

export default Navbaar;
