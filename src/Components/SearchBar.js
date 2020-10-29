import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
/* eslint-disabled */
import AddIcon from '@material-ui/icons/AddOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: 'white',
    borderRadius: '5px',
    color: '#323e40',
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  },
  button: {
    backgroundColor: '#f2ab27',
    color: 'white',
    '&:hover': {
      backgroundColor: '#D97D0D',
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: '80px',
      fontSize: '18px',
    },
  },
}));

// SEARCH BAR COMPONENT MADE WITH HOOKS

const Searchbar = () => {
  const classes = useStyles();

  // Initializing future state for test (with Hooks useState)
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);

  // Handling when users writes in input -> the value is stored in the state
  const handleSearch = (e) => {
    setCurrentIngredient(e.target.value);
  };

  // Adding the current ingredient into the ingredients list
  const addIngredient = () => {
    setIngredientsList([...ingredientsList, currentIngredient]);
    setCurrentIngredient('');
  };

  // SearchBar function return
  return (
    <>
      <TextField
        onChange={handleSearch}
        value={currentIngredient}
        variant="outlined"
        placeholder="Search for ingredients"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddIcon style={{ color: '#323e40' }} onClick={addIngredient} />
            </InputAdornment>
          ),
          className: classes.input,
        }}
      />
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => {
          window.location.href = '#'; // Future URL de la page resultats
        }}
      >
        Let's Cook
      </Button>
    </>
  );
};

export default Searchbar;
