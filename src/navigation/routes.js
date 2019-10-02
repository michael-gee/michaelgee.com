// Implement Suspense/code splitting when react API is more declared and ready

// import { lazy } from 'react'

// export default {
//   Homepage: lazy(() => import('../routes/Homepage')),
//   Counter: lazy(() => import('../routes/Counter'))
// }
import React from 'react'

import Homepage from '../features/Homepage'
import Counter from '../features/Counter'
import TreeList from '../features/TreeList'

import DataTable from '../features/DataTable'
import columns from '../features/DataTable/static'
import makeData from '../features/DataTable/makeData'

import constants from '../constants'

export default [
  { path: constants.navigation.routePaths.homepage, component: Homepage, exact: true },
  { path: constants.navigation.routePaths.counter, component: Counter },
  {
    path: constants.navigation.routePaths.dataTable,
    component: () => <DataTable columns={columns} data={makeData(100)} />
  },
  { path: constants.navigation.routePaths.treeList, component: TreeList }
]
