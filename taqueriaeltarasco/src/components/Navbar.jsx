import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerMenu from '../assets/HamburgerMenu.svg';
import TaqueriaEltarascoLogo from '../assets/TarascoLogo.jpg';

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  function goToOrderWebsite() {
    window.open("https://fromtherestaurant.com/taqueria-el-tarasco-wa/locations/", "_blank", "noopener, noreferrer")
  }


  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className='OrderButtonDiv'>
            <button onClick={goToOrderWebsite} style={{ marginLeft: '-12px', borderColor: 'black', color: 'white', backgroundColor: 'black', marginTop: '2.5px' }}>ORDER<br></br> ONLINE</button>
          </div>
          <div className="logo">
            <NavLink to="/">
              <img style={{ width: "auto", height: "90px" }} src={TaqueriaEltarascoLogo} />
            </NavLink>

          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img style={{ height: "50px", width: "25px", top: '18px', position: 'relative' }} src={HamburgerMenu} alt="menu" />
          </div>
          <div className="NavElementsContainer">
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                  <NavLink onClick={() => setShowNavbar(false)} to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setShowNavbar(false)} to="/Menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setShowNavbar(false)} to="/Catering">Catering</NavLink>
                </li>
                <li>
                  <NavLink onClick={() => setShowNavbar(false)} to="/About">About</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </nav>


    </>
  )
}

export default Navbar