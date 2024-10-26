import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerMenu from '../assets/HamburgerMenu.svg';
import TaqueriaEltarascoLogo from '../assets/MainTaqueriaLogo.svg';

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img style={{width:"auto", height:"50px"}} src={TaqueriaEltarascoLogo}/>
          <p style={{overflow:"hidden"}}>Taqueria El Tarasco</p>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img style={{ height: "50px", width: "25px" }} src={HamburgerMenu} alt="menu" />
        </div>
        <div className="NavElementsContainer">
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink onClick={()=> setShowNavbar(false)} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink onClick={()=> setShowNavbar(false)} to="/Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink onClick={()=> setShowNavbar(false)} to="/Catering">Catering</NavLink>
              </li>
              <li>
                <NavLink onClick={()=> setShowNavbar(false)} to="/About">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar