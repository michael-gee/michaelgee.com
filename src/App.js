import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteHeader from './navigation/RouteHeader'
import RouteViewer from './navigation/RouteViewer'
import ThemeProvider from './components/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
