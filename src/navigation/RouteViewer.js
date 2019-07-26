import React, { useRef, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'

// import Loading from '../components/Loading'

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
      {/* Implement Suspense/code splitting when react API is more declared and ready */}
      {/* <Suspense fallback={<Loading />}> */}
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

      <Route exact path={constants.navigation.routePaths.homepage} component={routes.Homepage} />
      <Route path={constants.navigation.routePaths.counter} component={routes.Counter} />
      {/* </Suspense> */}
    </div>
  )
}

export default RouteViewer
