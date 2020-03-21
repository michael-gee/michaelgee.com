import React from 'react'

import Header from './'

import { useHistory, useLocation } from 'react-router-dom'
import { RS_ROUTE_PATHS } from 'constants/navigation'

const RouteHeader = () => {
  const history = useHistory()
  const location = useLocation()
  const isHomepage = location.pathname === RS_ROUTE_PATHS.homepage

  return (
    <Header
      title={_configureHeaderTitle()}
      iconProps={!isHomepage ? { icon: 'home', onClick: history.goBack, title: 'Navigate To Homepage' } : undefined}
    />
  )

  function _configureHeaderTitle() {
    if (isHomepage) {
      return 'React Sandbox'
    } else {
      const routePath = location.pathname
        .split('/')[1]
        .split('-')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ')

      return routePath
    }
  }
}

export default RouteHeader
