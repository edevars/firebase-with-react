import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.yellow};
  height: 100vh;
  position: relative;
`;

const TopContainerClip = styled.div`
  width: 100%;
  height: 50vh;
  clip-path: polygon(0 0, 100% 0, 100% 59%, 0% 100%);
  background: ${props => props.theme.colors.ambar};
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 0;
`;

class Login extends Component {
  render() {
    return (
      <Wrapper>
        <TopContainerClip />
      </Wrapper>
    );
  }
}

export default Login;
