import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    width: 350,
    margin: '15px',
    padding: '10px',
    height: '350px',
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
});

export default function AffichageRecettes({ image, titre, id }) {
  const classes = useStyles();

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
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <Link to={`/recipe/${id}`} className={classes.linkToRecipe}>
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
              Click on this card to discover the recipe!
            </Typography>
          </CardContent>
        </Link>
        <CardContent className={classes.iconList}>
          <Mailto
            email="email@email.com"
            subject="Recipe send from Meal Factory with Love!"
            body={`Hi! Somebody send you this recipe: http://localhost:3000/recipe/${id}`}
          >
            <EmailIcon className={classes.iconBtn} />
          </Mailto>
        </CardContent>
      </Card>
    </Grid>
  );
}
