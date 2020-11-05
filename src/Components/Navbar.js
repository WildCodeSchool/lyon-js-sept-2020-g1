import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

function useOutsideAlerter(ref) {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            //   const navChecked = document.querySelector('#navChecked');

            // console.log(navChecked);
              // menu.style.transform = 'translate(100%, 0)';
              // menu.classList.add('.menuTr');
              // const menu = document.querySelector('.menuToggle');
              // menu.style.display = 'none';
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

function Navbar(){
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

    return (
      <nav className="nav">
        <div className="menuToggle">
          <input type="checkbox" id="navChecked" />
          <span />
          <span />
          <span />
          <ul className="menu" ref={wrapperRef}>
            <li>
              <Link to="/">Random Recipes</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/AboutUs">Team Development</Link>
            </li>
            <li>
              <Link to="/Favoris">Favoris</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  
}

export default Navbar;
