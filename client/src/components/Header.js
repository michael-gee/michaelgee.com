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
  color: white;
  text-decoration: none;
`;

const Header = () => (
  <HeaderEl>
    <Title to="/">
      <h1>React Sandbox</h1>
    </Title>
  </HeaderEl>
);

export default Header;
