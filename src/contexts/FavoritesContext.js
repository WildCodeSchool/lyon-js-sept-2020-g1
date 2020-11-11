import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
