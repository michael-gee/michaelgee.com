import React, { useRef, useEffect } from 'react'

import { Route } from 'react-router-dom'

import routes from '../../features'
import constants from '../../constants'

const RouteViewer = props => {
  const appContainer = useRef(document.getElementById(constants.appContainer))

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
          return <Route exact={exact || false} path={path} component={component} key={path} />
        })}
    </div>
  )
}

export default RouteViewer
