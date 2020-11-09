import React, { useContext } from 'react';
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

const Searchbar = (props) => {
  const classes = useStyles();

  // Consuming SearchContext
  const { fetchRecipes, ingredientsList } = useContext(SearchContext);

  const { handleSearch, addIngredientToList, options } = props;

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
