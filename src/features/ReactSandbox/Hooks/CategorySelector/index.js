import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ReactLogo } from './react.svg'
import { ReactComponent as MgLogo } from './mapleLeaf.svg'

import './CategorySelector.css'

const HooksCategorySelector = props => {
  return (
    <main id="mg-hooks-categorySelector">
      <h1 id="mg-hooks-categorySelector-title">Select a Category...</h1>

      <div id="mg-hooks-categoryContainer">
        <div
          id="mg-hooks-reactCategory"
          className="mg-hooks-category"
          onClick={() => props.onUpdateCategory('react')}
        >
          <ReactLogo />
          <h2>React</h2>
        </div>

        <div
          id="mg-hooks-customCategory"
          className="mg-hooks-category"
          onClick={() => props.onUpdateCategory('custom')}
        >
          <MgLogo />
          <h2>Custom</h2>
        </div>
      </div>
    </main>
  )
}

HooksCategorySelector.propTypes = {
  onUpdateCategory: PropTypes.func.isRequired
}

export default HooksCategorySelector
