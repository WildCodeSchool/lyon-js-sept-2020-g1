import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 350,
    margin: '15px',
    padding: '10px',
    height: '350px',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  btnZone: {
    textAlign: 'right',
  },
  iconBtn: {
    cursor: 'pointer',
    backgroundColor: '#323E40',
    '&:hover': {
      background: '#D97D0D',
    },
    borderRadius: 5,
    width: '2em',
    height: '2em',
  },
});

export default function AffichageRecettes({ image, titre, id }) {
  const classes = useStyles();

  return (
    <Link to={`/recipe/${id}`}>
      <Grid item xs={12} sm={6} md={4}>
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
                Click on this card to discover the recipe!
              </Typography>
            </CardContent>
            <CardContent className={classes.btnZone}>
              <IconButton
                aria-label="share"
                size="small"
                className={classes.iconBtn}
              >
                <EmailIcon fontSize="inherit" />
              </IconButton>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Link>
  );
}
