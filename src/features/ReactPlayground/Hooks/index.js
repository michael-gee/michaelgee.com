// Hooks implementation

// Linear list of all hooks implementations

// eventually add search feature for all hooks?

// react icon for React and other icon for custom hooks
// import UseState from './ReactHooks/UseState'

import React from 'react'

import UseState from './ReactHooks/UseState'

import './Hooks.css'

const Hooks = props => {
  return (
    <main id="mg-reactHooks-container">
      <h1>Hooks</h1>

      <UseState />
    </main>
  )
}

export default Hooks
