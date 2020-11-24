import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    background: 'url(/images/AboutUs.jpeg) no-repeat fixed center / cover',
    textAlign: 'center',
    height: '100%',
    padding: 30,
  },
  cards: {
    maxWidth: 400,
  },
  papers: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    boxShadow: '0 1px 3px rgba(50,62,64,0.12), 0 1px 2px rgba(50,62,64,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow:
        '0 5px 60px rgba(50,62,64,0.50), 0 5px 30px rgba(50,62,64,0.44)',
    },
  },
  avatar: {
    maxWidth: '100%',
  },
  firstName: {
    fontSize: 30,
    color: '#D94D1A',
  },
  introduction: {
    fontSize: 20,
    color: '#323E40',
  },
});

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={5} justify="space-evenly">
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src="/images/Avatars/Christian.png"
            alt="Christian's portrait"
          />
          <h3 className={classes.firstName}>Christian</h3>
          <br />
          <p className={classes.introduction}>Traduction française?...</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src="/images/Avatars/Jean.png"
            alt="Jean's portrait"
          />
          <h3 className={classes.firstName}>Jean</h3>
          <br />
          <p className={classes.introduction}>Le Blond, le vrai!...</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src="/images/Avatars/Brieuc.png"
            alt="Brieuc's portrait"
          />
          <h3 className={classes.firstName}>Brieuc</h3>
          <br />
          <p className={classes.introduction}>Codeur, Joueur, Chanteur!!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src="/images/Avatars/Gilles.png"
            alt="Gilles's portrait"
          />
          <h3 className={classes.firstName}>Gilles</h3>
          <br />
          <p className={classes.introduction}>La discrétion, mais efficace!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={classes.cards}>
        <Paper className={classes.papers} elevation={3}>
          <img
            className={classes.avatar}
            src="/images/Avatars/Sabrina.png"
            alt="Sabrina's portrait"
          />
          <h3 className={classes.firstName}>Sabrina</h3>
          <br />
          <p className={classes.introduction}>Oh my god...</p>
        </Paper>
      </Grid>
    </Grid>
  );
}
