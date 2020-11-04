import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NavbarIngredients from './NavbarIngredients';
import './Home.css';
import AffichageRecettes from './AffichageRecettes';

export default function Home() {
  // Initializing future state for test (with Hooks useState)
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  // API KEY INITIALIZATION : the API key must be stored in .env file at the root of the project :
  // REACT_APP_API_KEY = <Your API Key>

  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  // Stockage résultat d'API
  const [recipes, setRecipes] = useState([]);

  // Handling when users writes in input (for autocomplete) -> the value is stored in the state
  const handleSearch = (inputValue) => {
    setCurrentIngredient(inputValue);
    console.log(currentIngredient);
  };

  // Store the selected options in ingredientsList state (for API request)
  const addIngredientToList = (selectedOptions) => {
    setIngredientsList(selectedOptions);
    console.log(ingredientsList);
  };

  // Autocomplete function : Fetching ingredients when users types in SearchBar

  useEffect(() => {
    const apiURL = `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${currentIngredient}`;
    axios
      .get(apiURL)
      .then((res) => res.data.results)
      .then((data) => {
        const options = data.map((ingredient) => ({
          value: ingredient.id,
          label: ingredient.name,
        }));
        setIngredientsList(options);
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('Over'));
  }, [currentIngredient]);

  // Fechting recipes from selected ingredients

  const resultatsRecipes = () => {
    if (ingredientsList) {
      const ingredients = ingredientsList.map((ingredient) =>
        ingredientsList.indexOf(ingredient) === 0
          ? ingredient.value
          : `+${ingredient.value}`
      );
      const apiURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&number=12&ingredients=${ingredients}`;
      axios
        .get(apiURL)
        .then((response) => response.data)
        .then((data) => {
          setRecipes(data);
        });
    }
  };

  const displayRecipes = () => {
    return recipes.map((recipe) => {
      return <AffichageRecettes titre={recipe.title} image={recipe.image} />;
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
            resultatsRecipes={resultatsRecipes}
            options={ingredientsList}
          />
        </div>
      </div>
      <div className="affichageRecettes">{displayRecipes()}</div>
    </>
  );
}
