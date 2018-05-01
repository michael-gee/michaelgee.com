import React from 'react';

import ToDoItem from './ToDoItem';
import styled from 'styled-components';

const ItemsContainer = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
`;

const ToDoList = props => {
  const items = props.items;

  return (
    <ItemsContainer>
      {items.map(todo => {
        return <ToDoItem 
          key={todo._id.toString()} 
          value={todo.item} 
          id={todo._id.toString()}
          deleteToDo={props.deleteToDo} />
      })}
    </ItemsContainer>
  );
}

export default ToDoList;
