import React, { useState, useEffect } from "react";
import './Cart.css'; // create this file for styling

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage when page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addItem = (item) => {
    if(item.type === "subscription" && cartItems.some(ci => ci.type === "subscription")){
      alert("You can only add one subscription at a time!");
      return;
    }

    const existingItem = cartItems.find(ci => ci.id === item.id);

    if(existingItem){
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, {...item, quantity: 1}]);
    }
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if(quantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === id ? {...item, quantity} : item
    );
    setCartItems(updatedItems);
  };

  // Render cart
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : 
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} - ${item.price} x {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
            <input 
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              min="1"
            />
          </div>
        ))
      }
      <h3>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Cart;
