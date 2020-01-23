import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import SubtractIcon from '@material-ui/icons/Remove'

import { useStyles } from './styles'

const Counter = () => {
  const [count, setCount] = useState(0)

  // for initial state that has a lot of computations (for loops, etc) can be placed inside a anonymous function so it will only render once instead of on every render
  // const [heavyInitialState, setHeavyInitialState] = useState(() => _computeHeavyInitialValue())

  // for related values that you expect to update together at the same time can be stored in an object. If the state is unrelated and updated separately, it is better to use multiple useState() constants
  const [{ count1, count2, count3 }, setCountObj] = useState({ count1: 0, count2: 10, count3: 20 })

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
    <div className={classes.container}>
      <div className={classes.countContainer}>
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

      <div className={classes.countContainer}>
        <div className={classes.counterCount}>
          <span>Count 1: {count1}</span>

          <IconButton aria-label="add" size="small">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="subtract" size="small">
            <SubtractIcon />
          </IconButton>
        </div>
        <div className={classes.counterCount}>
          <span>Count 2: {count2}</span>
          <IconButton aria-label="add" size="small">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="subtract" size="small">
            <SubtractIcon />
          </IconButton>
        </div>
        <div className={classes.counterCount}>
          <span>Count 3: {count3}</span>
          <IconButton aria-label="add" size="small">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="subtract" size="small">
            <SubtractIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Counter

// side note: (memory leaks) memory leaks happen when component state updates happen in a component that is unmounted: for example when this.setState is in a callback or after an async method in mount or update which does not complete execution. this will result in the setState being kept in memory and can cause problems in the application.
