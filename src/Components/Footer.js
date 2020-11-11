import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#323E40',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            <Link to="/AboutUs" variant="body2" color="inherit">
              Development team
            </Link>
            <Link to="/Contact" variant="body2">
              Contact us
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://github.com/WildCodeSchool/lyon-js-sept-2020-g1"
              variant="body2"
              color="inherit"
            >
              Github
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://www.wildcodeschool.com/fr-FR/campus/lyon"
              variant="body2"
            >
              Wild Code School
            </Link>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
