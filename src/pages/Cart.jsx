
import React from 'react';
import '../styling/Cart.css'
const Cart = ({ cartItems, onRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => onRemoveFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
          <button style={{width:"200px",color:"red",fontSize:"15px"}}>Continue payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
