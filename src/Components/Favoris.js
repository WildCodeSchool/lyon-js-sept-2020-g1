import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { SearchContext } from '../contexts/SearchContext';
import AffichageRecettes from './AffichageRecettes';

export default function Favoris() {
  const { favorites } = useContext(FavoritesContext);
  const { recipes } = useContext(SearchContext);

  const matchId = () => {
    return recipes.map((recipe) => {
      return favorites.map((favorite) => {
        return (
          recipe.id === favorite && (
            <AffichageRecettes
              key={recipe.id}
              titre={recipe.title}
              image={recipe.image}
              id={recipe.id}
            />
          )
        );
      });
    });
  };

  return (
    <div>
      {matchId()}
      <h2>Favoris</h2>
    </div>
  );
}
