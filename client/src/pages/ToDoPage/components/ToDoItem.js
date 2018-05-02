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

const StyledSpan = styled.span`
  border-radius: 50%;
  padding: 5px 8px;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
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
        <StyledSpan onClick={this.onDelete.bind(this)} id={this.props.id}>
          <Icon icon={DELETE} color="#000" />
        </StyledSpan>
      </ToDo>
    );
  }
}

export default ToDoItem;
