import React, { useState } from 'react';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#D97D0D',
    color: 'white',
    '&:hover': {
      backgroundColor: '#f2ab27',
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: '60px',
      fontSize: '18px',
    },
  },
}));

// SEARCH BAR COMPONENT MADE WITH HOOKS

const Searchbar = () => {
  const classes = useStyles();

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
        onChange={addIngredientToList}
        onInputChange={handleSearch}
        isMulti
      />
      <Button variant="contained" className={classes.button}>
        Let's Cook
      </Button>
    </>
  );
};

export default Searchbar;
