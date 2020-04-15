import React from 'react'
import PropTypes from 'prop-types'

import hookComponents from './HookDetails'

import './BodyContent.css'

const HooksBodyContent = props => {
  return <div id="mg-hooks-body">{_renderCurrentHook()}</div>

  function _renderCurrentHook() {
    switch (props.currentHook) {
      case 'useState':
        return hookComponents.UseStateDetails()
      case 'useEffect':
        return hookComponents.UseEffectDetails()
      case 'useContext':
        return hookComponents.UseContextDetails()
      case 'useReducer':
        return hookComponents.UseReducerDetails()

      default:
        return <p>The currently selected hook details page was not found.</p>
    }
  }
}

HooksBodyContent.propTypes = {
  currentHook: PropTypes.string
}

export default HooksBodyContent
