import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  // Storage of the ingredients list for recipes request
  const [ingredientsList, setIngredientsList] = useState([]);

  // Storage of the recipes following the API request
  const [recipes, setRecipes] = useState([]);

  // API KEY INITIALIZATION : the API key must be stored in .env file at the root of the project :
  // REACT_APP_API_KEY = <Your API Key>

  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  const fetchRecipes = () => {
    if (ingredientsList && ingredientsList.length > 0) {
      const ingredients = ingredientsList.map((ingredient) =>
        ingredientsList.indexOf(ingredient) === 0
          ? ingredient.label
          : `+${ingredient.label}`
      );
      const apiURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&number=12&ingredients=${ingredients}`;
      axios
        .get(apiURL)
        .then((response) => response.data)
        .then((data) => {
          setRecipes(data);
        });
    } else {
      const apiURLRandom = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`;
      axios
        .get(apiURLRandom)
        .then((response) => response.data)
        .then((data) => {
          setRecipes(data.recipes);
        });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        ingredientsList,
        setIngredientsList,
        fetchRecipes,
        recipes,
        setRecipes,
        apiKey,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
