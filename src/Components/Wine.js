/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  wineSuggest: {
    marginBottom: 90,
  },
  root: {
    maxWidth: 380,
    minWidth: 320,
    borderRadius: 5,
  },
  content: {
    backgroundColor: '#D97D0D',
    margin: 0,
    padding: 0,
  },
  media: {
    // width: 380,
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

export default function Wine({ recipeData }) {
  const classes = useStyles();
  const showWineName = () => {
    if (
      recipeData.winePairing &&
      recipeData.winePairing.productMatches &&
      recipeData.winePairing.productMatches.length > 0
    ) {
      return recipeData.winePairing.productMatches.map((wine, index) => {
        return <h5 key={index}>{wine.title}</h5>;
      });
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

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.wineSuggest}>
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
          <CardContent style={{ backgroundColor: '#D97D0D' }}>
            <Typography paragraph style={{ color: 'white', padding: 10 }}>
              {showWineDescription()}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
