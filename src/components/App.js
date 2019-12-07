import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';

import { Theme } from '../styles';
import { materialUiTheme } from '../styles/materialUITheme';
import Login from '../pages/Login';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Proza+Libre&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Proza Libre', sans-serif;
  }
`;

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
