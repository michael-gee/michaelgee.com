import React, { useRef, useEffect } from 'react'

import { Route, useHistory } from 'react-router-dom'

import { RS_APP_CONTAINERS, RS_NAV_EVENTS } from '../../constants/navigation'
import routes from '../routes'

const RouteViewer = () => {
  const history = useHistory()
  const appContainer = useRef(document.getElementById(RS_APP_CONTAINERS.default))

  // @@@@@ add test
  useEffect(() => {
    const onNavigateTo = args => {
      const path = args.detail.path
      console.log('onNavigateTo: ', path, appContainer)

      if (args.detail.options && args.detail.options.replace) {
        history.replace(path, args.detail)
      } else {
        history.push(path, args.detail)
      }
    }

    const current = appContainer.current
    current && current.addEventListener(RS_NAV_EVENTS.navigateTo, onNavigateTo, false)
    console.log('onNavigateTo was registered')

    return function cleanup() {
      current && current.removeEventListener(RS_NAV_EVENTS.navigateTo, onNavigateTo, false)
    }
  }, [history])

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

export default RouteViewer
