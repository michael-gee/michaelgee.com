import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import RouteViewer from './navigation/RouteViewer'

import DataTable from './routes/DataTable'

import { useStyles } from './appStyles'

export const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1 className={classes.appTitle}>React Sandbox</h1>

      <DataTable />

      {/* <Router>
        <Route path="/" component={RouteViewer} />
      </Router> */}
    </div>
  )
}

export default App