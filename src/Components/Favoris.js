import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import AffichageRecettes from './AffichageRecettes';
import './Favorites.css';

export default function Favoris() {
  const { favoriteRecipes, favorites } = useContext(FavoritesContext);

  const displayFavorites = () => {
    const recipes = Object.values(favoriteRecipes);

    return recipes.map((recipe) => {
      return (
        favorites[recipe.id] && (
          <AffichageRecettes
            key={recipe.id}
            titre={recipe.title}
            image={recipe.image}
            id={recipe.id}
          />
        )
      );
    });
  };

  return (
    <div className="favorites-container">
      <h1>Favoris</h1>
      <div className="favorites">{displayFavorites()}</div>
    </div>
  );
}
