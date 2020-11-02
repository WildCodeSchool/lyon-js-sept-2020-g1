import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Home.css';

export default function Home() {
  // Initializing future state for test (with Hooks useState)
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState('');

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

  return (
    <>
      <div className="home-main-container">
        <div className="home-container">
          <h1>Meal Factory</h1>
          <p>
            <i>Find awesome recipes</i>
          </p>

          <SearchBar
            addIngredientToList={addIngredientToList}
            handleSearch={handleSearch}
            options={options}
          />
        </div>
      </div>
    </>
  );
}
