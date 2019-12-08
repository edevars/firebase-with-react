import React from 'react';
import { Paper, FormControl, TextField, Fab, Typography } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '320px',
    right: 0,
    left: 0,
    top: '200px',
    margin: 'auto',
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
        <StyledLogo src={logo}></StyledLogo>
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
        />
        <Fab
          className={classes.submit}
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
        >
          <LockOpen className={classes.buttonIcon} />
          Ingresar
        </Fab>
      </FormControl>
    </Paper>
  );
};
