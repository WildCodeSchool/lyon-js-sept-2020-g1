import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from '../contexts/SearchContext';
import filters from '../filters/data';

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
      margin: '10px',
    },
  },
}));

// SEARCH BAR COMPONENT MADE WITH HOOKS

const Searchbar = () => {
  // Material-ui style
  const classes = useStyles();
  const customStyles = {
    container: (provided) => ({
      ...provided,
      margin: 10,
    }),
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
    setFiltersList,
    fetchRecipes,
    apiKey,
  } = useContext(SearchContext);

  // Storage of the user search for auto-complete request
  const [currentIngredientSearch, setCurrentIngredientSearch] = useState('');

  // Ingredients options for auto-complete
  const [ingredientsOptions, setIngredientsOptions] = useState([]);

  // Diets options for auto-complete
  const [dietsOptions, setDietsOptions] = useState([]);

  // Cuisines options for auto-complete
  const [cuisinesOptions, setCuisinesOptions] = useState([]);

  // Cuisines options for auto-complete
  const [mealsOptions, setMealsOptions] = useState([]);

  // List of the different filters to apply
  const [dietList, setDietList] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const [mealList, setMealList] = useState([]);

  // Handling when users writes in input (for autocomplete) -> the value is stored in the state
  const handleSearch = (inputValue) => {
    setCurrentIngredientSearch(inputValue);
  };

  // Store the selected options in ingredientsList state (for API request)
  const addIngredientToList = (selectedOptions) => {
    setIngredientsList(selectedOptions);
  };

  // Store the different diets in filtersList state (for API request)
  const addFilterDietToList = (selectedOptions) => {
    setDietList(selectedOptions);
  };

  // Store the different diets in filtersList state (for API request)
  const addFilterCuisineToList = (selectedOptions) => {
    setCuisineList(selectedOptions);
  };

  // Store the different diets in filtersList state (for API request)
  const addFilterMealToList = (selectedOptions) => {
    setMealList(selectedOptions);
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
    setDietsOptions(filters.diets);
    setCuisinesOptions(filters.cuisines);
    setMealsOptions(filters.meals);
    setFiltersList({ dietList, cuisineList, mealList });
  }, [
    currentIngredientSearch,
    apiKey,
    filters,
    dietList,
    cuisineList,
    mealList,
  ]);

  // SearchBar function return
  return (
    <>
      <Select
        isClearable
        options={ingredientsOptions}
        styles={customStyles}
        onChange={addIngredientToList}
        onInputChange={handleSearch}
        value={ingredientsList}
        isMulti
        placeholder="Select your Ingredients"
      />
      <Select
        isMulti
        isClearable
        styles={customStyles}
        options={dietsOptions}
        value={dietList}
        onChange={addFilterDietToList}
        placeholder="Select your Diets"
      />
      <Select
        isMulti
        isClearable
        styles={customStyles}
        options={cuisinesOptions}
        value={cuisineList}
        onChange={addFilterCuisineToList}
        placeholder="Select your Cuisine Type"
      />
      <Select
        isMulti
        isClearable
        options={mealsOptions}
        value={mealList}
        onChange={addFilterMealToList}
        styles={customStyles}
        placeholder="Select your Meal Type"
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
