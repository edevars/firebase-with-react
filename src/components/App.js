import React, { Component } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: orange;
  font-size: 72px;
`;

class App extends Component {
  render() {
    return <H1>🌈 ¡Hola mundo! 🎉</H1>;
  }
}

export default App;
