import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './navigation/RouteHeader'
import RouteViewer from './navigation/RouteViewer'
import ThemeProvider from './components/ThemeProvider'

import { useStyles } from './appStyles'

export const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <ThemeProvider>
        <Router>
          <Route
            path="/"
            render={props => (
              <>
                <RouteHeader {...props} />
                <RouteViewer {...props} />
              </>
            )}
          />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
