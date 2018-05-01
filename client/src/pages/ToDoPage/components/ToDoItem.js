import React, { Component } from 'react';

import Icon from '../../../components/Icon';
import { DELETE, EDIT } from '../../../components/IconList';
import styled from 'styled-components';

const ToDo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class ToDoItem extends Component {
  onDelete(e) {
    const currentItem = e.currentTarget.id;

    this.props.deleteToDo(currentItem);
  }

  render() {
    return (
      <ToDo>
        <span>{this.props.value}</span>
        <span onClick={this.onDelete.bind(this)} id={this.props.id}>
          <Icon icon={DELETE} color="#000" />
        </span>
      </ToDo>
    );
  }
}

export default ToDoItem;
