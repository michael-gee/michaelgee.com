import React from 'react'
import Loadable from 'react-loadable'

import ReactPlaygroundHeader from 'features/ReactPlayground/Header'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const Homepage = Loadable({
  loader: () => import('./features/Homepage'),
  loading() {
    return <div>Loading Homepage...</div>
  }
})

const ReactDataTable = Loadable({
  loader: () => import('./features/ReactPlayground/DataTable'),
  loading() {
    // @@@@@@ Create reusable loader for all reacct playground routes -- (white background with remainder of height of the page blurred with a loading message/spinner?)
    return <h1>Loading DataTable</h1>
  }
})

const ReactHooks = Loadable({
  loader: () => import('./features/ReactPlayground/Hooks'),
  loading() {
    return <h1>Loading Hooks</h1>
  }
})

export default [
  { path: MG_ROUTE_PATHS.homepage, component: Homepage, exact: true },
  // ReactPlayground
  { path: MG_ROUTE_PATHS.reactPlayground, component: ReactPlaygroundHeader },
  { path: MG_ROUTE_PATHS.reactDataTable, component: ReactDataTable, exact: true },
  { path: MG_ROUTE_PATHS.reactHooks, component: ReactHooks, exact: true }
]
