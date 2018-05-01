import React, { Component } from 'react';

import styled from 'styled-components';

const None = styled.div`
  display: none;
`;

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

const Warning = styled.div`
  color: red;
  text-align: center;
  padding: 10px 0;
`;

const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 10px;
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
  constructor(props) {
    super(props);

    this.state = { 
      warningShown: false,
      warning: ''
     };

     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const input = document.querySelector('#todo-input').value;

    if(input === '' || input.trim() === '') {
      this.setState({
        warningShown: true,
        warning: '*** Input field must not be empty to submit to do.'
      });

      return false;
    }

    this.setState({
      warningShown: false,
      warning: ''
    })

    this.props.createToDo(input);
    document.querySelector('#todo-input').value = '';
  }

  render() {
    return (
      <InputContainer>
        <div>Add To Do:</div>

        <Input id="todo-input" type="text" />

        {this.state.warningShown ? <Warning>{this.state.warning}</Warning> : <None />}

        <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
      </InputContainer>
    );
  }
}

export default ToDoInput;