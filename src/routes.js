import React, { lazy } from 'react'
import Loadable from 'components/Loadable'

import ReactSandboxHeader from 'features/ReactSandbox/Header'
import ReactSandboxWait from 'features/ReactSandbox/Wait'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const routes = _configureRoutes()

export default [
  { path: MG_ROUTE_PATHS.homepage, component: routes.Homepage, exact: true },

  // ReactSandbox
  { path: MG_ROUTE_PATHS.reactSandbox, component: ReactSandboxHeader },
  {
    path: MG_ROUTE_PATHS.reactDataTable,
    component: routes.ReactDataTable,
    exact: true
  },
  {
    path: MG_ROUTE_PATHS.reactHooksCategories,
    component: routes.ReactHooksCategorySelector,
    exact: true
  },
  { path: MG_ROUTE_PATHS.reactHooks, component: routes.ReactHooks, exact: true }
]

function _configureRoutes() {
  const Homepage = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/Homepage'))
        return <Component {...componentProps} />
      }}
      fallback={() => <>Loading Homepage...</>}
    />
  )

  // ReactSandbox
  const ReactDataTable = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactSandbox/DataTable'))
        return <Component {...componentProps} />
      }}
      fallback={() => <ReactSandboxWait />}
    />
  )

  const ReactHooksCategorySelector = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactSandbox/Hooks/CategorySelector'))
        return <Component {...componentProps} />
      }}
      fallback={() => <ReactSandboxWait />}
    />
  )

  const ReactHooks = () => (
    <Loadable
      render={componentProps => {
        const Component = lazy(() => import('./features/ReactSandbox/Hooks'))
        return <Component {...componentProps} />
      }}
      fallback={() => <ReactSandboxWait />}
    />
  )

  return {
    Homepage,
    // ReactSandbox
    ReactDataTable,
    ReactHooksCategorySelector,
    ReactHooks
  }
}
