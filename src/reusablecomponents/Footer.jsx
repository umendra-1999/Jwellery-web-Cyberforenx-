import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialInstagram,TiSocialTwitter } from "react-icons/ti";
import { SlSocialLinkedin,SlSocialGoogle  } from "react-icons/sl";



const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
      
        <div className="mb-2 ">
          <Link to="/"><img className='rounded-full w-20' src="/images\logo.png" alt="" /></Link>      
  </div>
        
      
        <nav className="grid gap-2 text-sm text-black font-semibold">
          <h1 className='text-xl font-semibold italic'>Online Shopping</h1>
          <p className='hover:text-white'>Men</p>
          <p className='hover:text-white'>Women</p>
          <p className='hover:text-white'>Kids</p>
          <p className='hover:text-white'>Home and Living</p>
          <p className='hover:text-white'>Beauty</p>
          <p className='hover:text-white'>Gifts Cards</p>          
        </nav>
      
        <nav className="grid gap-4 text-sm text-black font-semibold">
          <h1 className='text-xl font-semibold italic'>Quick Links</h1>
           <Link className='hover:text-white' to="/">Home</Link>         
           <Link className='hover:text-white' to="/about">About</Link>         
           <Link  className='hover:text-white' to="/products">Products</Link>         
           <Link  className='hover:text-white' to="/contact">Contact</Link>         
           <Link  className='hover:text-white' to="/cart">Cart</Link>         
        </nav>


      <nav className="grid gap-2 text-sm text-black font-semibold">
  <h1 className='text-xl font-semibold italic'>JOIN US</h1>
  <p>Subscribe To Newsletter</p>
  <input className='border-2 p-2' type="text" placeholder='Email Address' />
  <button 
    className='border-black p-2 bg-blue-700 text-white'
    onClick={() => alert('Successfully submitted!')}
  >
    Subscribe!
  </button> 
</nav>


         </div>
      <div className='place-items-center mt-4 '>
        <h1 className='text-black'>Keep In Touch</h1>
        <div className='flex gap-6 text-black p-2'>
       <h1 className='hover:text-pink-600' > <TiSocialInstagram /></h1>
        <h1 className='hover:text-blue-600'><TiSocialTwitter /></h1>
       <h1 className='hover:text-blue-600'> <SlSocialLinkedin /></h1>
        <h1 className='hover:text-red-600'><SlSocialGoogle /></h1>
      </div>
        </div>
      
      
      <div className="max-w-screen-xl mx-auto px-4 mt-6 text-center text-xs text-black">
        © 2025 cyberforenx Jwellery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
