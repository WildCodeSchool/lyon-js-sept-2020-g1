import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    background: 'url(/images/AboutUs.jpeg) no-repeat fixed center / cover',
    textAlign: 'center',
    height: '100%',
    margin: 0,
    padding: 200,
  },
  papers: {
    padding: 10,
    backgroundColor: '#ecf0f1',
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
      <Grid item xs={12} sm={6} md={4}>
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
