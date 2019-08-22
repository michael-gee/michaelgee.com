import React, { useRef, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'

import routes from '../routes'
import constants from '../constants'
import useNavigation from '../hooks/useNavigation'

import { useStyles } from './styles'

const RouteViewer = props => {
  const appContainer = useRef(document.getElementById(constants.appContainer))
  const { navigateTo } = useNavigation()
  const classes = useStyles()

  useEffect(() => {
    const onNavigateTo = args => {
      const path = args.detail.path
      console.log('onNavigateTo: ', path)
      props.history.push(path, args.detail)
    }

    appContainer.current.addEventListener(constants.navigation.events.navigateTo, onNavigateTo, false)
    console.log('onNavigateTo was registered')

    return function cleanup() {
      appContainer.current.removeEventListener(constants.navigation.events.navigateTo, onNavigateTo, false)
    }
  }, [])

  return (
    <div className={classes.routeViewerContainer} data-test="rs-routeViewer">
      {props.location.pathname !== '/' && (
        <Button
          onClick={() => navigateTo(constants.navigation.routePaths.homepage)}
          color="primary"
          variant="contained"
          data-test="rs-routeViewer-navBtn"
        >
          <HomeIcon />
          <span className={classes.backNavButtonText}>Back to Home</span>
        </Button>
      )}

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
