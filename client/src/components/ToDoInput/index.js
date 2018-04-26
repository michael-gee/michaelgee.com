import React, { Component } from 'react';

import styled from 'styled-components';

const InputContainer = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 20px auto;
  font-size: 20px;

  @media screen and (max-width: 605px) {
    padding: 0 25px;
    width: calc(100% - 50px);
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 20px;
  margin: 5px 0;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 5px auto;
  background-color: red;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

class ToDoInput extends Component {
  render() {
    return(
      <InputContainer>
        <div>Add To Do:</div>
        
        <Input type="text" />
          
        <SubmitButton>Submit</SubmitButton>
      </InputContainer>
    );
  }
}

export default ToDoInput;
