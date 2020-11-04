import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

export default function AboutUs() {
  return (
    <Grid
      container
      display="flex"
      flexflow="row wrap"
      justify="space-evenly"
      spacing={5}
      style={{
        textAlign: 'center',
        height: '100%',
        padding: 30,
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 10 }}>
          <img src="/images/Avatars/Christian.png" alt="Christian's portrait" />
          <h3 style={{ fontSize: 30 }}>Christian</h3>
          <p style={{ fontSize: 20 }}>Positive Mind from Guadeloupe!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 10 }}>
          <img src="/images/Avatars/Jean.png" alt="Jean's portrait" />
          <h3 style={{ fontSize: 30 }}>Jean</h3>
          <p style={{ fontSize: 20 }}>Le Blond, le vrai!...</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 10 }}>
          <img src="/images/Avatars/Brieuc.png" alt="Brieuc's portrait" />
          <h3 style={{ fontSize: 30 }}>Brieuc</h3>
          <p style={{ fontSize: 20 }}>Codeur, Joueur, Chanteur!!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 10 }}>
          <img src="/images/Avatars/Gilles.png" alt="Gilles's portrait" />
          <h3 style={{ fontSize: 30 }}>Gilles</h3>
          <p style={{ fontSize: 20 }}>La discrétion, mais efficace!</p>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 10 }}>
          <img src="/images/Avatars/Sabrina.png" alt="Sabrina's portrait" />
          <h3 style={{ fontSize: 30 }}>Sabrina</h3>
          <p style={{ fontSize: 20 }}>Oh my god...</p>
        </Paper>
      </Grid>
    </Grid>
  );
}
