// Implement Suspense/code splitting when react API is more declared and ready

// import { lazy } from 'react'

// export default {
//   Homepage: lazy(() => import('../routes/Homepage')),
//   Counter: lazy(() => import('../routes/Counter'))
// }
import React from 'react'

import Homepage from 'features/Homepage'
import Counter from 'features/Counter'
import ToDoList from 'features/ToDoList'
import HooksExamples from 'features/HooksExamples'

import DataTable from 'features/DataTable'
import columns from 'features/DataTable/static'
import makeData from 'features/DataTable/makeData'

import { RS_ROUTE_PATHS } from 'constants/navigation'

export default [
  { path: RS_ROUTE_PATHS.hooksExamples, component: HooksExamples },
  { path: RS_ROUTE_PATHS.homepage, component: Homepage, exact: true },
  { path: RS_ROUTE_PATHS.counter, component: Counter },
  {
    path: RS_ROUTE_PATHS.dataTable,
    component: () => <DataTable columns={columns} data={makeData(100)} />
  },
  { path: RS_ROUTE_PATHS.toDoList, component: ToDoList }
]
