import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const CounterComponent = () => {
  const classes = useStyles()
  const [count, setCount] = useState(0)

  // passed count as the second parameter tells this effect only to run if the count variable has changed
  useEffect(() => {
    console.log('count effect')
    document.title = `You clicked ${count} times`

    // RETURNing a method within a useEffect is a way of using an effect which will also need clean up (unsubscribing to something when the component unmounts)
    // return () => { unsubsribe() }
  }, [count])

  // side note: (memory leaks) memory leaks happen when component state updates happen in a component that is unmounted: for example when this.setState is in a callback or after an async method in mount or update which does not complete execution. this will result in the setState being kept in memory and can cause problems in the application.

  return (
    <div data-test="rs-counter-container">
      <div>
        <h2>Simple Counter Example (Hooks):</h2>
        <div className={classes.counterCount} data-test="counter-count">
          Current Count: {count}
        </div>
        <Button
          className={classes.counterBtn}
          color="primary"
          variant="contained"
          data-test="counter-incrementBtn"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          className={classes.counterBtn}
          variant="contained"
          data-test="counter-decrementBtn"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}

export default CounterComponent
