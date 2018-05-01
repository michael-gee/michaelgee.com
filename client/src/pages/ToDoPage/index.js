import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ToDoInput from './components/ToDoInput.js';
import ToDoList from './components/ToDoList.js';
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

const Loading = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const ToDoContainer = styled.div`
  margin: 15px 0;
  font-size: 1.4em;
`;

class ToDoPage extends Component {
  componentDidMount() {
    this.props.fetchToDos();
  }

  renderToDos() {
    if(this.props.initialLoad) {
      return <Loading>Loading...</Loading>
    }

    if(this.props.items.length === 0) {
      return <Loading>There are currently no saved to dos.</Loading>
    }

    return <ToDoList items={this.props.items} deleteToDo={this.props.deleteToDo} />
  }

  render() {
    return (
      <Container>
        <h1>To Do App</h1>

        <ToDoInput createToDo={this.props.createToDo} /> 

        <ToDoContainer>
          {this.renderToDos()}
        </ToDoContainer>
      </Container>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    items: todos.items,
    initialLoad: todos.initialLoad
  }
}

export default connect(mapStateToProps, actions)(ToDoPage);
