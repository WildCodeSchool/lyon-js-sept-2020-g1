import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { FavoritesContext } from '../contexts/FavoritesContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    margin: '15px',
    height: '400px',
    justifyContent: 'center',
    cursor: 'pointer',
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
          <p>Share</p>
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
