import React, { useState } from 'react'

import './Hooks.css'

const HooksComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div id="rs-hooks-container">
      <div id="rs-hooks-counter-example">
        <h1>Simple Counter Example (Hooks):</h1>
        <div>Current Count: {count}</div>
        <button className="rs-hooks-counter-btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="rs-hooks-counter-btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default HooksComponent
