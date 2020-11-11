/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Recipe.css';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

const Recipe = (props) => {
  const [recipeData, setRecipeData] = useState([]);

  const handleFavorites = () => {
    setFavorites([...favorites, parseInt(props.match.params.id, 10)]);
  };

  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const { match } = props;
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const recipeId = match.params.id;
    const recipeDataURL = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    axios.get(recipeDataURL).then((res) => setRecipeData(res.data));
  }, []);

  // eslint-disable-next-line consistent-return
  const showIngredients = () => {
    if (recipeData.extendedIngredients) {
      return recipeData.extendedIngredients.map((ingredient, index) => {
        return <li key={index}>{ingredient.originalString}</li>;
      });
    }
  };

  const showRecipeSteps = () => {
    if (recipeData.analyzedInstructions) {
      return recipeData.analyzedInstructions.map((instruction, index) => {
        return (
          <tbody key={index}>
            {instruction.steps.map((step) => {
              return (
                <tr key={step.number}>
                  <td className="recipe-steps-step">{step.number}</td>
                  <td className="recipe-steps-text">{step.step}</td>
                </tr>
              );
            })}
          </tbody>
        );
      });
    }
  };

  const showDiets = () => {
    if (recipeData.diets) {
      return recipeData.diets.map((diet, index) => {
        return (
          <div className="recipe-information-list" key={index}>
            {diet}
          </div>
        );
      });
    }
  };

  const showDishTypes = () => {
    if (recipeData.dishTypes) {
      return recipeData.dishTypes.map((dishType, index) => {
        return (
          <div className="recipe-information-list" key={index}>
            {dishType}
          </div>
        );
      });
    }
  };

  return (
    <>
      <Link to="/">
        <div className="btnReturnHome">{'<'}</div>
      </Link>
      <div className="recipe-main-container">
        <h1>{recipeData.title}</h1>
        <button type="button" onClick={handleFavorites}>
          Favorites
        </button>
        <div className="recipe-information">
          {showDiets()}
          {showDishTypes()}
        </div>
        <img
          className="recipe-img"
          src={recipeData.image}
          alt={recipeData.title}
        />
        <div className="recipe-other-information">
          <div className="recipe-other-information-list">
            {' '}
            <AccessTimeIcon /> <p>{recipeData.readyInMinutes} minutes</p>
          </div>
          <div className="recipe-other-information-list">
            <PeopleIcon /> <p>{recipeData.servings} people</p>
          </div>
        </div>

        <div className="recipe-container">
          <div className="ingredients-box">
            <h2>Ingredients</h2>{' '}
            <ul className="ingredients-list">{showIngredients()}</ul>
          </div>
          <div className="recipe-box">
            <h2>Preparation</h2>
            <table className="recipe-steps">{showRecipeSteps()}</table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
