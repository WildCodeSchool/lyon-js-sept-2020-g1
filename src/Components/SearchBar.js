import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from '../contexts/SearchContext';

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
  // Material-ui style
  const classes = useStyles();
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

  // Consuming SearchContext
  const {
    ingredientsList,
    setIngredientsList,
    fetchRecipes,
    apiKey,
  } = useContext(SearchContext);

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

  // SearchBar function return

  return (
    <>
      <Select
        options={ingredientsOptions}
        styles={customStyles}
        onChange={addIngredientToList}
        onInputChange={handleSearch}
        value={ingredientsList}
        isMulti
        placeholder="Select your ingredients"
      />
      <Button
        variant="contained"
        className={classes.button}
        onClick={fetchRecipes}
      >
        Let's Cook
      </Button>
    </>
  );
};

export default Searchbar;
