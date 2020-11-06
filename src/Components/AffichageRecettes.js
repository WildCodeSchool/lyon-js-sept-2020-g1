import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px',
    padding: '10px',
    height: '300px',
    display: Grid,
    justifyContent: 'center',

    cursor: 'pointer',
  },
});

export default function AffichageRecettes({ image, titre, id }) {
  const classes = useStyles();

  return (
    <Link to={`/recipe/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="photo of the recipe"
            height="140"
            image={image}
            title="photo of recipe"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {titre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              BLA BLA BLA of the MIAM MIAM !!...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
