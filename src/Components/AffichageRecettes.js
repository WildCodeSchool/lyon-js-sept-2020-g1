import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { FavoritesContext } from '../contexts/FavoritesContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    margin: '15px',
    height: '400px',
    justifyContent: 'center',
  },

  linkToRecipe: {
    cursor: 'pointer',
    textDecoration: 'none',
  },
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
    color: '#323E40',
    '&:hover': {
      color: '#D97D0D',
    },
  },
  cardContent: {
    height: '55px',
  },
  interactions: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  media: {
    minHeight: '200px',
    minWidth: 375,
    objectFit: 'cover',
  },
});

export default function AffichageRecettes({ image, titre, id }) {
  const classes = useStyles();

  const { favorites, toggleFavorites } = useContext(FavoritesContext);

  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ''
        }&body=${encodeURIComponent(body) || ''}`}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/recipe/${id}`}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h5"
              component="h2"
              style={{
                textAlign: 'center',
                fontSize: titre.length < 40 ? '24px' : '20px',
              }}
            >
              {titre}
            </Typography>
          </CardContent>

          <CardMedia
            className={classes.media}
            component="img"
            alt="photo of the recipe"
            // height="250"
            // width="100%"
            image={image}
            objectfit="cover"
            title="photo of recipe"
          />
        </Link>
        <div className={classes.interactions}>
          <CardContent className={classes.iconList}>
            <Mailto
              email="email@email.com"
              subject="Recipe send from Meal Factory with Love!"
              body={`Hi! Somebody send you this recipe: http://localhost:3000/recipe/${id}`}
            >
              <EmailIcon className={classes.iconBtn} />
            </Mailto>
          </CardContent>
          {favorites[id] ? (
            <StarIcon
              style={{ color: '#D97D0D' }}
              onClick={() => toggleFavorites(id)}
            />
          ) : (
            <StarBorderIcon onClick={() => toggleFavorites(id)} />
          )}
        </div>
      </CardActionArea>
    </Card>
  );
}
