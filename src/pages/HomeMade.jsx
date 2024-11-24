import React from "react";
import { Link } from "react-router-dom";
import '../styling/HomeMade.css'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../Components/MenuItem";
import Cart from "./Cart";
import toast from "react-hot-toast";
const HomeMade = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const handleLogout = async () => {
        try {
            await auth.logoutAuth()
            navigate('/login', { replace: true })
        } catch (error) {
            console.log(error)
        }
    }
    const menuItems = [
        {
            id: 1,
            name: 'Pizza Margherita',
            description: 'Classic cheese and tomato pizza with fresh basil.',
            price: 12.99,
            image: 'https://example.com/pizza.jpg'
        },
        {
            id: 2,
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti with pancetta, egg, and Parmesan cheese.',
            price: 10.99,
            image: 'https://example.com/spaghetti.jpg'
        },
        {
            id: 3,
            name: 'Butter Chicken',
            description: 'Creamy tomato-based curry with tender chicken pieces.',
            price: 14.99,
            image: 'https://example.com/butter-chicken.jpg'
        },
        {
            id: 4,
            name: 'Paneer Tikka',
            description: 'Marinated paneer cubes grilled to perfection.',
            price: 12.99,
            image: 'https://example.com/paneer-tikka.jpg'
        },
        {
            id: 5,
            name: 'Biryani',
            description: 'Aromatic rice dish with spices and choice of meat or vegetables.',
            price: 13.99,
            image: 'https://example.com/biryani.jpg'
        },
        {
            id: 6,
            name: 'Masala Dosa',
            description: 'Crispy rice crepe filled with spiced potato mixture.',
            price: 8.99,
            image: 'https://example.com/masala-dosa.jpg'
        },
        {
            id: 7,
            name: 'Chole Bhature',
            description: 'Spiced chickpea curry served with deep-fried bread.',
            price: 9.99,
            image: 'https://example.com/chole-bhature.jpg'
        },
        {
            id: 8,
            name: 'Palak Paneer',
            description: 'Spinach curry with paneer cubes.',
            price: 11.99,
            image: 'https://example.com/palak-paneer.jpg'
        },
        {
            id: 9,
            name: 'Aloo Paratha',
            description: 'Stuffed flatbread with spiced potato filling.',
            price: 6.99,
            image: 'https://example.com/aloo-paratha.jpg'
        },
        {
            id: 10,
            name: 'Rajma Chawal',
            description: 'Red kidney beans curry served with rice.',
            price: 10.99,
            image: 'https://example.com/rajma-chawal.jpg'
        },
        {
            id: 11,
            name: 'Gulab Jamun',
            description: 'Deep-fried dough balls soaked in sugar syrup.',
            price: 5.99,
            image: 'https://example.com/gulab-jamun.jpg'
        },
        {
            id: 12,
            name: 'Pav Bhaji',
            description: 'Spicy vegetable mash served with buttered bread rolls.',
            price: 8.99,
            image: 'https://example.com/pav-bhaji.jpg'
        },
        {
            id: 13,
            name: 'Dal Makhani',
            description: 'Creamy black lentils cooked with butter and spices.',
            price: 11.99,
            image: 'https://example.com/dal-makhani.jpg'
        },
        {
            id: 14,
            name: 'Tandoori Chicken',
            description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.',
            price: 13.99,
            image: 'https://example.com/tandoori-chicken.jpg'
        },
        {
            id: 15,
            name: 'Fish Curry',
            description: 'Spicy and tangy fish curry.',
            price: 14.99,
            image: 'https://example.com/fish-curry.jpg'
        },
        {
            id: 16,
            name: 'Chicken Tikka Masala',
            description: 'Grilled chicken pieces in a creamy tomato sauce.',
            price: 13.99,
            image: 'https://example.com/chicken-tikka-masala.jpg'
        },
        {
            id: 17,
            name: 'Samosa',
            description: 'Crispy pastry filled with spiced potatoes and peas.',
            price: 4.99,
            image: 'https://example.com/samosa.jpg'
        },
        {
            id: 18,
            name: 'Rogan Josh',
            description: 'Tender lamb curry cooked with aromatic spices.',
            price: 15.99,
            image: 'https://example.com/rogan-josh.jpg'
        },
        {
            id: 19,
            name: 'Veg Pulao',
            description: 'Flavorful rice dish cooked with vegetables and spices.',
            price: 9.99,
            image: 'https://example.com/veg-pulao.jpg'
        },
        {
            id: 20,
            name: 'Kheer',
            description: 'Traditional Indian rice pudding with cardamom and nuts.',
            price: 5.99,
            image: 'https://example.com/kheer.jpg'
        }
    ];
    const handleAddToCart = (item) => {
        console.log("add to cart")
        setCart([...cart, item]);
        // alert(`${item.name} added to cart!`);
        toast.success(`${item.name} added to cart!`,{id:"added"})
      };
      const handleRemoveFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      };
    return (
        <div id="homemade">
            <div id="navbaar">

                <Link style={{ textDecoration: "none", color: "whitesmoke", fontSize: "25px" }} to='/about'>About</Link>
                <Link style={{ textDecoration: "none", color: "whitesmoke", fontSize: "25px" }} to='/contact'>Contact</Link>
                <Link style={{ textDecoration: "none", color: "white", fontSize: "25px", fontWeight: "900", fontFamily: "cursive" }} to='/dashboard'>Dashboard</Link>
                <button onClick={handleLogout} style={{
                    textDecoration: "none", color: "whitesmoke", fontSize: "25px", fontWeight: "900", background: "transparent", border
                        : "none", fontFamily: "cursive"
                }} >Logout</button>
                <button onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Back to Menu' : 'View Cart'}
      </button>

            </div>
            <div id="mainHomeMade">
            
      {showCart ? (
        <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
      ) : (
        menuItems.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))
      )}
            </div>

        </div>
    )
}
export default HomeMade