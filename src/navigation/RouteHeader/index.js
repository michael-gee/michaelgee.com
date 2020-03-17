import React from 'react'

import IconButton from 'components/Buttons/IconButton'

import { useHistory, useLocation } from 'react-router-dom'

import { RS_ROUTE_PATHS } from 'constants/navigation'
import { RS_BUTTON_CUSTOM_COLORS, RS_BUTTON_SIZES } from 'constants/button'

import './RouteHeader.css'

const RouteHeader = () => {
  const history = useHistory()
  const location = useLocation()
  const isHomepage = location.pathname === RS_ROUTE_PATHS.homepage

  return (
    <div id="rs-header-container" data-testid="rs-header-container">
      {!isHomepage ? (
        <IconButton
          iconName="home"
          onClick={history.goBack}
          customColor={RS_BUTTON_CUSTOM_COLORS.primary}
          size={RS_BUTTON_SIZES.large}
          title="Navigate to homepage"
        />
      ) : (
        <div className="rs-header-hidden" />
      )}
      <div>{_configureRouteTitle(location.pathname)}</div>
      <div className="rs-header-hidden" />
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
