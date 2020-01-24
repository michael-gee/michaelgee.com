import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const SimpleCounter = () => {
  const [count, setCount] = useState(0)
  const classes = useStyles()

  useEffect(() => {
    document.title = `You clicked ${count} times`

    // RETURNing a method within a useEffect is a way of using an effect which will also need clean up (unsubscribing to something when the component unmounts)
    return () => {
      document.title = 'React Sandbox'
    }
    // passed count as the second parameter tells this effect only to run if the count variable has changed
  }, [count])

  return (
    <>
      <div className={classes.counterCount} data-testid="rs-counter-count">
        Current Count: {count}
      </div>

      <Button
        // 1st listed className has preference for styles
        className={`${classes.incrementBtn} ${classes.counterBtn}`}
        variant="contained"
        onClick={() => setCount(prevCount => prevCount + 1)}
        data-testid="rs-counter-incrementBtn"
      >
        Increment
      </Button>

      <Button
        className={classes.counterBtn}
        variant="contained"
        // // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
        // when updating state that to a value that relies on the value of the previous state, it is best practice to pass a callback function to the setState function which will prevent stale state updates and renders
        // the link provided is the in depth explanation of this
        onClick={() => setCount(prevCount => prevCount - 1)}
        data-testid="rs-counter-decrementBtn"
      >
        Decrement
      </Button>
    </>
  )
}

export default SimpleCounter
