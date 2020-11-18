/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Recipe.css';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Mailto from './MailTo';
import useLocalStorage from '../hooks/useLocalStorage';
import { DriveEtaTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
  iconList: {
    height: '3em',
    padding: 5,
  },
  iconBtn: {
    cursor: 'pointer',
    borderRadius: 5,
    width: '1em',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    padding: 3,
    float: 'right',
    color: 'white',
    '&:hover': {
      color: '#D97D0D',
    },
  },
});

const Recipe = (props) => {
  const classes = useStyles();
  const [recipeData, setRecipeData] = useState([]);
  const [commentaries, setCommentaries] = useLocalStorage('commentaries',[]);

  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  const { match } = props;

  const recipeId = match.params.id;

  useEffect(() => {
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
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
          diet.length < 10 && (
            <div className="recipe-information-list" key={index}>
              {diet}
            </div>
          )
        );
      });
    }
  };

  const showDishTypes = () => {
    if (recipeData.dishTypes) {
      return recipeData.dishTypes.map((dishType, index) => {
        return (
          dishType.length < 10 && (
            <div className="recipe-information-list" key={index}>
              {dishType}
            </div>
          )
        );
      });
    }
  };

  

  const putCommentary = () => {
    const commentary = document.querySelector('.commentary').value;
    const getCommentaries = [...commentaries, {
      id: commentaries.length > 0 ? commentaries[commentaries.length - 1].id + 1 : 1,
      value: commentary,
      recipe: recipeId
    }];
    setCommentaries(getCommentaries);
  }

  return (
    <>
      <Link to="/">
        <div className="btnReturnHome">{'<'}</div>
      </Link>
      <div className="recipe-main-container">
        <h1>{recipeData.title}</h1>
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
          <div className="recipe-other-information-list">
            <Mailto
              email="email@email.com"
              subject="Recipe send from Meal Factory with Love!"
              body={`Hi! Somebody send you this recipe: http://localhost:3000/recipe/${recipeId}`}
            >
              <EmailIcon className={classes.iconBtn} />
            </Mailto>
          </div>
          <div className="recipe-other-information-list">
            {favorites[recipeId] ? (
              <FavoriteIcon
                style={{ color: '#D97D0D', cursor: 'pointer' }}
                onClick={() => toggleFavorites(recipeId)}
              />
            ) : (
              <FavoriteBorderIcon
                style={{ cursor: 'pointer' }}
                onClick={() => toggleFavorites(recipeId)}
              />
            )}
          </div>
        </div>

        <div className="recipe-container">
          <div className="ingredients-box">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">{showIngredients()}</ul>
          </div>
          <div className="recipe-box">
            <h2>Preparation</h2>
            <table className="recipe-steps">{showRecipeSteps()}</table>
          </div>
        </div>
        <div className="sectionCommentary">
          <textarea className='commentary'/>
          <button onClick={putCommentary}>Commenter</button>
          <div>
            {commentaries.filter(commentary => commentary.recipe === recipeId).map((commentary) => {
              return (<p key={commentary.id}>{commentary.value}</p>);
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
