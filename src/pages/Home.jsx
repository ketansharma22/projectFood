import React, { useState,useEffect } from "react";
import Navbaar from "../Components/Navbaar";
import '../styling/Home.css'
import dalmakhani from '../images/dalmakhni.png'
import dosa from '../images/dosa.jpg'
import momos from '../images/momos.png'
import paranthe from '../images/paranthe.avif'
import chowmin from  '../images/chowmin.webp'
import pizza from '../images/pizza.webp'
import thali from '../images/thali.webp'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Home = () => {
  const navigate=useNavigate()
  const auth=useAuth()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(()=>{
    if(auth.user){
      return navigate('/dashboard')
    }
  },[auth])

  const calculateTransform = (x, y) => {
    const moveX = (x / window.innerWidth - 0.5) * 30; 
    const moveY = (y / window.innerHeight - 0.5) * 30;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <div id="home">
      <Navbaar />
      <div id="homemain">
      <img id="same" src={dalmakhani} style={{transform: calculateTransform(mousePosition.x, mousePosition.y),left:"37%",top:"80%"}} />
      <img id="same" src={dosa} style={{mixBlendMode:"multiply",width:"130px",transform: calculateTransform(mousePosition.x, mousePosition.y),top:"84%",right:"30%"}}  />
      <img id="same" src={momos} style={{transform: calculateTransform(mousePosition.x, mousePosition.y),left:"68%",top:"25%"}} />
      <img id="same" src={paranthe} style={{ mixBlendMode:"multiply",width:"130px",transform: calculateTransform(mousePosition.x, mousePosition.y),left:"30%",top:"25%"}} />
      <img id="same" src={chowmin} style={{transform: calculateTransform(mousePosition.x, mousePosition.y),left:"70%",top:"57%"}} />
      <img id="same" src={pizza} style={{transform: calculateTransform(mousePosition.x, mousePosition.y),left:"27%",bottom:"32%",width:"150px"}} />
      <img id="same" src={thali} style={{transform: calculateTransform(mousePosition.x, mousePosition.y),left:"50%",right:"50%",top:"15%"}} />
      
      
      <h1 id="heading" >Eat and Repeat</h1>

      </div>
    </div>
  );
};

export default Home;
