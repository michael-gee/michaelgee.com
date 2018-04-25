import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>404 Error - Page Not Found!</h1>
    <p>The currently URL location is not valid!</p>
    <Link to="/">Go Back to Homepage</Link>
  </div>
);
