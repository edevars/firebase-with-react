//Routing and page components
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

//Themening for styled-components
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles';

//Themeing for material UI
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';
import { materialUiTheme } from '../styles/materialUITheme';

import { GlobalStyle } from '../styles/GlobalStyle';

//Firebase confi
import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appID: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <ThemeProvider theme={Theme}>
          <MaterialUIThemeProvider theme={materialUiTheme}>
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </MaterialUIThemeProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
