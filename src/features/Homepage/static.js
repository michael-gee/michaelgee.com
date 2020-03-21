import { v4 } from 'uuid'

import { MG_ROUTE_PATHS } from 'constants/navigation'

export default [
  {
    uid: v4(),
    title: 'Hooks Examples',
    route: MG_ROUTE_PATHS.hooksExamples,
    date: 'March 18th, 2020',
    description: ''
  },
  {
    // Note: generates new uids on every refresh
    uid: v4(),
    title: 'Simple Hooks Counters',
    route: MG_ROUTE_PATHS.counter,
    date: 'March 3rd, 2020',
    description:
      'A very simple counter component which I introduced the useState, useEffect, and useRef hooks along with testing hooks with react-testing-library.'
  },
  {
    uid: v4(),
    title: 'Data Table with react-table',
    route: MG_ROUTE_PATHS.dataTable,
    date: 'March 15th, 2020',
    description:
      'A feature filled data table using the v7 react-table library which introduced a "headless" data table approach to give ONLY the functionality of the table but all the styling and rendering control to the developer.'
  },
  {
    uid: v4(),
    title: 'To Do List',
    route: MG_ROUTE_PATHS.toDoList,
    date: 'March 15th, 2020',
    description: ''
  }
]
