import React from 'react';
import { Link } from 'react-router-dom';

const Secondary = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>To Do App</h1>

    <br />

    <Link to="/">
      Back To Homepage
    </Link>
  </div>
);

export default Secondary;
