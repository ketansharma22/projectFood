import React from "react";
import '../styling/Navbaar.css'
import { Link } from "react-router-dom";
import menu from '../images/menu.avif'
const Navbaar = () => {
   // Specify the path to the image
    // Name the file as you want it to be downloaded
    const handleDownload = () => {
      // Specify the path to the image
      const imageUrl =menu // Adjust the path accordingly
      const imageName = 'menu.jpg'; // Name the file as you want it to be downloaded
  
      // Create an anchor element and trigger a click event
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
   // Create an anchor element and trigger a click event
   
 ;
  return (
    <div id="navbaar">
        {/* <img src={} /> */}
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to='/about'>About</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px"}} to='/contact'>Contact</Link>
    <button style={{textDecoration:"none",color:"white",fontSize:"25px",background:"transparent",border:"none"}}  onClick={handleDownload} >Menu</button>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontWeight:"900",fontFamily:"cursive"}} to='/login'>Login</Link>
    <Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontWeight:"900",fontFamily:"cursive"}} to='/signup'>Signup</Link>
    </div>
)
};

export default Navbaar;
