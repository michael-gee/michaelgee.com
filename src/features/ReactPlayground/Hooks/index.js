import React from 'react'

import './Hooks.css'

const Hooks = props => {
  return (
    <main id="mg-reactHooks-container">
      <h1 id="mg-reactHooks-title">Select a Category</h1>

      <div id="mg-reactHooks-categoryContainer">
        <div id="mg-reactHooks-react" className="mg-reactHooks-category">
          <h2>React</h2>
        </div>

        <div id="mg-reactHooks-custom" className="mg-reactHooks-category">
          <h2>Custom</h2>
        </div>
      </div>
    </main>
  )
}

export default Hooks
