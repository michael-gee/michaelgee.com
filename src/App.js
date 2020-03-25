import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from './routes'

const App = () => {
  return (
    <Router>
      {routes &&
        routes.length > 0 &&
        routes.map(route => {
          const { exact, path, component } = route
          return (
            <Route
              exact={exact || false}
              path={path}
              component={component}
              key={path}
              data-testid="mg-routeViewer-route"
            />
          )
        })}
    </Router>
  )
}

export default App
