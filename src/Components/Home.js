import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NavbarIngredients from './NavbarIngredients';
import './Home.css';

export default function Home() {
  // Initializing future state for test (with Hooks useState)
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);

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

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const resultatsRecipes = () => {
    if (ingredientsList !== null) {
      const ingredients = ingredientsList.map((ingredient) =>
        ingredientsList.indexOf(ingredient) === 0
          ? ingredient.value
          : `+${ingredient.value}`
      );
      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=87436d53184c4ffeae724d7a4f79b336&ingredients=${ingredients}`;
      console.log(url);
      const resultats = url;
      axios
        .get(resultats)
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
        });
    }
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
            options={options}
          />
        </div>
      </div>
    </>
  );
}
