import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import AffichageRecettes from './AffichageRecettes';
import './Favorites.css';

export default function Favorites() {
  const { favoriteRecipes, favorites } = useContext(FavoritesContext);

  const displayFavorites = () => {
    const recipes = Object.values(favoriteRecipes);

    const checkFavoritesTrue = Object.values(favorites).includes(true);

    if (checkFavoritesTrue) {
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
      // eslint-disable-next-line no-else-return
    } else {
      return <p>You have not added any recipe to your favorites yet.</p>;
    }
  };

  return (
    <div className="favorites-container">
      <h1>Favoris</h1>
      <div className="favorites">{displayFavorites()}</div>
    </div>
  );
}
