/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Recipe.css';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Wine from './Wine.js';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Mailto from './MailTo';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';
import useLocalStorage from '../hooks/useLocalStorage';
import { DriveEtaTwoTone, ModeComment } from '@material-ui/icons';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
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
  hiddenDiv: {
    display: 'none',
  },
}));

const Recipe = (props) => {
  const classes = useStyles();
  const [recipeData, setRecipeData] = useState([]);
  const [commentary, setCommentary] = useState('');
  const [commentaries, setCommentaries] = useLocalStorage('commentaries', []);
  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  const { match } = props;

  const recipeId = match.params.id;

  let history = useHistory();

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

  const setCommentaryIntoRecipe = () => {
    if (commentary !== '') {
      const getCommentaries = [
        {
          id: commentaries.length > 0 ? commentaries[0].id + 1 : 1,
          value: commentary,
          recipe: recipeId,
          author: 'Wilder',
          date: moment(Date.now()).format('DD/MM/YYYY H:mm'),
        },
        ...commentaries,
      ];
      setCommentaries(getCommentaries);
      setCommentary('');
    }
    console.log(commentaries);
  };

  const deleteCommentaryFromRecipe = (id) => {
    // console.log(commentaries);
    setCommentaries(commentaries.filter((comm) => comm.id !== id));
  };

  return (
    <>
      <div className="btnReturnHome" onClick={() => history.goBack()}>
        {'<'}
      </div>

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

            <FacebookShareButton
              className="facebook"
              url={'https://www.facebook.com/'}
            >
              <FacebookIcon size={20} borderRadius={50}></FacebookIcon>
            </FacebookShareButton>

            <TwitterShareButton
              className="twitter"
              url={'https://twitter.com/'}
            >
              <TwitterIcon size={20} borderRadius={50}></TwitterIcon>
            </TwitterShareButton>
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
        <div className="suggestion-container">
          {recipeData.winePairing &&
          recipeData.winePairing.productMatches &&
          recipeData.winePairing.productMatches.length > 0 ? (
            <Wine recipeData={recipeData} />
          ) : (
            <div className={classes.hiddenDiv}></div>
          )}
          <div className="container-commentary">
            <div className="box-commentary">
              <textarea
                className="area-commentary"
                placeholder="Review..."
                value={commentary}
                onChange={(e) => setCommentary(e.target.value)}
              />
              <button
                className="add-commentary"
                onClick={setCommentaryIntoRecipe}
              >
                Leave a review
              </button>
            </div>
            <div className="section-commentaries">
              <h2>
                {commentaries.filter(
                  (commentary) => commentary.recipe === recipeId
                ).length > 0
                  ? 'Reviews'
                  : ''}
              </h2>
              {commentaries
                .filter((commentary) => commentary.recipe === recipeId)
                .map((commentary, index) => {
                  return (
                    <div className="section-commentary" key={index}>
                      <i className="details-commentary">
                        Posted at {commentary.date} by {commentary.author}
                      </i>
                      <p className="paraph-commentary">{commentary.value}</p>
                      <button
                        className="delete-commentary"
                        onClick={() =>
                          deleteCommentaryFromRecipe(commentary.id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
