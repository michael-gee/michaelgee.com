import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import InitialState from './components/InitialState';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
`;

const Button = styled.a`
  max-width: 400px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin: 25px auto;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  max-width: 400px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <Container>
      <h1>Welcome to React Sandbox</h1>

      <InitialState />

      <StyledLink to="/to-dos">ToDo App</StyledLink>

      <Button href="/api/mock-data">Get Backend Data from Express/MongoDB</Button>
    </Container>
  );
}

export default Home;
