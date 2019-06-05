import React from 'react'

import Counter from '../Counter'

import { useStyles } from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1>React Sandbox</h1>

      <Counter />
    </div>
  )
}

export default App
