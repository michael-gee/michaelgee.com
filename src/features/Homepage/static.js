import { v4 } from 'uuid'

import constants from '../../constants'

export default [
  {
    // Note: generates new uids on every refresh
    uid: v4(),
    title: 'Simple Hooks Counter',
    command: constants.commands.viewCounter,
    date: 'May 22nd, 2019',
    description:
      'A very simple counter component which I introduced the useState and useEffect hooks along with testing hooks with react-testing-library'
  },
  {
    uid: v4(),
    title: 'Data Table with react-table',
    command: constants.commands.viewDataTable,
    date: 'July 26th, 2019',
    description:
      'A feature filled data table using the v7 react-table library which introduced a "headless" data table approach to give ONLY the functionality of the table but all the styling and rendering control to the developer'
  },
  {
    uid: v4(),
    title: 'Custom Tree List',
    command: constants.commands.viewTreeList,
    date: 'September 25th, 2019',
    description: 'Currently being developed....'
  }
]
