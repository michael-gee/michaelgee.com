import { v4 } from 'uuid'

import { RS_APP_COMMANDS } from 'constants/commands'

export default [
  {
    // Note: generates new uids on every refresh
    uid: v4(),
    title: 'Simple Hooks Counters',
    command: RS_APP_COMMANDS.viewCounter,
    date: 'January 24th, 2020',
    description:
      'A very simple counter component which I introduced the useState and useEffect hooks along with testing hooks with react-testing-library'
  },
  {
    uid: v4(),
    title: 'Data Table with react-table',
    command: RS_APP_COMMANDS.viewDataTable,
    date: 'December 10th, 2019',
    description:
      'A feature filled data table using the v7 react-table library which introduced a "headless" data table approach to give ONLY the functionality of the table but all the styling and rendering control to the developer'
  }
]
