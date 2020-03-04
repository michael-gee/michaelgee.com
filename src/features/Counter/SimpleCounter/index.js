import React, { useState, useEffect, useRef } from 'react'

import Button from 'components/Button'

import { RS_BUTTON_COLORS } from 'components/Button/constants'

const SimpleCounter = () => {
  const [count, setCount] = useState(0)
  // useRef can be used more for just DOM access. here we use it to store the amount of times we have clicked the increment/decrement buttons
  // updating the useRef .current value does not rerender the component. this only happens because we are also updating the count state
  const clickCount = useRef(0)

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
      <div id="rs-simple-countText" data-testid="rs-counter-count">
        Current Count: {count}
      </div>

      <Button
        text="Increment"
        color={RS_BUTTON_COLORS.green}
        onClick={() => {
          setCount(prevCount => prevCount + 1)
          clickCount.current++
          return
        }}
        data-testid="rs-counter-incrementBtn"
      />

      <Button
        text="Decrement"
        color={RS_BUTTON_COLORS.red}
        onClick={() => {
          // // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
          // when updating state that to a value that relies on the value of the previous state, it is best practice to pass a callback function to the setState function which will prevent stale state updates and renders
          // the link provided is the in depth explanation of this
          setCount(prevCount => prevCount - 1)
          clickCount.current++
          return
        }}
        data-testid="rs-counter-decrementBtn"
      />
    </>
  )
}

export default SimpleCounter
