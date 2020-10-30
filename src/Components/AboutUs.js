import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 400,
  },
  container: {
    display: 'flex',
  },
  title: {
    fontSize: 14,
  },
});

export default function AboutUs() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <div>
      <h2>Team Development</h2>
    </div>
=======
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <img src="https://via.placeholder.com/200" alt="visage" />
              <Typography variant="h5" component="h2">
                Christian
              </Typography>

              <Typography variant="body2" component="p">
                Positive MIND from Guadeloupe !!
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <img src="https://via.placeholder.com/200" alt="visage" />
              <Typography variant="h5" component="h2">
                Maître Jean
              </Typography>

              <Typography variant="body2" component="p">
                Que de fées penchées sur son berceau !
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <img src="https://via.placeholder.com/200" alt="visage" />
              <Typography variant="h5" component="h2">
                Gilles
              </Typography>

              <Typography variant="body2" component="p">
                Serial coder gentil et discret!
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <img src="https://via.placeholder.com/200" alt="visage" />
              <Typography variant="h5" component="h2">
                Brieuc
              </Typography>

              <Typography variant="body2" component="p">
                Codeur/Joueur/Chanteur!
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <img src="https://via.placeholder.com/200" alt="visage" />
              <Typography variant="h5" component="h2">
                Sabrina
              </Typography>

              <Typography variant="body2" component="p">
                OH my god...
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
>>>>>>> dev
  );
}
