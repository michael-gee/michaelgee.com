import React from 'react'
import PropTypes from 'prop-types'

import * as reactHooksComponents from './ReactHooks'
import * as customHooksComponents from './CustomHooks'

import './BodyContent.css'

const HooksBodyContent = props => {
  return <div id="mg-hooks-body">{_renderCurrentHook()}</div>

  function _renderCurrentHook() {
    switch (props.currentHook) {
      // react hooks components
      case 'useState':
        return reactHooksComponents.UseStateDetails()
      case 'useEffect':
        return reactHooksComponents.UseEffectDetails()
      case 'useContext':
        return reactHooksComponents.UseContextDetails()
      case 'useReducer':
        return reactHooksComponents.UseReducerDetails()
      case 'useCallback':
        return reactHooksComponents.UseCallbackDetails()
      case 'useMemo':
        return reactHooksComponents.UseMemoDetails()
      case 'useRef':
        return reactHooksComponents.UseRefDetails()
      case 'useImperativeHandle':
        return reactHooksComponents.UseImperativeHandleDetails()
      case 'useLayoutEffect':
        return reactHooksComponents.UseLayoutEffectDetails()
      case 'useDebugValue':
        return reactHooksComponents.UseDebugValueDetails()

      // custom hooks components
      case 'useApi':
        return customHooksComponents.UseApiDetails()
      case 'useHasChanges':
        return customHooksComponents.UseHasChangesDetails()
      case 'useLocalStorage':
        return customHooksComponents.UseLocalStorageDetails()
      case 'useNavigation':
        return customHooksComponents.UseNavigationDetails()
      case 'usePrevious':
        return customHooksComponents.UsePreviousDetails()

      default:
        return <p>The currently selected hook details page was not found.</p>
    }
  }
}

HooksBodyContent.propTypes = {
  currentHook: PropTypes.string
}

export default HooksBodyContent
