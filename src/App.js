import React from 'react'

import Counter from './features/Counter'

import { useStyles } from './appStyles'

const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1 className={classes.appTitle}>React Sandbox</h1>

      <Counter />
    </div>
  )
}

export default App
