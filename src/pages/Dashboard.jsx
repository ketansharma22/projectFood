import React from 'react'
import '../styling/Dashboard.css'
import { useRef,useState,useEffect } from 'react'
import gsap from 'gsap'
import { Link, useNavigate } from 'react-router-dom'
import dal from '../images/dalmakhni.png'
import pizza from '../images/pizza.webp'
import momos from  '../images/momos.png'
import chowmin from '../images/chowmin.webp'
import { Draggable } from 'gsap/Draggable'
import toast from 'react-hot-toast'
import { Autocomplete } from '@react-google-maps/api'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
// import { config } from 'dotenv'
// config()
gsap.registerPlugin(Draggable);

const images=[
        dal,
        pizza,
        momos,
        chowmin,
    ]
const Dashboard = () => {
  
  const handleSearchRestaurants=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.get('/main/nearby-restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  
}
  
  
    const [restaurants, setRestaurants] = useState([]);
    const inputRef=useRef(null)
    // const onLoad = (autocomplete) => {
    //     setAutocomplete(autocomplete);
    //   };
    
    //   const onPlaceChanged = () => {
    //     if (autocomplete) {
    //       const place = autocomplete.getPlace();
    //       setLocation(place.formatted_address);
    //     }
    //   };
      const auth=useAuth()
    const navigate=useNavigate()
    const[location,setLocation]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(location);  
        try {    
            toast.loading("finding Restraunts",{id:"search"})
            const response=await auth.searchRes(location)
            
                setRestaurants(response);
                navigate('/restraunts')
                toast.success("Found",{id:"search"})
        } catch (error) {
            console.log(error);
            toast.error("Error Finding Restraunts",{id:"search"})
        }


    }
    
    const handleLogout=async()=>{
      try {
        await auth.logoutAuth()
        navigate('/login',{replace:true})
      } catch (error) {
        console.log(error)
      }
    }

    const containerRef = useRef(null);

        const scrollRef = useRef(null);
      
        useEffect(() => {
            const container = containerRef.current;
        
            // Clone all images for seamless scrolling
            const cloneImages = () => {
              const clonedImages = Array.from(container.children).map((image) =>
                image.cloneNode(true)
              );
              clonedImages.forEach((clone) => {
                container.appendChild(clone);
              });
            };
        
            // Initial clone of images
            cloneImages();
        
            // Set up GSAP animation
            const totalWidth = container.scrollWidth / 2;
        
            gsap.to(container, {
              scrollLeft: totalWidth,
              duration: 20,
              ease: 'none',
              repeat: -1,
              modifiers: {
                scrollLeft: gsap.utils.wrap(0, totalWidth),
              },
            });
          }, []);
      


  return (
    <div id='dashboard'>
        <div id="navbaar">
        {/* <img src={} /> */}
            <Link style={{textDecoration:"none",color:"whitesmoke",fontSize:"25px"}} to='/about'>About</Link>
            <Link style={{textDecoration:"none",color:"whitesmoke",fontSize:"25px"}} to='/contact'>Contact</Link>
            {/* <Link style={{textDecoration:"none",color:"whitesmoke",fontSize:"25px"}} to='/menu'>Menu</Link> */}
            <Link style={{textDecoration:"none",color:"white",fontSize:"25px",fontWeight:"900",fontFamily:"cursive"}} to='/homemade'>HomeMade</Link>
            <button onClick={handleLogout} style={{textDecoration:"none",color:"whitesmoke",fontSize:"25px",fontWeight:"900",background:"transparent",border
            :"none",fontFamily:"cursive"}} >Logout</button>
            
    </div>
    <div id='maindash'>
        <h1 > Nourishment and nostalgia in every tiffin.</h1>
    </div>
    <div ref={containerRef} id='moving'>
    {images.concat(images).map((src, index) => (
        <img key={index} src={src} alt={`img-${index}`} id="image" />
      ))}
    </div>

    <button onClick={handleSearchRestaurants} >Search Restaurants</button>

    <div className="venues-container">
        {restaurants.map((venue) => (
          <div key={venue.fsq_id} className="venue-card">
            <h2>{venue.name}</h2>
            <p>{venue.location.address}</p>
            <p>{venue.location.city}, {venue.location.state}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard