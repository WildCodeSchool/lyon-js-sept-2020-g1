import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import './Home.css';
import AffichageRecettes from './AffichageRecettes';
import Logo from '../pictures/Logo.png';
import { SearchContext } from '../contexts/SearchContext';

export default function Home() {
  // Consuming SearchContext
  const { setIngredientsList, resultsRecipes, recipes, apiKey } = useContext(
    SearchContext
  );

  // Storage of the user search for auto-complete request
  const [currentIngredientSearch, setCurrentIngredientSearch] = useState('');

  // Ingredients options for auto-complete
  const [ingredientsOptions, setIngredientsOptions] = useState([]);

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
    if (currentIngredientSearch) {
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
        .catch((err) => console.error(err));
    }
  }, [currentIngredientSearch]);

  // Display recipes from selected ingredients

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
      <div className="home-main-container">
        <div className="home-container">
          {/* <h1>Meal Factory</h1> */}
          <img className="logo" src={Logo} alt="Meals Factory logo" />
          <h2>Find awesome recipes !</h2>
          <p>Get custom recipes by filling your ingredients </p>

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
