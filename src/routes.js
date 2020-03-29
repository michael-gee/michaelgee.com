import React, { lazy } from 'react'
import Loadable from 'components/Loadable'

import ReactPlaygroundHeader from 'features/ReactPlayground/Header'
import ReactPlaygroundWait from 'features/ReactPlayground/Wait'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const routes = _configureRoutes()

export default [
  { path: MG_ROUTE_PATHS.homepage, component: routes.Homepage, exact: true },

  // ReactPlayground
  { path: MG_ROUTE_PATHS.reactPlayground, component: ReactPlaygroundHeader },
  { path: MG_ROUTE_PATHS.reactDataTable, component: routes.ReactDataTable, exact: true },
  { path: MG_ROUTE_PATHS.reactHooks, component: routes.ReactHooks, exact: true }
]

function _configureRoutes() {
  const Homepage = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/Homepage'))
        return <Component {...componentProps} />
      }}
      fallback={() => <div>Loading Homepage...</div>}
    />
  )

  const ReactDataTable = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactPlayground/DataTable'))
        return <Component {...componentProps} />
      }}
      fallback={() => <ReactPlaygroundWait />}
    />
  )

  const ReactHooks = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactPlayground/Hooks'))
        return <Component {...componentProps} />
      }}
      fallback={() => <ReactPlaygroundWait />}
    />
  )

  return {
    Homepage,
    ReactDataTable,
    ReactHooks
  }
}
