import React from 'react'

import Hooks from '../Hooks'

import { useStyles } from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <div id="rs-app-container" className={classes.appContainer}>
      <h1>React Sandbox</h1>

      <Hooks />
    </div>
  )
}

export default App
