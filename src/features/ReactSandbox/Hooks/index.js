import React from 'react'

import { ReactComponent as ReactLogo } from './react.svg'
import { ReactComponent as MgLogo } from './mapleLeaf.svg'

import './Hooks.css'

const Hooks = () => {
  return (
    <main id="mg-reactHooks-container">
      <h1 id="mg-reactHooks-title">Select a Category...</h1>

      <div id="mg-reactHooks-categoryContainer">
        <div id="mg-reactHooks-react" className="mg-reactHooks-category">
          <ReactLogo />
          <h2>React</h2>
        </div>

        <div id="mg-reactHooks-custom" className="mg-reactHooks-category">
          <MgLogo />
          <h2>Custom</h2>
        </div>
      </div>
    </main>
  )
}

export default Hooks
