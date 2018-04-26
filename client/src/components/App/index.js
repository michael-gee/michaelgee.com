import React, { Component } from 'react';
import Header from '../Header';
import styled from 'styled-components';

const RouteContainer = styled.main`
  width: 100%;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        
        <RouteContainer>
          {this.props.children}
        </RouteContainer>
      </div>
    );
  }
}
