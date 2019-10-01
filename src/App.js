import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { initializeIcons } from 'office-ui-fabric-react'

import RouteHeader from './navigation/RouteHeader'
import RouteViewer from './navigation/RouteViewer'

import { useStyles } from './appStyles'

initializeIcons()

export const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <Router>
        <Route
          path="/"
          render={props => (
            <>
              <RouteHeader currentRoute={props.location.pathname} />
              <RouteViewer {...props} />
            </>
          )}
        />
      </Router>
    </div>
  )
}

export default App
