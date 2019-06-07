import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'

import Homepage from './Homepage'
import Counter from './Counter/'

import constants from '../constants'

import { useStyles } from './styles'

const RouteViewer = props => {
  const classes = useStyles()

  return (
    <div className={classes.routeViewerContainer} data-test="rs-routeViewer">
      {props.location.pathname !== '/' && (
        <Button
          onClick={() => _navigateToHomepage(props.history)}
          color="primary"
          variant="contained"
          data-test="rs-routeViewer-navBtn"
        >
          <HomeIcon />
          <span className={classes.backNavButtonText}>Back to Home</span>
        </Button>
      )}

      <Route exact path={constants.routePaths.homepage} component={Homepage} />
      <Route exact path={constants.routePaths.counter} component={Counter} />
    </div>
  )
}

function _navigateToHomepage(history) {
  history.replace(constants.routePaths.homepage)
}

RouteViewer.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default RouteViewer
