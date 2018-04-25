import React, { Component } from 'react';
import InitialState from '../containers/InitialState';
import styled from 'styled-components';

const Container = styled.div`
  width: 750px;
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

const Home = () => {
  return (
    <Container>
      <h1>Welcome to React Sandbox</h1>

      <InitialState />

      <Button href="/api/mock-data">Get Backend Data from Express/MongoDB</Button>
    </Container>
  );
}

export default Home;
