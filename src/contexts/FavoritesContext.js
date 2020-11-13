import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { SearchContext } from './SearchContext';

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const { recipes } = useContext(SearchContext);

  const [favoriteRecipes, setFavoriteRecipes] = useLocalStorage(
    'fav recipes',
    []
  );

  const isFavorite = (id) => {
    return !!favorites[id];
  };

  const toggleFavorites = (id) => {
    setFavorites((prevFav) => {
      return { ...prevFav, [id]: !isFavorite(id) };
    });

    recipes.map((recipe) => {
      return (
        recipe.id === id &&
        setFavoriteRecipes((prevFavRecipes) => {
          return { ...prevFavRecipes, [id]: recipe };
        })
      );
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        isFavorite,
        toggleFavorites,
        favoriteRecipes,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
