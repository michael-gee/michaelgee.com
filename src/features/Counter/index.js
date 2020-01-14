import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const Counter = () => {
  const [count, setCount] = useState(0)
  const classes = useStyles()

  // passed count as the second parameter tells this effect only to run if the count variable has changed
  useEffect(() => {
    document.title = `You clicked ${count} times`

    // RETURNing a method within a useEffect is a way of using an effect which will also need clean up (unsubscribing to something when the component unmounts)
    return () => {
      document.title = 'React Sandbox'
    }
  }, [count])

  return (
    <div className={classes.counterContainer}>
      <div className={classes.counterCount} data-testid="rs-counter-count">
        Current Count: {count}
      </div>

      <Button
        // 1st listed className has preference for styles
        className={`${classes.incrementBtn} ${classes.counterBtn}`}
        variant="contained"
        onClick={() => setCount(count + 1)}
        data-testid="rs-counter-incrementBtn"
      >
        Increment
      </Button>

      <Button
        className={classes.counterBtn}
        variant="contained"
        onClick={() => setCount(count - 1)}
        data-testid="rs-counter-decrementBtn"
      >
        Decrement
      </Button>
    </div>
  )
}

export default Counter

// side note: (memory leaks) memory leaks happen when component state updates happen in a component that is unmounted: for example when this.setState is in a callback or after an async method in mount or update which does not complete execution. this will result in the setState being kept in memory and can cause problems in the application.
