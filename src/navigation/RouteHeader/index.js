import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'

import { RS_ROUTE_PATHS } from '../../constants/navigation'

import { useStyles } from './styles'

const RouteHeader = props => {
  const isHomepage = props.location.pathname === RS_ROUTE_PATHS.homepage
  const classes = useStyles()

  return (
    <div className={classes.headerContainer} data-testid="rs-header-container">
      {!isHomepage ? (
        <IconButton
          onClick={() => {
            props.history && props.history.goBack()
          }}
          className={classes.headerIcon}
          title="Navigate to homepage"
          data-testid="rs-header-iconBtn"
        >
          <HomeIcon />
        </IconButton>
      ) : (
        <div className={classes.divHidden} />
      )}
      <div>{_configureRouteTitle(props.location && props.location.pathname)}</div>
      <div className={classes.divHidden} />
    </div>
  )

  function _configureRouteTitle(pathname) {
    if (isHomepage) {
      return 'React Sandbox'
    } else {
      const routePath = pathname
        .split('/')[1]
        .split('-')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')

      return routePath
    }
  }
}

export default RouteHeader
