import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../pictures/Logo.png';

function closeNavbar() {
  document.querySelector('#navChecked').checked = false;
}

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (event.target.id !== document.querySelector('#navChecked').id) {
          closeNavbar();
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

function Navbar() {
  const wrapperMenu = useRef(null);
  useOutsideAlerter(wrapperMenu);

  return (
    <div className="blocNav">
      <nav className="nav">
        <div className="menuToggle">
          <input type="checkbox" id="navChecked" />
          <span />
          <span />
          <span />
          <ul className="menu" ref={wrapperMenu}>
            <li>
              <Link onClick={closeNavbar} to="/">
                Search
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/Favoris">
                Favorites
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={closeNavbar} to="/AboutUs">
                Development Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Link to="/" className="linkLogo">
        <img
          src={Logo}
          alt="logo de Meals Factory"
          className="logoMealsFactory"
        />
      </Link>
    </div>
  );
}

export default Navbar;
