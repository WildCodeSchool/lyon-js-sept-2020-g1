/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Recipe.css';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Mailto from './MailTo';
import useLocalStorage from '../hooks/useLocalStorage';
import { DriveEtaTwoTone, ModeComment } from '@material-ui/icons';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

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
  root: {
    maxWidth: 380,
    margin: '50px auto',
  },
  content: {
    backgroundColor: '#D97D0D',
    margin: 0,
    padding: 0,
  },
  media: {
    width: 380,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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

  const showWineName = () => {
    if (recipeData.winePairing && recipeData.winePairing.productMatches) {
      return recipeData.winePairing.productMatches.map((wine, index) => {
        return <h5 key={index}>{wine.title}</h5>;
      });
    } else {
      return <h5>No wine found for this recipe.</h5>;
    }
  };

  const showWineDescription = () => {
    if (recipeData.winePairing && recipeData.winePairing.productMatches) {
      return recipeData.winePairing.productMatches.map(
        (wineDescription, index) => {
          return <p key={index}>{wineDescription.description}</p>;
        }
      );
    }
  };

  const setCommentaryIntoRecipe = () => {
    const getCommentaries = [
      ...commentaries,
      {
        id:
          commentaries.length > 0
            ? commentaries[commentaries.length - 1].id + 1
            : 1,
        value: commentary,
        recipe: recipeId,
        author: 'Wilder',
        date: moment(Date.now()).format('DD/MM/YYYY H:i:s'),
      },
    ];
    setCommentaries(getCommentaries);
    setCommentary('');
  };

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
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

        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <CardContent
              style={{
                color: 'white',
                textAlign: 'center',
                textDecoration: 'underline',
                fontSize: '1.7em',
              }}
            >
              Advised wine:
            </CardContent>
            <CardContent
              style={{
                color: '#323e40',
                textAlign: 'center',
                fontSize: '1.5em',
              }}
            >
              {showWineName()}
            </CardContent>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="/images/vin.jpg"
            title="Bottle of wine"
            alt="bottle of wine"
          />
          <CardActions disableSpacing style={{ backgroundColor: '#D97D0D' }}>
            <Typography
              paragraph
              style={{
                color: '#323e40',
                margin: 'auto',
                textDecoration: 'underline',
              }}
            >
              Wine desciption
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent
              style={{ backgroundColor: '#D97D0D', color: '#323e40' }}
            >
              <Typography paragraph>{showWineDescription()}</Typography>
            </CardContent>
          </Collapse>
        </Card>

        <div className="container-commentary">
          <div className="box-commentary">
            <textarea
              className="area-commentary"
              placeholder="Comment the recipe..."
              value={commentary}
              onChange={(e) => setCommentary(e.target.value)}
            />
            <button onClick={setCommentaryIntoRecipe}>Comment</button>
          </div>
          <div className="section-commentaries">
            <h2>Commentaires</h2>
            {commentaries
              .filter((commentary) => commentary.recipe === recipeId)
              .map((commentary) => {
                return (
                  <div className="section-commentary" key={commentary.id}>
                    <p>{commentary.value}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
