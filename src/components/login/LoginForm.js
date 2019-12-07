import React from 'react';
import { Paper, FormControl, TextField, Fab, Typography, Avatar } from '@material-ui/core';
import { AccountCircleOutlined, LockOpen } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '450px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
    maxHeight: '650px',
  },
  avatar: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
    width: '72px',
    height: '72px',
  },
  title: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const LoginForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <FormControl className={classes.form}>
        <Avatar className={classes.avatar}>
          <AccountCircleOutlined style={{ fontSize: 72 }} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          Log in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          type="password"
          label="password"
          name="password"
          autoComplete="password"
          autoFocus
        />
        <Fab
          className={classes.submit}
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="add"
        >
          <LockOpen className={classes.buttonIcon} />
          Ingresar
        </Fab>
      </FormControl>
    </Paper>
  );
};
