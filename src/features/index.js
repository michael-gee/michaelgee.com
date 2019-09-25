// Implement Suspense/code splitting when react API is more declared and ready

// import { lazy } from 'react'

// export default {
//   Homepage: lazy(() => import('../routes/Homepage')),
//   Counter: lazy(() => import('../routes/Counter'))
// }
import React from 'react'

import Homepage from './Homepage'
import Counter from './Counter'
import TreeList from './TreeList'

import DataTable from './DataTable'
import columns from './DataTable/static'
import makeData from './DataTable/makeData'

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
