import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ToDoInput from '../../components/ToDoInput';
import actions from './actions';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;

  > h1 {
    text-align: center;
  }
`;

class ToDoPage extends Component {
  componentDidMount() {
    this.props.fetchToDos();
  }

  render() {
    return (
      <Container>
        <h1>To Do App</h1>

        <ToDoInput />
      </Container>
    );
  }
}

export default connect(null, actions)(ToDoPage);
