import React, { useRef, useEffect, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'

import { triggerNavigationChange } from '../utils/navigationUtils'
import constants from '../constants'

import { useStyles } from './styles'

const Homepage = lazy(() => import('./Homepage'))
const Counter = lazy(() => import('./Counter'))

const RouteViewer = props => {
  const appContainer = useRef(document.getElementById(constants.appContainer))

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

  const classes = useStyles()

  return (
    <div className={classes.routeViewerContainer} data-test="rs-routeViewer">
      {/* REPLACE THIS WITH CUSTOM SPINNER COMPONENT */}
      <Suspense fallback={<div>Loading...</div>}>
        {props.location.pathname !== '/' && (
          <Button
            onClick={() => triggerNavigationChange(constants.navigation.routePaths.homepage)}
            color="primary"
            variant="contained"
            data-test="rs-routeViewer-navBtn"
          >
            <HomeIcon />
            <span className={classes.backNavButtonText}>Back to Home</span>
          </Button>
        )}

        <Route exact path={constants.navigation.routePaths.homepage} component={Homepage} />
        <Route exact path={constants.navigation.routePaths.counter} component={Counter} />
      </Suspense>
    </div>
  )
}

RouteViewer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default RouteViewer
