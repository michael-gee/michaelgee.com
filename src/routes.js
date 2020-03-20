import { lazy } from 'react'

import { RS_ROUTE_PATHS } from 'constants/navigation'

const Homepage = lazy(() => import('./features/Homepage'))
const HooksExamples = lazy(() => import('./features/HooksExamples'))
const Counter = lazy(() => import('./features/Counter'))
const DataTable = lazy(() => import('./features/DataTable'))
const ToDoList = lazy(() => import('./features/ToDoList'))

export default [
  { path: RS_ROUTE_PATHS.homepage, component: Homepage, exact: true },
  { path: RS_ROUTE_PATHS.hooksExamples, component: HooksExamples },
  { path: RS_ROUTE_PATHS.counter, component: Counter },
  { path: RS_ROUTE_PATHS.dataTable, component: DataTable },
  { path: RS_ROUTE_PATHS.toDoList, component: ToDoList }
]
