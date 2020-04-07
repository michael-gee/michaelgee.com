import React from 'react'
import PropTypes from 'prop-types'

import * as hookComponents from './HookDetails'

import './BodyContent.css'

const HooksBodyContent = props => {
  return <section id="mg-hooks-body">{_renderCurrentHook()}</section>

  function _renderCurrentHook() {
    switch (props.currentHook) {
      case 'useState':
        return hookComponents.UseStateDetails()
      case 'useEffect':
        return hookComponents.UseEffectDetails()

      default:
        return <p>The currently selected hook details page was not found.</p>
    }
  }
}

HooksBodyContent.propTypes = {
  currentHook: PropTypes.string
}

export default HooksBodyContent
