import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NavbarIngredients from './NavbarIngredients';
import './Home.css';
import AffichageRecettes from './AffichageRecettes';

export default function Home() {
  // Storage of the user search for auto-complete request
  const [currentIngredientSearch, setCurrentIngredientSearch] = useState('');

  // Ingredients options for auto-complete
  const [ingredientsOptions, setIngredientsOptions] = useState([]);

  // Storage of the ingredients list for recipes request
  const [ingredientsList, setIngredientsList] = useState([]);

  // Storage of the recipes following the API request
  const [recipes, setRecipes] = useState([]);

  // API KEY INITIALIZATION : the API key must be stored in .env file at the root of the project :
  // REACT_APP_API_KEY = <Your API Key>

  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  // Handling when users writes in input (for autocomplete) -> the value is stored in the state
  const handleSearch = (inputValue) => {
    setCurrentIngredientSearch(inputValue);
  };

  // Store the selected options in ingredientsList state (for API request)
  const addIngredientToList = (selectedOptions) => {
    setIngredientsList(selectedOptions);
  };

  // Autocomplete function : Fetching ingredients when users types in SearchBar

  useEffect(() => {
    const apiURL = `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${currentIngredientSearch}`;
    axios
      .get(apiURL)
      .then((res) => res.data.results)
      .then((data) => {
        const options = data.map((ingredient) => ({
          value: ingredient.id,
          label: ingredient.name,
        }));
        setIngredientsOptions(options);
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('Over'));
  }, [currentIngredientSearch]);

  // Fechting recipes from selected ingredients

  const resultsRecipes = () => {
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
          console.log(data.recipes);
          setRecipes(data.recipes);
        });
    }
  };

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
      <NavbarIngredients />
      <div className="home-main-container">
        <div className="home-container">
          <h1>Meal Factory</h1>
          <p>
            <i>Find awesome recipes</i>
          </p>

          <SearchBar
            addIngredientToList={addIngredientToList}
            handleSearch={handleSearch}
            resultsRecipes={resultsRecipes}
            options={ingredientsOptions}
          />
        </div>
      </div>
      <div className="affichageRecettes">{displayRecipes()}</div>
    </>
  );
}
