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
      return recipeData.extendedIngredients.map((ingredient) => {
        return <p key={ingredient.id}>{ingredient.aisle}</p>;
      });
    }
  };

  const showRecipeSteps = () => {
    return recipeSteps.map((data, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          {data.steps.map((el) => {
            return <div key={el.number}>{el.step}</div>;
          })}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>{recipeData.title}</h1>
      <img src={recipeData.image} alt={recipeData.title} />
      <div>Ingredients :{showIngredients()}</div>
      <p>Cooking time:{recipeData.readyInMinutes} minutes</p>
      <div className="recipeStep">{showRecipeSteps()}</div>
    </div>
  );
};

export default Recipe;
