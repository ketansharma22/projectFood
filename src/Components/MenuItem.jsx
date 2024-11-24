import React from 'react';
import '../styling/MenuItem.css'
const MenuItem = ({ item ,onAddToCart}) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="menu-item-price">${item.price}</p>
        <button className="add-to-cart-button" onClick={() => onAddToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
