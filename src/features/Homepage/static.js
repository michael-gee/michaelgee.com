import constants from '../../constants'

export default [
  {
    title: 'Simple Hooks Counter',
    route: constants.navigation.routePaths.counter,
    date: 'May 22nd, 2019',
    description:
      'A very simple counter component which I introduced the useState and useEffect hooks along with testing hooks with react-testing-library'
  },
  {
    title: 'Data Table with react-table',
    route: constants.navigation.routePaths.dataTable,
    date: 'July 26th, 2019',
    description:
      'A feature filled data table using the v7 react-table library which introduced a "headless" data table approach to give ONLY the functionality of the table but all the styling and rendering control to the developer'
  },
  {
    title: 'Custom Tree List',
    route: constants.navigation.routePaths.treeList,
    date: 'September 25th, 2019',
    description: 'Currently being developed....'
  }
]
