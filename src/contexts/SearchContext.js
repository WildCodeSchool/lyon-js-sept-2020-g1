import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  // Storage of the ingredients list for recipes request
  const [ingredientsList, setIngredientsList] = useState([]);
  const [filtersList, setFiltersList] = useState([]);

  // List of the different filters to apply
  const [dietList, setDietList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [mealList, setMealList] = useState([]);

  // Storage of the recipes following the API request
  const [recipes, setRecipes] = useState([]);

  // API KEY INITIALIZATION : the API key must be stored in .env file at the root of the project :
  // REACT_APP_API_KEY = <Your API Key>

  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  const fetchRecipes = () => {
    let recipeApiURL = '';
    if (ingredientsList && ingredientsList.length > 0) {
      recipeApiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&addRecipeInformation=true`;
      const ingredients = ingredientsList.map((ingredient) =>
        ingredientsList.indexOf(ingredient) === 0
          ? ingredient.label
          : `+${ingredient.label}`
      );
      recipeApiURL += `&includesIngredients=${ingredients}`;
      if (filtersList.dietList && filtersList.dietList.length > 0) {
        const diets = filtersList.dietList.map((diet) =>
          filtersList.dietList.indexOf(diet) === 0
            ? diet.label.replace(/ /g, '%20')
            : `+${diet.label.replace(/ /g, '%20')}`
        );
        recipeApiURL += `&diets=${diets}`;
      }
      if (filtersList.cuisineList && filtersList.cuisineList.length > 0) {
        const cuisines = filtersList.cuisineList.map((cuisine) =>
          filtersList.cuisineList.indexOf(cuisine) === 0
            ? cuisine.label
            : `+${cuisine.label}`
        );
        recipeApiURL += `&cuisines=${cuisines}`;
      }
      if (filtersList.mealList && filtersList.mealList.length > 0) {
        const meals = filtersList.mealList.map((meal) =>
          filtersList.mealList.indexOf(meal) === 0
            ? meal.label.replace(/ /g, '%20')
            : `+${meal.label.replace(/ /g, '%20')}`
        );
        recipeApiURL += `&types=${meals}`;
      }
    } else {
      recipeApiURL = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`;

      // Repère si l'utilisateur a sélectionné un filtre
      let tagsIndice = false;

      if (filtersList.dietList && filtersList.dietList.length > 0) {
        tagsIndice = true;
        recipeApiURL += `&tags=`;
        const diets = filtersList.dietList.map((diet) =>
          diet.label.replace(/ /g, '%20')
        );
        recipeApiURL += `${diets}`;
      }
      if (filtersList.cuisineList && filtersList.cuisineList.length > 0) {
        if (tagsIndice === false) {
          recipeApiURL += `&tags=`;
          tagsIndice = true;
        } else {
          recipeApiURL += ',';
        }
        const cuisines = filtersList.cuisineList.map(
          (cuisine) => cuisine.label
        );
        recipeApiURL += `${cuisines}`;
      }
      if (filtersList.mealList && filtersList.mealList.length > 0) {
        if (tagsIndice === false) {
          recipeApiURL += `&tags=`;
          tagsIndice = true;
        } else {
          recipeApiURL += ',';
        }
        const meals = filtersList.mealList.map((meal) =>
          meal.label.replace(/ /g, '%20')
        );
        recipeApiURL += `${meals}`;
      }
    }
    axios
      .get(recipeApiURL)
      .then((response) => response.data)
      .then((data) => {
        if (data.recipes && data.recipes.length > 0) {
          setRecipes(data.recipes);
        } else if (data.results && data.results.length > 0) {
          setRecipes(data.results);
        } else {
          setRecipes([]);
        }
      });
  };

  return (
    <SearchContext.Provider
      value={{
        ingredientsList,
        setIngredientsList,
        fetchRecipes,
        recipes,
        setRecipes,
        setFiltersList,
        apiKey,
        dietList,
        setDietList,
        cuisineList,
        setCuisineList,
        mealList,
        setMealList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
