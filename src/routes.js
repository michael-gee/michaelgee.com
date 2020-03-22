import { lazy } from 'react'

import { MG_ROUTE_PATHS } from 'constants/navigation'

const Homepage = lazy(() => import('./features/Homepage'))

// ReactPlayground Routes
const ReactPlayground = lazy(() => import('./features/ReactPlayground'))
// const Counter = lazy(() => import('./features/ReactPlayground/Counter'))
// const DataTable = lazy(() => import('./features/ReactPlayground/DataTable'))
// const ToDoList = lazy(() => import('./features/ReactPlayground/ToDoList'))

export default [
  { path: MG_ROUTE_PATHS.homepage, component: Homepage, exact: true },
  { path: MG_ROUTE_PATHS.reactPlayground, component: ReactPlayground }
  // { path: MG_ROUTE_PATHS.counter, component: Counter },
  // { path: MG_ROUTE_PATHS.dataTable, component: DataTable },
  // { path: MG_ROUTE_PATHS.toDoList, component: ToDoList }
]
