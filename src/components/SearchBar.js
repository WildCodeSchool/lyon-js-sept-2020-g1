import React, { useState } from 'react';
import Select from 'react-select';

// SEARCH BAR COMPONENT MADE WITH HOOKS

const Searchbar = () => {
  // Initializing future state for test (with Hooks useState)
  const [currentIngredient, setCurrentIngredient] = useState('');
  // const [ingredientsList, setIngredientsList] = useState([]);

  // Handling when users writes in input -> the value is stored in the state
  const handleSearch = (inputValue) => setCurrentIngredient({ inputValue });

  // Adding the current ingredient into the ingredients list

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
    input: () => ({
      width: 200,
      color: 'black',
    }),
    option: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };
  // SearchBar function return
  return (
    <>
      <Select
        options={options}
        styles={customStyles}
        onInputChange={handleSearch}
        value={currentIngredient}
      />
    </>
  );
};

export default Searchbar;
