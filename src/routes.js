import { lazy } from 'react'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const Homepage = lazy(() => import('./features/Homepage'))
// ReactPlayground
const ReactPlaygroundHeader = lazy(() => import('./features/ReactPlayground/Header'))
const ReactDataTable = lazy(() => import('./features/ReactPlayground/DataTable'))
const ReactHooks = lazy(() => import('./features/ReactPlayground/Hooks'))

export default [
  { path: MG_ROUTE_PATHS.homepage, component: Homepage, exact: true },
  // ReactPlayground
  { path: MG_ROUTE_PATHS.reactPlayground, component: ReactPlaygroundHeader },
  { path: MG_ROUTE_PATHS.reactDataTable, component: ReactDataTable, exact: true },
  { path: MG_ROUTE_PATHS.reactHooks, component: ReactHooks, exact: true }
]
