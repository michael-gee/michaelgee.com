import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';

import styled from 'styled-components';

const Container = styled.div`
  margin: 25px auto;
`;

const Button = styled.button`
  max-width: 400px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-top: 5px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

class InitialState extends Component {
  render() {
    return(
      <Container>
        <h2>Initial State: {this.props.message}</h2>

        <Button onClick={() => this.props.toggleInitialState(this.props.message)}>Toggle Initial State</Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.initialState.currentMessage };
}

export default connect(mapStateToProps, actions)(InitialState);