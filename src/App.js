import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './components/RouteHeader'

import routes from './routes'

const App = () => {
  return (
    <div id="rs-app-container">
      <Router>
        <RouteHeader />

        <div id="rs-route-container">
          {routes &&
            routes.length > 0 &&
            routes.map(route => {
              const { exact, path, component } = route
              return (
                <div key={path} data-testid="rs-routeViewer-route">
                  <Route exact={exact || false} path={path} component={component} />
                </div>
              )
            })}
        </div>
      </Router>
    </div>
  )
}

export default App
