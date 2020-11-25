import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ValidationMessage({
  isFormSend,
  handleCloseValidationMessage,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={isFormSend}
        autoHideDuration={6000}
        onClose={handleCloseValidationMessage}
      >
        <Alert onClose={handleCloseValidationMessage} severity="success">
          Your message has been successfully send !
        </Alert>
      </Snackbar>
    </div>
  );
}
