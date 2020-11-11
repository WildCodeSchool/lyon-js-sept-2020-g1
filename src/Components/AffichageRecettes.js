import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import IconButtonCard from './IconButtonCard';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 350,
    margin: '15px',
    padding: '10px',
    height: '350px',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export default function AffichageRecettes({ image, titre, id }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/recipe/${id}`}>
            <CardMedia
              component="img"
              alt="photo of the recipe"
              height="140"
              image={image}
              title="photo of recipe"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {titre}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Click on this card to discover the recipe!
            </Typography>
          </CardContent>
          <CardContent>
            <IconButtonCard />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
