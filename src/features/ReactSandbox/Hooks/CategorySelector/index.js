import React from 'react'

import { ReactComponent as ReactLogo } from './react.svg'
import { ReactComponent as MgLogo } from './mapleLeaf.svg'

import { useNavigation } from 'hooks/mg-hooks'
import { MG_ROUTE_PATHS } from 'constants/navigation'

import './CategorySelector.css'

const Hooks = () => {
  const { navigateTo } = useNavigation()

  return (
    <main id="mg-hooks-categorySelector">
      <h1 id="mg-hooks-categorySelector-title">Select a Category...</h1>

      <div id="mg-hooks-categoryContainer">
        <div
          id="mg-hooks-react"
          className="mg-hooks-category"
          onClick={() => navigateTo(`${MG_ROUTE_PATHS.reactHooksCategories}/react`)}
        >
          <ReactLogo />
          <h2>React</h2>
        </div>

        <div
          id="mg-hooks-custom"
          className="mg-hooks-category"
          onClick={() => navigateTo(`${MG_ROUTE_PATHS.reactHooksCategories}/custom`)}
        >
          <MgLogo />
          <h2>Custom</h2>
        </div>
      </div>
    </main>
  )
}

export default Hooks
