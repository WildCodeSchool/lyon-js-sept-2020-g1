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

  // Handling when users writes in input -> the value is stored in the state
  const handleSearch = (inputValue) => setCurrentIngredient({ inputValue });

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
      <Button variant="contained" className={classes.button}>
        Let's Cook
      </Button>
    </>
  );
};

export default Searchbar;
