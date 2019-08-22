import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { initializeIcons } from 'office-ui-fabric-react'

import RouteViewer from './navigation/RouteViewer'

import { useStyles } from './appStyles'

initializeIcons()

export const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1 className={classes.appTitle}>React Sandbox</h1>

      <Router>
        <Route path="/" component={RouteViewer} />
      </Router>
    </div>
  )
}

export default App
