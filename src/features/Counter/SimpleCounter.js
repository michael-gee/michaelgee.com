import React, { useState, useEffect, useRef } from 'react'

import Button from '@material-ui/core/Button'

import { useStyles } from './styles'

const SimpleCounter = () => {
  const [count, setCount] = useState(0)
  // useRef can be used more for just DOM access. here we use it to store the amount of times we have clicked the increment/decrement buttons
  // updating the useRef .current value does not rerender the component. this only happens because we are also updating the count state
  const clickCount = useRef(0)
  const classes = useStyles()

  useEffect(() => {
    document.title = `You clicked ${clickCount.current} times`

    // RETURNing a method within a useEffect is a way of using an effect which will also need clean up (unsubscribing to something when the component unmounts)
    return () => {
      document.title = 'React Sandbox'
    }
    // passed count as the second parameter tells this effect only to run if the count variable has changed
    // count is passed as the dependency array indstead of clickCount.current because only values that will cause the component to rerender should be passed
  }, [count])

  return (
    <>
      <div className={classes.counterCount} style={{ marginTop: 16 }} data-testid="rs-counter-count">
        Current Count: {count}
      </div>

      <Button
        // 1st listed className has preference for styles
        className={`${classes.incrementBtn} ${classes.counterBtn}`}
        variant="contained"
        onClick={() => {
          setCount(prevCount => prevCount + 1)
          clickCount.current++
          return
        }}
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
        onClick={() => {
          setCount(prevCount => prevCount - 1)
          clickCount.current++
          return
        }}
        data-testid="rs-counter-decrementBtn"
      >
        Decrement
      </Button>
    </>
  )
}

export default SimpleCounter
