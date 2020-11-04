/* eslint-disable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipe.css';

const Recipe = (props) => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeSteps, setRecipeSteps] = useState([]);

  useEffect(() => {
    const { match } = props;
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const recipeId = match.params.id;
    const recipeDataURL = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    const recipeStepsURL = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${apiKey}`;

    axios.get(recipeDataURL).then((res) => setRecipeData(res.data));
    axios.get(recipeStepsURL).then((res) => setRecipeSteps(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line consistent-return
  const showIngredients = () => {
    if (recipeData.extendedIngredients) {
      return recipeData.extendedIngredients.map((ingredient, index) => {
        return (
          <li key={index}>
            {ingredient.amount} {ingredient.name}
          </li>
        );
      });
    }
  };

  const showRecipeSteps = () => {
    return recipeSteps.map((data, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <tbody key={index}>
          {data.steps.map((el) => {
            return (
              <tr key={el.number}>
                <td className="recipe-steps-step">{el.number}</td>
                <td className="recipe-steps-text">{el.step}</td>
              </tr>
            );
          })}
        </tbody>
      );
    });
  };

  return (
    <div className="recipe-main-container">
      <h1>{recipeData.title}</h1>
      <img
        className="recipe-img"
        src={recipeData.image}
        alt={recipeData.title}
      />
      <p>Cooking time:{recipeData.readyInMinutes} minutes</p>

      <div className="recipe-container">
        <div className="ingredients-box">
          Ingredients <ul className="ingredients-list">{showIngredients()}</ul>
        </div>
        <div className="recipe-box">
          Preparation
          <table className="recipe-steps">{showRecipeSteps()}</table>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
