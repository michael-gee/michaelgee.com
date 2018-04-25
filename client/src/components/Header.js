import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderEl = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  height: 75px;
  padding: 0 25px;
`;

const Title = styled(Link)`
  text-align: center;
  margin-right: auto;
  color: white;
  text-decoration: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => (
  <HeaderEl>
    <Title to="/">
      <h1>React Sandbox</h1>
    </Title>

    <Link to="/to-dos">
      <Button>ToDo App</Button>
    </Link>
  </HeaderEl>
);

export default Header;
