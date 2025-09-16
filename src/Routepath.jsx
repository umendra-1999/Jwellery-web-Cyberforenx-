import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from './App'
import Header from './reusablecomponents/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart'
import Footer from './reusablecomponents/Footer'
import Productdetails from './components/pages/Productdetails'

const Routepath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/header' element={<Header/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/footer' element={<Footer/>}></Route>
            <Route path="/products/:id" element={<Productdetails/>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Routepath;
