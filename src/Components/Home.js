import React from 'react';
import SearchBar from './SearchBar';
import NavbarIngredients from './NavbarIngredients';

import './Home.css';

export default function Home() {
  return (
    <>
      <NavbarIngredients />
      <div className="home-main-container">
        <div className="home-container">
          <h1>Meal Factory</h1>
          <p>
            <i>Find awesome recipes</i>
          </p>

          <SearchBar />
        </div>
      </div>
    </>
  );
}
