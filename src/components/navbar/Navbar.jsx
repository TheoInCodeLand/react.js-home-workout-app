
import React from 'react'
import './navbar.css';


const Navbar = () => {

  
  return (
    <nav className='navbar'>
      {/* Logo */}
      <div className='logo__container'>

            <span className='logo__span-fit'>Fit</span>
            <span className='logo__span-stem'>|</span>
            <span className='logo__span-me'>me</span>

      </div>

      {/* Navigation Links */}
      <ul >
            <li>Home</li>
            <li>Workouts</li>
            <li>Profile</li>
            {/* Add more navigation links as needed */}
      </ul>

      {/* Authentication Links (Login/Logout) */}
      <button className='navbar__button'>account</button>
      
        <span className='navbar__menu'>|||</span>
    </nav>
    
  )
}

export default Navbar
