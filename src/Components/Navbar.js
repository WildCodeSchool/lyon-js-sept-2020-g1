import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function closeNavbar(){
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
    <nav className="nav">
      <div className="menuToggle">
        <input type="checkbox" id="navChecked" />
        <span />
        <span />
        <span />
        <ul className="menu" ref={wrapperMenu}>
          <li>
            <Link onClick={closeNavbar} to="/">Random Recipes</Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/Contact">Contact</Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/AboutUs">Team Development</Link>
          </li>
          <li>
            <Link onClick={closeNavbar} to="/Favoris">Favoris</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
