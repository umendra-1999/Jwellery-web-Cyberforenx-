import React, { useState } from 'react'
import { Link } from 'react-router-dom'
  import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false); //here usestate is use for showing the functionality of the mobile view menu and also the menu is type of hamburger menu//

  return (
    <>
      <header className="sticky top-0 w-full bg-orange-300 p-4 shadow z-50">
        <nav className="max-w-screen-xl mx-auto flex items-center h-16 px-4 lg:px-8">
          
           {/* it is logo for the header */}
          <div className="flex-shrink-0 h-14 w-14 my-auto">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-full w-auto rounded-4xl object-contain"
              />
            </Link>
          </div>

         
       

<div className="flex-1 flex justify-center">
  <ul className={`flex gap-8 items-center transition-all duration-300
    ${open 
      ? "flex-col absolute top-16 left-0 w-full bg-white shadow-lg py-6 md:static md:flex-row md:bg-transparent md:shadow-none" 
      : "hidden md:flex"
    }`}>
    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "text-white font-bold" : "text-gray-700 font-medium hover:text-white"
        }
      >
    {/* in this the navlink is used for showing the active link means whic link is active they will highlight  */}
        Home
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/products" 
        className={({ isActive }) => 
          isActive ? "text-white font-bold" : "text-gray-700 font-medium hover:text-white"
        }
      >
        Products
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive ? "text-white font-bold" : "text-gray-700 font-medium hover:text-white"
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          isActive ? "text-white font-bold" : "text-gray-700 font-medium hover:text-white"
        }
      >
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/cart" 
        className={({ isActive }) => 
          isActive ? "text-white font-bold" : "text-gray-700 font-medium hover:text-white"
        }
      >
        Cart
      </NavLink>
    </li>
  </ul>
</div>


          {/* it is a menu which is open for mobile view  */}
          <button
            className="md:hidden ml-4"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width={28} height={28} viewBox="0 0 20 20" fill="none">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
