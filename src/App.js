import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './navigation/RouteHeader'
import RouteViewer from './navigation/RouteViewer'

const App = () => {
  return (
    <div id="rs-app-container">
      <Router>
        <Route
          path="/"
          render={() => (
            <>
              <RouteHeader />
              <RouteViewer />
            </>
          )}
        />
      </Router>
    </div>
  )
}

export default App
