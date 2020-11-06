import React from 'react';
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

const Searchbar = (props) => {
  const classes = useStyles();
  const { handleSearch, addIngredientToList, options, resultsRecipes } = props;

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
      <Button
        variant="contained"
        className={classes.button}
        onClick={resultsRecipes}
      >
        Let's Cook
      </Button>

      <i>By ingredients :</i>
      <Select
        options={options}
        styles={customStyles}
        onChange={addIngredientToList}
        onInputChange={handleSearch}
        isMulti
      />
    </>
  );
};

export default Searchbar;
