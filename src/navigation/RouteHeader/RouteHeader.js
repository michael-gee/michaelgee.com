import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'

import useAppCommand from '../../hooks/useAppCommand'

import constants from '../../constants'

import { useStyles } from './styles'

const RouteHeader = props => {
  const { currentRoute } = props
  const viewHomepageCommand = useAppCommand(constants.commands.viewHomepage)
  const classes = useStyles()

  return (
    <div className={classes.headerContainer} data-testid="rs-header-container">
      {currentRoute !== constants.navigation.routePaths.homepage ? (
        <IconButton
          onClick={viewHomepageCommand.execute}
          className={classes.headerIcon}
          title="Navigate to homepage"
          data-testid="rs-header-iconBtn"
        >
          <HomeIcon />
        </IconButton>
      ) : (
        <div className={classes.divHidden} />
      )}
      <div>{_configureRouteTitle()}</div>
      <div className={classes.divHidden} />
    </div>
  )

  function _configureRouteTitle() {
    if (currentRoute === constants.navigation.routePaths.homepage) {
      return 'React Sandbox'
    } else {
      const routePath = currentRoute
        .split('/')[1]
        .split('-')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')

      return routePath
    }
  }
}

RouteHeader.propTypes = {
  currentRoute: PropTypes.string.isRequired
}

export default RouteHeader
