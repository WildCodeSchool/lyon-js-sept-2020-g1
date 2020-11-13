import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import './Home.css';
import AffichageRecettes from './AffichageRecettes';
import Logo from '../pictures/Logo_transparent.png';
import { SearchContext } from '../contexts/SearchContext';
import BackToTop from './BackToTop';

export default function Home() {
  // Consuming SearchContext
  const { recipes } = useContext(SearchContext);

  // Display recipes from selected ingredients

  const displayRecipes = () => {
    return recipes.map((recipe) => {
      return (
        <AffichageRecettes
          key={recipe.id}
          titre={recipe.title}
          image={recipe.image}
          id={recipe.id}
        />
      );
    });
  };

  return (
    <>
      <div className="home-main-container">
        <div className="home-container">
          <img className="logo" src={Logo} alt="Meals Factory logo" />
          <h2>Find awesome recipes !</h2>
          <p>Get custom recipes by filling your ingredients </p>

          <SearchBar />
        </div>
      </div>
      <div className="recipes-list">{displayRecipes()}</div>
      <BackToTop />
    </>
  );
}
