
import React, { useState, useEffect } from 'react';
import Header from '../../reusablecomponents/Header';
import Footer from '../../reusablecomponents/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage once on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Remove item handler
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Increase quantity handler
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if(item.id === id) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if(item.id === id) {
        return { ...item, quantity: (item.quantity || 1) - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <>
    <Header/>
    <div className='bg-rose-100'>
    <div className="p-8 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center border-b py-4">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    +
                  </button>

                  <button 
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    -
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right text-xl font-bold">
            Total: ₹{totalPrice}
          </div>
         
        </>
      )}
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
