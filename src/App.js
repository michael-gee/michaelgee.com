import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './components/Header/RouteHeader'

import routes from './routes'

const Loading = () => <div>Loading...</div>

const App = () => {
  return (
    <div id="mg-app-container">
      <Router>
        <RouteHeader />

        <div id="mg-route-container">
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default App
