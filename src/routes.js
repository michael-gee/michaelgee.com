import React, { lazy } from 'react'
import Loadable from 'components/Loadable'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const routes = _configureRoutes()

export default [
  { path: MG_ROUTE_PATHS.portfolio, component: routes.Portfolio, exact: true },
  {
    path: [MG_ROUTE_PATHS.reactSandbox, MG_ROUTE_PATHS.reactSandboxPage],
    component: routes.ReactSandbox,
    exact: true
  }
]

function _configureRoutes() {
  const Portfolio = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/Portfolio'))
        return <Component {...componentProps} />
      }}
      fallback={() => (
        <div
          id="mg-portfolio-loading"
          style={{ width: '100%', height: '100vh', backgroundColor: '#3749A2' }}
        />
      )}
    />
  )

  const ReactSandbox = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactSandbox'))
        return <Component {...componentProps} />
      }}
      fallback={() => (
        <div
          id="mg-reactSandbox-loading"
          style={{ width: '100%', height: '100vh', backgroundColor: '#FFF' }}
        />
      )}
    />
  )

  return {
    Portfolio,
    ReactSandbox
  }
}
