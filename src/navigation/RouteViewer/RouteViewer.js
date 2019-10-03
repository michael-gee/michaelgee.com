import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Route } from 'react-router-dom'

import constants from '../../constants'

const RouteViewer = props => {
  const { routes } = props
  const appContainer = useRef(document.getElementById(constants.appContainer))

  console.log(props)

  // @@@@@ testable?
  useEffect(() => {
    const onNavigateTo = args => {
      const path = args.detail.path
      console.log('onNavigateTo: ', path)
      props.history.push(path, args.detail)
    }

    const current = appContainer.current
    current && current.addEventListener(constants.navigation.events.navigateTo, onNavigateTo, false)
    console.log('onNavigateTo was registered')

    return function cleanup() {
      current && current.removeEventListener(constants.navigation.events.navigateTo, onNavigateTo, false)
    }
  }, [props.history])

  return (
    <div style={{ maxWidth: 1200, margin: '24px auto' }} data-testid="rs-routeViewer">
      {routes &&
        routes.length > 0 &&
        routes.map(route => {
          const { exact, path, component } = route
          return (
            <div key={path} data-testid="rs-routeViewer-route">
              <Route exact={exact || false} path={path} component={component} />
            </div>
          )
        })}
    </div>
  )
}

RouteViewer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RouteViewer
