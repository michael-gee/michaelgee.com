import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../containers/App';

import HomePage from '../pages/HomePage';
import ToDoPage from '../pages/ToDoPage';
import View404Page from '../pages/View404Page';

const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/to-dos" component={ToDoPage} />
        <Route component={View404Page} />
      </Switch>
    </App>
  </Router>
);

export default Routes;