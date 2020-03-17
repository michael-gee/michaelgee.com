import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './navigation/RouteHeader'

import routes from './navigation/routes'

const App = () => {
  return (
    <div id="rs-app-container">
      <Router>
        <>
          <RouteHeader />

          <div style={{ maxWidth: 1154, margin: '24px auto' }} data-testid="rs-routeViewer">
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
        </>
      </Router>
    </div>
  )
}

export default App
